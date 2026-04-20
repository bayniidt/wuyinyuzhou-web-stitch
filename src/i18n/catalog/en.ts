import type { MessageTree } from "./zh";

const en = {
  meta: {
    title: "Wuyin World",
    description: "Wuyin World — Eastern martial metaverse gala. Ancient Soul, Future Core.",
  },
  nav: {
    groups: {
      ecosystem: {
        label: "Home",
        items: {
          hero: { label: "Main Entry", description: "Welcome to Wuyin World!" },
          manifesto: { label: "Wuyin Manifesto", description: "Core brand values" },
          values: { label: "Value Pillars", description: "Culture, Tech, Finance" },
          matrix: { label: "Ecosystem Matrix", description: "Wuyin Pavilion, Alliance, etc." },
          news: { label: "Latest Updates", description: "Announcements and reports" },
          questions: { label: "Wuyin Inquiry", description: "Self, World, Universe" },
        },
      },
      narrative: {
        label: "Wuyin Universe",
        items: {
          map: { label: "Universe Map", description: "3D interactive world map" },
          philosophy: { label: "Philosophy", description: "Stop, Spear, Seal concepts" },
          lineage: { label: "Lineage", description: "Masters and virtual guardians" },
          heritage: { label: "Heritage Fusion", description: "Traditional crafts & Wuyin" },
          inheritance: { label: "Inheritance", description: "Youth martial arts & modern combat" },
        },
      },
      timeline: {
        label: "Wuyin Sight",
        items: {
          overview: { label: "Event Overview", description: "Tickets & Hangzhou 2026" },
          theater: { label: "Ritual Theater", description: "The 36 Steps & Covenants" },
          roster: { label: "Roster", description: "Athlete profiles & records" },
          mecha: { label: "Mecha Boxing", description: "Robotics & Man-Machine combat" },
          fashion: { label: "Heritage Fashion", description: "Guochao combat wear" },
          history: { label: "History", description: "Past event highlights" },
        },
      },
      pavilion: {
        label: "Wuyin Pavilion",
        items: {
          synergy: { label: "Synergy Map", description: "Interactive ecosystem diagram" },
          ip: { label: "IP Operations", description: "Global asset management" },
          alliance: { label: "Alliance Management", description: "League rules and calendar" },
          digital: { label: "Digital Tech", description: "NFT, RWA and Metaverse" },
          standard: { label: "Standardization", description: "Certification system" },
          media: { label: "Media Ecosystem", description: "Content and distribution" },
          tourism: { label: "Tourism & Travel", description: "Offline flagships" },
        },
      },
      partnership: {
        label: "Partnership",
        items: {
          brand: { label: "Brand", description: "Sponsors and co-branding" },
          event: { label: "Event", description: "Hosting and empowerment" },
          club: { label: "Club", description: "League policies and joining" },
          gov: { label: "Gov/Tourism", description: "City branding and integration" },
          invest: { label: "Investment", description: "Business plans and funding" },
          media: { label: "Media", description: "KOLs and content co-creation" },
          form: { label: "Application Form", description: "Full routing application" },
        },
      },
    },
  },
  header: {
    logoShort: "Wuyin",
    logoWide: "World",
    logoAlt: "Wuyin World · The Wuverse",
    ariaMainNav: "Main navigation",
    ariaLangGroup: "Interface language",
    ariaLangZh: "Switch to Chinese",
    ariaLangEn: "Switch to English",
    langShortZh: "中",
    langShortEn: "EN",
    ariaUser: "User (placeholder)",
    wallet: "Connect Wallet",
    walletShort: "Wallet",
    connectWalletAria: "Connect wallet (placeholder)",
    menu: "Menu",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuCloseBackdrop: "Close menu backdrop",
    ariaMobileNav: "Mobile navigation",
    walletAlert: "Wallet connect is a demo placeholder. Production will use an on-chain connector.",
  },
  footer: {
    brand: "Wuyin World",
    tagline: "The digital born real.",
    legalSupport: "Legal & Support",
    copyrightLine: "WUYINWORLD. THE DIGITAL BORN REAL.",
    demoNote: "Static demo · Content can be replaced anytime",
    legal: {
      terms: "Terms of Service",
      privacy: "Privacy Protocol",
      whitepaper: "Whitepaper",
      support: "Support",
    },
  },
  home: {
    hero: {
      kicker: "Source of Zhi Ge · Path of Youth",
      title: "Wusheng Mountain: Summit of Zhi Ge",
      subtitle: "Global Youth Martial Seal Grand Ceremony",
      ctaCompetition: "Book the competition",
      ctaPartner: "Become a partner",
      videoSegment1: "Segment one",
      videoSegment2: "Segment two",
      videoSwitcherLabel: "Switch hero background video",
    },
    manifesto: {
      title: "Core Positioning",
      p1:
        "Wuyin Pavilion · Wusheng Mountain — Summit of Zhi Ge (止戈之巅) Global Youth Martial Seal Grand Ceremony is the world’s first top-tier youth martial IP centered on martial virtue and reflective dialogue. It steps off the crowded track of tricks, moves, and win/loss, and grounds itself in the Wusheng cultural lineage and the philosophy of Zhi Ge (stopping conflict) to build a cultural ceremony where young people seek the Way and forge character.",
      p2:
        "We compare not brute force but martial Way; not victory alone but breadth of mind; we select not only “masters” but youth who know when to stop. The project is not a mere tournament—it is a ceremony of youth seeking the Way. We do not train belligerence; we cast the backbone of those who know restraint. Values: to act when needed is ability; to refrain lightly is breadth of character.",
      quote:
        "More than combat, martial virtue; more than the seal, character. Come to Wusheng Mountain and cast a seal of your own. All martial Ways inquire at Wusheng.",
    },
    domains: {
      culture: {
        domainLabel: "Value 01",
        title: "IP Uniqueness",
        description:
          "China’s only native Wusheng Mountain IP—rare, open, culturally singular. Before the finals, the micro-documentary Tracing Wusheng Mountain sends scholars, masters, and explorers into the field to trace the authentic source of the martial Way.",
      },
      technology: {
        domainLabel: "Value 02",
        title: "Format Innovation",
        description:
          "The world’s first competitive frame for martial virtue across three tracks: martial demonstration (forms, weapons, artistic intent, power, breath, etiquette); self-defense under stress (bullying, conflict, danger—testing reaction, judgment, restraint, boundaries); Zhi Ge reflection (on-site prompts and impromptu answers on values, logic, compassion, breadth, and expression).",
      },
      finance: {
        domainLabel: "Value 03",
        title: "Ritual Immersion",
        description:
          "Three chapters of the seal: receive the blank—each youth gets a personal seal blank before the event, symbolizing uncarved intent; the covenant—at the summit, the Zhi Ge Covenant is read aloud with drones lighting the character 止; the carving—masters and abbots carve on site: one person, one seal, utterly unique.",
      },
    },
    ecosystem: {
      eyebrow: "Tracks and impact engines",
      title: "Sixfold Ecosystem Matrix",
      subtitle:
        "Six bands connect the three final tracks and three impact engines—from demonstration to pilgrimage and sealing—closing the loop of Summit of Zhi Ge.",
    },
    nftsTeaser: {
      title: "NFTs & Artifacts",
      body:
        "Digital seals and dojo contracts will carry identity, honor, and participation records. This v1 site is static; on-chain features will bridge wallets and minting here when live.",
      cta: "Notify me at launch",
    },
    timelineTeaser: {
      kicker: "Timeline",
      title: "Event rhythm at a glance",
      body:
        "Warm-up with Tracing Wusheng Mountain, global entry and city qualifiers, a three-day finals culture week, and the closing sealing ceremony—see the Timeline page for the full arc.",
    },
    newsTeaser: {
      kicker: "News",
      title: "Announcements & progress",
      viewAll: "View all",
      carouselRegionLabel: "Latest news carousel",
      carouselInstructions: "Continuous looping horizontal marquee; hover to pause.",
    },
    finalCta: {
      title:
        "In 2026, let the world see Chinese youth: strength with character; skill with a sense of the greater good.",
      cta: "Discover Summit of Zhi Ge",
    },
  },
  narrative: {
    heroKicker: "Wuyin Pavilion · Wusheng Mountain",
    heroTitle: "Summit of Zhi Ge — narrative space",
    heroLead:
      "A global youth martial seal grand ceremony—the first top-tier youth martial IP centered on martial virtue and reflective dialogue. Grounded in Wusheng lineage and Zhi Ge philosophy: youth seek the Way and forge character.",
    openScroll: "Go deeper",
    backHome: "Back to home",
    mapTitle: "Wusheng Mountain lineage",
    mapSubtitle: "Historical rarity · Cultural integrity · Native cultural tourism",
    mapPinObsidian: "Wusheng Palace (825 CE)",
    mapPinLeyline: "Zhi Ge as martial Way",
    mapP1:
      "Wusheng Mountain is China’s first named Wusheng Mountain, with triple scarcity. In 825, under Emperor Jingzong of Tang, Wusheng Palace was decreed, enshrining Jiang Ziya. The three transformations of the martial saint—Jiang Ziya, Guan Yu, Yue Fei—form one three-thousand-year thread. Myth lends gravity: Nezha levels peaks, Taibai sweeps dust, the Heng River divides the land.",
    mapP2:
      "Positioning: Wudang speaks yin-yang and Taiji; Wusheng Mountain speaks Zhi Ge as the heart of martial practice. Brand visuals center on the mountain silhouette, carved martial seal, and cinnabar characters for Zhi Ge; motifs include Nezha’s ring, Heng River ripples, and seal-script forms. Palette: slate grey and cinnabar red.",
    conceptsTitle: "Three chapters of the seal",
    zhiLabel: "The blank",
    zhiBody:
      "Each youth receives a personal seal blank before the event: uncarved intent, jade-in-the-rough—the first “unmarked seal” of the journey.",
    geLabel: "The covenant",
    geBody:
      "At the summit, the Zhi Ge Covenant is read before heaven and earth: drones paint the character 止 in light, turning oath into spectacle.",
    yinLabel: "The carving",
    yinBody:
      "Masters and abbots carve on site: one person, one seal—the knowable, touchable proof of restraint and backbone.",
    lineageTitle: "Three transformations of the martial saint",
    lineageLead:
      "One thread across three millennia—the succession of enshrinement and story that anchors Wusheng Mountain’s cultural wholeness.",
    fusionTitle: "Tracing the source · three tracks",
    fusionLead:
      "A documentary roots the narrative before the finals; three tracks test how martial virtue can be staged and witnessed.",
    covenant: {
      title: "Zhi Ge Covenant",
      preamble: "Youth swear; heaven and earth bear witness.",
      oathHead: "In the name of youth, I enter this covenant:",
      line1: "I bear arms to protect, not to bully.",
      line2: "I hold Zhi Ge in mind, not contention of strength.",
      line3: "I refine the self through martial arts, and anchor life in virtue.",
      line4: "I take the seal as proof, never to forget.",
    },
    lineage: {
      kenshin: {
        name: "Jiang Ziya",
        role: "First martial saint · Enshrined",
        blurb:
          "Wusheng Palace decreed in the Tang: Jiang Ziya as chief deity. Strategy and humane wisdom mark the source of “martial” in Chinese lineage.",
        portraitAlt: "Atmospheric Wusheng Mountain scene (lineage motif)",
      },
      ren: {
        name: "Guan Yu",
        role: "Middle martial saint · Loyalty",
        blurb:
          "A pillar of the martial-saint arc: loyalty and integrity show that martial practice is bound to virtue and faith, not only technique.",
        portraitAlt: "Atmospheric Wusheng Mountain scene (loyalty motif)",
      },
      goro: {
        name: "Yue Fei",
        role: "Later martial saint · Devotion",
        blurb:
          "The thread extends to duty and country: wholehearted devotion carries the spirit of Zhi Ge and protection of the people.",
        portraitAlt: "Atmospheric Wusheng Mountain scene (landscape motif)",
      },
    },
    fusionTiles: {
      divergent: {
        title: "Tracing Wusheng Mountain",
        text: "Scholars, masters, and explorers document the real terrain and story—building trust and narrative before the finals.",
      },
      inkWash: {
        title: "Martial demonstration",
        text: "Forms, weapons, artistic intent, power, breath, and etiquette—tradition shown in every detail of bearing.",
      },
      verifiable: {
        title: "Defense under stress",
        text: "Scenarios of bullying, clash, and danger test reaction, judgment, restraint, and boundary—protection made drillable.",
      },
      livingLore: {
        title: "Zhi Ge reflection",
        text: "On-site prompts and impromptu answers test values, logic, compassion, breadth, and voice—virtue made audible.",
      },
    },
  },
  timeline: {
    heroKicker: "2026 · Summit of Zhi Ge",
    heroTitle: "Event timeline",
    heroTitleAccent: " · Path to the seal",
    heroLead:
      "Outreach goals: 1B+ impressions, 300+ overseas outlets. Phases cover warm-up, entry, finals culture week, and the closing sealing ceremony.",
    viewRoadmap: "View phases",
    backHome: "Back to home",
    modules: {
      road: {
        kicker: "Event rhythm",
        title: "From warm-up to summit sealing",
        body:
          "Three months before: warm-up and documentary. Two months before: global entry and city qualifiers. Three days of finals as culture week. One closing day for the grand sealing ceremony. Key beats below.",
        imageAlt: "Wusheng Mountain and event atmosphere",
        statLine: "Goals: 1B+ impressions · 300+ overseas media (targets; subject to execution).",
        bullets: {
          b1: {
            title: "T-3 months · Warm-up",
            text: "Tracing Wusheng Mountain launches; the global Zhi Ge Youth call opens—narrative and reach rise together.",
          },
          b2: {
            title: "T-2 months · Entry",
            text: "Global registration, short-video submissions, and city qualifiers run in parallel to select finalists at Wusheng Mountain.",
          },
          b3: {
            title: "3-day finals · Culture week",
            text: "Demonstration, defense under stress, Zhi Ge reflection, summit forum, and cultural study tours in one immersive week.",
          },
          b4: {
            title: "1 closing day · Sealing ceremony",
            text: "Master carving, drone light, and summit investiture—one seal per person, ritual closed.",
          },
        },
      },
      manifesto: {
        kicker: "On-site experience",
        title: "Culture week, forum, pilgrimage loop",
        body:
          "Three engines: the global Zhi Ge Youth program with cloud covenant across schools; the Youth Inquiry forum (e.g. classicist × combat champion, psychologist × martial mentor, scholar × youth creator, livestreamed); Wusheng pilgrimage and cultural tourism—the flagship is a three-day seal camp (heritage walk, Heng River trek, martial experience, defense drills, seal carving workshop, summit investiture).",
        imageAlt: "Forum and study-tour atmosphere",
        statLine: "Brand line: Source of Zhi Ge, path of youth; all martial Ways inquire at Wusheng.",
      },
    },
    accessTiers: {
      title: "Participation tiers (sample)",
      subtitle: "Official ticketing and camp pricing TBA; sample UI only.",
      ethNote: "Price · placeholder",
      standard: {
        name: "Observer",
        desc: "Culture-week observation and basic keepsakes (sample).",
        feat1: "Designated observation",
        feat2: "Event memento",
        cta: "Learn more",
        alert: "Demo only—not real ticketing.",
      },
      vip: {
        name: "Deep access",
        desc: "Front interaction and limited physical set (sample).",
        badge: "Featured",
        badgeAria: "Featured tier",
        feat1: "Priority interaction",
        feat2: "Limited commemorative set",
        feat3: "Extended event invite",
        cta: "Book inquiry",
        alert: "Demo only—not real ticketing.",
      },
      metaverse: {
        name: "Cloud join",
        desc: "School cloud covenant and livestream tie-in (sample).",
        feat1: "Online reading / live",
        feat2: "Digital participation proof",
        cta: "Notify me",
        alert: "Demo placeholder.",
      },
    },
    roster: {
      title: "Dialogue matrix (sample)",
      filterAria: "Filter (placeholder)",
      filterAlert: "Filtering is a placeholder.",
      ghost: { name: "Classicist", role: "× Combat champion" },
      iron: { name: "Psychologist", role: "× Martial mentor" },
      neon: { name: "Scholar", role: "× Youth creator" },
      void: { name: "Zhi Ge youth", role: "Live questioner" },
    },
  },
  nfts: {
    portfolioKicker: "DIGITAL ASSETS PORTFOLIO",
    titleBefore: "Kung Fu",
    titleAccent: "Yin",
    lead:
      "Your collection of encrypted martial disciplines. Each Yin is a cryptographic vessel of ancient kinetic wisdom, anchored on the immutable scroll.",
    tvlLabel: "TOTAL VALUE LOCKED",
    tvlSub: "∞x 0x88...F2A1",
    filtersAria: "Filter artifacts",
    searchAria: "Search assets",
    searchPlaceholder: "Search assets…",
    viewDetails: "VIEW DETAILS",
    achievementsKicker: "ACHIEVEMENTS",
    achievementsTitle: "Digital Medals of Honor",
    achievementsBody: "Non-transferable soulbound tokens awarded for combat excellence and system contribution.",
    achPioneer: "SYSTEM PIONEER",
    achMaster: "GRAND MASTER",
    rank: "RANK",
    featuredKicker: "RONIN'S VALOR",
    featuredLine: "Awarded for 365 Days of Continuous Training",
    gradeTitle: "Grade System Protocol",
    gradeTitleAccent: "Grade",
    gradeTitleRest: " System Protocol",
    thLevel: "GRADE LEVEL",
    thPower: "MULTIPLIER",
    thBoost: "GOVERNANCE WEIGHT",
    thPrivilege: "MARKET PERKS",
    grades: {
      g1: { tier: "Common (0-20)", nft: "1.0x Base", strength: "Standard", price: "None" },
      g2: { tier: "Rare (21-60)", nft: "1.5x Kinetic", strength: "1.2x Vote", price: "5% Discount" },
      g3: { tier: "Epic (61-90)", nft: "2.2x Kinetic", strength: "2.0x Vote", price: "Early Access" },
      g4: { tier: "Legendary (91+)", nft: "6.0x Kinetic", strength: "Infinite Vote", price: "Zero Fees + Airdrops" },
    },
    filters: {
      all: "ALL DISCIPLINES",
      legendary: "LEGENDARY",
      rare: "RARE",
      common: "COMMON",
    },
    artifacts: {
      shadow: { title: "Shadow Gale", alt: "Shadow Gale collectible cover atmosphere" },
      iron: { title: "Iron Fist", alt: "Iron Fist collectible cover atmosphere" },
      void: { title: "Void Step", alt: "Void Step collectible cover atmosphere" },
      dragon: { title: "Dragon Breath", alt: "Dragon Breath collectible cover atmosphere" },
    },
    status: {
      mastery: "ACTIVE MASTERY",
      stored: "STORED IN DOJO",
      available: "AVAILABLE",
      locked: "LOCKED FOR VOTING",
    },
    rarity: {
      LEGENDARY: "LEGENDARY",
      RARE: "RARE",
      COMMON: "COMMON",
    },
    minting: {
      kicker: "FORGE YOUR LEGACY",
      title: "Minting Workshop",
      cta: "ENTER THE FORGE",
      forged: "ITEMS FORGED",
      nextBatch: "NEXT BATCH",
      proofTitle: "Immutable Proof of Origin",
      proofBody:
        "All Kung Fu Yin assets are cryptographically secured on the Wuyin Mainnet. Verify ownership and transaction history on the public ledger.",
      contractLabel: "CONTRACT ADDRESS",
      explorerAria: "View contract on block explorer (placeholder link)",
    },
  },
  partnership: {
    heroAlt: "Red illuminated chamber — partnership hero",
    kicker: "ENTERPRISE GATE",
    titleLine1: "Forge Your",
    titleLine2: "Alliance",
    lead:
      "Enter the high-performance ecosystem where traditional cultural wisdom meets mecha-precision technology. Build the next generation of B2B synergies.",
    ctaPrimary: "INITIALIZE PROTOCOL",
    ctaSecondary: "Review Blueprints",
    systemStatus: "SYSTEM STATUS",
    nodeLine: "Node: Wuyin-Mainnet",
    modulesKicker: "",
    modulesTitle: "Strategic Domains",
    modulesLead: "Select your sector to explore dedicated benefits and integration paths within the Ravin Portal.",
    matrixLabel: "R&D / PARTNERSHIP MATRIX 0.3",
    learnMore: "LEARN MORE",
    imperativeAlt: "Stone staircase through forest with light trail",
    uptimeValue: "99.9%",
    uptimeLabel: "UPTIME RELIABILITY",
    imperativeTitle1: "The Ecosystem",
    imperativeTitle2: "Imperative",
    domains: {
      brand: {
        title: "Brand",
        body: "Co-branding opportunities for luxury and lifestyle brands looking to leverage Zen Cyber aesthetics.",
      },
      event: {
        title: "Event",
        body: "Join our global circuit of offline experiences, from negotiation summits to tech expos.",
      },
      club: {
        title: "Club",
        body: "Establish local chapters or exclusive member circles powered by our decentralized stack.",
      },
      tourism: {
        title: "Cultural Tourism",
        body: "Integrate destination management with AR workflows and city-scale tech narratives.",
      },
      investment: {
        title: "Investment",
        body: "Venture capital and strategic financing for the expansion of the Wuyin digital infrastructure.",
      },
      media: {
        title: "Media",
        body: "Content distribution and strategic narrative development across multi-channel platforms.",
      },
    },
    imperativeItems: {
      reach: {
        title: "Global Reach",
        body: "Connect with high-net-worth audiences across three continents via our unified digital passport system.",
      },
      ip: {
        title: "Cultural IP",
        body: "Leverage exclusive heritage-backed assets digitized for the modern cyberpunk era.",
      },
      tech: {
        title: "Tech Empowerment",
        body: "Advanced blockchain and AI integration for transparent tracking and automated settlement.",
      },
    },
    form: {
      kicker: "ENTRY BRIDGE",
      title: "Initialize Partnership",
      alert: "Submission is a placeholder. Production flow will connect with the real intake system.",
      company: "COMPANY NAME",
      companyPh: "Enter company name",
      category: "ENTRY CATEGORY",
      contact: "CONTACT NAME",
      contactPh: "Your name",
      email: "CONTACT EMAIL",
      emailPh: "name@company.com",
      brief: "PARTNERSHIP BRIEF",
      briefPh: "Tell us your objective, expected scale, and preferred collaboration timeline.",
      consent: "I confirm the information is accurate and available for business routing.",
      submit: "SUBMIT REQUEST",
      optBrand: "Brand",
      optEvent: "Event",
      optClub: "Club",
      optInvestment: "Investment",
    },
  },
  news: {
    heroKicker: "Site & events",
    heroTitle: "Latest updates",
    heroLead:
      "Event milestones, press, and product notes will be collected here. The items below are demo placeholders—swap them for real releases anytime.",
    featuredTitle: "Featured",
    listTitle: "All updates",
    readMore: "Learn more",
    backHome: "Back to home",
    backToList: "Back to news",
    relatedLink: "Related link",
    tags: {
      announcement: "Announcement",
      event: "Event",
      media: "Media",
    },
  },
} satisfies MessageTree;

export default en;

