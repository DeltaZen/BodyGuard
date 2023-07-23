let languages = {};

languages["en"] = {
  FONT: "Arial",
  settings: "SETTINGS",
  "sound-on": "Sound: ON",
  "sound-off": "Sound: OFF",
  "music-on": "Music: ON",
  "music-off": "Music: OFF",
  credits: "Credits",
  "credits-title": "CREDITS",
  viruses: "Viruses",
  "viruses-title": "VIRUSES",
  "viruses-1-title": "Coronavirus",
  "viruses-1-desc":
    "RNA virus that can cause respiratory tract\ninfections such as SARS, MERS, and COVID-19.",
  "viruses-2-title": "Ebola",
  "viruses-2-desc":
    "Causes Ebola hemorrhagic fever, have high\nrisk of death (50%) and is highly contagious.",
  "viruses-3-title": "Hepatitis B",
  "viruses-3-desc":
    "Can cause both acute and chronic infection\nthat affects the liver, makes skin yellowish.",
  "viruses-4-title": "Adenovirus",
  "viruses-4-desc":
    "Represent the largest known non-enveloped\nviruses, contains double stranded DNA genome.",
  "viruses-5-title": "Bacteriophage",
  "viruses-5-desc":
    "Also known informally as a phage - a virus\nthat infects and replicates within bacteria.",
  "viruses-more": "Learn more about the viruses at wikipedia.org/wiki/Virus",
  madeby: "Body Guard made by",
  team: "THE TEAM",
  coding: "coding",
  design: "design",
  testing: "testing",
  musicby: "Music by",
  "gameplay-score": "Score: ",
  "gameplay-paused": "PAUSED",
  "gameplay-gameover": "YOUR SCORE",
  "menu-highscore": "HIGHSCORE: ",
  tip: "Tap to move\ndestroy\navoid",
  "tip-destroy-spacing": "51",
  "tip-avoid-spacing": "5",
};

languages["de"] = {
  FONT: "Arial",
  settings: "EINSTELLUNGEN",
  "sound-on": "Soundeffekt: JA",
  "sound-off": "Soundeffekt: NEIN",
  "music-on": "Musik: JA",
  "music-off": "Musik: NEIN",
  credits: "Credits",
  "credits-title": "CREDITS",
  viruses: "Viren",
  "viruses-title": "VIREN",
  "viruses-1-title": "Coronavirus",
  "viruses-1-desc":
    "RNA-Virus, das Atemwege verursachen kann\nInfektionen wie SARS, MERS und COVID-19.",
  "viruses-2-title": "Ebolavirus",
  "viruses-2-desc":
    "Verursacht hämorrhagisches Ebola-Fieber, hohes\nFieber Sterberisiko (50%) und hoch ansteckend.",
  "viruses-3-title": "Hepatitis B",
  "viruses-3-desc":
    "Kann eine chronische Infektion verursachen, die\ndie Leber angreift und die Haut gelblich werden lässt.",
  "viruses-4-title": "Adenovirus",
  "viruses-4-desc":
    "Stellt den größten bekannten unbehüllten dar\nViren, enthält doppelsträngiges DNA-Genom.",
  "viruses-5-title": "Bakteriophage",
  "viruses-5-desc":
    "Auch als Phagen bekannt – ein Virus das\nBakterien infiziert und sich innerhalb dieser vermehrt.",
  "viruses-more":
    "Erfahren Sie mehr über die Viren unter de.wikipedia.org/wiki/Viren",
  madeby: "Body Guard von",
  team: "DAS TEAM",
  coding: "Codierung",
  design: "Design",
  testing: "Prüfung",
  musicby: "Musik von",
  "gameplay-score": "Ergebnis: ",
  "gameplay-paused": "PAUSE",
  "gameplay-gameover": "IHR ERGEBNIS",
  "menu-highscore": "HIGHSCORE: ",
  tip: "Zum Verschieben tippen\nzerstören\nvermeiden",
  "tip-destroy-spacing": "-10",
  "tip-avoid-spacing": "0",
};

languages["es"] = {
  settings: "AJUSTES",
  "sound-on": "Sonido: SI",
  "sound-off": "Sonido: NO",
  "music-on": "Música: SI",
  "music-off": "Música: NO",
  credits: "Créditos",
  "credits-title": "CRÉDITOS",
  viruses: "Virus",
  "viruses-title": "VIRUS",
  "viruses-1-title": "Coronavirus",
  "viruses-1-desc":
    "Virus de ARN que puede causar infecciones del tracto\nrespiratorio como SARS, MERS y COVID-19.",
  "viruses-2-title": "Ebola",
  "viruses-2-desc":
    "Provoca fiebre hemorrágica del Ébola, tiene\nriesgo de muerte (50%) y es altamente contagioso.",
  "viruses-3-title": "Hepatitis B",
  "viruses-3-desc":
    "Puede causar infección aguda y crónica que afecta\nal hígado, hace que la piel se vuelva amarillenta.",
  "viruses-4-title": "Adenovirus",
  "viruses-4-desc":
    "El virus no encapsulado más conocido,\ncontiene genoma de ADN bicatenario lineal.",
  "viruses-5-title": "Bacteriófagos",
  "viruses-5-desc":
    "También llamados fagos - un virus\nque infecta exclusivamente a las bacterias.",
  "viruses-more": "Aprende más sobre los virus en es.wikipedia.org/wiki/Virus",
  madeby: "Body Guard creado por",
  team: "EL EQUIPO",
  coding: "programación",
  design: "diseño",
  testing: "testeo",
  musicby: "Música de",
  "gameplay-score": "Puntos: ",
  "gameplay-paused": "PAUSADO",
  "gameplay-gameover": "PUNTUACIÓN",
  "menu-highscore": "PUNTUACIÓN: ",
  tip: "Toca para mover\ndestruye\nevita",
  "tip-destroy-spacing": "20",
  "tip-avoid-spacing": "-50",
};

languages["pl"] = {
  FONT: "Arial",
  settings: "USTAWIENIA",
  "sound-on": "Dźwięk: WŁ.",
  "sound-off": "Dźwięk: WYŁ.",
  "music-on": "Muzyka: WŁ.",
  "music-off": "Muzyka: WYŁ.",
  credits: "AUTORZY",
  madeby: "EPT stworzone przez",
  team: "ZESPÓŁ",
  coding: "kodowanie",
  design: "grafika",
  testing: "testowanie",
  musicby: "Muzyka autorstwa",
  "gameplay-score": "Wynik: ",
  "gameplay-paused": "PAUZA",
  "gameplay-gameover": "KONIEC GRY",
  "menu-highscore": "Rekord: ",
};

EPT.Lang = {
  current: "en",
  options: Object.keys(languages),
  updateLanguage: function (_0x216884) {
    let browserLang =
      (window.navigator && window.navigator.language) || _0x216884 || "en-US";
    browserLang = browserLang.slice(0, 2).toLowerCase();
    console.log("LANG:" + browserLang);
    EPT.Lang.current = browserLang;
    if (EPT.Lang.options.indexOf(EPT.Lang.current) == -1) {
      console.log("WARNING unsupported lang:" + browserLang);
      EPT.Lang.current = "en";
    }
  },
  getText: function (key) {
    return languages[this.current][key] === undefined
      ? languages["en"][key]
      : languages[this.current][key];
  },
};
