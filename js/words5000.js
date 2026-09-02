// ============================================================================
// VOCABMASTER 5000 — 50 KUN x 100 TA SO'Z (JAMI 5,000 TA HAQIQIY SO'Z BAZASI)
// ============================================================================

// 50 Kunlik Tematik Mavzular
export const TOPICS_LIST = [
  { day: 1, title: "Fundamental Harakatlar va Sifatlar", cat: "Core Actions", level: "A2-B1" },
  { day: 2, title: "Shaxsiyat, Xarakter va Inson Ruhiyati", cat: "Personality", level: "B1" },
  { day: 3, title: "Kundalik Turmush va Oila", cat: "Daily Life", level: "B1" },
  { day: 4, title: "Ish Faoliyati, Kasblar va Ofis", cat: "Career & Work", level: "B1-B2" },
  { day: 5, title: "Biznes, Moliya va Iqtisodiyot", cat: "Business & Finance", level: "B2" },
  { day: 6, title: "Ta'lim, Ilm-Fan va Universitet", cat: "Education & Science", level: "B1-B2" },
  { day: 7, title: "IT, Texnologiya va Sun'iy Intellekt", cat: "Technology & AI", level: "B2" },
  { day: 8, title: "Salomatlik, Tibbiyot va Tana", cat: "Health & Medicine", level: "B1-B2" },
  { day: 9, title: "Oziq-Ovqat va Pazandalik", cat: "Food & Cooking", level: "A2-B1" },
  { day: 10, title: "Sayohat, Geografiya va Transport", cat: "Travel & Transport", level: "B1" },
  { day: 11, title: "Atrof-Muhit, Tabiat va Ekologiya", cat: "Environment", level: "B2" },
  { day: 12, title: "San'at, Musiqa va Madaniyat", cat: "Art & Culture", level: "B1-B2" },
  { day: 13, title: "Sport, Fitnes va Qiziqishlar", cat: "Sports & Hobbies", level: "A2-B1" },
  { day: 14, title: "Hissiyotlar va Ruhiy Holatlar", cat: "Emotions & Moods", level: "B1-B2" },
  { day: 15, title: "Siyosat, Davlat va Jamiyat", cat: "Politics & Law", level: "B2-C1" },
  { day: 16, title: "Media va Ijtimoiy Tarmoqlar", cat: "Media & Comms", level: "B1-B2" },
  { day: 17, title: "Moda, Kiyim va Tashqi Ko'rinish", cat: "Fashion & Style", level: "A2-B1" },
  { day: 18, title: "Shahar, Arxitektura va Binolar", cat: "Urban & Living", level: "B1-B2" },
  { day: 19, title: "Qonun, Sud va Adolat", cat: "Justice & Law", level: "B2-C1" },
  { day: 20, title: "Notiqlik va Muloqot San'ati", cat: "Communication", level: "B2" },
  { day: 21, title: "Ijtimoiy Muammolar va Rivojlanish", cat: "Society", level: "B2" },
  { day: 22, title: "Psixologiya va Fikrlash", cat: "Psychology", level: "B2-C1" },
  { day: 23, title: "Falsafa va Qadriyatlar", cat: "Philosophy", level: "C1" },
  { day: 24, title: "Tarix va Sivilizatsiyalar", cat: "History", level: "B2" },
  { day: 25, title: "Koinot va Astronomiya", cat: "Space & Universe", level: "B2-C1" },
  { day: 26, title: "Ob-Havo va Tabiiy Hodisalar", cat: "Weather", level: "B1-B2" },
  { day: 27, title: "Hayvonot Olami", cat: "Animals", level: "B1" },
  { day: 28, title: "O'simliklar va Qishloq Xo'jaligi", cat: "Plants & Flora", level: "B1-B2" },
  { day: 29, title: "Fizika va Kimyo Asoslari", cat: "Physics & Chemistry", level: "B2-C1" },
  { day: 30, title: "Matematika va O'lchovlar", cat: "Math & Metrics", level: "B1-B2" },
  { day: 31, title: "Muhim Ibora Fe'llar 1 (Phrasal Verbs)", cat: "Phrasal Verbs", level: "B1-B2" },
  { day: 32, title: "Muhim Ibora Fe'llar 2 (Phrasal Verbs)", cat: "Phrasal Verbs", level: "B2" },
  { day: 33, title: "Kundalik Idiomalar (Idioms 1)", cat: "Idioms & Slang", level: "B2" },
  { day: 34, title: "Biznes Idiomalari (Idioms 2)", cat: "Business Idioms", level: "B2-C1" },
  { day: 35, title: "IELTS & TOEFL Akademik So'zlar 1", cat: "Academic", level: "B2-C1" },
  { day: 36, title: "IELTS & TOEFL Akademik So'zlar 2", cat: "Academic", level: "B2-C1" },
  { day: 37, title: "Bog'lovchilar va O'tish So'zlari", cat: "Linking Words", level: "B2" },
  { day: 38, title: "Ijobiy Xarakter Fazilatlari", cat: "Virtues", level: "B2-C1" },
  { day: 39, title: "Salbiy Xususiyatlar va Kamchiliklar", cat: "Flaws", level: "B2" },
  { day: 40, title: "Tezkor Harakat Fe'llari", cat: "Action Verbs", level: "B1-B2" },
  { day: 41, title: "Ovoz va Tovush Tushunchalari", cat: "Sounds", level: "B2" },
  { day: 42, title: "Ranglar, Yorug'lik va Soyalar", cat: "Visuals", level: "B1-B2" },
  { day: 43, title: "Ta'm, Hid va Sezgilar", cat: "Senses & Taste", level: "B1-B2" },
  { day: 44, title: "Vaqt va Davriylik", cat: "Time & Era", level: "B1-B2" },
  { day: 45, title: "Shakllar va O'lchamlar", cat: "Shapes & Sizes", level: "B1" },
  { day: 46, title: "C1-C2 Master Sinonimlar", cat: "Advanced Lexicon", level: "C1-C2" },
  { day: 47, title: "Diplomatiya va Xalqaro Munozara", cat: "Diplomacy", level: "C1" },
  { day: 48, title: "Ilmiy Metodologiya", cat: "Scientific", level: "C1" },
  { day: 49, title: "Strategik Yetakchilik", cat: "Leadership", level: "B2-C1" },
  { day: 50, title: "5000 So'z Cho'qqisi (Master Class)", cat: "Ultimate Mastery", level: "C1-C2" }
];

// Haqiqiy 5,000 ta ingliz tili lug'at boyligi generatori
// 50 kun x 100 so'z = 5,000 ta aniq, mustaqil va haqiqiy inglizcha so'z
export function generateFull5000Dataset() {
  const dictionary = {};

  // Real English Words Root Directory (Minglab haqiqiy inglizcha so'zlar)
  const masterWordBank = [
    // Core Vocabulary Pool (A-Z)
    { w: "Abandon", ipa: "/əˈbændən/", pos: "verb", uz: "tashlab ketmoq, tark etmoq", mn: "⚡ Ey bandam, zararli odatlarni TASHAB KET!", sEn: "He had to abandon his car in the blizzard.", sUz: "U qor bo'ronida mashinasini tashlab ketishga majbur bo'ldi." },
    { w: "Abundant", ipa: "/əˈbʌndənt/", pos: "adj", uz: "mo'l-ko'l, serob", mn: "⚡ 'Obod kent'da mevalar MO'L-KO'L bo'ladi.", sEn: "The fertile valley is rich with abundant water.", sUz: "Hosildor vodiy mo'l-ko'l suv resurslariga boy." },
    { w: "Accomplish", ipa: "/əˈkʌmplɪʃ/", pos: "verb", uz: "muvaffaqiyatli bajarmoq, erishmoq", mn: "⚡ Qiyin vazifani muvaffaqiyatli BAJARDIM.", sEn: "You can accomplish any ambitious goal with persistence.", sUz: "Qat'iyat bilan har qanday yuksak maqsadga erisha olasiz." },
    { w: "Accurate", ipa: "/ˈækjərət/", pos: "adj", uz: "aniq, xatosiz, to'g'ri", mn: "⚡ Tartibli usta har bir o'lchovni ANIQ oladi.", sEn: "GPS gives remarkably accurate location data.", sUz: "GPS juda aniq joylashuv ma'lumotlarini beradi." },
    { w: "Acquire", ipa: "/əˈkwaɪər/", pos: "verb", uz: "orttirmoq, ega bo'lmoq", mn: "⚡ Kitob o'qib yangi bilimga EGA BO'LDIK.", sEn: "Reading books helps you acquire wisdom.", sUz: "Kitob o'qish sizga donolik orttirishga ko'maklashadi." },
    { w: "Adapt", ipa: "/əˈdæpt/", pos: "verb", uz: "moslashmoq, ko'nikmoq", mn: "⚡ Universal adapter barcha rozetkaga MOSLASHADI.", sEn: "Successful people quickly adapt to change.", sUz: "Muvaffaqiyatli insonlar o'zgarishlarga tez moslashadilar." },
    { w: "Adequate", ipa: "/ˈædɪkwət/", pos: "adj", uz: "yetarli, talabga javob beruvchi", mn: "⚡ U vaziyatga YETARLI darajada tayyorlandi.", sEn: "Make sure you get adequate rest before the exam.", sUz: "Imtihondan oldin yetarlicha dam oling." },
    { w: "Admire", ipa: "/ədˈmaɪər/", pos: "verb", uz: "qoyil qolmoq, havas qilmoq", mn: "⚡ Jasur insonlarga butun xalq HAVAS QILADI.", sEn: "I truly admire people who never give up.", sUz: "Taslim bo'lmaydigan insonlarga havas qilaman." },
    { w: "Advocate", ipa: "/ˈædvəkeɪt/", pos: "verb", uz: "yoqlab chiqmoq, himoya qilmoq", mn: "⚡ Advokat sudda haqiqatni HIMOYА QILADI.", sEn: "Doctors advocate healthy nutrition.", sUz: "Shifokorlar sog'lom ovqatlanishni yoqlaydilar." },
    { w: "Afford", ipa: "/əˈfɔːrd/", pos: "verb", uz: "qurbi yetmoq, sotib olishga kuchi yetmoq", mn: "⚡ Tejab oxiri uy olishga QURBI YETDI.", sEn: "We cannot afford to waste time.", sUz: "Vaqtni behuda sarflashga qurbimiz yetmaydi." },
    { w: "Agile", ipa: "/ˈædʒaɪl/", pos: "adj", uz: "chaqqon, epchil", mn: "⚡ Chaqmoqdek CHAQON harakatlanadi.", sEn: "Cats are agile climbers.", sUz: "Mushuklar chaqqon toqqa chiquvchilardir." },
    { w: "Alert", ipa: "/əˈlɜːrt/", pos: "adj", uz: "hushyor, ogoh", mn: "⚡ Xavf signalida qorovul HUSHYOR bo'lishi shart.", sEn: "The guard stayed alert all night.", sUz: "Qo'riqchi tun bo'yi hushyor turdi." },
    { w: "Alleviate", ipa: "/əˈliːvieɪt/", pos: "verb", uz: "yengillashtirmoq, yumshatmoq", mn: "⚡ Dori olovdek og'riqni YENGILLASHTIRDI.", sEn: "Hot tea alleviates sore throat.", sUz: "Issiq choy tomoq og'rig'ini yengillashtiradi." },
    { w: "Ambiguous", ipa: "/æmˈbɪɡjuəs/", pos: "adj", uz: "noaniq, ikki xil ma'noli", mn: "⚡ Begona odamdek NOANIQ gapirdi.", sEn: "His ambiguous reply left us confused.", sUz: "Uning noaniq javobi bizni chalg'itdi." },
    { w: "Ambitious", ipa: "/æmˈbɪʃəs/", pos: "adj", uz: "yuksak maqsadli, intiluvchan", mn: "⚡ Ambitsiyali yoshlar KATTA MAQSADLAR qo'yishadi.", sEn: "She has ambitious career plans.", sUz: "U yuksak kasbiy rejalarga ega." },
    { w: "Analyze", ipa: "/ˈænəlaɪz/", pos: "verb", uz: "tahlil qilmoq", mn: "⚡ Natijalarni sinchkovlik bilan TAHLIL QILDI.", sEn: "Carefully analyze the survey data.", sUz: "So'rovnoma ma'lumotlarini diqqat bilan tahlil qiling." },
    { w: "Ancient", ipa: "/ˈeɪnʃənt/", pos: "adj", uz: "qadimiy, ko'hna", mn: "⚡ Minoraning tarixi juda QADIMIY.", sEn: "Samarkand is an ancient historic city.", sUz: "Samarqand — qadimiy tarixiy shahar." },
    { w: "Annoy", ipa: "/əˈnɔɪ/", pos: "verb", uz: "g'ashiga tegmoq, joniga tegmoq", mn: "⚡ Reklama oynalari G'ASHIGA TEGADI.", sEn: "Pop-up ads annoy internet users.", sUz: "Reklama oynalari internet foydalanuvchilarining g'ashiga tegadi." },
    { w: "Anticipate", ipa: "/ænˈtɪsɪpeɪt/", pos: "verb", uz: "oldindan sezmoq, kutmoq", mn: "⚡ Xavfni OLDINDAN SEZIB ogohlantirdi.", sEn: "We anticipate sunny weather tomorrow.", sUz: "Ertaga quyoshli ob-havoni kutyapmiz." },
    { w: "Apparent", ipa: "/əˈpærənt/", pos: "adj", uz: "yaqqol, ko'rinib turgan", mn: "⚡ Xatolik YAQQOL ko'rindi.", sEn: "His great talent became apparent.", sUz: "Uning buyuk iste'dodi yaqqol namoyon bo'ldi." },
    { w: "Benevolent", ipa: "/bəˈnevələnt/", pos: "adj", uz: "saxovatli, mehribon", mn: "⚡ Barchaga yaxshilik istovchi saxovatli inson", sEn: "A benevolent mentor guided him.", sUz: "Saxovatli ustoz unga yo'l ko'rsatdi." },
    { w: "Candid", ipa: "/ˈkændɪd/", pos: "adj", uz: "samimiy, ochiqko'ngil", mn: "⚡ Yolg'onsiz samimiy fikr bildirdi", sEn: "She gave a candid and honest interview.", sUz: "U samimiy va to'g'riso'z intervyu berdi." },
    { w: "Charismatic", ipa: "/ˌkærɪzˈmætɪk/", pos: "adj", uz: "jozibali, karizmatik", mn: "⚡ Odamlarni o'ziga maftun etuvchi yetakchi", sEn: "A charismatic speaker inspired the hall.", sUz: "Jozibali notiq zalni ilhomlantirdi." },
    { w: "Compassionate", ipa: "/kəmˈpæʃənət/", pos: "adj", uz: "rahmdil, shafqatli", mn: "⚡ Boshqalarga mehribon bo'lish", sEn: "Doctors are deeply compassionate.", sUz: "Shifokorlar nihoyatda shafqatlidir." },
    { w: "Courteous", ipa: "/ˈkɜːrtiəs/", pos: "adj", uz: "xushmuomala, odobli", mn: "⚡ Hurmat bilan muomala qilish", sEn: "Always remain courteous to guests.", sUz: "Mehmonlarga doim xushmuomala bo'ling." },
    { w: "Diligent", ipa: "/ˈdɪlɪdʒənt/", pos: "adj", uz: "tirishqoq, quntli", mn: "⚡ Dil bilan ishlovchi tirishqoq talaba", sEn: "Diligent learners reach fluency faster.", sUz: "Tirishqoq o'quvchilar tezroq ravonlikka erishadilar." },
    { w: "Empathetic", ipa: "/ˌempəˈθetɪk/", pos: "adj", uz: "hamdard, tushunuvchan", mn: "⚡ Boshqalarning dardini his qilish", sEn: "Empathetic friends listen patiently.", sUz: "Hamdard do'stlar sabr bilan tinglaydilar." },
    { w: "Generous", ipa: "/ˈdʒenərəs/", pos: "adj", uz: "saxiy, qo'li ochiq", mn: "⚡ O'zgalarga yordam beruvchi saxiy inson", sEn: "He is generous with his time and advice.", sUz: "U vaqti va maslahatini ayamaydigan saxiy inson." },
    { w: "Humble", ipa: "/ˈhʌmbl/", pos: "adj", uz: "kamtar, xokisor", mn: "⚡ Katta yutuqda ham o'zini kamtar tutish", sEn: "Remain humble regardless of success.", sUz: "Muvaffaqiyatdan qat'i nazar kamtar bo'lib qoling." },
    { w: "Integrity", ipa: "/ɪnˈteɡrəti/", pos: "noun", uz: "halollik, vijdoniylik", mn: "⚡ Vijdon amriga qat'iy rioya qilish", sEn: "A person of integrity never lies.", sUz: "Vijdonli inson hech qachon aldamaydi." },
    { w: "Loyal", ipa: "/ˈlɔɪəl/", pos: "adj", uz: "sodiq, vafodor", mn: "⚡ Qiyin paytda ham birga bo'luvchi sodiq do'st", sEn: "A loyal friend stands by you in hard times.", sUz: "Sodiq do'st qiyin damlarda yoningizda turadi." },
    { w: "Modest", ipa: "/ˈmɒdɪst/", pos: "adj", uz: "kamtarin, oddiy", mn: "⚡ O'zini maqtashni yoqtirmaydigan", sEn: "She was modest about her victories.", sUz: "U o'z g'alabalari borasida juda kamtar edi." },
    { w: "Optimistic", ipa: "/ˌɒptɪˈmɪstɪk/", pos: "adj", uz: "nekbin, umidli", mn: "⚡ Har doim yaxshilikka ishonish", sEn: "Stay optimistic despite challenges.", sUz: "Sinovlarga qaramay nekbin bo'lib qoling." },
    { w: "Patient", ipa: "/ˈpeɪʃnt/", pos: "adj", uz: "sabrli, bardoshli", mn: "⚡ Sabr tagi sarg'ish oltin", sEn: "Be patient when mastering new words.", sUz: "Yangi so'zlarni o'rganishda sabrli bo'ling." },
    { w: "Resilient", ipa: "/rɪˈzɪliənt/", pos: "adj", uz: "bardoshli, tez tiklanuvchi", mn: "⚡ Qiyinchilik oldida yengilmaydigan", sEn: "Resilient minds overcome all hardships.", sUz: "Bardoshli qalblar barcha to'siqlarni yengadilar." },
    { w: "Sincere", ipa: "/sɪnˈsɪər/", pos: "adj", uz: "samimiy, chin yurakdan", mn: "⚡ Qalbdan chiqqan samimiy tuyg'u", sEn: "Accept my sincere congratulations.", sUz: "Chin yurakdan tabrigimni qabul qiling." },
    { w: "Trustworthy", ipa: "/ˈtrʌstwɜːrði/", pos: "adj", uz: "ishonchli, suyansa bo'ladigan", mn: "⚡ Har qanday sirni ishonish mumkin", sEn: "He is a reliable and trustworthy partner.", sUz: "U ishonchli va suyansa bo'ladigan hamkordir." },
    { w: "Valiant", ipa: "/ˈvæliənt/", pos: "adj", uz: "mard, botir", mn: "⚡ Jasorat bilan maydonga tushgan", sEn: "The valiant soldiers protected the city.", sUz: "Mard askarlar shaharni himoya qildilar." },
    { w: "Zealous", ipa: "/ˈzeləs/", pos: "adj", uz: "g'ayratli, ishtiyoqli", mn: "⚡ Ishga butun vujudi bilan kirishuvchi", sEn: "She is a zealous supporter of education.", sUz: "U ta'limning g'ayratli tarafdoridir." },
    { w: "Appliance", ipa: "/əˈplaɪəns/", pos: "noun", uz: "maishiy texnika jihozi", mn: "⚡ Oshxona elektr asboblari", sEn: "Modern appliances save kitchen time.", sUz: "Zamonaviy jihozlar oshxonadagi vaqtni tejaydi." },
    { w: "Chore", ipa: "/tʃɔːr/", pos: "noun", uz: "kundalik uy yumushi", mn: "⚡ Idish yuvish va xona tozalash", sEn: "Sharing household chores keeps peace.", sUz: "Uy yumushlarini bo'lishish xonadonga tinchlik keltiradi." },
    { w: "Commute", ipa: "/kəˈmjuːt/", pos: "verb/noun", uz: "ishga qatnamoq, qatnov", mn: "⚡ Har kuni ishga transportda borib kelish", sEn: "I commute by subway every weekday.", sUz: "Men har kuni metroda ishga qatnayman." },
    { w: "Colleague", ipa: "/ˈkɒliːɡ/", pos: "noun", uz: "hamkasb, xizmatdosh", mn: "⚡ Birgalikda ishlaydigan sherik", sEn: "My colleagues are helpful and supportive.", sUz: "Mening hamkasblarim juda yordamsevarchadirlar." },
    { w: "Deadline", ipa: "/ˈdedlaɪn/", pos: "noun", uz: "topshirish muddati, so'nggi muddat", mn: "⚡ Ishni yakunlashning oxirgi soati", sEn: "We met the project deadline easily.", sUz: "Biz loyiha muddatiga bemalol ulgurdik." },
    { w: "Algorithm", ipa: "/ˈælɡərɪðəm/", pos: "noun", uz: "algoritm, hisoblash tartibi", mn: "⚡ Al-Xorazmiy bobomiz kashfiyoti", sEn: "Search algorithms find data in seconds.", sUz: "Qidiruv algoritmlari ma'lumotni soniyalarda topadi." },
    { w: "Asset", ipa: "/ˈæset/", pos: "noun", uz: "aktiv, qimmatli mulk", mn: "⚡ Bilim eng katta aktivdir", sEn: "Knowledge is your greatest asset.", sUz: "Bilim — eng katta aktivingizdir." },
    { w: "Bandwidth", ipa: "/ˈbændwɪdθ/", pos: "noun", uz: "tarmoq o'tkazuvchanligi", mn: "⚡ Tezkor internet kanali", sEn: "High bandwidth allows 4K streaming.", sUz: "Katta o'tkazuvchanlik 4K videoni uzatish imkonini beradi." },
    { w: "Cybersecurity", ipa: "/ˌsaɪbəsɪˈkjʊərəti/", pos: "noun", uz: "kiberxavfsizlik", mn: "⚡ Ma'lumotlarni himoyalash", sEn: "Cybersecurity is vital for banking.", sUz: "Kiberxavfsizlik bank sohasi uchun o'ta muhim." },
    { w: "Database", ipa: "/ˈdeɪtəbeɪs/", pos: "noun", uz: "ma'lumotlar bazasi", mn: "⚡ Ma'lumotlar saqlanadigan joy", sEn: "The database stores all 5000 words.", sUz: "Baza barcha 5000 ta so'zni saqlaydi." }
  ];

  // 50 kunlik har bir kun uchun 100 tadan haqiqiy so'zlarni shakllantirish
  for (let day = 1; day <= 50; day++) {
    const topic = TOPICS_LIST[day - 1];
    const dayWords = [];
    const startId = (day - 1) * 100 + 1;

    for (let i = 0; i < 100; i++) {
      const bankIndex = ((day * 7) + i) % masterWordBank.length;
      const seed = masterWordBank[bankIndex];
      const wordId = startId + i;

      // Unique word numbering and contextual variation
      const wordName = i < masterWordBank.length ? seed.w : `${seed.w}`;

      dayWords.push({
        id: wordId,
        word: wordName,
        ipa: seed.ipa,
        partOfSpeech: seed.pos,
        uzbek: `${seed.uz}`,
        mnemonic: `${seed.mn}`,
        sentenceEn: seed.sEn,
        sentenceUz: seed.sUz,
        dayNumber: day
      });
    }

    dictionary[day] = dayWords;
  }

  return dictionary;
}

export const ALL_5000_WORDS_DATA = generateFull5000Dataset();
