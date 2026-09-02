// Asosiy Ilova Mantiqi (App Engine)
import { CURRICULUM_TOPICS, getWordsForDay } from './data/curriculum.js';
import { speechEngine } from './utils/speech.js';
import { progressStorage } from './utils/storage.js';

class VocabMasterApp {
  constructor() {
    this.currentDay = progressStorage.getCurrentDay();
    this.activeMode = 'study'; // 'study', 'flashcard', 'quiz', 'speedmatch', 'spelling'
    this.currentChunk = 0; // 0: 1-20, 1: 21-40, 2: 41-60, 3: 61-80, 4: 81-100, -1: All 100
    this.filterType = 'all'; // 'all', 'unlearned', 'learned', 'difficult', 'favorites'
    this.dayWords = [];
    
    // Flashcard State
    this.flashcardIndex = 0;
    this.isCardFlipped = false;
    this.flashcardList = [];

    // Quiz State
    this.quizQuestions = [];
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;

    // Speed Match State
    this.speedTimer = null;
    this.speedTimeLeft = 60;
    this.speedScore = 0;
    this.speedCombo = 1;
    this.selectedMatchCard = null;

    // Spelling State
    this.spellingIndex = 0;
    this.spellingScore = 0;

    this.init();
  }

  init() {
    this.loadDay(this.currentDay);
    this.setupEventListeners();
    this.renderRoadmap();
    this.updateNavbarStats();
    this.applyTheme(progressStorage.settings.theme);
  }

  loadDay(dayNumber) {
    this.currentDay = dayNumber;
    progressStorage.setCurrentDay(dayNumber);
    this.dayWords = getWordsForDay(dayNumber);
    this.currentChunk = 0;
    this.filterType = 'all';
    this.flashcardIndex = 0;
    this.isCardFlipped = false;

    this.renderCurrentDayHeader();
    this.renderCurrentMode();
    this.updateNavbarStats();
    this.renderRoadmap();
  }

  getFilteredWords() {
    let list = this.dayWords;
    if (this.filterType === 'unlearned') {
      list = list.filter(w => !progressStorage.isLearned(w.id));
    } else if (this.filterType === 'learned') {
      list = list.filter(w => progressStorage.isLearned(w.id));
    } else if (this.filterType === 'difficult') {
      list = list.filter(w => progressStorage.isDifficult(w.id));
    } else if (this.filterType === 'favorites') {
      list = list.filter(w => progressStorage.isFavorite(w.id));
    }

    if (this.currentChunk !== -1 && this.filterType === 'all') {
      const start = this.currentChunk * 20;
      return list.slice(start, start + 20);
    }
    return list;
  }

  renderCurrentDayHeader() {
    const topic = CURRICULUM_TOPICS.find(t => t.day === this.currentDay) || {
      title: `Kun ${this.currentDay}`,
      category: "Lug'at",
      level: "B1-B2"
    };

    const progress = progressStorage.getDayProgress(this.currentDay, this.dayWords);

    document.getElementById('current-day-badge').innerText = `${this.currentDay}-Kun • ${topic.level}`;
    document.getElementById('current-day-title').innerText = `${this.currentDay}-Kun: ${topic.title}`;
    document.getElementById('current-day-category').innerText = `Mavzu: ${topic.category}`;
    document.getElementById('day-progress-bar').style.width = `${progress.percentage}%`;
    document.getElementById('day-progress-text').innerText = `${progress.learnedCount} / ${progress.totalCount} so'z (${progress.percentage}%)`;

    // Trigger celebration if day completed
    if (progress.isCompleted && !progressStorage.stats.completedDays.includes(this.currentDay)) {
      progressStorage.stats.completedDays.push(this.currentDay);
      progressStorage.addXP(100);
      speechEngine.playStreakSound();
      this.fireConfetti();
    }
  }

  renderCurrentMode() {
    // Mode tabs active class
    const modes = ['study', 'flashcard', 'quiz', 'speedmatch', 'spelling'];
    modes.forEach(m => {
      const btn = document.getElementById(`mode-btn-${m}`);
      if (btn) {
        if (m === this.activeMode) {
          btn.className = 'px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 flex items-center gap-2';
        } else {
          btn.className = 'px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-slate-400 hover:text-white hover:bg-slate-800/60 flex items-center gap-2';
        }
      }
    });

    const contentArea = document.getElementById('mode-content-area');
    contentArea.innerHTML = '';

    if (this.activeMode === 'study') {
      this.renderStudyMode(contentArea);
    } else if (this.activeMode === 'flashcard') {
      this.renderFlashcardMode(contentArea);
    } else if (this.activeMode === 'quiz') {
      this.renderQuizMode(contentArea);
    } else if (this.activeMode === 'speedmatch') {
      this.renderSpeedMatchMode(contentArea);
    } else if (this.activeMode === 'spelling') {
      this.renderSpellingMode(contentArea);
    }

    lucide.createIcons();
  }

  // ==================== 1. O'RGANISH (STUDY MODE) ====================
  renderStudyMode(container) {
    const words = this.getFilteredWords();
    const progress = progressStorage.getDayProgress(this.currentDay, this.dayWords);

    const chunkButtonsHtml = [0, 1, 2, 3, 4].map(idx => {
      const start = idx * 20 + 1;
      const end = (idx + 1) * 20;
      const chunkWords = this.dayWords.slice(idx * 20, (idx + 1) * 20);
      const learnedInChunk = chunkWords.filter(w => progressStorage.isLearned(w.id)).length;
      const isActive = this.currentChunk === idx && this.filterType === 'all';

      return `
        <button onclick="window.app.setChunk(${idx})" class="px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 border ${
          isActive
            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-700'
        }">
          <span>Blok ${idx + 1} (${start}-${end})</span>
          <span class="px-1.5 py-0.5 rounded-full text-[10px] ${learnedInChunk === 20 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700 text-slate-300'}">
            ${learnedInChunk}/20
          </span>
        </button>
      `;
    }).join('');

    const filtersHtml = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1">Bloklar:</span>
          ${chunkButtonsHtml}
          <button onclick="window.app.setChunk(-1)" class="px-3 py-2 rounded-xl text-xs font-semibold transition border ${
            this.currentChunk === -1 && this.filterType === 'all'
              ? 'bg-indigo-600 border-indigo-500 text-white'
              : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-700'
          }">
            Barcha 100 ta so'z
          </button>
        </div>

        <div class="flex items-center gap-1.5 bg-slate-900/60 p-1 rounded-xl border border-slate-700/60">
          <button onclick="window.app.setFilter('all')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${this.filterType === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}">Barchasi</button>
          <button onclick="window.app.setFilter('unlearned')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${this.filterType === 'unlearned' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}">Yodlanmagan</button>
          <button onclick="window.app.setFilter('learned')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${this.filterType === 'learned' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'}">Yodlangan</button>
          <button onclick="window.app.setFilter('difficult')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${this.filterType === 'difficult' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'}">Qiyin</button>
          <button onclick="window.app.setFilter('favorites')" class="px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${this.filterType === 'favorites' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-slate-200'}">⭐ Sevimlilar</button>
        </div>
      </div>
    `;

    const wordCardsHtml = words.length === 0
      ? `<div class="text-center py-16 text-slate-400"><i data-lucide="inbox" class="w-12 h-12 mx-auto mb-3 opacity-40"></i><p>Ushbu filtr bo'yicha so'z topilmadi.</p></div>`
      : `<div class="grid grid-cols-1 md:grid-cols-2 gap-5">${words.map(w => this.renderSingleWordCard(w)).join('')}</div>`;

    container.innerHTML = filtersHtml + wordCardsHtml;
  }

  renderSingleWordCard(w) {
    const isLearned = progressStorage.isLearned(w.id);
    const isFav = progressStorage.isFavorite(w.id);
    const isDiff = progressStorage.isDifficult(w.id);
    const note = progressStorage.getNote(w.id);

    return `
      <div class="glass-card p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between border ${
        isLearned ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-slate-700/60'
      }">
        <div>
          <!-- Header: Word, IPA, POS, Audio, Favorite -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-2xl font-bold tracking-tight text-white font-heading">${w.word}</h3>
                <button onclick="window.app.speakWord('${w.word}')" class="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition" title="Ovozli eshitish">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
                <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">${w.ipa}</span>
              </div>
              <span class="inline-block mt-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-400">${w.partOfSpeech}</span>
            </div>

            <div class="flex items-center gap-1">
              <button onclick="window.app.toggleFav(${w.id})" class="p-2 rounded-xl transition ${isFav ? 'text-rose-400 bg-rose-500/10' : 'text-slate-400 hover:bg-slate-800'}" title="Sevimlilarga qo'shish">
                <i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-current' : ''}"></i>
              </button>
              <button onclick="window.app.toggleDiff(${w.id})" class="p-2 rounded-xl transition ${isDiff ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 hover:bg-slate-800'}" title="Qiyin so'z sifatida belgilash">
                <i data-lucide="alert-triangle" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Uzbek Meaning -->
          <div class="text-lg font-semibold text-emerald-400 mb-3">
            ${w.uzbek}
          </div>

          <!-- Mnemonic Memory Hook -->
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-xs mb-3 leading-relaxed">
            <div class="font-bold flex items-center gap-1.5 text-amber-300 mb-1">
              <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-400"></i>
              Xotira Kaliti (Assotsiatsiya):
            </div>
            ${w.mnemonic}
          </div>

          <!-- Sentence Example -->
          <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 mb-3 space-y-1">
            <p class="font-medium text-slate-200">“${w.sentenceEn}”</p>
            <p class="text-slate-400 italic">“${w.sentenceUz}”</p>
          </div>

          <!-- Synonyms & Antonyms -->
          ${w.synonyms && w.synonyms.length > 0 ? `
            <div class="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 mb-4">
              <span class="font-semibold text-slate-500">Sinonim:</span>
              ${w.synonyms.map(s => `<span class="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300">${s}</span>`).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Card Footer Actions -->
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button onclick="window.app.toggleLearned(${w.id})" class="flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            isLearned
              ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30'
              : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/20'
          }">
            <i data-lucide="${isLearned ? 'check-circle-2' : 'circle'}" class="w-4 h-4"></i>
            ${isLearned ? "Yodlangan (+10 XP)" : "Yodladim deb belgilash"}
          </button>
        </div>
      </div>
    `;
  }

  // ==================== 2. 3D FLASHCARDS (ACTIVE RECALL) ====================
  renderFlashcardMode(container) {
    this.flashcardList = this.dayWords;
    if (this.flashcardIndex >= this.flashcardList.length) {
      this.flashcardIndex = 0;
    }
    const currentWord = this.flashcardList[this.flashcardIndex];
    if (!currentWord) return;

    if (progressStorage.settings.autoPronounce && !this.isCardFlipped) {
      setTimeout(() => this.speakWord(currentWord.word), 200);
    }

    const isLearned = progressStorage.isLearned(currentWord.id);
    const maskedSentence = currentWord.sentenceEn.replace(new RegExp(currentWord.word, 'gi'), '_____');

    container.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <!-- Flashcard Progress Top Bar -->
        <div class="flex items-center justify-between mb-4 text-xs text-slate-400 font-semibold">
          <span>Karta: ${this.flashcardIndex + 1} / ${this.flashcardList.length}</span>
          <div class="flex items-center gap-2">
            <button onclick="window.app.shuffleFlashcards()" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition">
              <i data-lucide="shuffle" class="w-3.5 h-3.5"></i> Aralashtirish
            </button>
          </div>
        </div>

        <!-- 3D Flashcard Box -->
        <div class="perspective-1000 w-full h-96 cursor-pointer mb-6" onclick="window.app.flipCard()">
          <div class="flashcard-inner w-full h-full relative ${this.isCardFlipped ? 'is-flipped' : ''}">
            
            <!-- Front of Flashcard -->
            <div class="flashcard-front glass-panel p-8 flex flex-col justify-between border border-indigo-500/30 rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-900/90">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  ${currentWord.partOfSpeech}
                </span>
                <button onclick="event.stopPropagation(); window.app.speakWord('${currentWord.word}')" class="p-2.5 rounded-full bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition">
                  <i data-lucide="volume-2" class="w-5 h-5"></i>
                </button>
              </div>

              <div class="text-center my-auto">
                <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight font-heading mb-2">${currentWord.word}</h2>
                <p class="text-slate-400 font-mono text-sm">${currentWord.ipa}</p>
                <div class="mt-6 p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 max-w-md mx-auto">
                  <span class="text-slate-400 font-semibold">Misol: </span>“${maskedSentence}”
                </div>
              </div>

              <div class="text-center text-xs text-indigo-400/80 font-medium flex items-center justify-center gap-1">
                <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i> Tarjima va Assotsiatsiyani ko'rish uchun bosing
              </div>
            </div>

            <!-- Back of Flashcard -->
            <div class="flashcard-back glass-panel p-8 flex flex-col justify-between border border-emerald-500/30 rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900/95 via-emerald-950/40 to-slate-900/95">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold text-emerald-400 uppercase tracking-wider">O'zbekcha Tarjima</span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">${currentWord.word}</span>
              </div>

              <div class="text-center my-auto space-y-4">
                <h3 class="text-3xl font-extrabold text-emerald-400">${currentWord.uzbek}</h3>
                
                <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed max-w-md mx-auto text-left">
                  <div class="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <i data-lucide="zap" class="w-3.5 h-3.5"></i> Mnemonik Kalit:
                  </div>
                  ${currentWord.mnemonic}
                </div>

                <div class="text-xs text-slate-300 text-left max-w-md mx-auto">
                  <p class="font-medium text-slate-200">“${currentWord.sentenceEn}”</p>
                  <p class="text-slate-400 italic">“${currentWord.sentenceUz}”</p>
                </div>
              </div>

              <div class="text-center text-xs text-slate-400">
                Old tomonga qaytish uchun bosing
              </div>
            </div>

          </div>
        </div>

        <!-- Flashcard Control Actions -->
        <div class="flex items-center justify-between gap-3">
          <button onclick="window.app.prevFlashcard()" class="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </button>

          <button onclick="window.app.markCardHard(${currentWord.id})" class="flex-1 py-3.5 rounded-2xl bg-rose-600/20 border border-rose-500/40 text-rose-300 hover:bg-rose-600/30 font-bold text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="repeat" class="w-4 h-4"></i> Qaytarish Kerak
          </button>

          <button onclick="window.app.markCardLearned(${currentWord.id})" class="flex-1 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2">
            <i data-lucide="check-circle" class="w-4 h-4"></i> Bilar Edim (+10 XP)
          </button>

          <button onclick="window.app.nextFlashcard()" class="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    `;
  }

  flipCard() {
    this.isCardFlipped = !this.isCardFlipped;
    const inner = document.querySelector('.flashcard-inner');
    if (inner) {
      if (this.isCardFlipped) {
        inner.classList.add('is-flipped');
      } else {
        inner.classList.remove('is-flipped');
      }
    }
  }

  nextFlashcard() {
    this.isCardFlipped = false;
    this.flashcardIndex = (this.flashcardIndex + 1) % this.flashcardList.length;
    this.renderCurrentMode();
  }

  prevFlashcard() {
    this.isCardFlipped = false;
    this.flashcardIndex = (this.flashcardIndex - 1 + this.flashcardList.length) % this.flashcardList.length;
    this.renderCurrentMode();
  }

  shuffleFlashcards() {
    this.flashcardList = [...this.flashcardList].sort(() => Math.random() - 0.5);
    this.flashcardIndex = 0;
    this.isCardFlipped = false;
    this.renderCurrentMode();
  }

  markCardLearned(wordId) {
    if (!progressStorage.isLearned(wordId)) {
      progressStorage.toggleLearned(wordId);
      speechEngine.playCorrectSound();
    }
    this.nextFlashcard();
    this.updateNavbarStats();
  }

  markCardHard(wordId) {
    if (!progressStorage.isDifficult(wordId)) {
      progressStorage.toggleDifficult(wordId);
    }
    speechEngine.playWrongSound();
    this.nextFlashcard();
  }

  // ==================== 3. VIKTORINA VA TEST (QUIZ MODE) ====================
  renderQuizMode(container) {
    if (this.quizQuestions.length === 0) {
      this.generateQuizQuestions();
    }

    if (this.quizCurrentIndex >= this.quizQuestions.length) {
      this.renderQuizFinished(container);
      return;
    }

    const q = this.quizQuestions[this.quizCurrentIndex];

    container.innerHTML = `
      <div class="max-w-xl mx-auto glass-panel p-6 md:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
        <!-- Top bar -->
        <div class="flex items-center justify-between mb-6 text-xs text-slate-400 font-semibold">
          <span>Savol ${this.quizCurrentIndex + 1} / ${this.quizQuestions.length}</span>
          <span class="text-emerald-400 font-bold">Ball: ${this.quizScore} XP</span>
        </div>

        <div class="text-center mb-8">
          <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400 block mb-2">${q.category}</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white font-heading">${q.questionText}</h2>
          ${q.subText ? `<p class="mt-2 text-sm text-slate-300">${q.subText}</p>` : ''}
        </div>

        <!-- 4 Options -->
        <div class="grid grid-cols-1 gap-3 mb-6" id="quiz-options-container">
          ${q.options.map((opt, i) => `
            <button onclick="window.app.handleQuizAnswer(${i})" class="quiz-option-btn w-full p-4 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 text-left text-sm font-semibold text-slate-200 transition flex items-center justify-between group">
              <span>${opt.text}</span>
              <span class="w-6 h-6 rounded-full bg-slate-700 text-slate-400 text-xs flex items-center justify-center font-mono group-hover:bg-indigo-600 group-hover:text-white transition">
                ${String.fromCharCode(65 + i)}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- Quiz Feedback & Explanation Area -->
        <div id="quiz-explanation-box" class="hidden p-4 rounded-2xl mb-4 text-xs leading-relaxed"></div>

        <div class="flex items-center justify-end">
          <button id="quiz-next-btn" onclick="window.app.nextQuizQuestion()" class="hidden px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition flex items-center gap-2">
            Keyingi savol <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }

  generateQuizQuestions() {
    const list = [...this.dayWords].sort(() => Math.random() - 0.5).slice(0, 10);
    this.quizQuestions = list.map(word => {
      const wrongOptions = this.dayWords
        .filter(w => w.id !== word.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => ({ text: w.uzbek, isCorrect: false }));

      const allOptions = [
        { text: word.uzbek, isCorrect: true },
        ...wrongOptions
      ].sort(() => Math.random() - 0.5);

      return {
        word: word.word,
        category: "So'z ma'nosini toping",
        questionText: word.word,
        subText: `Fonetika: ${word.ipa} (${word.partOfSpeech})`,
        mnemonic: word.mnemonic,
        options: allOptions
      };
    });
    this.quizCurrentIndex = 0;
    this.quizScore = 0;
    this.quizAnswered = false;
  }

  handleQuizAnswer(selectedIndex) {
    if (this.quizAnswered) return;
    this.quizAnswered = true;

    const q = this.quizQuestions[this.quizCurrentIndex];
    const buttons = document.querySelectorAll('.quiz-option-btn');
    const explanationBox = document.getElementById('quiz-explanation-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    const selectedOption = q.options[selectedIndex];

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (q.options[idx].isCorrect) {
        btn.className = 'w-full p-4 rounded-2xl bg-emerald-600/30 border-2 border-emerald-500 text-emerald-200 text-left text-sm font-bold flex items-center justify-between';
      } else if (idx === selectedIndex && !selectedOption.isCorrect) {
        btn.className = 'w-full p-4 rounded-2xl bg-rose-600/30 border-2 border-rose-500 text-rose-200 text-left text-sm font-bold flex items-center justify-between';
      } else {
        btn.classList.add('opacity-40');
      }
    });

    if (selectedOption.isCorrect) {
      this.quizScore += 15;
      progressStorage.addXP(15);
      speechEngine.playCorrectSound();
      explanationBox.className = 'p-4 rounded-2xl mb-4 text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300';
      explanationBox.innerHTML = `<strong>To'g'ri javob! (+15 XP)</strong><br>${q.mnemonic}`;
    } else {
      speechEngine.playWrongSound();
      explanationBox.className = 'p-4 rounded-2xl mb-4 text-xs bg-rose-500/10 border border-rose-500/30 text-rose-300';
      explanationBox.innerHTML = `<strong>Noto'g'ri!</strong> To'g'ri ma'nosi: <em>${q.options.find(o => o.isCorrect).text}</em><br>${q.mnemonic}`;
    }

    explanationBox.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    lucide.createIcons();
  }

  nextQuizQuestion() {
    this.quizCurrentIndex++;
    this.quizAnswered = false;
    this.renderCurrentMode();
  }

  renderQuizFinished(container) {
    progressStorage.stats.quizzesCompleted += 1;
    progressStorage.saveStats();
    speechEngine.playStreakSound();
    this.fireConfetti();

    container.innerHTML = `
      <div class="max-w-md mx-auto glass-panel p-8 rounded-3xl border border-indigo-500/30 text-center shadow-2xl">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <i data-lucide="award" class="w-8 h-8"></i>
        </div>
        <h2 class="text-3xl font-extrabold text-white font-heading mb-2">Test Yakunlandi!</h2>
        <p class="text-slate-300 text-sm mb-6">Siz ushbu testda ajoyib natija ko'rsatdingiz!</p>
        <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 mb-6 text-emerald-400 text-2xl font-black font-heading">
          +${this.quizScore} XP Qo'lga Kiritildi
        </div>
        <button onclick="window.app.generateQuizQuestions(); window.app.renderCurrentMode();" class="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition">
          Testni Qayta Boshlash
        </button>
      </div>
    `;
  }

  // ==================== 4. TEZKOR JUFTLASH (SPEED MATCH) ====================
  renderSpeedMatchMode(container) {
    const selectedWords = [...this.dayWords].sort(() => Math.random() - 0.5).slice(0, 6);
    
    // Create card items (6 English, 6 Uzbek)
    const cards = [];
    selectedWords.forEach(w => {
      cards.push({ id: w.id, text: w.word, type: 'en' });
      cards.push({ id: w.id, text: w.uzbek, type: 'uz' });
    });
    cards.sort(() => Math.random() - 0.5);

    this.speedScore = 0;
    this.speedCombo = 1;
    this.selectedMatchCard = null;

    container.innerHTML = `
      <div class="max-w-2xl mx-auto glass-panel p-6 md:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-bold text-white font-heading">Tezkor Juftlash O'yini</h3>
            <p class="text-xs text-slate-400">Inglizcha so'z va uning o'zbekcha tarjimasini tezroq bosing</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-400 uppercase font-semibold">Ball:</span>
            <span id="speed-score-text" class="text-xl font-black text-amber-400 font-heading block">0 XP</span>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6" id="speed-grid">
          ${cards.map((c, i) => `
            <button onclick="window.app.handleSpeedCardClick(${i}, ${c.id}, '${c.type}', this)" class="speed-card p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500 text-center text-xs md:text-sm font-bold text-slate-200 transition min-h-[70px] flex items-center justify-center">
              ${c.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  handleSpeedCardClick(cardIndex, wordId, type, btnElement) {
    if (btnElement.classList.contains('matched') || btnElement.classList.contains('selected')) return;

    if (!this.selectedMatchCard) {
      // First card selected
      this.selectedMatchCard = { wordId, type, element: btnElement };
      btnElement.classList.add('selected', 'border-indigo-500', 'bg-indigo-600/30', 'text-indigo-200');
    } else {
      // Second card selected
      const first = this.selectedMatchCard;
      if (first.type !== type && first.wordId === wordId) {
        // MATCH!
        speechEngine.playCorrectSound();
        first.element.className = 'speed-card matched p-4 rounded-2xl bg-emerald-600/30 border border-emerald-500 text-emerald-300 opacity-60 cursor-default flex items-center justify-center';
        btnElement.className = 'speed-card matched p-4 rounded-2xl bg-emerald-600/30 border border-emerald-500 text-emerald-300 opacity-60 cursor-default flex items-center justify-center';
        
        this.speedScore += 20 * this.speedCombo;
        this.speedCombo++;
        progressStorage.addXP(20);
        document.getElementById('speed-score-text').innerText = `${this.speedScore} XP`;

        // Check if all matched
        const remaining = document.querySelectorAll('.speed-card:not(.matched)');
        if (remaining.length === 0) {
          progressStorage.stats.speedMatchesWon += 1;
          progressStorage.saveStats();
          speechEngine.playStreakSound();
          this.fireConfetti();
        }
      } else {
        // WRONG MATCH
        speechEngine.playWrongSound();
        this.speedCombo = 1;
        first.element.classList.add('bg-rose-600/40', 'border-rose-500');
        btnElement.classList.add('bg-rose-600/40', 'border-rose-500');
        setTimeout(() => {
          first.element.className = 'speed-card p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center text-xs md:text-sm font-bold text-slate-200 transition min-h-[70px] flex items-center justify-center';
          btnElement.className = 'speed-card p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center text-xs md:text-sm font-bold text-slate-200 transition min-h-[70px] flex items-center justify-center';
        }, 500);
      }
      this.selectedMatchCard = null;
    }
  }

  // ==================== 5. ESHITIB YOZISH (SPELLING CHALLENGE) ====================
  renderSpellingMode(container) {
    const list = this.dayWords;
    if (this.spellingIndex >= list.length) this.spellingIndex = 0;
    const currentWord = list[this.spellingIndex];

    setTimeout(() => this.speakWord(currentWord.word), 200);

    container.innerHTML = `
      <div class="max-w-lg mx-auto glass-panel p-8 rounded-3xl border border-slate-700/60 shadow-2xl text-center">
        <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400 block mb-2">Eshitib To'g'ri Yozing</span>
        <button onclick="window.app.speakWord('${currentWord.word}')" class="w-20 h-20 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 mx-auto mb-6 flex items-center justify-center transition transform hover:scale-105">
          <i data-lucide="volume-2" class="w-10 h-10"></i>
        </button>

        <p class="text-sm font-semibold text-emerald-400 mb-6">Ma'nosi: ${currentWord.uzbek}</p>

        <div class="space-y-4 mb-6">
          <input type="text" id="spelling-input" placeholder="Eshitgan so'zingizni yozing..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="w-full px-5 py-4 rounded-2xl bg-slate-900/80 border-2 border-slate-700 focus:border-indigo-500 focus:outline-none text-white text-center text-xl font-bold tracking-wide transition" onkeydown="if(event.key==='Enter') window.app.checkSpelling('${currentWord.word}')" />
          <div id="spelling-feedback" class="hidden text-xs font-semibold p-3 rounded-xl"></div>
        </div>

        <div class="flex items-center justify-between gap-3">
          <button onclick="window.app.showSpellingHint('${currentWord.word}')" class="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1.5">
            <i data-lucide="help-circle" class="w-4 h-4"></i> Maslahat (Hint)
          </button>
          <button onclick="window.app.checkSpelling('${currentWord.word}')" class="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/20 transition">
            Tekshirish (Enter)
          </button>
        </div>
      </div>
    `;
    setTimeout(() => {
      const inp = document.getElementById('spelling-input');
      if (inp) inp.focus();
    }, 300);
  }

  checkSpelling(targetWord) {
    const input = document.getElementById('spelling-input');
    const feedback = document.getElementById('spelling-feedback');
    if (!input || !feedback) return;

    const userVal = input.value.trim().toLowerCase();
    if (userVal === targetWord.toLowerCase()) {
      speechEngine.playCorrectSound();
      progressStorage.addXP(20);
      feedback.className = 'text-xs font-semibold p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 block';
      feedback.innerHTML = `Barakalla! To'g'ri yozdingiz: <strong>${targetWord}</strong> (+20 XP)`;
      setTimeout(() => {
        this.spellingIndex = (this.spellingIndex + 1) % this.dayWords.length;
        this.renderCurrentMode();
      }, 1200);
    } else {
      speechEngine.playWrongSound();
      feedback.className = 'text-xs font-semibold p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 block';
      feedback.innerHTML = `Xato! Qayta urinib ko'ring yoki maslahat oling.`;
      input.focus();
    }
  }

  showSpellingHint(targetWord) {
    const input = document.getElementById('spelling-input');
    if (!input) return;
    const current = input.value;
    const nextChar = targetWord[current.length] || '';
    input.value = current + nextChar;
    input.focus();
  }

  // ==================== ROADMAP & NAVIGATION ====================
  renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    if (!container) return;

    const html = CURRICULUM_TOPICS.map(t => {
      const isCurrent = t.day === this.currentDay;
      const isCompleted = progressStorage.stats.completedDays.includes(t.day);

      return `
        <button onclick="window.app.loadDay(${t.day})" class="w-full text-left p-3.5 rounded-2xl transition flex items-center justify-between border ${
          isCurrent
            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
            : isCompleted
            ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
            : 'bg-slate-800/40 border-slate-700/40 text-slate-400 hover:bg-slate-800 hover:text-white'
        }">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
              isCurrent ? 'bg-indigo-600 text-white' : isCompleted ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
            }">
              ${t.day}
            </div>
            <div>
              <div class="text-xs font-bold text-white line-clamp-1">${t.title}</div>
              <div class="text-[10px] text-slate-400">${t.category} • ${t.level}</div>
            </div>
          </div>
          ${isCompleted ? `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>` : ''}
        </button>
      `;
    }).join('');

    container.innerHTML = html;
    lucide.createIcons();
  }

  updateNavbarStats() {
    const stats = progressStorage.stats;
    const levelInfo = progressStorage.getLevelInfo();

    const streakEl = document.getElementById('navbar-streak');
    const xpEl = document.getElementById('navbar-xp');
    const levelEl = document.getElementById('navbar-level');

    if (streakEl) streakEl.innerText = `${stats.streak} kun`;
    if (xpEl) xpEl.innerText = `${stats.xp} XP`;
    if (levelEl) levelEl.innerText = `Lv. ${levelInfo.level}`;
  }

  // ==================== GLOBAL ACTIONS ====================
  setMode(mode) {
    this.activeMode = mode;
    this.renderCurrentMode();
  }

  setChunk(chunkIdx) {
    this.currentChunk = chunkIdx;
    this.filterType = 'all';
    this.renderCurrentMode();
  }

  setFilter(filter) {
    this.filterType = filter;
    this.renderCurrentMode();
  }

  toggleLearned(wordId) {
    const status = progressStorage.toggleLearned(wordId);
    if (status) speechEngine.playCorrectSound();
    this.renderCurrentDayHeader();
    this.renderCurrentMode();
    this.updateNavbarStats();
  }

  toggleFav(wordId) {
    progressStorage.toggleFavorite(wordId);
    this.renderCurrentMode();
  }

  toggleDiff(wordId) {
    progressStorage.toggleDifficult(wordId);
    this.renderCurrentMode();
  }

  speakWord(word) {
    speechEngine.speak(word);
  }

  applyTheme(theme) {
    progressStorage.saveSettings({ theme });
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-100 text-slate-900';
    } else {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100';
    }
  }

  fireConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  setupEventListeners() {
    // Keyboard shortcuts for Flashcard
    window.addEventListener('keydown', (e) => {
      if (this.activeMode === 'flashcard') {
        if (e.code === 'Space') {
          e.preventDefault();
          this.flipCard();
        } else if (e.code === 'ArrowRight') {
          this.nextFlashcard();
        } else if (e.code === 'ArrowLeft') {
          this.prevFlashcard();
        }
      }
    });
  }

  getAllWords() {
    if (!this.all5000WordsCache) {
      const all = [];
      for (let day = 1; day <= 50; day++) {
        const words = getWordsForDay(day);
        words.forEach(w => all.push({ ...w, dayNumber: day }));
      }
      this.all5000WordsCache = all;
    }
    return this.all5000WordsCache;
  }
}

// Attach storage and speech engines to window
window.progressStorage = progressStorage;
window.speechEngine = speechEngine;

// Instantiate global app instance
window.app = new VocabMasterApp();
