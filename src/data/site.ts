export const langs = ['en', 'zh-tw', 'ja'] as const;
export type Lang = typeof langs[number];
export type Page = 'home' | 'story' | 'characters' | 'system' | 'download';

const names = {
  en: ['Hardluck Wu','Dopey Dan','Cash King','Snitch Sally','Old Slick','Mr. Ascend'],
  'zh-tw': ['伍告雖','大添斌','金拜嘉','爪琶梓','佬尤調','游登昇'],
  ja: ['不運のウー','ドジ平','成金太郎','チクリ姫','古狸','昇堂'],
};
const bios = {
  en: [
    'A man buried in debt, walking into the one place that might change everything.',
    'Low intelligence, big appetite, oddly hard to underestimate.',
    'Gaudy, loud, and utterly convinced money makes him untouchable.',
    'Sweet smile, sharper motives.',
    "An old fox who's seen everyone fall — and stayed seated anyway.",
    'Polished, composed, and always in control. Or so it seems.',
  ],
  'zh-tw': [
    '一個負債累累的男人，走進了唯一可能翻轉人生的地方。',
    '智商不高、食量驚人，卻莫名讓人不敢小看。',
    '浮誇又聒噪，深信有錢就能無所不能。',
    '笑容甜美，居心更深。',
    '見慣了眾人起落的老狐狸，自己卻始終穩坐牌桌。',
    '溫文儒雅、遊刃有餘——至少表面上是如此。',
  ],
  ja: [
    '借金にまみれた男が、人生を変えるかもしれない場所へ足を踏み入れる。',
    '頭は弱いが、食欲だけは人一倍。なぜか侮れない。',
    '派手で騒がしく、金さえあれば無敵だと信じている。',
    '甘い笑顔の裏に、鋭い企み。',
    '誰もが倒れるのを見てきた老狐は、それでも席を立たない。',
    '洗練され、常に冷静――少なくとも、表向きは。',
  ],
};

export const copy = {
  en: {
    nav:['Home','Story','Characters','System','Download'], label:'English', subtitle:'Rigged', tagline:'Shuffle the cards. Not your life.',
    intro:'A story-driven Big Two game about debt, nerve, and the hand you were dealt.', buy:'Get it on itch.io', trailer:'Watch trailer',
    pageTitles:{story:'The invitation',characters:'Faces at the table',system:'Play the hand',download:'Download & Press Kit'},
    story:[
      'You are Hardluck Wu — drowning in debt, unemployed, hunted by collectors. One invitation leads you into DULAN, a legendary underground casino where every victory buys another chance to survive, and every loss might cost you everything.',
      'DULAN is built around a simple question: could a traditional card game carry an entire story? Rather than reinventing Big Two (Chinese Poker) with roguelike mechanics or deckbuilding systems, this game keeps the familiar rules exactly as they are — and wraps a complete narrative adventure around them.'
    ],
    storyKicker:'One invitation. Five opponents. No easy way out.',
    featureShort:['Story-driven Big Two','Five unforgettable opponents','Multiple endings to discover','One-time-use skill cards'],
    features:[
      ['The original rules, with a story','A story-driven Big Two campaign that keeps the familiar rules intact — no roguelike systems, no deckbuilding.'],
      ['Five distinct opponents','Every opponent has their own personality, room, music, and dialogue.'],
      ['Skill cards','One-time-use peek, swap, and force-pass cards can turn a losing hand around.'],
      ['Your choices matter','A branching story with multiple endings to discover.'],
      ['Unlockable gallery','Revisit unlocked character art, CGs, and music.'],
      ['Save your game','Five manual save slots plus auto-save.'],
      ['Play your way','Full keyboard, mouse, and controller support.'],
      ['Three languages','English, Traditional Chinese, and Japanese.'],
    ],
    characters:'Six players. Six reasons to keep your cards close.',
    downloadIntro:'Enter DULAN on Windows. Launch price US$2.99; regular price US$3.99.',
    shortTitle:'Short description', factsTitle:'Key facts', assetsTitle:'Media assets', shotsTitle:'Screenshots', aboutTitle:'About the developer', contactTitle:'Contact', copyButton:'Copy text', coming:'Asset coming soon',
    short:'DULAN is a story-driven Big Two (Chinese Poker) game. Buried in debt, you enter an underground casino and face five distinct opponents, each with their own personality, room, music, and dialogue. Instead of reinventing Big Two with roguelike or deckbuilding mechanics, DULAN keeps the original rules intact and wraps a full narrative adventure around them. One-time-use skill cards can turn a losing hand around, and how you play determines the ending you discover. Built solo in Taiwan, DULAN supports English, Traditional Chinese, and Japanese, with full controller support.',
    about:'ZeppelinTsai is a solo indie developer based in Taiwan. DULAN is their first commercial release — designed, written, and programmed from the ground up, with AI-assisted art and music.',
    factLabels:['Title','Genre','Engine','Platform','Price','Languages','Release date','Store page'], factValues:['DULAN','Story-driven Big Two','Phaser 3 + Vite + TypeScript, packaged via Electron','Windows / itch.io','US$3.99 (launch offer US$2.99)','English, Traditional Chinese, Japanese','To be announced','itch.io'],
    spoiler:'Non-spoiler only — do not include ending CG', footer:'A story-driven Big Two game by ZeppelinTsai.',
  },
  'zh-tw': {
    nav:['首頁','故事','人物','系統','下載'], label:'繁體中文', subtitle:'賭爛', tagline:'洗的是牌，不是你的人生。',
    intro:'一款關於債務、膽識與命運手牌的劇情式大老二遊戲。', buy:'前往 itch.io', trailer:'觀看預告',
    pageTitles:{story:'那封邀請函',characters:'牌桌上的眾人',system:'打好這手牌',download:'下載與媒體資料'},
    story:['你是伍告雖——負債累累、失業在家，還被討債人窮追不捨。一封邀請函，將你帶進傳說中的地下賭場 DULAN。在這裡，每一次勝利都能替你換來一線生機；每一次落敗，都可能讓你失去一切。','DULAN 從一個單純的問題出發：傳統牌類遊戲，能不能撐起一整段故事？遊戲沒有用 roguelike 或牌組構築系統重新發明大老二，而是完整保留玩家熟悉的規則，再讓一場完整的敘事冒險圍繞牌桌展開。'],
    storyKicker:'一封邀請函。五名對手。沒有輕鬆的退路。', featureShort:['劇情式大老二','五名令人難忘的對手','等待發掘的多重結局','一次性技能卡'],
    features:[['原汁原味的規則，一段完整故事','保留熟悉的大老二玩法，以劇情推動整段旅程——沒有 roguelike，也不用組牌。'],['五名獨特對手','每名對手都有自己的個性、房間、音樂與對話。'],['技能卡','偷看、交換、強制 PASS；一次性技能卡能讓敗局出現轉機。'],['你的選擇有分量','分歧劇情與等待玩家親自發掘的多重結局。'],['收藏藝廊','解鎖並重溫角色立繪、CG 與音樂。'],['隨時存檔','五個手動存檔欄位，加上自動存檔。'],['照你的方式玩','完整支援鍵盤、滑鼠與控制器。'],['三種語言','支援英文、繁體中文與日文。']],
    characters:'六名牌客，各有不能攤在桌面上的理由。', downloadIntro:'Windows 版登上 DULAN。首發優惠 US$2.99，原價 US$3.99。',
    shortTitle:'遊戲簡介',factsTitle:'基本資料',assetsTitle:'媒體素材',shotsTitle:'遊戲截圖',aboutTitle:'關於開發者',contactTitle:'聯絡方式',copyButton:'複製文字',coming:'素材即將提供',
    short:'DULAN 是一款劇情式大老二遊戲。負債累累的你踏入地下賭場，迎戰五名個性、房間、音樂與對話都截然不同的對手。遊戲不以 roguelike 或牌組構築重新發明大老二，而是完整保留原版規則，讓一場完整的敘事冒險在牌桌上展開。一次性技能卡能讓敗局出現轉機，而你的打法也將帶你走向不同結局。本作由台灣獨立開發者一人製作，支援英文、繁體中文、日文與完整控制器操作。',
    about:'ZeppelinTsai 是來自台灣的個人獨立開發者。DULAN 是其第一款商業作品，從設計、劇本到程式皆由一人從零完成，美術與音樂則運用 AI 輔助製作。',
    factLabels:['遊戲名稱','類型','引擎','平台','價格','語言','發售日期','商店頁面'], factValues:['DULAN','劇情式大老二','Phaser 3 + Vite + TypeScript，Electron 封裝','Windows / itch.io','US$3.99（首發優惠 US$2.99）','英文、繁體中文、日文','待公布','itch.io'],
    spoiler:'僅限無劇透內容——請勿放入結局 CG',footer:'ZeppelinTsai 製作的劇情式大老二遊戲。',
  },
  ja: {
    nav:['ホーム','ストーリー','キャラクター','システム','ダウンロード'], label:'日本語', subtitle:'クソ賭け', tagline:'切るのはカードだけ。人生じゃない。',
    intro:'借金と度胸、そして配られた手札をめぐる、物語仕立ての大富豪ゲーム。',buy:'itch.io で入手',trailer:'トレーラーを見る',
    pageTitles:{story:'招待状',characters:'卓を囲む者たち',system:'この手札で勝負する',download:'ダウンロード＆プレスキット'},
    story:['あなたは不運のウー――借金まみれで職もなく、取り立て屋に追われる身。一通の招待状に導かれ、伝説の地下カジノ「DULAN」へ足を踏み入れる。勝てば生き延びるチャンスが増え、負ければすべてを失うかもしれない。','DULANが挑むのは、ひとつの素朴な問いだ。昔ながらのカードゲームだけで、物語を最後まで描けるのか？ 大富豪をローグライクやデッキ構築に作り変えるのではなく、馴染みあるルールはそのままに、一篇の物語を卓上で紡いでいく。'],
    storyKicker:'一通の招待状。五人の相手。簡単な逃げ道はない。',featureShort:['物語で進む大富豪','忘れられない五人の対戦相手','自分で見つける複数の結末','使い切りのスキルカード'],
    features:[['そのままのルールで、ひとつの物語を','おなじみの大富豪を物語仕立てで楽しむ。ローグライクでも、デッキ構築でもない。'],['五人の個性的な対戦相手','性格も、部屋も、音楽も、会話も、それぞれ違う。'],['スキルカード','覗き見、交換、強制パス。使い切りの一枚が劣勢を覆す。'],['選択が道を分ける','分岐する物語と、自分の手で見つける複数の結末。'],['アンロックギャラリー','キャラクター、CG、音楽を解放して鑑賞。'],['セーブ機能','手動セーブ5枠とオートセーブに対応。'],['好きな操作で','キーボード、マウス、コントローラーに完全対応。'],['三言語対応','英語、繁体字中国語、日本語。']],
    characters:'六人の勝負師。手の内を隠す理由も、六つ。',downloadIntro:'Windows版 DULAN。発売記念価格 US$2.99、通常価格 US$3.99。',
    shortTitle:'ショート紹介',factsTitle:'基本情報',assetsTitle:'メディア素材',shotsTitle:'スクリーンショット',aboutTitle:'開発者について',contactTitle:'お問い合わせ',copyButton:'文章をコピー',coming:'素材は準備中です',
    short:'DULANは、物語仕立ての大富豪ゲーム。借金まみれのあなたは地下カジノへ足を踏み入れ、性格も、部屋も、音楽も、会話も異なる五人の相手と勝負する。ローグライクやデッキ構築に作り変えることなく、おなじみのルールをそのままに、一篇の物語を卓上で描く。使い切りのスキルカードが劣勢を覆し、プレイの選択が異なる結末へ導いていく。台湾の個人開発者が一人で制作。英語、繁体字中国語、日本語、コントローラー操作に対応。',
    about:'ZeppelinTsaiは台湾を拠点に活動する個人インディー開発者。DULANは初の商業作品であり、企画、シナリオ、プログラムを一から手がけ、美術と音楽にはAI支援を活用している。',
    factLabels:['タイトル','ジャンル','エンジン','プラットフォーム','価格','対応言語','発売日','ストアページ'],factValues:['DULAN','物語仕立ての大富豪','Phaser 3 + Vite + TypeScript、Electronパッケージ','Windows / itch.io','US$3.99（発売記念 US$2.99）','英語、繁体字中国語、日本語','未定','itch.io'],
    spoiler:'ネタバレなしのみ——エンディングCGは掲載禁止',footer:'ZeppelinTsaiが贈る、物語仕立ての大富豪。',
  }
} as const;

export function characters(lang: Lang){ return names[lang].map((name,i)=>({name,bio:bios[lang][i],number:String(i+1).padStart(2,'0')})); }
export const pages: Page[]=['home','story','characters','system','download'];
