// Foydalanuvchi ma'lumotlari, Progress, Xatcho'plar va Statistika menejeri (LocalStorage)

const STORAGE_KEYS = {
  LEARNED_WORDS: 'vocab5000_learned_words',
  FAVORITE_WORDS: 'vocab5000_favorites',
  DIFFICULT_WORDS: 'vocab5000_difficult',
  USER_STATS: 'vocab5000_stats',
  CURRENT_DAY: 'vocab5000_current_day',
  SETTINGS: 'vocab5000_settings',
  NOTES: 'vocab5000_notes'
};

class ProgressStorage {
  constructor() {
    this.learnedWords = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.LEARNED_WORDS) || '[]'));
    this.favoriteWords = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITE_WORDS) || '[]'));
    this.difficultWords = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.DIFFICULT_WORDS) || '[]'));
    this.notes = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || '{}');
    
    this.stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_STATS) || JSON.stringify({
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().slice(0, 10),
      quizzesCompleted: 0,
      speedMatchesWon: 0,
      spellingCompleted: 0,
      completedDays: []
    }));

    this.settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || JSON.stringify({
      theme: 'dark',
      speechSpeed: 0.9,
      speechAccent: 'en-US',
      dailyGoal: 100,
      autoPronounce: true,
      showMnemonics: true
    }));

    this.checkAndUpdateStreak();
  }

  checkAndUpdateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const last = this.stats.lastActiveDate;
    if (last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (last === yesterday) {
        this.stats.streak += 1;
      } else {
        // Reset streak if missed more than 1 day
        const diffDays = (new Date(today) - new Date(last)) / 86400000;
        if (diffDays > 1) {
          this.stats.streak = 1;
        }
      }
      this.stats.lastActiveDate = today;
      this.saveStats();
    }
  }

  saveStats() {
    localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(this.stats));
  }

  addXP(amount) {
    this.stats.xp += amount;
    this.saveStats();
    return this.stats.xp;
  }

  getLevelInfo() {
    const xp = this.stats.xp;
    // Level formula: Level = Math.floor(Math.sqrt(xp / 50)) + 1
    const level = Math.floor(Math.sqrt(xp / 50)) + 1;
    const currentLevelBaseXP = Math.pow(level - 1, 2) * 50;
    const nextLevelXP = Math.pow(level, 2) * 50;
    const progressPercent = Math.min(100, Math.round(((xp - currentLevelBaseXP) / (nextLevelXP - currentLevelBaseXP || 1)) * 100));

    const titles = [
      "Boshlovchi Sayyoh (Novice)",
      "So'z Izlovchi (Word Seeker)",
      "Qiziquvchan O'quvchi (Curious Mind)",
      "Lug'at Bilimdoni (Lexicon Explorer)",
      "Xotira Ustasi (Memory Champion)",
      "Nutq Mohiri (Fluency Builder)",
      "Poliglot Talaba (Aspiring Polyglot)",
      "Ingliz Tili Dahosi (Language Titan)",
      "5000 So'z Afsonasi (Ultimate Master)"
    ];
    const rankTitle = titles[Math.min(level - 1, titles.length - 1)];

    return {
      level,
      xp,
      nextLevelXP,
      progressPercent,
      rankTitle
    };
  }

  toggleLearned(wordId) {
    if (this.learnedWords.has(wordId)) {
      this.learnedWords.delete(wordId);
    } else {
      this.learnedWords.add(wordId);
      this.addXP(10);
      // Remove from difficult if learned
      this.difficultWords.delete(wordId);
    }
    localStorage.setItem(STORAGE_KEYS.LEARNED_WORDS, JSON.stringify([...this.learnedWords]));
    localStorage.setItem(STORAGE_KEYS.DIFFICULT_WORDS, JSON.stringify([...this.difficultWords]));
    return this.learnedWords.has(wordId);
  }

  isLearned(wordId) {
    return this.learnedWords.has(wordId);
  }

  toggleFavorite(wordId) {
    if (this.favoriteWords.has(wordId)) {
      this.favoriteWords.delete(wordId);
    } else {
      this.favoriteWords.add(wordId);
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITE_WORDS, JSON.stringify([...this.favoriteWords]));
    return this.favoriteWords.has(wordId);
  }

  isFavorite(wordId) {
    return this.favoriteWords.has(wordId);
  }

  toggleDifficult(wordId) {
    if (this.difficultWords.has(wordId)) {
      this.difficultWords.delete(wordId);
    } else {
      this.difficultWords.add(wordId);
    }
    localStorage.setItem(STORAGE_KEYS.DIFFICULT_WORDS, JSON.stringify([...this.difficultWords]));
    return this.difficultWords.has(wordId);
  }

  isDifficult(wordId) {
    return this.difficultWords.has(wordId);
  }

  setNote(wordId, text) {
    if (!text.trim()) {
      delete this.notes[wordId];
    } else {
      this.notes[wordId] = text.trim();
    }
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(this.notes));
  }

  getNote(wordId) {
    return this.notes[wordId] || '';
  }

  getCurrentDay() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_DAY) || '1', 10);
  }

  setCurrentDay(day) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, day.toString());
  }

  saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
  }

  getDayProgress(dayNumber, dayWords) {
    const learnedCount = dayWords.filter(w => this.isLearned(w.id)).length;
    const totalCount = dayWords.length;
    const percentage = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;
    return {
      learnedCount,
      totalCount,
      percentage,
      isCompleted: percentage === 100
    };
  }

  exportDataAsJSON() {
    const backup = {
      learnedWords: [...this.learnedWords],
      favoriteWords: [...this.favoriteWords],
      difficultWords: [...this.difficultWords],
      notes: this.notes,
      stats: this.stats,
      settings: this.settings,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(backup, null, 2);
  }

  importDataFromJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (Array.isArray(data.learnedWords)) {
        this.learnedWords = new Set(data.learnedWords);
        localStorage.setItem(STORAGE_KEYS.LEARNED_WORDS, JSON.stringify([...this.learnedWords]));
      }
      if (Array.isArray(data.favoriteWords)) {
        this.favoriteWords = new Set(data.favoriteWords);
        localStorage.setItem(STORAGE_KEYS.FAVORITE_WORDS, JSON.stringify([...this.favoriteWords]));
      }
      if (Array.isArray(data.difficultWords)) {
        this.difficultWords = new Set(data.difficultWords);
        localStorage.setItem(STORAGE_KEYS.DIFFICULT_WORDS, JSON.stringify([...this.difficultWords]));
      }
      if (data.notes) {
        this.notes = data.notes;
        localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(this.notes));
      }
      if (data.stats) {
        this.stats = { ...this.stats, ...data.stats };
        this.saveStats();
      }
      return true;
    } catch (e) {
      console.error("Import error:", e);
      return false;
    }
  }

  resetAllProgress() {
    this.learnedWords.clear();
    this.favoriteWords.clear();
    this.difficultWords.clear();
    this.notes = {};
    this.stats = {
      xp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().slice(0, 10),
      quizzesCompleted: 0,
      speedMatchesWon: 0,
      spellingCompleted: 0,
      completedDays: []
    };
    localStorage.clear();
    this.saveStats();
  }
}

export const progressStorage = new ProgressStorage();
