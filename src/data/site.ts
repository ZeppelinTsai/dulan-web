export const langs = ["en", "zh-tw", "ja"] as const;
export type Lang = (typeof langs)[number];
export type Page = "home" | "story" | "characters" | "system" | "download";

const names = {
  en: ["Hardluck Wu", "Dopey Dan", "Cash King", "Snitch Sally", "Old Slick"],
  "zh-tw": ["伍告雖", "大添斌", "金拜嘉", "爪琶梓", "佬尤調"],
  ja: ["不運のウー", "ドジ平", "成金太郎", "チクリ姫", "古狸"],
};
const bios = {
  en: [
    "A man buried in debt, walking into the one place that might change everything.",
    "Low intelligence, big appetite, oddly hard to underestimate.",
    "Gaudy, loud, and utterly convinced money makes him untouchable.",
    "Sweet smile, sharper motives.",
    "An old fox who's seen everyone fall — and stayed seated anyway.",
  ],
  "zh-tw": [
    "一個負債累累的男人，走進了唯一可能翻轉人生的地方。",
    "智商不高、食量驚人，卻莫名讓人不敢小看。",
    "浮誇又聒噪，深信有錢就能無所不能。",
    "笑容甜美，居心更深。",
    "見慣了眾人起落的老狐狸，自己卻始終穩坐牌桌。",
  ],
  ja: [
    "借金にまみれた男が、人生を変えるかもしれない場所へ足を踏み入れる。",
    "頭は弱いが、食欲だけは人一倍。なぜか侮れない。",
    "派手で騒がしく、金さえあれば無敵だと信じている。",
    "甘い笑顔の裏に、鋭い企み。",
    "誰もが倒れるのを見てきた老狐は、それでも席を立たない。",
  ],
};

export const copy = {
  en: {
    nav: ["Home", "Story", "Characters", "System", "Download"],
    label: "English",
    subtitle: "Rigged",
    tagline: "Cards can be reshuffled. Life can't.",
    heroEyebrow: "A SHORT, STORY-DRIVEN BIG TWO GAME",
    intro:
      "A short, replayable story-driven Big Two game about debt, nerve, and the hand you were dealt.",
    buy: "Buy on itch.io",
    trailer: "Watch Gameplay",
    pressKit: "Download Press Kit",
    pressKitHelp:
      "Logos, screenshots, character art, descriptions, trailer, and fact sheet.",
    pageTitles: {
      story: "The underground casino",
      characters: "Faces at the table",
      system: "Play the hand",
      download: "Download & Press Kit",
    },
    storySeo:
      "Enter DULAN, a story-driven Big Two narrative card game set inside a secretive underground casino.",
    story: [
      "They call you Hardluck Wu—the unluckiest man alive. Drowning in debt, unemployed, hunted by collectors, you cannot even afford one extra piece of convenience-store oden. With nowhere left to turn, you arrive at the legendary underground casino, “DULAN.” Every victory buys another chance to survive. Every defeat pushes you deeper into the casino.",
      "DULAN is a story-driven Big Two narrative card game that keeps the familiar rules intact and builds a complete adventure around the card table. Beat the opponents standing in your way and wager everything on a chance to turn your life around. But there is something you do not know… This casino is hiding a secret…",
    ],
    storyKicker:
      "Beat the opponents standing in your way and wager everything on a chance to turn your life around.",
    storyCtaTitle: "Curious what lies beneath the casino?",
    storyCtaText: "Some stories can only be discovered at the card table.",
    featureShort: [
      "Story-driven Big Two",
      "First-timer friendly",
      "10–30 minute playthroughs",
      "Three endings + gallery",
    ],
    features: [
      [
        "The original rules, with a story",
        "A story-driven Big Two campaign that keeps the familiar rules intact — no roguelike systems, no deckbuilding.",
      ],
      [
        "New to Big Two? No problem",
        "An optional in-game tutorial teaches first-time players the basics through an actual match.",
      ],
      [
        "Short & replayable",
        "A playthrough takes around 10–30 minutes, depending on playstyle.",
      ],
      [
        "Distinct opponents",
        "Every opponent has their own personality, room, music, and dialogue.",
      ],
      [
        "Skill cards",
        "One-time-use peek, swap, and force-pass cards can turn a losing hand around.",
      ],
      [
        "Three endings",
        "Discover three endings, including a hidden True Ending.",
      ],
      [
        "Unlockable gallery",
        "Unlock and revisit character art, CGs, and music — more reasons to replay.",
      ],
      ["Save your game", "Five manual save slots plus auto-save."],
      ["Play your way", "Full keyboard and mouse support."],
      ["Three languages", "English, Traditional Chinese, and Japanese."],
    ],
    characters:
      "Players from every walk of life—each with something they cannot lay on the table.",
    downloadIntro:
      "DULAN is now available on Windows for US$3.99.",
    shortTitle: "Short description",
    factsTitle: "Key facts",
    assetsTitle: "Media assets",
    shotsTitle: "Screenshots",
    aboutTitle: "About the developer",
    contactTitle: "Contact",
    copyButton: "Copy text",
    assetLinkLabel: "Open in Google Drive",
    short:
      "Never played Big Two? No problem. DULAN is a story-driven Big Two game with an optional in-game tutorial designed for first-time players. A single playthrough typically takes around 10–30 minutes, depending on playstyle. Three endings, including a hidden True Ending, plus unlockable character art, CGs, and music encourage replaying. Built solo in Taiwan, DULAN supports English, Traditional Chinese, and Japanese.",
    about:
      "ZeppelinTsai is a solo indie developer based in Taiwan. DULAN is their first commercial release — designed, written, and programmed from the ground up, with AI-assisted art and music.",
    factLabels: [
      "Title",
      "Genre",
      "Playtime",
      "Endings",
      "Engine",
      "Platform",
      "Price",
      "Languages",
      "Release date",
      "Store page",
    ],
    factValues: [
      "DULAN",
      "Story-driven Big Two",
      "Around 10–30 minutes per playthrough",
      "Three, including a hidden True Ending",
      "Phaser 3 + Vite + TypeScript, packaged via Electron",
      "Windows / itch.io",
      "US$3.99",
      "English, Traditional Chinese, Japanese",
      "August 4, 2026",
      "itch.io",
    ],
    footer: "A story-driven Big Two game by ZeppelinTsai.",
  },
  "zh-tw": {
    nav: ["首頁", "故事", "人物", "系統", "下載"],
    label: "繁體中文",
    subtitle: "賭爛",
    tagline: "牌可以重洗，人生不一定。",
    heroEyebrow: "短流程・劇情式大老二遊戲",
    intro: "一款短流程、可重玩的劇情式大老二遊戲，關於債務、膽識與命運手牌。",
    buy: "前往 itch.io 購買",
    trailer: "觀看遊戲影片",
    pressKit: "下載 Press Kit",
    pressKitHelp:
      "包含 Logo、遊戲截圖、角色立繪、介紹文案、預告片與遊戲資料表。",
    pageTitles: {
      story: "地下賭場「賭爛」",
      characters: "牌桌上的眾人",
      system: "打好這手牌",
      download: "下載與媒體資料",
    },
    storySeo:
      "走進地下賭場「賭爛」，體驗一款以經典大老二規則展開完整冒險的劇情式牌類遊戲。",
    story: [
      "你叫伍告雖（有夠衰）。負債、失業、被討債，連便利商店的關東煮都不敢多夾一根。走投無路的你，來到傳說中的地下賭場「賭爛」。每一次勝利，都替你換來一線生機；每一次落敗，都讓你陷得更深。",
      "DULAN 是一款以大老二為核心的劇情式牌類遊戲，完整保留玩家熟悉的規則，讓一場冒險圍繞牌桌展開。擊敗擋在面前的對手，為翻轉人生賭上一切。但你不知道的是……這間賭場，隱藏了秘密……。",
    ],
    storyKicker: "擊敗擋在面前的對手，為翻轉人生賭上一切。",
    featureShort: [
      "劇情式大老二",
      "第一次玩也能上手",
      "單次約 10～30 分鐘",
      "三種結局與鑑賞內容",
    ],
    storyCtaTitle: "想知道賭場深處藏著什麼？",
    storyCtaText: "有些故事，只有坐上牌桌才能親自揭開。",
    features: [
      [
        "原汁原味的規則，一段完整故事",
        "保留熟悉的大老二玩法，以劇情推動整段旅程——沒有 roguelike，也不用組牌。",
      ],
      [
        "第一次玩也沒關係",
        "內建可跳過的大老二新手教學，會用實際牌局帶玩家理解基本規則。",
      ],
      [
        "短流程、適合重玩",
        "單次流程約 10～30 分鐘，依遊玩方式而異，適合短時間遊玩與重複挑戰。",
      ],
      ["獨特對手", "每名對手都有自己的個性、房間、音樂與對話。"],
      ["技能卡", "偷看、交換、強制 PASS；一次性技能卡能讓敗局出現轉機。"],
      ["三種結局", "共有三種結局，包含等待玩家發掘的隱藏真結局。"],
      ["收藏藝廊", "解鎖並重溫角色立繪、CG 與音樂，延伸周回遊玩的樂趣。"],
      ["隨時存檔", "五個手動存檔欄位，加上自動存檔。"],
      ["照你的方式玩", "完整支援鍵盤與滑鼠。"],
      ["三種語言", "支援英文、繁體中文與日文。"],
    ],
    characters: "各路牌客，各有不能攤在桌面上的理由。",
    downloadIntro:
      "DULAN 現已於 Windows 平台正式推出，售價 US$3.99。",
    shortTitle: "遊戲簡介",
    factsTitle: "基本資料",
    assetsTitle: "媒體素材",
    shotsTitle: "遊戲截圖",
    aboutTitle: "關於開發者",
    contactTitle: "聯絡方式",
    copyButton: "複製文字",
    assetLinkLabel: "在 Google Drive 開啟",
    short:
      "第一次玩大老二也沒關係。《賭爛》內建可跳過的新手教學，會用實際牌局帶玩家理解基本規則。單次流程約 10～30 分鐘，依遊玩方式而異。遊戲共有三種結局，包含隱藏真結局，並有角色、CG 與音樂鑑賞內容可解鎖。本作由台灣獨立開發者一人製作，支援英文、繁體中文與日文。",
    about:
      "ZeppelinTsai 是來自台灣的個人獨立開發者。DULAN 是其第一款商業作品，從設計、劇本到程式皆由一人從零完成，美術與音樂則運用 AI 輔助製作。",
    factLabels: [
      "遊戲名稱",
      "類型",
      "遊玩時間",
      "結局",
      "引擎",
      "平台",
      "價格",
      "語言",
      "發售日期",
      "商店頁面",
    ],
    factValues: [
      "DULAN",
      "劇情式大老二",
      "單次約 10～30 分鐘",
      "三種，包含隱藏真結局",
      "Phaser 3 + Vite + TypeScript，Electron 封裝",
      "Windows / itch.io",
      "US$3.99",
      "英文、繁體中文、日文",
      "2026年8月4日",
      "itch.io",
    ],
    footer: "ZeppelinTsai 製作的劇情式大老二遊戲。",
  },
  ja: {
    nav: ["ホーム", "ストーリー", "キャラクター", "システム", "ダウンロード"],
    label: "日本語",
    subtitle: "クソ賭け",
    tagline: "牌は切り直せる。人生は、そうはいかない。",
    heroEyebrow: "短編・周回型ストーリーカードゲーム",
    intro:
      "借金と度胸、そして配られた手札をめぐる、短編で何度も遊べる物語仕立ての大老二（Big Two）ゲーム。",
    buy: "itch.io で購入",
    trailer: "ゲームプレイを見る",
    pressKit: "プレスキットをダウンロード",
    pressKitHelp:
      "ロゴ、スクリーンショット、キャラクター画像、紹介文、トレーラー、ファクトシートを収録。",
    pageTitles: {
      story: "地下カジノ「賭爛」",
      characters: "卓を囲む者たち",
      system: "この手札で勝負する",
      download: "ダウンロード＆プレスキット",
    },
    storySeo:
      "秘密を抱えた地下カジノを舞台に、Big Twoで物語を紡ぐ短編ストーリーカードゲーム「DULAN」。",
    story: [
      "あなたの名は「不運のウー」。借金、失業、借金取りに追われ、コンビニのおでんすら一本多く取れない。追い詰められたあなたは、伝説の地下カジノ「賭爛」へ辿り着く。勝利するたび、生き延びる望みがつながる。敗北するたび、カジノの深みへと沈んでいく。",
      "DULANは、Big Twoのルールをそのままに、カードテーブルを中心とした冒険を描くストーリー重視のカードゲーム。立ちはだかる相手を倒し、人生を逆転するためにすべてを賭けろ。だが、あなたはまだ知らない……このカジノに隠された秘密を……。",
    ],
    storyKicker: "立ちはだかる相手を倒し、人生を逆転するためにすべてを賭けろ。",
    featureShort: [
      "物語で進む Big Two",
      "初心者でもすぐ遊べる",
      "1プレイ約10～30分",
      "3つの結末＋ギャラリー",
    ],
    storyCtaTitle: "カジノの奥に何が潜んでいるのか？",
    storyCtaText: "カードテーブルでしか見つけられない物語がある。",
    features: [
      [
        "そのままのルールで、ひとつの物語を",
        "Big Twoのルールはそのままに、カードテーブルを舞台にした物語を楽しめる。ローグライクでも、デッキ構築でもない。",
      ],
      [
        "Big Twoを知らなくても大丈夫",
        "初心者向けのチュートリアルを実戦形式で収録。不要ならスキップできる。",
      ],
      [
        "短時間で、何度でも",
        "1プレイ約10～30分。遊び方によって変化し、周回プレイにもぴったり。",
      ],
      ["個性的な対戦相手", "性格も、部屋も、音楽も、会話も、それぞれ違う。"],
      ["スキルカード", "覗き見、交換、強制パス。使い切りの一枚が劣勢を覆す。"],
      [
        "3種類のエンディング",
        "隠されたTrue Endingを含む、3つの結末を見届けよう。",
      ],
      [
        "アンロックギャラリー",
        "キャラクター、CG、音楽を解放して鑑賞。周回するほど楽しみが広がる。",
      ],
      ["セーブ機能", "手動セーブ5枠とオートセーブに対応。"],
      ["好きな操作で", "キーボードとマウスに完全対応。"],
      ["三言語対応", "英語、繁体字中国語、日本語。"],
    ],
    characters: "さまざまな勝負師。それぞれに、卓上では明かせない理由がある。",
    downloadIntro:
      "DULAN Windows版は好評配信中。価格は US$3.99。",
    shortTitle: "ショート紹介",
    factsTitle: "基本情報",
    assetsTitle: "メディア素材",
    shotsTitle: "スクリーンショット",
    aboutTitle: "開発者について",
    contactTitle: "お問い合わせ",
    copyButton: "文章をコピー",
    assetLinkLabel: "Google Driveで開く",
    short:
      "大老二（Big Two）を知らなくても大丈夫。DULANには、実戦形式で基本を学べるスキップ可能な初心者向けチュートリアルを収録。1プレイは遊び方により約10～30分。隠されたTrue Endingを含む3種類のエンディングと、キャラクター、CG、音楽を楽しめるギャラリーが周回プレイを盛り上げる。台湾の個人開発者が一人で制作し、英語、繁体字中国語、日本語に対応。",
    about:
      "ZeppelinTsaiは台湾を拠点に活動する個人インディー開発者。DULANは初の商業作品であり、企画、シナリオ、プログラムを一から手がけ、美術と音楽にはAI支援を活用している。",
    factLabels: [
      "タイトル",
      "ジャンル",
      "プレイ時間",
      "エンディング",
      "エンジン",
      "プラットフォーム",
      "価格",
      "対応言語",
      "発売日",
      "ストアページ",
    ],
    factValues: [
      "DULAN",
      "物語仕立ての Big Two",
      "1プレイ約10～30分",
      "3種類（隠しTrue Endingを含む）",
      "Phaser 3 + Vite + TypeScript、Electronパッケージ",
      "Windows / itch.io",
      "US$3.99",
      "英語、繁体字中国語、日本語",
      "2026年8月4日",
      "itch.io",
    ],
    footer: "ZeppelinTsaiが贈る、物語仕立ての Big Two。",
  },
} as const;

export function characters(lang: Lang) {
  return names[lang].map((name, i) => ({
    name,
    bio: bios[lang][i],
    number: String(i + 1).padStart(2, "0"),
  }));
}
export const pages: Page[] = [
  "home",
  "story",
  "characters",
  "system",
  "download",
];
