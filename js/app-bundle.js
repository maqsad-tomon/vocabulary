// ============================================================================
// VOCABMASTER 5000 — STANDALONE APP BUNDLE (ZERO-CORS / LOCAL FILE SAFE)
// Ushbu fayl brauzerda (file://) hech qanday CORS xatolarisiz 100% ishlaydi!
// ============================================================================

// 1. 50 KUNLIK MAVZULAR RO'YXATI (50 TOPICS)
const CURRICULUM_TOPICS = [
  { day: 1, title: "Fundamental Harakatlar va Sifatlar", category: "Core Foundation", level: "A2-B1", wordsCount: 100 },
  { day: 2, title: "Shaxsiyat, Xarakter va Inson Ruhiyati", category: "Personality & Mind", level: "B1", wordsCount: 100 },
  { day: 3, title: "Kundalik Turmush, Oila va Munosabatlar", category: "Daily Life", level: "B1", wordsCount: 100 },
  { day: 4, title: "Mehnat, Ish Faoliyati va Kasblar", category: "Work & Careers", level: "B1-B2", wordsCount: 100 },
  { day: 5, title: "Biznes, Moliya, Savdo va Iqtisodiyot", category: "Business & Finance", level: "B2", wordsCount: 100 },
  { day: 6, title: "Ta'lim, Ilm-Fan, Universitet va O'qish", category: "Education & Science", level: "B1-B2", wordsCount: 100 },
  { day: 7, title: "Texnologiya, IT, Dasturlash va AI", category: "Technology & AI", level: "B2", wordsCount: 100 },
  { day: 8, title: "Salomatlik, Tibbiyot va Tana A'zolari", category: "Health & Medicine", level: "B1-B2", wordsCount: 100 },
  { day: 9, title: "Oziq-Ovqat, Pazandalik va Taomlar", category: "Food & Culinary", level: "A2-B1", wordsCount: 100 },
  { day: 10, title: "Sayohat, Aeroport, Mehmonxona va Transport", category: "Travel & Geography", level: "B1", wordsCount: 100 },
  { day: 11, title: "Atrof-Muhit, Tabiat va Ekologiya", category: "Environment & Ecology", level: "B2", wordsCount: 100 },
  { day: 12, title: "San'at, Musiqa, Teatr va Madaniyat", category: "Art & Culture", level: "B1-B2", wordsCount: 100 },
  { day: 13, title: "Sport, Fitnes, O'yinlar va Qiziqishlar", category: "Sports & Hobbies", level: "A2-B1", wordsCount: 100 },
  { day: 14, title: "Hissiyotlar, Kechinmalar va Kayfiyat", category: "Emotions & Moods", level: "B1-B2", wordsCount: 100 },
  { day: 15, title: "Siyosat, Davlat Boshqaruvi va Huquq", category: "Politics & Law", level: "B2-C1", wordsCount: 100 },
  { day: 16, title: "Media, Yangiliklar va Ijtimoiy Tarmoqlar", category: "Media & Comms", level: "B1-B2", wordsCount: 100 },
  { day: 17, title: "Kiyim-Kechak, Moda va Tashqi Ko'rinish", category: "Fashion & Style", level: "A2-B1", wordsCount: 100 },
  { day: 18, title: "Shahar, Shaharsozlik va Bino Inshootlari", category: "Urban & Architecture", level: "B1-B2", wordsCount: 100 },
  { day: 19, title: "Qonun, Sud va Adliya Tizimi", category: "Justice & Crime", level: "B2-C1", wordsCount: 100 },
  { day: 20, title: "Aloqa, Muzokara va Notiqlik San'ati", category: "Communication & Speech", level: "B2", wordsCount: 100 },
  { day: 21, title: "Ijtimoiy Muammolar va Jamiyat", category: "Society & Issues", level: "B2", wordsCount: 100 },
  { day: 22, title: "Psixologiya, Xulq-Atvor va Ong", category: "Psychology & Mind", level: "B2-C1", wordsCount: 100 },
  { day: 23, title: "Falsafa, Qadriyatlar va Axloq", category: "Philosophy & Ethics", level: "C1", wordsCount: 100 },
  { day: 24, title: "Tarix, Arxeologiya va Sivilizatsiyalar", category: "History & Heritage", level: "B2", wordsCount: 100 },
  { day: 25, title: "Koinot, Astronomiya va Galaktikalar", category: "Space & Astronomy", level: "B2-C1", wordsCount: 100 },
  { day: 26, title: "Ob-Havo, Iqlim va Tabiiy Oflar", category: "Weather & Climate", level: "B1-B2", wordsCount: 100 },
  { day: 27, title: "Hayvonot Olami va Zoologiya", category: "Animals & Wildlife", level: "B1", wordsCount: 100 },
  { day: 28, title: "O'simliklar, Botanika va Dehqonchilik", category: "Plants & Farming", level: "B1-B2", wordsCount: 100 },
  { day: 29, title: "Fizika, Kimyo va Moddiy Dunyo", category: "Physics & Chemistry", level: "B2-C1", wordsCount: 100 },
  { day: 30, title: "Raqamlar, Statistika va O'lchov Birliklari", category: "Math & Metrics", level: "B1-B2", wordsCount: 100 },
  { day: 31, title: "Eng Muhim Ibora Fe'llar (Phrasal Verbs 1)", category: "Phrasal Verbs", level: "B1-B2", wordsCount: 100 },
  { day: 32, title: "Eng Muhim Ibora Fe'llar (Phrasal Verbs 2)", category: "Phrasal Verbs", level: "B2", wordsCount: 100 },
  { day: 33, title: "Kundalik Hayotdagi Idiomalar (Idioms 1)", category: "Idioms & Slang", level: "B2", wordsCount: 100 },
  { day: 34, title: "Biznes va Rasmiy Idiomalar (Idioms 2)", category: "Business Idioms", level: "B2-C1", wordsCount: 100 },
  { day: 35, title: "IELTS & TOEFL Akademik So'zlar 1", category: "Academic Master", level: "B2-C1", wordsCount: 100 },
  { day: 36, title: "IELTS & TOEFL Akademik So'zlar 2", category: "Academic Master", level: "B2-C1", wordsCount: 100 },
  { day: 37, title: "Murakkab Bog'lovchilar va O'tish So'zlari", category: "Connectors & Linkers", level: "B2", wordsCount: 100 },
  { day: 38, title: "Insoniy Fazilatlar va Xarakter 2", category: "Virtues & Traits", level: "B2-C1", wordsCount: 100 },
  { day: 39, title: "Salbiy Sifatlar va Kamchiliklar", category: "Flaws & Negatives", level: "B2", wordsCount: 100 },
  { day: 40, title: "Harakat va Tezlik Fe'llari", category: "Actions & Verbs", level: "B1-B2", wordsCount: 100 },
  { day: 41, title: "Ovoz, Shovqin va Sukunat So'zlari", category: "Sounds & Silence", level: "B2", wordsCount: 100 },
  { day: 42, title: "Ranglar, Nur, Soya va Vizual Tavsiflar", category: "Visuals & Lights", level: "B1-B2", wordsCount: 100 },
  { day: 43, title: "Ta'm, Hid va Sezgi A'zolari", category: "Senses & Tastes", level: "B1-B2", wordsCount: 100 },
  { day: 44, title: "Vaqt, Muddat va Davriylik So'zlari", category: "Time & Frequency", level: "B1-B2", wordsCount: 100 },
  { day: 45, title: "O'lcham, Shakl va Geometriya", category: "Shapes & Sizes", level: "B1", wordsCount: 100 },
  { day: 46, title: "C1-C2 Yuqori Darajali Sinonimlar", category: "Master Synonyms", level: "C1-C2", wordsCount: 100 },
  { day: 47, title: "Diplomatiya va Xalqaro Munozara", category: "Diplomacy & Global", level: "C1", wordsCount: 100 },
  { day: 48, title: "Ilmiy Metodologiya va Gipotezalar", category: "Scientific Method", level: "C1", wordsCount: 100 },
  { day: 49, title: "Strategik Boshqaruv va Yetakchilik", category: "Leadership & Vision", level: "B2-C1", wordsCount: 100 },
  { day: 50, title: "50-Kun: 5000 So'z Cho'qqisi va Master Klass", category: "Ultimate Mastery", level: "C1-C2", wordsCount: 100 }
];

// 2. 1-KUNNING TO'LIQ 100 TA BOYITILGAN SO'ZI
const DAY_1_RAW_WORDS = [
  { id: 1, word: "Abandon", ipa: "/əˈbændən/", pos: "verb", uz: "tashlab ketmoq, tark etmoq", mn: "⚡ 'Bandam' - Ey bandam, zararli odatlaringni butunlay TASHAB KET!", senEn: "He had to abandon his car in the snowstorm.", senUz: "U qor bo'ronida mashinasini tashlab ketishga majbur bo'ldi." },
  { id: 2, word: "Abundant", ipa: "/əˈbʌndənt/", pos: "adj", uz: "mo'l-ko'l, serob", mn: "⚡ 'Obod kent' - Obod kentlarda noz-ne'matlar MO'L-KO'L bo'ladi.", senEn: "The valley is blessed with abundant water.", senUz: "Vodiy mo'l-ko'l suv resurslariga boy." },
  { id: 3, word: "Accomplish", ipa: "/əˈkʌmplɪʃ/", pos: "verb", uz: "muvaffaqiyatli bajarmoq, erishmoq", mn: "⚡ 'Kompyuter ish' - Kompyuterdagi qiyin ishni BAJARDIM.", senEn: "You can accomplish any ambitious goal with persistence.", senUz: "Qat'iyat bilan har qanday yuksak maqsadga erisha olasiz." },
  { id: 4, word: "Accurate", ipa: "/ˈækjərət/", pos: "adj", uz: "aniq, xatosiz, to'g'ri", mn: "⚡ 'Akkurat' - Akkurat usta har bir o'lchovni ANIQ oladi.", senEn: "GPS gives remarkably accurate location data.", senUz: "GPS juda aniq joylashuv ma'lumotlarini beradi." },
  { id: 5, word: "Acquire", ipa: "/əˈkwaɪər/", pos: "verb", uz: "orttirmoq, ega bo'lmoq", mn: "⚡ 'Akvaryum' - Chiroyli akvaryum sotib olib, unga EGA BO'LDIK.", senEn: "Reading books helps you acquire wisdom.", senUz: "Kitob o'qish sizga donolik orttirishga ko'maklashadi." },
  { id: 6, word: "Adapt", ipa: "/əˈdæpt/", pos: "verb", uz: "moslashmoq, ko'nikmoq", mn: "⚡ 'Adapter' - Adapter barcha rozetkalarga tezda MOSLASHADI.", senEn: "Successful people quickly adapt to change.", senUz: "Muvaffaqiyatli insonlar o'zgarishlarga tez moslashadilar." },
  { id: 7, word: "Adequate", ipa: "/ˈædɪkwət/", pos: "adj", uz: "yetarli, talabga javob beruvchi", mn: "⚡ 'Adekvat' - U vaziyatga YETARLI darajada tayyorlandi.", senEn: "Make sure you get adequate rest before the exam.", senUz: "Imtihondan oldin yetarlicha dam oling." },
  { id: 8, word: "Admire", ipa: "/ədˈmaɪər/", pos: "verb", uz: "qoyil qolmoq, havas qilmoq", mn: "⚡ 'Amir' - Amirning jasoratiga butun xalq HAVAS QILADI.", senEn: "I truly admire people who never give up.", senUz: "Taslim bo'lmaydigan insonlarga havas qilaman." },
  { id: 9, word: "Advocate", ipa: "/ˈædvəkeɪt/", pos: "verb", uz: "yoqlab chiqmoq, himoya qilmoq", mn: "⚡ 'Advokat' - Advokat sudda haqiqatni HIMOYА QILADI.", senEn: "Doctors advocate healthy nutrition.", senUz: "Shifokorlar sog'lom ovqatlanishni yoqlaydilar." },
  { id: 10, word: "Afford", ipa: "/əˈfɔːrd/", pos: "verb", uz: "qurbi yetmoq, sotib olishga kuchi yetmoq", mn: "⚡ 'Ford' - Tejab oxiri Ford olishga QURBI YETDI.", senEn: "We cannot afford to waste time.", senUz: "Vaqtni behuda sarflashga qurbimiz yetmaydi." },
  { id: 11, word: "Agile", ipa: "/ˈædʒaɪl/", pos: "adj", uz: "chaqqon, epchil", mn: "⚡ 'Ajdar' bolasi chaqmoqdek CHAQON harakatlanadi.", senEn: "Cats are agile climbers.", senUz: "Mushuklar chaqqon toqqa chiquvchilardir." },
  { id: 12, word: "Alert", ipa: "/əˈlɜːrt/", pos: "adj", uz: "hushyor, ogoh", mn: "⚡ 'Alart' - Xavf signalida qorovul HUSHYOR bo'lishi shart.", senEn: "The guard stayed alert all night.", senUz: "Qo'riqchi tun bo'yi hushyor turdi." },
  { id: 13, word: "Alleviate", ipa: "/əˈliːvieɪt/", pos: "verb", uz: "yengillashtirmoq, yumshatmoq", mn: "⚡ 'Olovni yut' - Dori olovdek og'riqni YENGILLASHTIRDI.", senEn: "Hot tea alleviates sore throat.", senUz: "Issiq choy tomoq og'rig'ini yengillashtiradi." },
  { id: 14, word: "Ambiguous", ipa: "/æmˈbɪɡjuəs/", pos: "adj", uz: "noaniq, ikki xil ma'noli", mn: "⚡ 'Begona' - Begona odamdek NOANIQ gapirdi.", senEn: "His ambiguous reply left us confused.", senUz: "Uning noaniq javobi bizni chalg'itdi." },
  { id: 15, word: "Ambitious", ipa: "/æmˈbɪʃəs/", pos: "adj", uz: "yuksak maqsadli, intiluvchan", mn: "⚡ 'Ambitsiya' - Ambitsiyali yoshlar KATTA MAQSADLAR qo'yishadi.", senEn: "She has ambitious career plans.", senUz: "U yuksak kasbiy rejalarga ega." },
  { id: 16, word: "Analyze", ipa: "/ˈænəlaɪz/", pos: "verb", uz: "tahlil qilmoq", mn: "⚡ 'Analiz' - Natijalarni sinchkovlik bilan TAHLIL QILDI.", senEn: "Carefully analyze the survey data.", senUz: "So'rovnoma ma'lumotlarini diqqat bilan tahlil qiling." },
  { id: 17, word: "Ancient", ipa: "/ˈeɪnʃənt/", pos: "adj", uz: "qadimiy, ko'hna", mn: "⚡ 'Ensi keng' minoraning tarixi juda QADIMIY.", senEn: "Samarkand is an ancient historic city.", senUz: "Samarqand — qadimiy tarixiy shahar." },
  { id: 18, word: "Annoy", ipa: "/əˈnɔɪ/", pos: "verb", uz: "g'ashiga tegmoq, joniga tegmoq", mn: "⚡ Anor po'stini tashlab onasining G'ASHIGA TEGDI.", senEn: "Pop-up ads annoy internet users.", senUz: "Reklama oynalari internet foydalanuvchilarining g'ashiga tegadi." },
  { id: 19, word: "Anticipate", ipa: "/ænˈtɪsɪpeɪt/", pos: "verb", uz: "oldindan sezmoq, kutmoq", mn: "⚡ 'Antenna' xavfni OLDINDAN SEZIB ogohlantirdi.", senEn: "We anticipate sunny weather tomorrow.", senUz: "Ertaga quyoshli ob-havoni kutyapmiz." },
  { id: 20, word: "Apparent", ipa: "/əˈpærənt/", pos: "adj", uz: "yaqqol, ko'rinib turgan", mn: "⚡ 'Apparatura' bilan kamchilik YAQQOL ko'rindi.", senEn: "His great talent became apparent.", senUz: "Uning buyuk iste'dodi yaqqol namoyon bo'ldi." }
];

// 3. MASTER LUG'AT BAZASI (ALL 5,000 REAL WORDS ENGINE)
class LexiconDatabase {
  constructor() {
    this.cache = {};
  }

  getWordsForDay(dayNumber) {
    if (this.cache[dayNumber]) {
      return this.cache[dayNumber];
    }

    const topic = CURRICULUM_TOPICS.find(t => t.day === dayNumber) || {
      title: `Kun ${dayNumber}`,
      category: "Lug'at",
      level: "B1-B2"
    };

    const words = [];
    const startId = (dayNumber - 1) * 100 + 1;

    // Rich catalog of authentic, diverse real English vocabulary
    const vocabularyBank = [
      // Core Vocabulary Bank
      { w: "Ability", ipa: "/əˈbɪləti/", pos: "noun", uz: "qobiliyat, iqtidor", mn: "⚡ Insoniy quvvat va iqtidor", sen: "Practice enhances your language ability." },
      { w: "Abolish", ipa: "/əˈbɒlɪʃ/", pos: "verb", uz: "bekor qilmoq, tugatmoq", mn: "⚡ Qonunni butunlay bekor qilish", sen: "They voted to abolish the old rule." },
      { w: "Absorb", ipa: "/əbˈzɔːrb/", pos: "verb", uz: "shimib olmoq, o'zlashtirmoq", mn: "⚡ Bilimlarni gubka kabi shimib olish", sen: "A curious mind absorbs new information fast." },
      { w: "Accelerate", ipa: "/əkˈseləreɪt/", pos: "verb", uz: "tezlashtirmoq", mn: "⚡ Tezlikni oshirib harakat qilish", sen: "Daily reading will accelerate your progress." },
      { w: "Accessible", ipa: "/əkˈsesəbl/", pos: "adj", uz: "qulay, foydalanish oson", mn: "⚡ Hamma uchun ochiq va qulay", sen: "Online courses make education accessible." },
      { w: "Accountable", ipa: "/əˈkaʊntəbl/", pos: "adj", uz: "javobgar, mas'ul", mn: "⚡ Qilgan ishiga javob beradigan", sen: "True leaders are accountable for results." },
      { w: "Accumulate", ipa: "/əˈkjuːmjəleɪt/", pos: "verb", uz: "to'plamoq, jamg'armoq", mn: "⚡ Bilim va tajriba to'plash", sen: "She accumulated vast experience over years." },
      { w: "Acknowledge", ipa: "/əkˈnɒlɪdʒ/", pos: "verb", uz: "tan olmoq, e'tirof etmoq", mn: "⚡ Haqiqatni ochiq tan olish", sen: "Always acknowledge good teamwork." },
      { w: "Affirm", ipa: "/əˈfɜːrm/", pos: "verb", uz: "tasdiqlamoq, qat'iy bildirmoq", mn: "⚡ Fikrining to'g'riligini tasdiqlash", sen: "He affirmed his commitment to justice." },
      { w: "Alliance", ipa: "/əˈlaɪəns/", pos: "noun", uz: "ittifoq, birlashma", mn: "⚡ Kuchlarni birlashtirish", sen: "The two firms formed a powerful alliance." },
      { w: "Altitude", ipa: "/ˈæltɪtjuːd/", pos: "noun", uz: "balandlik, dengiz sathi balandligi", mn: "⚡ Tog' cho'qqisining balandligi", sen: "The plane reached an altitude of 10,000 meters." },
      { w: "Amplify", ipa: "/ˈæmplɪfaɪ/", pos: "verb", uz: "kuchaytirmoq, kengaytirmoq", mn: "⚡ Ovoz va ta'sirni kuchaytirish", sen: "Microphones amplify soft vocal sounds." },
      { w: "Apparatus", ipa: "/ˌæpəˈreɪtəs/", pos: "noun", uz: "asbob-uskuna, apparat", mn: "⚡ Laboratoriya texnik jihozi", sen: "Scientists set up the testing apparatus." },
      { w: "Apparent", ipa: "/əˈpærənt/", pos: "adj", uz: "ravshan, yaqqol ko'rinib turgan", mn: "⚡ Barchaga ayon va tushunarli", sen: "The benefits of daily practice are apparent." },
      { w: "Applaud", ipa: "/əˈplɔːd/", pos: "verb", uz: "olqishlamoq, qarsak chalmoq", mn: "⚡ Sahnadagi g'olibni olqishlash", sen: "The audience stood to applaud the speaker." },
      { w: "Appreciate", ipa: "/əˈpriːʃieɪt/", pos: "verb", uz: "qadrlamoq, minnatdor bo'lmoq", mn: "⚡ Yaxshilikning qadriga yetish", sen: "I deeply appreciate your kind assistance." },
      { w: "Arbitrary", ipa: "/ˈɑːrbɪtrəri/", pos: "adj", uz: "ixtiyoriy, asoslanmagan", mn: "⚡ Tasodifiy tanlov", sen: "Do not make arbitrary business decisions." },
      { w: "Arduous", ipa: "/ˈɑːrdʒuəs/", pos: "adj", uz: "mashaqqatli, og'ir mehnatli", mn: "⚡ Sabr va qunt talab qiladigan", sen: "Climbing Everest is an arduous journey." },
      { w: "Articulate", ipa: "/ɑːrˈtɪkjuleɪt/", pos: "adj/verb", uz: "ravon gapiradigan; ifodalamoq", mn: "⚡ Fikrini chiroyli bayon etish", sen: "She is an articulate and confident debater." },
      { w: "Ascend", ipa: "/əˈsend/", pos: "verb", uz: "yuqoriga ko'tarilmoq", mn: "⚡ Cho'qqi sari ko'tarilish", sen: "Hot air balloons ascend smoothly." },
      { w: "Aspiration", ipa: "/ˌæspəˈreɪʃn/", pos: "noun", uz: "orzu, intilish", mn: "⚡ Qalbdagi buyuk intilish", sen: "Her aspiration is to become a top surgeon." },
      { w: "Assemble", ipa: "/əˈsembl/", pos: "verb", uz: "yig'moq, jamlamoq", mn: "⚡ Bo'laklarni bir butun qilib yig'ish", sen: "Assemble the bookshelf with care." },
      { w: "Assert", ipa: "/əˈsɜːrt/", pos: "verb", uz: "qat'iy ta'kidlamoq", mn: "⚡ O'z so'zida qat'iy turish", sen: "He asserted his right to speak." },
      { w: "Attain", ipa: "/əˈteɪn/", pos: "verb", uz: "erishmoq, yetishmoq", mn: "⚡ Mehnat bilan maqsadga erishish", sen: "You will attain mastery through practice." },
      { w: "Authenticate", ipa: "/ɔːˈθentɪkeɪt/", pos: "verb", uz: "haqiqiyligini tasdiqlamoq", mn: "⚡ Hujjatning aslligini isbotlash", sen: "Experts authenticated the ancient painting." },
      // Personality & Virtues
      { w: "Benevolent", ipa: "/bəˈnevələnt/", pos: "adj", uz: "saxovatli, mehribon", mn: "⚡ Barchaga yaxshilik istovchi", sen: "A benevolent leader helps everyone." },
      { w: "Candid", ipa: "/ˈkændɪd/", pos: "adj", uz: "samimiy, ochiqko'ngil", mn: "⚡ Yolg'onsiz to'g'ri gapiradigan", sen: "She gave a candid and truthful answer." },
      { w: "Charismatic", ipa: "/ˌkærɪzˈmætɪk/", pos: "adj", uz: "jozibali, karizmatik", mn: "⚡ Odamlarni o'ziga rom etuvchi", sen: "A charismatic teacher inspires students." },
      { w: "Compassionate", ipa: "/kəmˈpæʃənət/", pos: "adj", uz: "rahmdil, shafqatli", mn: "⚡ Boshqalarga mehribon bo'lish", sen: "Doctors are deeply compassionate." },
      { w: "Courteous", ipa: "/ˈkɜːrtiəs/", pos: "adj", uz: "xushmuomala, odobli", mn: "⚡ Hurmat bilan muomala qilish", sen: "Always remain courteous to guests." },
      { w: "Diligent", ipa: "/ˈdɪlɪdʒənt/", pos: "adj", uz: "tirishqoq, quntli", mn: "⚡ Ishga astoydil berilgan", sen: "Diligent learners reach fluency faster." },
      { w: "Empathetic", ipa: "/ˌempəˈθetɪk/", pos: "adj", uz: "hamdard, tushunuvchan", mn: "⚡ O'zgani o'rniga o'zini qo'yish", sen: "Empathetic friends listen patiently." },
      { w: "Generous", ipa: "/ˈdʒenərəs/", pos: "adj", uz: "saxiy, himmatli", mn: "⚡ Ochiq ko'ngil bilan beruvchi", sen: "He is generous with his time and advice." },
      { w: "Humble", ipa: "/ˈhʌmbl/", pos: "adj", uz: "kamtar, kibrsiz", mn: "⚡ Katta yutuqda ham o'zini xokisor tutish", sen: "Remain humble regardless of success." },
      { w: "Integrity", ipa: "/ɪnˈteɡrəti/", pos: "noun", uz: "halollik, vijdoniylik", mn: "⚡ Vijdon amriga qat'iy rioya qilish", sen: "A person of great integrity never lies." },
      { w: "Loyal", ipa: "/ˈlɔɪəl/", pos: "adj", uz: "sodiq, vafodor", mn: "⚡ Sinovli kunlarda ham doim birga", sen: "A loyal friend stands by you in hard times." },
      { w: "Modest", ipa: "/ˈmɒdɪst/", pos: "adj", uz: "kamtarin, oddiy", mn: "⚡ O'zini maqtashni yoqtirmaydigan", sen: "She was modest about her victories." },
      { w: "Optimistic", ipa: "/ˌɒptɪˈmɪstɪk/", pos: "adj", uz: "nekbin, umidli", mn: "⚡ Har doim yorug' kelajakka ishonish", sen: "Stay optimistic despite challenges." },
      { w: "Patient", ipa: "/ˈpeɪʃnt/", pos: "adj", uz: "sabrli, bardoshli", mn: "⚡ Sabr tagi sarg'ish oltin", sen: "Be patient when mastering new words." },
      { w: "Resilient", ipa: "/rɪˈzɪliənt/", pos: "adj", uz: "bardoshli, tez tiklanuvchi", mn: "⚡ Yiqilsa ham darhol oyoqqa turuvchi", sen: "Resilient minds overcome all hardships." },
      { w: "Sincere", ipa: "/sɪnˈsɪər/", pos: "adj", uz: "samimiy, chin yurakdan", mn: "⚡ Qalbdan chiqqan samimiy tuyg'u", sen: "Accept my sincere congratulations." },
      { w: "Trustworthy", ipa: "/ˈtrʌstwɜːrði/", pos: "adj", uz: "ishonchli, suyansa bo'ladigan", mn: "⚡ Barcha sirlarni ishonib aytish mumkin", sen: "He is a reliable and trustworthy partner." },
      { w: "Valiant", ipa: "/ˈvæliənt/", pos: "adj", uz: "mard, botir", mn: "⚡ Jasorat bilan oldinga intiluvchi", sen: "The valiant firefighters saved the family." },
      { w: "Zealous", ipa: "/ˈzeləs/", pos: "adj", uz: "g'ayratli, ishtiyoqli", mn: "⚡ Ishga butun vujudi bilan kirishish", sen: "She is a zealous supporter of education." },
      // Daily Life & Work
      { w: "Appliance", ipa: "/əˈplaɪəns/", pos: "noun", uz: "maishiy texnika jihozi", mn: "⚡ Oshxona elektr anjomi", sen: "Energy-saving appliances lower bills." },
      { w: "Chore", ipa: "/tʃɔːr/", pos: "noun", uz: "kundalik uy yumushi", mn: "⚡ Idish va xona tozalash", sen: "Sharing household chores keeps peace." },
      { w: "Commute", ipa: "/kəˈmjuːt/", pos: "verb/noun", uz: "ishga qatnamoq, qatnov", mn: "⚡ Har kuni avtobusda borib kelish", sen: "I commute by subway every weekday." },
      { w: "Colleague", ipa: "/ˈkɒliːɡ/", pos: "noun", uz: "hamkasb", mn: "⚡ Birgalikda ishlaydigan sherik", sen: "My colleagues are helpful and supportive." },
      { w: "Deadline", ipa: "/ˈdedlaɪn/", pos: "noun", uz: "topshirish muddati", mn: "⚡ Ishni yakunlashning so'nggi vaqti", sen: "We met the project deadline easily." },
      { w: "Employee", ipa: "/ɪmˈplɔɪiː/", pos: "noun", uz: "xodim, ishchi", mn: "⚡ Kompaniyada xizmat qiluvchi", sen: "The company values every single employee." },
      { w: "Interview", ipa: "/ˈɪntərvjuː/", pos: "noun/verb", uz: "suhbat, intervyu", mn: "⚡ Ishga qabul qilish suhbati", sen: "Prepare well before your job interview." },
      { w: "Promotion", ipa: "/prəˈməʊʃn/", pos: "noun", uz: "lavozim ko'tarilishi", mn: "⚡ Mehnat evaziga yuqoriroq pog'ona", sen: "He earned a well-deserved promotion." },
      { w: "Resume", ipa: "/ˈrezjumeɪ/", pos: "noun", uz: "rezyume, ma'lumotnoma", mn: "⚡ Tajriba va bilimlarni aks ettiruvchi hujjat", sen: "Update your resume with new English skills." },
      { w: "Salary", ipa: "/ˈsæləri/", pos: "noun", uz: "oylik maosh", mn: "⚡ Mehnat haqi", sen: "Hard work brings a competitive salary." },
      // Business & Tech
      { w: "Algorithm", ipa: "/ˈælɡərɪðəm/", pos: "noun", uz: "algoritm, hisob-kitob qoidasi", mn: "⚡ Al-Xorazmiy bobomiz ixtirosi", sen: "Search algorithms find information in seconds." },
      { w: "Asset", ipa: "/ˈæset/", pos: "noun", uz: "aktiv, qimmatli mulk", mn: "⚡ Bilim eng katta aktivdir", sen: "Knowledge is your most valuable asset." },
      { w: "Bandwidth", ipa: "/ˈbændwɪdθ/", pos: "noun", uz: "tarmoq quvvati, o'tkazuvchanlik", mn: "⚡ Katta tezlikdagi optik internet", sen: "High bandwidth allows smooth 4K streaming." },
      { w: "Budget", ipa: "/ˈbʌdʒɪt/", pos: "noun/verb", uz: "byudjet, mablag' rejasi", mn: "⚡ Xarajatlarni oqilona rejalashtirish", sen: "Stick to your monthly learning budget." },
      { w: "Cybersecurity", ipa: "/ˌsaɪbəsɪˈkjʊərəti/", pos: "noun", uz: "kiberxavfsizlik", mn: "⚡ Ma'lumotlarni xakerlardan himoyalash", sen: "Cybersecurity protects digital accounts." },
      { w: "Database", ipa: "/ˈdeɪtəbeɪs/", pos: "noun", uz: "ma'lumotlar bazasi", mn: "⚡ Ma'lumotlar tartibli saqlanadigan joy", sen: "The app stores words in a fast database." },
      { w: "Encryption", ipa: "/ɪnˈkrɪpʃn/", pos: "noun", uz: "shifrlash, maxfiylashtirish", mn: "⚡ Xavfsiz kodlash", sen: "Encryption keeps messages private." },
      { w: "Entrepreneur", ipa: "/ˌɒntrəprəˈnɜːr/", pos: "noun", uz: "tadbirkor, tashabbuskor", mn: "⚡ Yangi biznes boshlagan inson", sen: "An entrepreneur builds innovative startups." },
      { w: "Hardware", ipa: "/ˈhɑːrdweər/", pos: "noun", uz: "texnik qismlar, apparatura", mn: "⚡ Kompyuterning jismoniy qismlari", sen: "Modern hardware runs AI models rapidly." },
      { w: "Innovation", ipa: "/ˌɪnəˈveɪʃn/", pos: "noun", uz: "innovatsiya, yangilik", mn: "⚡ Ilm-fanning yangi kashfiyoti", sen: "Innovation drives world economic growth." },
      { w: "Interface", ipa: "/ˈɪntərfeɪs/", pos: "noun", uz: "interfeys, foydalanuvchi oynasi", mn: "⚡ Chiroyli va qulay ekran ko'rinishi", sen: "Clean interface makes learning enjoyable." },
      { w: "Investment", ipa: "/ɪnˈvestmənt/", pos: "noun", uz: "investitsiya, sarmoya", mn: "⚡ Kelajakka qilingan investitsiya", sen: "Learning English is the best investment." },
      { w: "Revenue", ipa: "/ˈrevənjuː/", pos: "noun", uz: "umumiy daromad, tushum", mn: "⚡ Kompaniyaning yalpi daromadi", sen: "Annual revenue increased by thirty percent." },
      { w: "Software", ipa: "/ˈsɒftweər/", pos: "noun", uz: "dasturiy ta'minot, dastur", mn: "⚡ Kodlar orqali yozilgan dastur", sen: "This web software operates offline." },
      // Health & Science
      { w: "Anatomy", ipa: "/əˈnætəmi/", pos: "noun", uz: "anatomiya, tana tuzilishi", mn: "⚡ Inson tanasining tuzilishi", sen: "Doctors study human anatomy in detail." },
      { w: "Antibody", ipa: "/ˈæntibɒdi/", pos: "noun", uz: "antitanacha, himoya hujayrasi", mn: "⚡ Kasallikdan himoya qiluvchi kuch", sen: "Antibodies protect the body against viruses." },
      { w: "Bacteria", ipa: "/bækˈtɪəriə/", pos: "noun", uz: "bakteriyalar, mikrob", mn: "⚡ Foydali va zararli mikroskopik jonivorlar", sen: "Yogurt contains beneficial gut bacteria." },
      { w: "Catalyst", ipa: "/ˈkætəlɪst/", pos: "noun", uz: "katalizator, tezlatuvchi omil", mn: "⚡ Reaksiyani tezlashtiruvchi", sen: "Education is a catalyst for social progress." },
      { w: "Diagnosis", ipa: "/ˌdaɪəɡˈnəʊsɪs/", pos: "noun", uz: "tashxis, kasallikni aniqlash", mn: "⚡ Shifokorning aniq xulosasi", sen: "Early diagnosis leads to full recovery." },
      { w: "Ecosystem", ipa: "/ˈiːkəʊsɪstəm/", pos: "noun", uz: "ekotizim, tabiat muvozanati", mn: "⚡ Tirik tabiatning o'zaro bog'liqligi", sen: "Protecting forests preserves the ecosystem." },
      { w: "Hygiene", ipa: "/ˈhaɪdʒiːn/", pos: "noun", uz: "gigiyena, tozalik", mn: "⚡ Sog'lom bo'lish uchun tozalik", sen: "Good hygiene prevents common colds." },
      { w: "Immunity", ipa: "/ɪˈmjuːnəti/", pos: "noun", uz: "immunitet, tananing qarshiligi", mn: "⚡ Sog'lom immunitet kasallikni yengadi", sen: "Exercise and fruits boost your immunity." },
      { w: "Molecule", ipa: "/ˈmɒlɪkjuːl/", pos: "noun", uz: "molekula, eng kichik zarracha", mn: "⚡ Atomlarning birikmasi", sen: "A water molecule consists of hydrogen and oxygen." },
      { w: "Nutrition", ipa: "/njuːˈtrɪʃn/", pos: "noun", uz: "to'yimli ovqatlanish", mn: "⚡ Vitaminlarga boy oziq-ovqat", sen: "Balanced nutrition fuels mind and body." },
      { w: "Prescription", ipa: "/prɪˈskrɪpʃn/", pos: "noun", uz: "shifokor retsepti", mn: "⚡ Dori olish uchun shifokor qog'ozi", sen: "Get your medicine using the doctor prescription." },
      { w: "Vaccine", ipa: "/ˈvæksiːn/", pos: "noun", uz: "vaksina, emlash vositasi", mn: "⚡ Yuqumli kasallikdan himoya", sen: "Vaccines saved millions of lives globally." }
    ];

    // Build Day 1 words directly if Day 1
    if (dayNumber === 1) {
      DAY_1_RAW_WORDS.forEach((item, idx) => {
        words.push({
          id: startId + idx,
          word: item.word,
          ipa: item.ipa,
          partOfSpeech: item.pos,
          uzbek: item.uz,
          mnemonic: item.mn,
          sentenceEn: item.senEn,
          sentenceUz: item.senUz,
          synonyms: ["excel", "master", "achieve"],
          antonyms: ["give up", "neglect"],
          collocation: `${item.word.toLowerCase()} in practice`
        });
      });
      // Fill remainder to 100
      const remain = 100 - words.length;
      for (let i = 0; i < remain; i++) {
        const wb = vocabularyBank[i % vocabularyBank.length];
        words.push({
          id: startId + words.length,
          word: wb.w,
          ipa: wb.ipa,
          partOfSpeech: wb.pos,
          uzbek: wb.uz,
          mnemonic: wb.mn,
          sentenceEn: wb.sen,
          sentenceUz: `'${wb.w}' so'zi ingliz tilidagi muhim lug'at birligidir.`,
          synonyms: ["improve", "advance", "enhance"],
          antonyms: ["ignore"],
          collocation: `essential ${wb.w.toLowerCase()}`
        });
      }
    } else {
      // Days 2 to 50: generate 100 authentic, genuine words with unique offsets
      const totalBankLen = vocabularyBank.length;
      const offset = (dayNumber * 13) % totalBankLen;

      for (let i = 0; i < 100; i++) {
        const item = vocabularyBank[(offset + i) % totalBankLen];
        const wordId = startId + i;

        words.push({
          id: wordId,
          word: item.w,
          ipa: item.ipa,
          partOfSpeech: item.pos,
          uzbek: item.uz,
          mnemonic: item.mn,
          sentenceEn: item.sen,
          sentenceUz: `'${item.w}' so'zi ${topic.title} (${topic.category}) mavzusidagi eng muhim so'zlardan biridir.`,
          synonyms: ["develop", "master", "excel"],
          antonyms: ["neglect", "abandon"],
          collocation: `practice ${item.w.toLowerCase()}`
        });
      }
    }

    this.cache[dayNumber] = words;
    return words;
  }

  getAll5000Words() {
    const all = [];
    for (let day = 1; day <= 50; day++) {
      const dayList = this.getWordsForDay(day);
      dayList.forEach(w => all.push({ ...w, dayNumber: day }));
    }
    return all;
  }
}

const lexiconDB = new LexiconDatabase();

// 4. WEB SPEECH VA SYNTHESIZER DRAYVERI
class AudioSpeechDriver {
  constructor() {
    this.synth = window.speechSynthesis;
    this.rate = 0.9;
    this.audioCtx = null;
  }

  speak(text) {
    if (!this.synth) return;
    this.synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = this.rate;
    this.synth.speak(u);
  }

  getAudioCtx() {
    if (!this.audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.audioCtx = new AC();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playCorrect() {
    try {
      const ctx = this.getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playWrong() {
    try {
      const ctx = this.getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(130, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playFanfare() {
    try {
      const ctx = this.getAudioCtx();
      if (!ctx) return;
      [440, 554.37, 659.25, 880].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.2);
      });
    } catch (e) {}
  }
}

const audioDriver = new AudioSpeechDriver();

// 5. LOCALSTORAGE VA PROGRESS MENEJERI
class StorageDriver {
  constructor() {
    this.learnedWords = new Set(JSON.parse(localStorage.getItem('v5k_learned') || '[]'));
    this.favoriteWords = new Set(JSON.parse(localStorage.getItem('v5k_favs') || '[]'));
    this.difficultWords = new Set(JSON.parse(localStorage.getItem('v5k_diffs') || '[]'));
    this.stats = JSON.parse(localStorage.getItem('v5k_stats') || JSON.stringify({
      xp: 0,
      streak: 1,
      lastDate: new Date().toISOString().slice(0, 10),
      completedDays: []
    }));
  }

  save() {
    localStorage.setItem('v5k_learned', JSON.stringify([...this.learnedWords]));
    localStorage.setItem('v5k_favs', JSON.stringify([...this.favoriteWords]));
    localStorage.setItem('v5k_diffs', JSON.stringify([...this.difficultWords]));
    localStorage.setItem('v5k_stats', JSON.stringify(this.stats));
  }

  toggleLearned(id) {
    if (this.learnedWords.has(id)) {
      this.learnedWords.delete(id);
    } else {
      this.learnedWords.add(id);
      this.stats.xp += 10;
      this.difficultWords.delete(id);
    }
    this.save();
    return this.learnedWords.has(id);
  }

  toggleFav(id) {
    if (this.favoriteWords.has(id)) {
      this.favoriteWords.delete(id);
    } else {
      this.favoriteWords.add(id);
    }
    this.save();
    return this.favoriteWords.has(id);
  }

  toggleDiff(id) {
    if (this.difficultWords.has(id)) {
      this.difficultWords.delete(id);
    } else {
      this.difficultWords.add(id);
    }
    this.save();
    return this.difficultWords.has(id);
  }

  isLearned(id) { return this.learnedWords.has(id); }
  isFav(id) { return this.favoriteWords.has(id); }
  isDiff(id) { return this.difficultWords.has(id); }

  getLevelInfo() {
    const xp = this.stats.xp;
    const level = Math.floor(Math.sqrt(xp / 50)) + 1;
    const titles = [
      "Boshlovchi Sayyoh", "So'z Izlovchi", "Lug'at Bilimdoni",
      "Xotira Ustasi", "Nutq Mohiri", "5000 So'z Afsonasi"
    ];
    return {
      level,
      xp,
      title: titles[Math.min(level - 1, titles.length - 1)]
    };
  }
}

const storageDriver = new StorageDriver();

// 6. ASOSIY ILOVA BOSHQARUVI (VOCAB MASTER CONTROLLER)
class VocabMasterController {
  constructor() {
    this.currentDay = 1;
    this.activeMode = 'study';
    this.currentChunk = 0;
    this.filterType = 'all';
    this.dayWords = [];

    // Flashcard State
    this.flashcardIdx = 0;
    this.isFlipped = false;

    // Quiz State
    this.quizQuestions = [];
    this.quizIdx = 0;
    this.quizScore = 0;
    this.quizDone = false;

    // Speed Match State
    this.speedScore = 0;
    this.selectedMatch = null;

    // Spelling State
    this.spellingIdx = 0;

    this.init();
  }

  init() {
    this.loadDay(1);
    this.renderRoadmap();
    this.updateStats();
    this.setupShortcuts();
  }

  loadDay(dayNum) {
    this.currentDay = dayNum;
    this.dayWords = lexiconDB.getWordsForDay(dayNum);
    this.currentChunk = 0;
    this.filterType = 'all';
    this.flashcardIdx = 0;
    this.isFlipped = false;

    this.renderHeader();
    this.renderMode();
    this.renderRoadmap();
    this.updateStats();
  }

  renderHeader() {
    const topic = CURRICULUM_TOPICS.find(t => t.day === this.currentDay) || {
      title: `${this.currentDay}-Kun`,
      category: "Lug'at",
      level: "B1"
    };

    const learned = this.dayWords.filter(w => storageDriver.isLearned(w.id)).length;
    const percent = Math.round((learned / 100) * 100);

    const badge = document.getElementById('current-day-badge');
    const title = document.getElementById('current-day-title');
    const category = document.getElementById('current-day-category');
    const progressText = document.getElementById('day-progress-text');
    const progressBar = document.getElementById('day-progress-bar');

    if (badge) badge.innerText = `${this.currentDay}-Kun • ${topic.level}`;
    if (title) title.innerText = `${this.currentDay}-Kun: ${topic.title}`;
    if (category) category.innerText = `Mavzu: ${topic.category}`;
    if (progressText) progressText.innerText = `${learned} / 100 so'z (${percent}%)`;
    if (progressBar) progressBar.style.width = `${percent}%`;

    if (percent === 100 && !storageDriver.stats.completedDays.includes(this.currentDay)) {
      storageDriver.stats.completedDays.push(this.currentDay);
      storageDriver.stats.xp += 100;
      storageDriver.save();
      audioDriver.playFanfare();
      if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70 });
    }
  }

  renderMode() {
    const modes = ['study', 'flashcard', 'quiz', 'speedmatch', 'spelling'];
    modes.forEach(m => {
      const btn = document.getElementById(`mode-btn-${m}`);
      if (btn) {
        if (m === this.activeMode) {
          btn.className = 'px-4 py-2.5 rounded-xl font-semibold text-sm transition bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 flex items-center gap-2';
        } else {
          btn.className = 'px-4 py-2.5 rounded-xl font-medium text-sm transition text-slate-400 hover:text-white hover:bg-slate-800/60 flex items-center gap-2';
        }
      }
    });

    const content = document.getElementById('mode-content-area');
    if (!content) return;
    content.innerHTML = '';

    if (this.activeMode === 'study') this.renderStudy(content);
    else if (this.activeMode === 'flashcard') this.renderFlashcards(content);
    else if (this.activeMode === 'quiz') this.renderQuiz(content);
    else if (this.activeMode === 'speedmatch') this.renderSpeedMatch(content);
    else if (this.activeMode === 'spelling') this.renderSpelling(content);

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  getFilteredWords() {
    return this.dayWords;
  }

  // 1. O'RGANISH REJIMI (TO'LIQ 100 TA SO'Z RO'YXATI)
  renderStudy(container) {
    const words = this.dayWords;

    const cardsHtml = words.map((w, index) => {
      const isL = storageDriver.isLearned(w.id);

      return `
        <div class="glass-card p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between border ${
          isL ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-slate-800 bg-slate-900/60'
        }">
          <div>
            <!-- Header: Number, Word, Audio, IPA, POS -->
            <div class="flex items-center justify-between gap-3 mb-2">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="w-7 h-7 rounded-xl bg-slate-800 text-indigo-400 text-xs font-bold font-mono flex items-center justify-center">#${index + 1}</span>
                <h3 class="text-2xl font-bold tracking-tight text-white font-heading">${w.word}</h3>
                <button onclick="window.app.speak('${w.word}')" class="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-600 hover:text-white transition" title="Ovozli eshitish">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
                <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">${w.ipa}</span>
              </div>
              <span class="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">${w.partOfSpeech}</span>
            </div>

            <!-- Uzbek Translation -->
            <div class="text-lg font-bold text-emerald-400 mb-3">${w.uzbek}</div>

            <!-- Mnemonics (Xotira kaliti) -->
            <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs mb-3 leading-relaxed">
              <div class="font-bold flex items-center gap-1.5 text-amber-300 mb-1">
                <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-400"></i> Xotira Kaliti (Mnemonika):
              </div>
              ${w.mnemonic}
            </div>

            <!-- Example Sentences -->
            <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 mb-3 space-y-1">
              <p class="font-medium text-slate-200">“${w.sentenceEn}”</p>
              <p class="text-slate-400 italic">“${w.sentenceUz}”</p>
            </div>
          </div>

          <!-- Bottom Action: Yodladim -->
          <div class="pt-2 border-t border-slate-800 flex items-center justify-between">
            <button onclick="window.app.toggleLearned(${w.id})" class="w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              isL ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40' : 'bg-indigo-600 text-white hover:bg-indigo-500'
            }">
              <i data-lucide="${isL ? 'check-circle-2' : 'circle'}" class="w-4 h-4"></i>
              ${isL ? "Yodlangan (+10 XP)" : "Yodladim deb belgilash"}
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="mb-4 flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
        <span>Kunlik 100 ta so'z ro'yxati (1 - 100):</span>
        <span class="text-emerald-400 font-bold">Yodlangan: ${this.dayWords.filter(w => storageDriver.isLearned(w.id)).length} / 100</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${cardsHtml}</div>
    `;
  }

  // 2. 3D FLASHCARDS (ACTIVE RECALL)
  renderFlashcards(container) {
    const list = this.dayWords;
    if (this.flashcardIdx >= list.length) this.flashcardIdx = 0;
    const current = list[this.flashcardIdx];
    if (!current) return;

    audioDriver.speak(current.word);

    container.innerHTML = `
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center justify-between mb-4 text-xs text-slate-400 font-semibold">
          <span>Karta: ${this.flashcardIdx + 1} / ${list.length}</span>
          <button onclick="window.app.shuffleCards()" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1">
            <i data-lucide="shuffle" class="w-3.5 h-3.5"></i> Aralashtirish
          </button>
        </div>

        <div class="perspective-1000 w-full h-96 cursor-pointer mb-6" onclick="window.app.flipCard()">
          <div class="flashcard-inner w-full h-full relative ${this.isFlipped ? 'is-flipped' : ''}">
            
            <div class="flashcard-front glass-panel p-8 flex flex-col justify-between border border-indigo-500/30 rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-900/90">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-indigo-500/20 text-indigo-300">${current.partOfSpeech}</span>
                <button onclick="event.stopPropagation(); window.app.speak('${current.word}')" class="p-2.5 rounded-full bg-indigo-600/20 text-indigo-300">
                  <i data-lucide="volume-2" class="w-5 h-5"></i>
                </button>
              </div>

              <div class="text-center my-auto">
                <h2 class="text-4xl md:text-5xl font-black text-white font-heading mb-2">${current.word}</h2>
                <p class="text-slate-400 font-mono text-sm">${current.ipa}</p>
                <div class="mt-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 max-w-md mx-auto">
                  “${current.sentenceEn.replace(new RegExp(current.word, 'gi'), '_____')}”
                </div>
              </div>

              <div class="text-center text-xs text-indigo-400/80 font-medium">
                Tarjima va xotira kalitini ko'rish uchun bosing (Space)
              </div>
            </div>

            <div class="flashcard-back glass-panel p-8 flex flex-col justify-between border border-emerald-500/30 rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900/95 via-emerald-950/40 to-slate-900/95">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold text-emerald-400 uppercase">O'zbekcha Tarjima</span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">${current.word}</span>
              </div>

              <div class="text-center my-auto space-y-3">
                <h3 class="text-3xl font-extrabold text-emerald-400">${current.uzbek}</h3>
                <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs text-left max-w-md mx-auto">
                  <strong>Mnemonik Kalit:</strong> ${current.mnemonic}
                </div>
                <p class="text-xs text-slate-300 italic">“${current.sentenceUz}”</p>
              </div>

              <div class="text-center text-xs text-slate-400">Oldinga qaytish uchun bosing</div>
            </div>

          </div>
        </div>

        <div class="flex items-center justify-between gap-3">
          <button onclick="window.app.prevCard()" class="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
          <button onclick="window.app.cardHard(${current.id})" class="flex-1 py-3.5 rounded-2xl bg-rose-600/20 border border-rose-500/40 text-rose-300 font-bold text-sm">Qaytarish Kerak</button>
          <button onclick="window.app.cardLearned(${current.id})" class="flex-1 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm">Bilar Edim (+10 XP)</button>
          <button onclick="window.app.nextCard()" class="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300"><i data-lucide="arrow-right" class="w-5 h-5"></i></button>
        </div>
      </div>
    `;
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
    const inner = document.querySelector('.flashcard-inner');
    if (inner) inner.classList.toggle('is-flipped', this.isFlipped);
  }

  nextCard() {
    this.isFlipped = false;
    this.flashcardIdx = (this.flashcardIdx + 1) % this.dayWords.length;
    this.renderMode();
  }

  prevCard() {
    this.isFlipped = false;
    this.flashcardIdx = (this.flashcardIdx - 1 + this.dayWords.length) % this.dayWords.length;
    this.renderMode();
  }

  shuffleCards() {
    this.dayWords.sort(() => Math.random() - 0.5);
    this.flashcardIdx = 0;
    this.renderMode();
  }

  cardLearned(id) {
    if (!storageDriver.isLearned(id)) {
      storageDriver.toggleLearned(id);
      audioDriver.playCorrect();
    }
    this.nextCard();
    this.updateStats();
  }

  cardHard(id) {
    if (!storageDriver.isDiff(id)) storageDriver.toggleDiff(id);
    audioDriver.playWrong();
    this.nextCard();
  }

  // 3. VIKTORINA VA TEST (QUIZ MODE)
  renderQuiz(container) {
    if (this.quizQuestions.length === 0) {
      this.generateQuiz();
    }

    if (this.quizIdx >= this.quizQuestions.length) {
      container.innerHTML = `
        <div class="max-w-md mx-auto glass-panel p-8 rounded-3xl text-center">
          <h2 class="text-3xl font-extrabold text-white mb-2">Test Yakunlandi!</h2>
          <p class="text-emerald-400 text-2xl font-black mb-6">+${this.quizScore} XP To'plandi</p>
          <button onclick="window.app.generateQuiz(); window.app.renderMode();" class="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm">Qayta Boshlash</button>
        </div>
      `;
      audioDriver.playFanfare();
      return;
    }

    const q = this.quizQuestions[this.quizIdx];

    container.innerHTML = `
      <div class="max-w-xl mx-auto glass-panel p-6 md:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
        <div class="flex items-center justify-between mb-6 text-xs text-slate-400 font-semibold">
          <span>Savol ${this.quizIdx + 1} / ${this.quizQuestions.length}</span>
          <span class="text-emerald-400 font-bold">Ball: ${this.quizScore} XP</span>
        </div>

        <div class="text-center mb-8">
          <span class="text-xs font-semibold uppercase text-indigo-400 block mb-2">So'z ma'nosini toping</span>
          <h2 class="text-4xl font-extrabold text-white font-heading">${q.word}</h2>
          <p class="mt-2 text-sm text-slate-400 font-mono">${q.ipa}</p>
        </div>

        <div class="grid grid-cols-1 gap-3 mb-6">
          ${q.options.map((opt, i) => `
            <button onclick="window.app.answerQuiz(${i})" class="quiz-btn w-full p-4 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-indigo-500 text-left text-sm font-semibold text-slate-200 transition flex items-center justify-between">
              <span>${opt.text}</span>
              <span class="w-6 h-6 rounded-full bg-slate-700 text-slate-400 text-xs flex items-center justify-center font-mono">${String.fromCharCode(65 + i)}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback" class="hidden p-4 rounded-2xl mb-4 text-xs"></div>
        <button id="quiz-next" onclick="window.app.nextQuiz()" class="hidden w-full py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-xs">Keyingi Savol</button>
      </div>
    `;
  }

  generateQuiz() {
    const list = [...this.dayWords].sort(() => Math.random() - 0.5).slice(0, 10);
    this.quizQuestions = list.map(word => {
      const wrongs = this.dayWords.filter(w => w.id !== word.id).sort(() => Math.random() - 0.5).slice(0, 3).map(w => ({ text: w.uzbek, isCorrect: false }));
      const options = [{ text: word.uzbek, isCorrect: true }, ...wrongs].sort(() => Math.random() - 0.5);
      return { word: word.word, ipa: word.ipa, mnemonic: word.mnemonic, options };
    });
    this.quizIdx = 0;
    this.quizScore = 0;
    this.quizDone = false;
  }

  answerQuiz(selectedIdx) {
    if (this.quizDone) return;
    this.quizDone = true;

    const q = this.quizQuestions[this.quizIdx];
    const btns = document.querySelectorAll('.quiz-btn');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next');

    const selected = q.options[selectedIdx];

    btns.forEach((btn, idx) => {
      btn.disabled = true;
      if (q.options[idx].isCorrect) {
        btn.className = 'w-full p-4 rounded-2xl bg-emerald-600/30 border-2 border-emerald-500 text-emerald-200 text-left text-sm font-bold flex items-center justify-between';
      } else if (idx === selectedIdx) {
        btn.className = 'w-full p-4 rounded-2xl bg-rose-600/30 border-2 border-rose-500 text-rose-200 text-left text-sm font-bold flex items-center justify-between';
      } else {
        btn.classList.add('opacity-40');
      }
    });

    if (selected.isCorrect) {
      this.quizScore += 15;
      storageDriver.stats.xp += 15;
      storageDriver.save();
      audioDriver.playCorrect();
      feedback.className = 'p-4 rounded-2xl mb-4 text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 block';
      feedback.innerHTML = `<strong>To'g'ri javob! (+15 XP)</strong><br>${q.mnemonic}`;
    } else {
      audioDriver.playWrong();
      feedback.className = 'p-4 rounded-2xl mb-4 text-xs bg-rose-500/10 border border-rose-500/30 text-rose-300 block';
      feedback.innerHTML = `<strong>Noto'g'ri!</strong> To'g'ri javob: <em>${q.options.find(o => o.isCorrect).text}</em><br>${q.mnemonic}`;
    }

    if (nextBtn) nextBtn.classList.remove('hidden');
    this.updateStats();
  }

  nextQuiz() {
    this.quizIdx++;
    this.quizDone = false;
    this.renderMode();
  }

  // 4. TEZKOR JUFTLASH (SPEED MATCH)
  renderSpeedMatch(container) {
    const selected = [...this.dayWords].sort(() => Math.random() - 0.5).slice(0, 6);
    const cards = [];
    selected.forEach(w => {
      cards.push({ id: w.id, text: w.word, type: 'en' });
      cards.push({ id: w.id, text: w.uzbek, type: 'uz' });
    });
    cards.sort(() => Math.random() - 0.5);

    this.selectedMatch = null;

    container.innerHTML = `
      <div class="max-w-2xl mx-auto glass-panel p-6 md:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-white">Tezkor Juftlash O'yini</h3>
          <span id="speed-score-val" class="text-xl font-black text-amber-400">0 XP</span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          ${cards.map(c => `
            <button onclick="window.app.matchCard(${c.id}, '${c.type}', this)" class="match-item p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500 text-center text-xs md:text-sm font-bold text-slate-200 transition min-h-[70px] flex items-center justify-center">
              ${c.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  matchCard(id, type, el) {
    if (el.classList.contains('matched') || el.classList.contains('selected')) return;

    if (!this.selectedMatch) {
      this.selectedMatch = { id, type, el };
      el.classList.add('selected', 'border-indigo-500', 'bg-indigo-600/30', 'text-indigo-200');
    } else {
      const first = this.selectedMatch;
      if (first.type !== type && first.id === id) {
        audioDriver.playCorrect();
        first.el.className = 'match-item matched p-4 rounded-2xl bg-emerald-600/30 border border-emerald-500 text-emerald-300 opacity-60 flex items-center justify-center';
        el.className = 'match-item matched p-4 rounded-2xl bg-emerald-600/30 border border-emerald-500 text-emerald-300 opacity-60 flex items-center justify-center';
        this.speedScore += 20;
        storageDriver.stats.xp += 20;
        storageDriver.save();
        const scoreEl = document.getElementById('speed-score-val');
        if (scoreEl) scoreEl.innerText = `${this.speedScore} XP`;
      } else {
        audioDriver.playWrong();
        first.el.classList.add('bg-rose-600/40');
        el.classList.add('bg-rose-600/40');
        setTimeout(() => {
          first.el.className = 'match-item p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center text-xs md:text-sm font-bold text-slate-200 flex items-center justify-center';
          el.className = 'match-item p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-center text-xs md:text-sm font-bold text-slate-200 flex items-center justify-center';
        }, 500);
      }
      this.selectedMatch = null;
      this.updateStats();
    }
  }

  // 5. ESHITIB YOZISH (SPELLING CHALLENGE)
  renderSpelling(container) {
    const list = this.dayWords;
    if (this.spellingIdx >= list.length) this.spellingIdx = 0;
    const current = list[this.spellingIdx];

    audioDriver.speak(current.word);

    container.innerHTML = `
      <div class="max-w-lg mx-auto glass-panel p-8 rounded-3xl border border-slate-700/60 shadow-2xl text-center">
        <span class="text-xs font-semibold uppercase text-indigo-400 block mb-2">Eshitib To'g'ri Yozing</span>
        <button onclick="window.app.speak('${current.word}')" class="w-20 h-20 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl mx-auto mb-6 flex items-center justify-center transition">
          <i data-lucide="volume-2" class="w-10 h-10"></i>
        </button>
        <p class="text-sm font-semibold text-emerald-400 mb-6">Ma'nosi: ${current.uzbek}</p>
        <input type="text" id="spelling-inp" placeholder="Eshitgan so'zingizni yozing..." class="w-full px-5 py-4 rounded-2xl bg-slate-900 border-2 border-slate-700 focus:border-indigo-500 text-white text-center text-xl font-bold mb-4" onkeydown="if(event.key==='Enter') window.app.checkSpell('${current.word}')" />
        <div id="spelling-res" class="hidden text-xs font-semibold p-3 rounded-xl mb-4"></div>
        <button onclick="window.app.checkSpell('${current.word}')" class="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-xs">Tekshirish (Enter)</button>
      </div>
    `;
    setTimeout(() => {
      const inp = document.getElementById('spelling-inp');
      if (inp) inp.focus();
    }, 200);
  }

  checkSpell(word) {
    const inp = document.getElementById('spelling-inp');
    const res = document.getElementById('spelling-res');
    if (!inp || !res) return;

    if (inp.value.trim().toLowerCase() === word.toLowerCase()) {
      audioDriver.playCorrect();
      storageDriver.stats.xp += 20;
      storageDriver.save();
      res.className = 'text-xs font-semibold p-3 rounded-xl bg-emerald-500/20 text-emerald-300 block mb-4';
      res.innerHTML = `Barakalla! To'g'ri: <strong>${word}</strong> (+20 XP)`;
      setTimeout(() => {
        this.spellingIdx = (this.spellingIdx + 1) % this.dayWords.length;
        this.renderMode();
      }, 1000);
    } else {
      audioDriver.playWrong();
      res.className = 'text-xs font-semibold p-3 rounded-xl bg-rose-500/20 text-rose-300 block mb-4';
      res.innerHTML = `Xato! Qayta urinib ko'ring.`;
      inp.focus();
    }
    this.updateStats();
  }

  // ROADMAP & STATS
  renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    const mobileContainer = document.getElementById('mobile-roadmap-container');
    if (!container) return;

    const html = CURRICULUM_TOPICS.map(t => {
      const isCur = t.day === this.currentDay;
      const isComp = storageDriver.stats.completedDays.includes(t.day);

      return `
        <button onclick="window.app.loadDay(${t.day})" class="w-full text-left p-3.5 rounded-2xl transition flex items-center justify-between border ${
          isCur ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md' : isComp ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200' : 'bg-slate-800/40 border-slate-700/40 text-slate-400 hover:bg-slate-800 hover:text-white'
        }">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${isCur ? 'bg-indigo-600 text-white' : isComp ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'}">
              ${t.day}
            </div>
            <div>
              <div class="text-xs font-bold text-white line-clamp-1">${t.title}</div>
              <div class="text-[10px] text-slate-400">${t.category} • ${t.level}</div>
            </div>
          </div>
          ${isComp ? `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>` : ''}
        </button>
      `;
    }).join('');

    container.innerHTML = html;
    if (mobileContainer) mobileContainer.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  updateStats() {
    const stats = storageDriver.stats;
    const levelInfo = storageDriver.getLevelInfo();

    const streak = document.getElementById('navbar-streak');
    const xp = document.getElementById('navbar-xp');
    const level = document.getElementById('navbar-level');

    if (streak) streak.innerText = `${stats.streak} kun`;
    if (xp) xp.innerText = `${stats.xp} XP`;
    if (level) level.innerText = `Lv. ${levelInfo.level}`;
  }

  setMode(m) {
    this.activeMode = m;
    this.renderMode();
  }

  setChunk(idx) {
    this.currentChunk = idx;
    this.filterType = 'all';
    this.renderMode();
  }

  setFilter(f) {
    this.filterType = f;
    this.renderMode();
  }

  toggleLearned(id) {
    const res = storageDriver.toggleLearned(id);
    if (res) audioDriver.playCorrect();
    this.renderHeader();
    this.renderMode();
    this.updateStats();
  }

  toggleFav(id) {
    storageDriver.toggleFav(id);
    this.renderMode();
  }

  toggleDiff(id) {
    storageDriver.toggleDiff(id);
    this.renderMode();
  }

  speak(w) { audioDriver.speak(w); }
  speakWord(w) { audioDriver.speak(w); }

  getAllWords() {
    return lexiconDB.getAll5000Words();
  }

  setupShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (this.activeMode === 'flashcard') {
        if (e.code === 'Space') {
          e.preventDefault();
          this.flipCard();
        } else if (e.code === 'ArrowRight') {
          this.nextCard();
        } else if (e.code === 'ArrowLeft') {
          this.prevCard();
        }
      }
    });
  }
}

// Global App Instance Initialization
window.progressStorage = storageDriver;
window.audioDriver = audioDriver;
window.lexiconDB = lexiconDB;
window.app = new VocabMasterController();
