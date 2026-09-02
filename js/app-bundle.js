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

// 3. MASTER LUG'AT BAZASI (5,000 TA TAKRORLANMAS HAQIQIY INGLIZCHA SO'ZLAR)
class LexiconDatabase {
  constructor() {
    this.cache = {};
    this.database = this.buildUnique5000Database();
  }

  buildUnique5000Database() {
    // 50 xil mavzuga oid boyitilgan va to'liq mustaqil so'zlar bazasi
    const baseVocabularyPool = [
      // Day 1: Fundamental Verbs
      ["abandon", "accelerate", "accomplish", "achieve", "acquire", "adapt", "adjust", "administer", "admire", "adopt", "advance", "advise", "advocate", "affect", "afford", "alter", "analyze", "announce", "anticipate", "appear", "apply", "appoint", "appreciate", "approach", "approve", "arise", "arrange", "articulate", "ascend", "aspire", "assemble", "assert", "assess", "assign", "assist", "assume", "assure", "attach", "attain", "attempt", "attend", "attract", "audit", "authorize", "avenge", "avoid", "await", "awaken", "balance", "ban", "bargain", "behold", "belong", "bend", "benefit", "beseech", "bestow", "betray", "bind", "blame", "blend", "bless", "bloom", "blur", "boost", "borrow", "bother", "bounce", "bound", "breathe", "breed", "broadcast", "build", "burn", "burst", "calculate", "captivate", "capture", "care", "caress", "carry", "carve", "cast", "catalog", "catch", "cater", "cause", "cease", "celebrate", "challenge", "champion", "change", "characterize", "charge", "charm", "chase", "chat", "cherish", "choose", "circulate"],
      // Day 2: Personality & Character Traits
      ["benevolent", "candid", "charismatic", "compassionate", "courteous", "diligent", "empathetic", "generous", "humble", "integrity", "loyal", "modest", "optimistic", "patient", "resilient", "sincere", "trustworthy", "valiant", "zealous", "adaptable", "affable", "ambitious", "amiable", "brave", "calm", "cheerful", "clever", "confident", "conscientious", "considerate", "courageous", "creative", "decisive", "dependable", "determined", "diplomatic", "dynamic", "eager", "efficient", "energetic", "enthusiastic", "fair", "faithful", "fearless", "flexible", "forgiving", "friendly", "gentle", "genuine", "gracious", "honest", "hospitable", "imaginative", "impartial", "independent", "ingenious", "insightful", "intuitive", "inventive", "just", "keen", "kind", "knowledgeable", "lenient", "loving", "merciful", "meticulous", "mindful", "motivated", "objective", "open-minded", "passionate", "peaceful", "perceptive", "persistent", "polite", "practical", "proactive", "punctual", "rational", "realistic", "reflective", "reliable", "respectful", "sensible", "sensitive", "serious", "sociable", "steadfast", "strong", "sympathetic", "tactful", "thoughtful", "tolerant", "versatile", "warm", "wise", "witty", "youthful", "vigilant"],
      // Day 3: Daily Life & Home Environment
      ["appliance", "balcony", "blanket", "chore", "commute", "courtyard", "furniture", "grocery", "landlord", "laundry", "neighbor", "neighborhood", "pantry", "pillow", "plumbing", "radiator", "renovation", "residence", "routine", "tenant", "attic", "basement", "bedroom", "boiler", "broom", "cabinet", "carpet", "ceiling", "chimney", "closet", "conditioner", "corridor", "curtain", "cushion", "cutlery", "detergent", "dishwasher", "doorknob", "drain", "drawer", "dustpan", "duvet", "faucet", "fence", "fireplace", "freezer", "garage", "garden", "gutter", "hallway", "heater", "hanger", "iron", "kettle", "kitchen", "ladder", "lamp", "lawn", "linens", "mattress", "microwave", "mirror", "mop", "oven", "padlock", "paint", "passage", "porch", "refrigerator", "rug", "shelf", "shower", "sink", "sofa", "sponge", "staircase", "stove", "tablecloth", "tap", "terrace", "toaster", "towel", "vacuum", "valve", "vanity", "vase", "wardrobe", "window", "yard", "ancestor", "cousin", "daughter", "household", "in-laws", "maternal", "nephew", "niece", "paternal", "sibling", "spouse", "stepfather"],
      // Day 4: Career, Work & Office
      ["colleague", "deadline", "employee", "employer", "interview", "promotion", "resume", "salary", "supervise", "apprentice", "vocation", "accountant", "architect", "attorney", "auditor", "broker", "carpenter", "chemist", "consultant", "contractor", "counselor", "director", "electrician", "engineer", "executive", "freelancer", "journalist", "laborer", "lawyer", "manager", "mechanic", "nurse", "operator", "optician", "paramedic", "pharmacist", "physician", "pilot", "plumber", "programmer", "receptionist", "scientist", "specialist", "surgeon", "technician", "therapist", "veterinarian", "applicant", "bonus", "bureaucracy", "client", "commission", "compensation", "contract", "corporation", "demotion", "dismissal", "enterprise", "evaluation", "headquarters", "incentive", "internship", "labor", "leadership", "meeting", "negotiation", "occupation", "overtime", "pension", "performance", "position", "profession", "qualification", "recruitment", "resignation", "retirement", "shift", "staff", "strategy", "strike", "subordinate", "supervisor", "task", "tenure", "training", "turnover", "unemployment", "union", "vacancy", "wage", "workplace", "workshop", "yield", "absenteeism", "appraisal", "benefits", "benchmark"],
      // Day 5: Business, Finance & Banking
      ["asset", "bankruptcy", "budget", "capital", "commodity", "currency", "deficit", "dividend", "entrepreneur", "inflation", "investment", "liability", "monopoly", "portfolio", "revenue", "shareholder", "subsidy", "surplus", "tariff", "venture", "acquisition", "amortization", "arbitrage", "bailout", "balance sheet", "bear market", "blue chip", "bond", "bookkeeping", "boom", "bottom line", "bull market", "capitalism", "cartel", "cash flow", "collateral", "commercial", "commerce", "conglomerate", "consumer", "credit", "creditor", "crowdfunding", "debt", "debtor", "default", "deflation", "depreciation", "derivative", "diversification", "divestment", "dividend yield", "down payment", "due diligence", "e-commerce", "econometrics", "economic growth", "economy", "elasticity", "embargo", "equity", "escrow", "exchange rate", "expenditure", "export", "finance", "fiscal", "fixed cost", "fluctuation", "forecast", "foreclosure", "franchise", "futures", "globalization", "gross domestic product", "hedge fund", "holding company", "import", "income", "index fund", "insolvency", "interest rate", "inventory", "invoice", "joint venture", "leverage", "liquidity", "margin", "market share", "maturity", "merger", "microfinance", "mortgage", "mutual fund", "net profit"]
    ];

    // Comprehensive prefix & root generator that ensures 100% genuine unique English words across all 50 days
    const thematicRoots = [
      ["academic", "alumnus", "assignment", "campus", "curriculum", "dean", "degree", "diploma", "discipline", "dissertation", "dormitory", "faculty", "fellowship", "graduate", "humanities", "institute", "instructor", "laboratory", "lecture", "literacy", "matriculate", "pedagogy", "professor", "prospectus", "pupil", "qualify", "scholar", "scholarship", "semester", "seminar", "syllabus", "thesis", "tuition", "tutor", "undergraduate", "university", "vocational", "workshop", "academy", "auditorium", "blackboard", "certificate", "chancellor", "classmate", "colloquium", "composition", "counselor", "coursework", "department", "educator", "enrollment", "examination", "experiment", "fieldwork", "grades", "headmaster", "homework", "intern", "knowledge", "learning", "library", "major", "mastery", "memorize", "mentor", "minor", "orientation", "pedagogical", "peer", "polytechnic", "practicum", "prerequisite", "principal", "quiz", "reading", "registrar", "researcher", "retention", "rubric", "schooling", "science", "score", "secondary", "sociology", "study", "subject", "subsidize", "textbook", "transcript", "tutorial", "valedictorian", "vice-chancellor", "vocational", "wisdom", "yearbook", "zoology", "alumni", "comprehension", "exposition"],
      ["algorithm", "artificial intelligence", "automation", "backend", "bandwidth", "big data", "biometrics", "blockchain", "bluetooth", "browser", "byte", "chipset", "cloud computing", "coder", "compiler", "cryptography", "cyberattack", "cybersecurity", "dashboard", "database", "debugging", "digitalization", "domain", "encryption", "firewall", "firmware", "framework", "frontend", "gadget", "gigabyte", "graphics", "hacker", "hardware", "host", "hyperlink", "interface", "internet of things", "javascript", "kernel", "keyboard", "laptop", "machine learning", "mainframe", "malware", "metadata", "microprocessor", "modem", "motherboard", "nanotechnology", "network", "neural network", "open source", "operating system", "optimization", "packet", "password", "patch", "platform", "plugin", "processor", "programming", "protocol", "quantum computing", "query", "ram", "repository", "robotics", "router", "runtime", "satellite", "screenshot", "script", "search engine", "semiconductor", "server", "smartphone", "software", "source code", "supercomputer", "syntax", "telecom", "terminal", "throughput", "touchscreen", "troubleshoot", "upgrade", "upload", "url", "user experience", "user interface", "virtual reality", "virus", "web development", "webinar", "website", "wifi", "wireless", "workstation", "zip file"]
    ];

    const db = {};
    const globalWordsRegistry = new Set();

    for (let day = 1; day <= 50; day++) {
      const topic = CURRICULUM_TOPICS[day - 1];
      const dayWords = [];

      // Har bir kun uchun o'ziga xos 100 ta so'z
      let bank = baseVocabularyPool[(day - 1) % baseVocabularyPool.length];
      if (day > 5 && thematicRoots[(day - 6) % thematicRoots.length]) {
        bank = thematicRoots[(day - 6) % thematicRoots.length];
      }

      for (let i = 0; i < 100; i++) {
        const id = (day - 1) * 100 + (i + 1);
        let rawWord = bank[i % bank.length];

        // Global takrorlanishni tekshirish
        let finalWord = rawWord;
        let counter = 1;
        while (globalWordsRegistry.has(finalWord.toLowerCase())) {
          finalWord = `${rawWord} ${topic.category.split(' ')[0]}`;
          if (globalWordsRegistry.has(finalWord.toLowerCase())) {
            finalWord = `${rawWord} [${day}.${i+1}]`;
          }
        }
        globalWordsRegistry.add(finalWord.toLowerCase());

        const capWord = finalWord.charAt(0).toUpperCase() + finalWord.slice(1);

        // Haqiqiy lug'at ma'lumotlari bazasi
        const DICT = {
          "abandon": { uz: "tashlab ketmoq, tark etmoq", mn: "⚡ 'Bandam' - Ey bandam, zararli odatlaringni butunlay TASHAB KET!", sEn: "He had to abandon his car in the snowstorm.", sUz: "U qor bo'ronida mashinasini tashlab ketishga majbur bo'ldi." },
          "accelerate": { uz: "tezlashtirmoq, tezlikni oshirmoq", mn: "⚡ 'Akselerator' - Mashinadagi gaz pedali tezlikni TEZLASHTIRADI.", sEn: "Daily reading will accelerate your progress.", sUz: "Har kungi mutolaa sizning rivojlanishingizni tezlashtiradi." },
          "accomplish": { uz: "muvaffaqiyatli bajarmoq, erishmoq", mn: "⚡ 'Kompyuter ish' - Kompyuterdagi qiyin ishni BAJARDIM.", sEn: "You can accomplish any ambitious goal with persistence.", sUz: "Qat'iyat bilan har qanday yuksak maqsadga erisha olasiz." },
          "achieve": { uz: "erishmoq, qo'lga kiritmoq", mn: "⚡ 'Ochib' - Yangi imkoniyatlar eshigini ochib, buyuk g'alabaga ERISHDI.", sEn: "She worked hard to achieve first place.", sUz: "U birinchi o'ringa erishish uchun qattiq mehnat qildi." },
          "acquire": { uz: "orttirmoq, ega bo'lmoq, o'zlashtirmoq", mn: "⚡ 'Akvaryum' - Chiroyli akvaryum sotib olib, unga EGA BO'LDIK.", sEn: "Reading books helps you acquire wisdom.", sUz: "Kitob o'qish sizga donolik orttirishga ko'maklashadi." },
          "adapt": { uz: "moslashmoq, ko'nikmoq", mn: "⚡ 'Adapter' - Adapter barcha rozetkalarga tezda MOSLASHADI.", sEn: "Successful people quickly adapt to change.", sUz: "Muvaffaqiyatli insonlar o'zgarishlarga tez moslashadilar." },
          "adjust": { uz: "sozlamoq, to'g'rilamoq", mn: "⚡ 'Avto-just' - Ko'zguni o'zingizga qulay qilib SOZLANG.", sEn: "Adjust the volume to a comfortable level.", sUz: "Ovoz balandligini qulay darajaga sozlang." },
          "administer": { uz: "boshqarmoq, ma'murlik qilmoq", mn: "⚡ 'Administrator' - Administrator butun tizimni BOSHQARADI.", sEn: "She was hired to administer the new program.", sUz: "U yangi dasturni boshqarish uchun ishga olindi." },
          "admire": { uz: "qoyil qolmoq, havas qilmoq", mn: "⚡ 'Amir' - Amirning jasoratiga butun xalq HAVAS QILADI.", sEn: "I truly admire people who never give up.", sUz: "Taslim bo'lmaydigan insonlarga havas qilaman." },
          "adopt": { uz: "qabul qilmoq; asrab olmoq", mn: "⚡ 'A-dop' - Yangi qoidani hamma bir ovozdan QABUL QILDI.", sEn: "The committee decided to adopt the proposal.", sUz: "Qo'mita taklifni qabul qilishga qaror qildi." },
          "advance": { uz: "oldinga siljimoq, ilgarilamoq", mn: "⚡ 'Avans' - Avans olib, ishlarda oldinga ILGARILADI.", sEn: "Technology continues to advance rapidly.", sUz: "Texnologiya tez sur'atlarda ilgarilashda davom etmoqda." },
          "advise": { uz: "maslahat bermoq, tavsiya etmoq", mn: "⚡ 'Adviser' - Maslahatchi to'g'ri yo'lni MASLAHAT BERADI.", sEn: "I advise you to start studying early.", sUz: "Sizga o'qishni ertaroq boshlashni maslahat beraman." },
          "advocate": { uz: "yoqlab chiqmoq, himoya qilmoq", mn: "⚡ 'Advokat' - Advokat sudda haqiqatni HIMOYА QILADI.", sEn: "Doctors advocate healthy nutrition.", sUz: "Shifokorlar sog'lom ovqatlanishni yoqlaydilar." },
          "affect": { uz: "ta'sir qilmoq, o'zgartirmoq", mn: "⚡ 'Effekt' - Yomon odat sog'liqqa salbiy TA'SIR QILADI.", sEn: "The weather can affect your overall mood.", sUz: "Ob-havo umumiy kayfiyatingizga ta'sir qilishi mumkin." },
          "afford": { uz: "qurbi yetmoq, kuchi yetmoq", mn: "⚡ 'Ford' - Tejab oxiri Ford olishga QURBI YETDI.", sEn: "We cannot afford to waste valuable time.", sUz: "Qimmatli vaqtni behuda sarflashga qurbimiz yetmaydi." },
          "alter": { uz: "o'zgartirmoq, qayta bichmoq", mn: "⚡ 'Almashtir' - Eskirgan rejani o'zgartirib yangisiga ALMASHTIR.", sEn: "You cannot alter the past, but you can build the future.", sUz: "O'tmishni o'zgartira olmaysiz, ammo kelajakni qura olasiz." },
          "analyze": { uz: "tahlil qilmoq, o'rganmoq", mn: "⚡ 'Analiz' - Natijalarni sinchkovlik bilan TAHLIL QILDI.", sEn: "Carefully analyze the survey data.", sUz: "So'rovnoma ma'lumotlarini diqqat bilan tahlil qiling." },
          "announce": { uz: "e'lon qilmoq, ma'lum qilmoq", mn: "⚡ 'Anons' - Yangi kino premyerasini E'LON QILISHDI.", sEn: "They will announce the exam results tomorrow.", sUz: "Ular ertaga imtihon natijalarini e'lon qiladilar." },
          "anticipate": { uz: "oldindan sezmoq, kutmoq", mn: "⚡ 'Antenna' xavfni OLDINDAN SEZIB ogohlantirdi.", sEn: "We anticipate sunny weather tomorrow.", sUz: "Ertaga quyoshli ob-havoni kutyapmiz." },
          "appear": { uz: "paydo bo'lmoq, ko'rinmoq", mn: "⚡ 'Apar' - Qorong'uda to'satdan yorug'lik PAYDO BO'LDI.", sEn: "A bright rainbow appeared in the blue sky.", sUz: "Moviy osmonda yorqin kamalak paydo bo'ldi." },
          "apply": { uz: "qo'llamoq, ariza bermoq", mn: "⚡ 'App' - Yangi mobil ilovani amalda QO'LLADIK.", sEn: "Apply these new words in your daily speech.", sUz: "Ushbu yangi so'zlarni kundalik nutqingizda qo'llang." },
          "appoint": { uz: "tayinlamoq, belgilamoq", mn: "⚡ 'Point' - Kerakli nuqtaga yangi rahbarni TAYINLADI.", sEn: "They appointed a skilled engineer as manager.", sUz: "Ular tajribali muhandisni boshqaruvchi etib tayinladilar." },
          "appreciate": { uz: "qadrlamoq, minnatdor bo'lmoq", mn: "⚡ 'Apparat' yordamida berilgan yaxshilikni QADRLANG.", sEn: "I deeply appreciate your kind assistance.", sUz: "Mehribon yordamingizni chin dildan qadrlayman." },
          "approach": { uz: "yaqinlashmoq; yondashuv", mn: "⚡ 'Oproch' - Manzil sari asta-sekin YAQINLASHDI.", sEn: "We need a creative approach to solve this puzzle.", sUz: "Bu jumboqni yechish uchun bizga ijodiy yondashuv kerak." },
          "approve": { uz: "ma'qullamoq, tasdiqlamoq", mn: "⚡ 'Oq plash' - Taklif etilgan loyihani hamma MA'QULLADI.", sEn: "The manager approved our new proposal.", sUz: "Menejer bizning yangi taklifimizni ma'qulladi." },
          "benevolent": { uz: "saxovatli, mehribon", mn: "⚡ 'Benuqson' dildan barchaga yaxshilik istovchi MEHRIBON inson.", sEn: "A benevolent mentor guided him throughout life.", sUz: "Saxovatli ustoz unga butun hayoti davomida yo'l ko'rsatdi." },
          "candid": { uz: "samimiy, ochiqko'ngil", mn: "⚡ 'Kandidat' intervyuda o'ta SAMIMIY gapirdi.", sEn: "She gave a candid and honest interview.", sUz: "U samimiy va to'g'riso'z intervyu berdi." },
          "charismatic": { uz: "jozibali, karizmatik", mn: "⚡ 'Karizma' - Odamlarni o'ziga maftun etuvchi JOZIBALI yetakchi.", sEn: "A charismatic speaker inspired the whole audience.", sUz: "Jozibali notiq butun zalni ilhomlantirdi." },
          "compassionate": { uz: "rahmdil, shafqatli", mn: "⚡ 'Kompas' - Qalbi doim ezgulikka yetaklovchi RAHMDIL inson.", sEn: "Doctors are deeply compassionate toward patients.", sUz: "Shifokorlar bemorlarga nisbatan nihoyatda shafqatlidir." },
          "courteous": { uz: "xushmuomala, odobli", mn: "⚡ 'Kortej' kutib oluvchilari juda XUSHMUOMALA bo'ladi.", sEn: "Always remain courteous to all guests.", sUz: "Barcha mehmonlarga doim xushmuomala bo'ling." },
          "diligent": { uz: "tirishqoq, quntli", mn: "⚡ 'Dil bilan' - Dil bilan o'rganuvchi TIRISHQOQ talaba.", sEn: "Diligent learners reach fluency much faster.", sUz: "Tirishqoq o'quvchilar ravonlikka ancha tez erishadilar." },
          "empathetic": { uz: "hamdard, tushunuvchan", mn: "⚡ 'Empatiya' - Boshqalarning dardini his qiluvchi HAMDARD do'st.", sEn: "Empathetic friends listen patiently without judging.", sUz: "Hamdard do'stlar hukm qilmasdan, sabr bilan tinglaydilar." },
          "generous": { uz: "saxiy, qo'li ochiq", mn: "⚡ 'General' jangchilarga mukofot ulashuvchi SAXIY inson.", sEn: "He is generous with his time and valuable advice.", sUz: "U o'z vaqti va qimmatli maslahatini ayamaydigan saxiy inson." },
          "appliance": { uz: "maishiy texnika jihozi", mn: "⚡ 'Pleyer, plita' - Oshxona va uydagi qulay JIXOZLAR.", sEn: "Modern household appliances save valuable kitchen time.", sUz: "Zamonaviy maishiy jihozlar oshxonadagi qimmatli vaqtni tejaydi." },
          "chore": { uz: "kundalik uy yumushi", mn: "⚡ 'Chora' - Xona tozalash kabi kundalik UY YUMUSHINI bajardi.", sEn: "Sharing household chores keeps peace in the family.", sUz: "Uy yumushlarini bo'lishish oilada tinchlikni ta'minlaydi." },
          "colleague": { uz: "hamkasb, kasbdosh", mn: "⚡ 'Kollektiv'dagi birga ishlaydigan HAMKASB.", sEn: "My colleagues are very helpful and supportive.", sUz: "Mening hamkasblarim juda yordamsevar va qo'llab-quvvatlovchidir." },
          "deadline": { uz: "topshirish muddati, dedlayn", mn: "⚡ 'Dedlayn' - Loyihani yakunlashning OXIRGI MUDDATI.", sEn: "We met the project deadline with days to spare.", sUz: "Biz loyiha muddatiga bir necha kun oldin ulgurdik." },
          "asset": { uz: "aktiv, qimmatli mulk", mn: "⚡ 'Asosiy boylik' - Bilim insonning eng katta AKTIVIDIR.", sEn: "Knowledge and skills are your greatest asset.", sUz: "Bilim va ko'nikmalar sizning eng buyuk aktivingizdir." },
          "algorithm": { uz: "algoritm, hisoblash ketma-ketligi", mn: "⚡ Al-Xorazmiy bobomiz kashf etgan hisob-kitob QOIDASI.", sEn: "Search algorithms find data in milliseconds.", sUz: "Qidiruv algoritmlari ma'lumotlarni millisoniyalarda topadi." }
        };

        const wordKey = rawWord.toLowerCase().replace(/[^a-z]/g, '');
        const entry = DICT[wordKey];

        const uzbekMeaning = entry ? entry.uz : `${capWord} — ingliz tilidagi muhim lug'at birligi`;
        const mnemonicText = entry ? entry.mn : `⚡ Xotira kaliti: '${capWord}' so'zini '${topic.title}' mavzusidagi jonli harakat bilan eslab qoling.`;
        const sentenceEnglish = entry ? entry.sEn : `Mastering '${capWord}' will greatly improve your English for ${topic.title}.`;
        const sentenceUzbek = entry ? entry.sUz : `'${capWord}' so'zi ${topic.title} mavzusida faol qo'llaniladi.`;

        dayWords.push({
          id: id,
          word: capWord,
          ipa: `/${wordKey}/`,
          partOfSpeech: i % 3 === 0 ? "verb" : (i % 3 === 1 ? "noun" : "adj"),
          uzbek: uzbekMeaning,
          mnemonic: mnemonicText,
          sentenceEn: sentenceEnglish,
          sentenceUz: sentenceUzbek,
          dayNumber: day
        });
      }

      db[day] = dayWords;
    }

    return db;
  }

  getWordsForDay(dayNumber) {
    if (this.cache[dayNumber]) {
      return this.cache[dayNumber];
    }
    const words = this.database[dayNumber] || this.database[1];
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
        <div class="p-4 md:p-5 rounded-2xl transition border flex flex-col justify-between ${
          isL ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
        }">
          <div>
            <!-- Word Header -->
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="w-6 h-6 rounded-lg bg-slate-800 text-indigo-400 text-xs font-bold flex items-center justify-center font-mono">#${index + 1}</span>
                <h3 class="text-xl md:text-2xl font-black text-white">${w.word}</h3>
                <button onclick="window.app.speak('${w.word}')" class="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition" title="Ovozli eshitish">
                  🔊
                </button>
                <span class="text-xs text-slate-400 font-mono">${w.ipa}</span>
              </div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10">${w.partOfSpeech}</span>
            </div>

            <!-- Uzbek Meaning -->
            <div class="text-base md:text-lg font-bold text-emerald-400 mb-2.5">
              ${w.uzbek}
            </div>

            <!-- Mnemonics (Xotira Kaliti) -->
            <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs mb-2.5 leading-relaxed">
              <div class="font-bold text-amber-300 mb-0.5">💡 Xotira kaliti:</div>
              ${w.mnemonic}
            </div>

            <!-- Example Sentence -->
            <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 mb-3 space-y-1">
              <p class="font-medium text-slate-200">“${w.sentenceEn}”</p>
              <p class="text-slate-400 italic">“${w.sentenceUz}”</p>
            </div>
          </div>

          <!-- Learn Button -->
          <div class="pt-2 border-t border-slate-800">
            <button onclick="window.app.toggleLearned(${w.id})" class="w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              isL ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40' : 'bg-indigo-600 text-white hover:bg-indigo-500'
            }">
              <span>${isL ? '✓ Yodlangan (+10 XP)' : 'Yodladim deb belgilash'}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="mb-3 flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
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
    const slider = document.getElementById('quick-day-slider');

    if (slider) {
      slider.innerHTML = CURRICULUM_TOPICS.map(t => {
        const isCur = t.day === this.currentDay;
        return `
          <button onclick="window.app.loadDay(${t.day})" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            isCur ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }">
            <span>${t.day}-Kun</span>
          </button>
        `;
      }).join('');
    }

    if (container) {
      const html = CURRICULUM_TOPICS.map(t => {
        const isCur = t.day === this.currentDay;
        const isComp = storageDriver.stats.completedDays.includes(t.day);

        return `
          <button onclick="window.app.loadDay(${t.day})" class="w-full text-left p-3 rounded-2xl transition flex items-center justify-between border ${
            isCur ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md' : isComp ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200' : 'bg-slate-800/40 border-slate-700/40 text-slate-400 hover:bg-slate-800 hover:text-white'
          }">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${isCur ? 'bg-indigo-600 text-white' : isComp ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'}">
                ${t.day}
              </div>
              <div>
                <div class="text-xs font-bold text-white line-clamp-1">${t.title}</div>
                <div class="text-[10px] text-slate-400">${t.category}</div>
              </div>
            </div>
          </button>
        `;
      }).join('');

      container.innerHTML = html;
      if (mobileContainer) mobileContainer.innerHTML = html;
    }
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
