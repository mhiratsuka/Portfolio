export type Lang = "en" | "ja";

export const skills = [
  "TypeScript", "JavaScript",  "HTML/CSS",
  "React", "Next.js", "Vite", "Python", "C++", "PostgreSQL", "Computer Vision", "HCI",
  "Deep Learning", "Git", "Docker","Figma"
];

export const formId = "xlgqzvvd";

export const projects = [
    {
      slug: "cpsc310-project",
      name: "CPSC 310 Project",
      tech: "TypeScript · React · Express · REST API",
      description: {
        en: "A full-stack course project developed for CPSC 310 at UBC.",
        ja: "UBCのCPSC 310で開発したフルスタックのコースプロジェクトです。",
      },
      detail: {
        en: "",
        ja: "",
      },

      // Repository exists, but cannot be publicly shared
      github: "",
      privateRepo: true,

      link: "https://cpsc310-project.vercel.app/",
      year: "2026",
    },

    {
      slug: "student-academic-organizer",
      name: "Student Academic Organizer",
      tech: "Figma · HCI · User-Centered Design · Project Manager",
      description: {
        en: "An academic planning tool designed as part of CPSC 344 Human-Computer Interaction.",
        ja: "CPSC 344 Human-Computer Interactionで設計した、学習計画を支援するAcademic Organizerです。",
      },
      detail: {
        en: "",
        ja: "",
      },

      // No GitHub repository for this project
      github: "",
      privateRepo: false,

      link: "https://www.figma.com/make/2fGFycdskjCHW5Q2wB24bu/Academic-Organiser-Demo?code-node-id=0-6&p=f&t=GlZJtC271HZ92oZU-0&fullscreen=1",
      year: "2026",
    },
  ];

  export const posts = [
    {
      slug: "zero-downtime-deployments",
      date: { en: "Jun 12, 2026", ja: "2026年6月12日" },
      title: {
        en: "Lorem Ipsum Post 01",
        ja: "Lorem Ipsum Post 01",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
    {
      slug: "rewriting-cli-in-rust",
      date: { en: "May 3, 2026", ja: "2026年5月3日" },
      title: {
        en: "Lorem Ipsum Post 02",
        ja: "Lorem Ipsum Post 02",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
    {
      slug: "reading-code",
      date: { en: "Mar 18, 2026", ja: "2026年3月18日" },
      title: {
        en: "Lorem Ipsum Post 03",
        ja: "Lorem Ipsum Post 03",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
    {
      slug: "postgres-jsonb",
      date: { en: "Jan 29, 2026", ja: "2026年1月29日" },
      title: {
        en: "Lorem Ipsum Post 04",
        ja: "Lorem Ipsum Post 04",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
    {
      slug: "go-concurrency-patterns",
      date: { en: "Nov 14, 2025", ja: "2025年11月14日" },
      title: {
        en: "Lorem Ipsum Post 05",
        ja: "Lorem Ipsum Post 05",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
    {
      slug: "burnout",
      date: { en: "Sep 2, 2025", ja: "2025年9月2日" },
      title: {
        en: "Lorem Ipsum Post 06",
        ja: "Lorem Ipsum Post 06",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
    {
      slug: "sqlite-in-production",
      date: { en: "Jul 18, 2025", ja: "2025年7月18日" },
      title: {
        en: "Lorem Ipsum Post 07",
        ja: "Lorem Ipsum Post 07",
      },
      excerpt: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      tag: { en: "Lorem", ja: "Lorem" },
      body: {
        en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        ja: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      },
    },
  ];

export const ui = {
  en: {
    nav: { about: "About", projects: "Projects", blog: "Blog", contact: "Contact" },
    back: "← Back",
    viewProject: "View project",
    sourceCode: "Source code",
    allProjects: "Projects",
    allBlogs: "All Posts",
    loadMore: "Load more",
    noMore: "You've reached the end",
    readMore: "Read post",
    contactTitle: "Contact",
    contactDesc:
      "I'm happy to connect and explore opportunities in any area of software development. Please feel free to reach out!",
    github: "https://github.com/mhiratsuka",
    linkedin: "https://www.linkedin.com/in/mhiratsuka",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Thank you! Your message has been sent. I'll get back to you within 2-3 business days.",
      placeholders: { name: "Your name", email: "your@email.com", message: "Tell me about your project, opportunity, or idea..." },
    },
    footer: { built: "Michika Hiratsuka"},
    hero: {
      greeting: "Hello, I'm",
      name: "Michika Hiratsuka",
      role: "Software Developer",
      description:
        "Experienced in building web applications using technologies including TypeScript and React",
      cta: "View my work",
      contact: "Get in touch",
    },
    about: {
      title: "About",
      bio1:
      "I'm a software developer pursuing a second degree in Computer Science at UBC, with an academic background in psychology and education. I have professional experience in software development in Japan and Canada.",
      bio2:
      "In 2024, I returned to university to study the foundations of computer science in a structured way. I am particularly interested in computer vision and human-computer interaction (HCI). ",
      bio3:
      "Having cared for a variety of small animals and enjoyed gardening since childhood, and continuing to grow vegetables at home, I am also interested in how technology can be applied in agriculture and environmental fields. Drawing on my interdisciplinary background, I hope to develop thoughtful, human-centred technologies and contribute to solving real-world problems.",
      skills: "Skills & Interests",
    },
  },
  ja: {
    nav: { about: "自己紹介", projects: "プロジェクト", blog: "ブログ", contact: "お問い合わせ" },
    back: "← 戻る",
    viewProject: "プロジェクトを見る",
    sourceCode: "ソースコード",
    allProjects: "プロジェクト一覧",
    allBlogs: "全記事",
    loadMore: "もっと見る",
    noMore: "最後まで読みました",
    readMore: "記事を読む",
    contactTitle: "お問い合わせ",
    contactDesc:
      "ソフトウェア開発の幅広い分野に関心があり、新しいことにも積極的に挑戦したいと考えています。ぜひお気軽にご連絡ください!",
    github: "https://github.com/mhiratsuka",
    form: {
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信",
      sending: "送信中...",
      success: "お問い合わせありがとうございます。内容を確認のうえ、2〜3営業日以内に返信いたします。",
      placeholders: { name: "お名前", email: "your@email.com", message: "ご相談やお問い合わせ内容をご記入ください。" },
    },
    footer: { built: "Michika Hiratsuka"},
    hero: {
      greeting: "こんにちは",
      name: "Michika Hiratsuka",
      role: "Software Developer",
      description:
        "TypeScriptやReactをはじめとする技術を用いたWebアプリケーション開発の経験があります。",
      cta: "実績を見る",
      contact: "お問い合わせ",
    },
    about: {
      title: "自己紹介",
      bio1: "ソフトウェア開発者としての実務経験を持ち、現在はバンクーバーのブリティッシュコロンビア大学でComputer Scienceを学んでいます。心理学と教育学の学位を取得後、日本とカナダでソフトウェア開発に携わってきました。",
      bio2: "2024年に、コンピュータサイエンスを基礎から体系的に学ぶため、大学での学びを再開しました。特にコンピュータビジョンとHCI(ヒューマン・コンピュータ・インタラクション)に関心があります。",
      bio3: "幼い頃から小動物の飼育や園芸に親しみ、現在も家庭菜園を楽しんでいることから、農業や環境分野におけるテクノロジーの活用にも関心を持っています。これまでの分野横断的な経験を生かし、人を中心に考えた技術の開発と、実社会の課題解決に取り組みたいと考えています。",
      skills: "スキル・関心分野",
    },
  },
};
