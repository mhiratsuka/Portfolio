export type Lang = "en" | "ja";

export const skills = [
  "TypeScript", "JavaScript",  "HTML/CSS",
  "React", "Next.js", "Vite", "Python", "C++", "PostgreSQL", "Computer Vision", "HCI",
  "Deep Learning", "Git", "Docker","Figma"
];

export const formId = "xlgqzvvd";

export const projects = [
		{
			slug: "student-academic-organizer",
			name: "Student-Friendly Academic Organizer",
      description: {
        en: "Student-Friendly Academic Organizer is an interactive prototype designed to help UBC students manage coursework, deadlines, and academic progress across multiple courses without feeling overwhelmed. Developed as part of CPSC 344: Human-Computer Interaction, the project addressed the challenge of academic information being spread across tools such as Canvas and Google Calendar. Our team brainstormed potential solutions and conducted user research with UBC students to better understand how they organize coursework and where existing tools fall short. Based on these findings, we explored features related to task prioritization, workload visibility, and progress tracking, and iteratively refined the interface through usability evaluation and prototyping in Figma. I also served as project manager, coordinating the team’s schedule and design process.",
        ja: "Student-Friendly Academic Organizerは、UBCの学生が複数の授業にまたがる課題や締切、学習の進捗を無理なく整理・管理できるようにすることを目的としたプロトタイプです。CPSC 344 (Human-Computer Interaction)のチームプロジェクトとして、CanvasやGoogle Calendarなど複数のツールに分散している学習情報を、より分かりやすく把握できるようにすることを課題として取り組みました。チームでは、UBCの学生を対象にユーザー調査を行い、普段どのように課題や予定を管理しているのか、既存のツールにどのような使いにくさがあるのかを分析しました。その結果をもとに、タスクの優先順位付け、課題量の見える化、進捗管理などの機能を検討し、ユーザビリティ評価を行いながらFigma上でデザインを繰り返し改善しました。また、私はプロジェクトマネージャーとして、チームのスケジュール調整や進行管理も担当しました。",
      },
			type: "Academic Project",
			tech: "Figma, HCI, User-Centered Design, Project Manager",
			image: "/projects/student-academic-organizer.png",
			github: undefined,
			privateRepo: false,
			link: "https://www.figma.com/make/2fGFycdskjCHW5Q2wB24bu/Academic-Organiser-Demo?code-node-id=0-6&p=f&t=9ZUvGwuJb6K07PbB-0&fullscreen=1",
		},
    {
			slug: "cpsc310-project",
			name: "InsightUBC Explorer",
			description: {
        en: "InsightUBC Explorer is a full-stack web application developed as part of CPSC 310: Introduction to Software Engineering at UBC. It allows users to process, explore, and query large UBC course datasets through an interactive web interface. The application includes a RESTful API for dataset ingestion and validation, as well as query functionality for filtering and sorting course data. Users can upload a ZIP dataset and explore historical course information, including department, course code, course title, year, instructor, and class average. Our team also extended the application with additional features such as course difficulty indicators, data visualizations, instructor grade statistics, and building information to make course data easier to understand and compare.",
        ja: "InsightUBC Explorerは、UBCの授業データを検索・分析できるフルスタックWebアプリケーションです。CPSC 310 (Introduction to Software Engineering) のチームプロジェクトとして開発しました。ZIP形式のデータセットをアップロードすると、学部、科目番号、科目名、年度、担当教員、クラス平均などの過去の授業情報を検索・絞り込みできます。バックエンドでは、データの取り込みや検証、検索処理を行うREST APIを実装しています。さらにチームでは、授業の難易度を把握しやすくする指標やグラフ表示、教員ごとの成績データ、建物情報などの機能も追加し、授業データをより分かりやすく比較・確認できるようにしました。",
      },
			type: "Academic Project",
			tech: "React, TypeScript, Node.js, Express.js, Material UI, Recharts, Vite, Mocha, Chai, Supertest, JSZip, Multer, parse5",
			image: "/projects/insight-ubc-explorer.png",
			github: undefined,
			privateRepo: true,
			link: "https://cpsc310-project.vercel.app/",
    }
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
    allProjects: "プロジェクト",
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
