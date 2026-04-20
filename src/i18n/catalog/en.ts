import type { MessageTree } from "./zh"

const en = {
  meta: {
    title: "Wuyin World",
    description: "Wuyin World — Oriental Martial Arts Metaverse. Ancient Soul, Future Core.",
  },
  common: {
    scrollExplore: "Scroll to explore",
    viewPassport: "View Wuyin Passport",
    playAudioGuide: "Play philosophy audio guide",
    readMore: "Learn More",
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
    heroTitle: "Summit of Zhi Ge — Narrative Space",
    heroLead:
      "A global youth martial seal grand ceremony—the first top-tier youth martial IP centered on martial virtue and reflective dialogue. Grounded in Wusheng lineage and Zhi Ge philosophy: youth seek the Way and forge character.",
    openScroll: "Go deeper",
    backHome: "Back to home",
    philosophy: {
      title: "Wusheng Mountain Lineage",
      p1: "Wusheng Mountain is China’s first named Wusheng Mountain, with triple scarcity. In 825, under Emperor Jingzong of Tang, Wusheng Palace was decreed, enshrining Jiang Ziya. The three transformations of the martial saint—Jiang Ziya, Guan Yu, Yue Fei—form one three-thousand-year thread.",
      p2: "Positioning: Wudang speaks yin-yang and Taiji; Wusheng Mountain speaks Zhi Ge as the heart of martial practice. Brand visuals center on the mountain silhouette, carved martial seal, and cinnabar characters for Zhi Ge. Palette: slate grey and cinnabar red.",
      concepts: {
        zhi: { char: "Zhi", label: "Blank" },
        ge: { char: "Ge", label: "Covenant" },
        yin: { char: "Yin", label: "Carving" },
      },
    },
    lineage: {
      title: "Three Transformations",
      lead: "One thread across three millennia—the succession of enshrinement and story that anchors Wusheng Mountain’s cultural wholeness.",
    },
    characters: {
      c1: {
        name: "Jiang Ziya",
        role: "First Martial Saint · Enshrined",
        blurb: "Wusheng Palace decreed in the Tang: Jiang Ziya as chief deity. Strategy and humane wisdom mark the source of “martial” in Chinese lineage.",
        alt: "Atmospheric Wusheng Mountain scene (lineage motif)",
      },
      c2: {
        name: "Guan Yu",
        role: "Middle Martial Saint · Loyalty",
        blurb: "A pillar of the martial-saint arc: loyalty and integrity show that martial practice is bound to virtue and faith, not only technique.",
        alt: "Atmospheric Wusheng Mountain scene (loyalty motif)",
      },
      c3: {
        name: "Yue Fei",
        role: "Later Martial Saint · Devotion",
        blurb: "The thread extends to duty and country: wholehearted devotion carries the spirit of Zhi Ge and protection of the people.",
        alt: "Atmospheric Wusheng Mountain scene (landscape motif)",
      },
    },
    heritage: {
      title: "Tracing & Intangible Heritage",
      p1: "Scholars, masters, and explorers document the real terrain and story—building trust and narrative before the finals.",
      p2: "Heritage shown in bearing, cultivation in detail. Deeply integrating cultural symbols like Longquan swords, silk, and oil-paper umbrellas with the martial spirit.",
      items: {
        sword: "Longquan Sword",
        silk: "Hangzhou Silk",
        umbrella: "Heritage Umbrella",
      },
    },
    inheritance: {
      title: "Inheritance",
      lead: "Let martial virtue become a power to be heard and debated. Youth seek the Way, possessing not only strength but also character.",
      ctaVideo: "Watch Documentary",
      ctaInterview: "Interviews",
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
      title: "Participation Tiers",
      subtitle: "Official ticketing and study tour pricing subject to official announcement.",
      ethNote: "Price · Placeholder only",
      standard: {
        name: "Observer",
        desc: "Standard seating with a vibrant atmosphere.",
        price: "From ¥ 280",
        feat1: "Designated viewing area",
        feat2: "Event souvenir materials",
        cta: "Learn More",
        alert: "This is a placeholder, not a real purchase.",
      },
      vip: {
        name: "VIP",
        desc: "Front-row interaction with exclusive souvenir packs.",
        price: "¥ 1,280",
        badge: "Recommended",
        badgeAria: "Recommended tier",
        feat1: "Priority interactive seating",
        feat2: "Limited edition gift set",
        feat3: "Extended event invitations",
        cta: "Consult Now",
        alert: "This is a placeholder, not a real purchase.",
      },
      metaverse: {
        name: "Metaverse",
        desc: "Global live stream with 360° immersive views.",
        price: "¥ 99",
        feat1: "Online reading / Streaming",
        feat2: "Digital participation certificate",
        cta: "Notify Me",
        alert: "This is a placeholder.",
      },
    },
    venue: {
      kicker: "2026 Hangzhou Debut",
      title: "Venue Perspective Preview",
      timeLabel: "Time",
      timeValue: "2026.05.20",
      locationLabel: "Location",
      locationValue: "Hangzhou · Little Lotus",
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
   pavilion: {
    hero: {
      kicker: "Ecosystem",
      title: "Wuyin Pavilion",
      lead: "Presenting six entities and ecosystem loops to build trust.",
    },
    synergy: {
      title: "Six-in-One Synergy Map",
      body: "Wuyin Pavilion acts as the brand hub, linking Wuyin Alliance, Kung Fu Yin, Wuyin Standard, Wuyin Media, and Wuyin Tourism to form a complete martial industry loop.",
      stats: {
        linkage: "Business Linkage",
        protection: "On-chain Protection",
      },
    },
    digital: {
      title: "Kung Fu Yin Digital Tech",
      lead: "Real-time data dashboard witnessing the power of the digital martial engine.",
      browserPreview: "NFT Asset Browser Preview",
      valuationCurve: "RWA Valuation Curve",
    },
    standard: {
      title: "Wuyin Standard Certification",
      lead: "Rigorous certification system for martial artists, referees, and clubs.",
      certSystem: "Certificate Verification System",
      certInputHint: "Enter martial artist/referee/club ID",
      verifyCta: "Verify Now",
      verifying: "Verifying...",
      certTitle: "Wuyin Official Certificate",
      certHolder: "Holder",
      certType: "Certification Type",
      closePreview: "Close Preview",
    },
    media: {
      title: "Wuyin Media & IP Ops",
      lead: "Immersive content ecosystem including documentaries, podcasts, and film collaborations, plus global asset licensing.",
      downloadWhitepaper: "Download Whitepaper",
      visitMediaLibrary: "Visit Media Library",
    },
  },
  partnership: {
    hero: {
      kicker: "Enterprise Gate",
      title: "Partnership Portal",
      lead: "Unified entry for commercial cooperation, reaching global partners.",
    },
    domains: {
      title: "Strategic Domains",
      lead: "Diverse cooperation models empowering the new martial industry ecosystem.",
      items: {
        brand: { title: "Brand Alliance", body: "Sponsor benefit packages, digital medals, and co-branding." },
        event: { title: "Event Partnership", body: "Wuyin standard output, event hosting empowerment, and point systems." },
        club: { title: "Club Franchise", body: "City alliance policies, joining guides, and professional athlete pipelines." },
        gov: { title: "Gov / Tourism", body: "City branding, tourism integration, and offline complex development." },
        invest: { title: "Investment", body: "Business plans, financing portals, and industrial capital linkage." },
        media: { title: "Media Collab", body: "Media matrix construction, content co-creation, and KOL engagement." },
      },
    },
    flow: {
      title: "Cooperation Flow",
      lead: "Clear and transparent stages for efficient value creation.",
      steps: {
        s1: { label: "Apply Online", desc: "Submit basic cooperation needs" },
        s2: { label: "Review", desc: "Dedicated team one-on-one follow-up" },
        s3: { label: "Signing", desc: "Establish strategic partnership" },
        s4: { label: "Execution", desc: "Full ecosystem resource integration" },
      },
    },
    form: {
      title: "Partnership Application",
      lead: "Please fill out the form below, and we will contact you within 2 business days.",
      company: "Company Name",
      contact: "Contact Person",
      intent: "Cooperation Intent",
      desc: "Detailed Needs",
      submit: "Submit Application",
      options: {
        brand: "Brand Sponsor",
        event: "Event Hosting",
        invest: "Investment Inquiry",
        media: "Media Collab",
        other: "Other",
      },
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

