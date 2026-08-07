// Canonical project list rendered on /work and, per project, at /work/<slug>
// (see src/pages/work/index.astro and src/pages/work/[slug].astro). `stack`
// entries are curated from the tech already named in each project's own
// solution/challenge copy (not invented) and, where possible, match a key in
// techIcons.js so the case study page can render an icon next to the label.
export const categories = [
  {
    id: 'ai',
    icon: 'ri-brain-line',
    title: 'AI & LLM Products',
    blurb: 'RAG pipelines and multi-provider LLM orchestration shipped into production products.',
    items: [
      {
        slug: 'nebufit',
        mark: 'NF',
        name: 'NebuFit',
        metric: 'RAG · multi-LLM · SSE streaming',
        challenge:
          "Fitness apps lean on generic templates instead of adapting to a user's real body data, bloodwork, and progress, and users want conversational coaching rather than static charts.",
        solution:
          'Built computer-vision body analysis, AI-generated workout and nutrition plans, and bloodwork processing on a RAG system for contextual guidance, orchestrating multiple LLM providers (Claude + GPT-4o + ElevenLabs) with SSE streaming and automatic failover for resilient voice coaching, backed by full Stripe subscription and entitlement management.',
        impact:
          'Shipped a production-ready AI coaching platform that delivers personalized, real-time guidance with resilient uptime and monetization built in from day one.',
        stack: ['Claude API', 'GPT-4o', 'ElevenLabs', 'RAG', 'Stripe'],
      },
      {
        slug: 'creative-os',
        mark: 'CO',
        name: 'Creative OS',
        metric: 'Local-first · MCP server architecture',
        challenge:
          'Writers and filmmakers wanted AI assistance on screenplays and notes without sending unfinished creative work to the cloud, and without being locked into one fixed set of AI tools.',
        solution:
          'Built a local-first Electron/React desktop app that indexes Final Draft screenplays, PDFs, and notes via a RAG pipeline (ChromaDB + SQLite) for semantic search and Claude-powered rewriting, with an extensible MCP server architecture so Claude can reach indexed content and external tools through a typed protocol.',
        impact:
          'Gave writers AI-powered editing and search that never leaves their machine, with a tool ecosystem that grows without touching the core app.',
        stack: ['Electron', 'React', 'RAG', 'ChromaDB', 'SQLite', 'MCP', 'Claude API'],
      },
    ],
  },
  {
    id: 'enterprise',
    icon: 'ri-building-2-line',
    title: 'Enterprise & Desktop Platforms',
    blurb: 'Field-sales and desktop platforms built for real organisational scale.',
    items: [
      {
        slug: 'orient-champions',
        mark: 'OC',
        name: 'Orient Champions',
        metric: 'Thousands of daily batch scans · SAP ERP',
        challenge:
          'Orient Electronic needed a nationwide field-sales incentive program spanning a four-level hierarchy (National → Zone → Branch → FSM), with real-time sync into their existing SAP ERP — without disrupting agents working offline in the field.',
        solution:
          'Architected a Nest.js backend supporting thousands of daily batch scans with real-time SAP ERP sync via custom BAPIs/RFC, resilient offline queuing and reconciliation, JWT + Twilio OTP auth, and bulk Excel/CSV processing on AWS S3.',
        impact:
          'Delivered a nationwide platform on both the App Store and Google Play that keeps field agents productive offline and reconciles cleanly with SAP the moment they reconnect.',
        note: 'Client-attributed project — architecture and technical patterns discussed at a high level.',
        stack: ['Nest.js', 'SAP ERP / RFC', 'JWT', 'Twilio', 'AWS S3'],
      },
      {
        slug: 'unity-desktop-admin-portal',
        mark: 'UN',
        name: 'UNITY Desktop App & Admin Portal',
        metric: 'Medical organisation · confidential client',
        challenge:
          'A medical organisation (name withheld per client confidentiality) needed a desktop tool with role-based access and credential-managed auto-fill, paired with an admin portal giving staff live visibility into activity.',
        solution:
          'Built an Electron + Node.js desktop app with dynamic server-driven layouts, role-based access control, a credential manager, and script-injected auto-fill, paired with a Next.js + Nest.js admin web portal featuring real-time notifications via WebSockets.',
        impact:
          'Gave the client a secure, centrally-configurable desktop tool and a live admin view, without exposing any client-identifying details.',
        note: 'Confidential client — no screenshots or client name disclosed.',
        stack: ['Electron', 'Node.js', 'Next.js', 'Nest.js', 'WebSockets', 'Role-Based Access'],
      },
    ],
  },
  {
    id: 'mobile',
    icon: 'ri-smartphone-line',
    title: 'Mobile Applications',
    blurb: 'Cross-platform Flutter apps shipped to the App Store and Google Play.',
    items: [
      {
        slug: 'houzi',
        mark: 'HZ',
        name: 'Houzi',
        metric: '53K+ reach · 4.84★ · 500+ sales',
        challenge:
          'Houzez, a WordPress real estate theme used by 53,000+ site owners, had no companion mobile app — non-technical theme owners had no way to offer a native app experience without custom development.',
        solution:
          'Built Houzi, a Flutter real estate template app with Bloc state management and Clean Architecture, REST API integration, push notifications, in-app chat, and comments — plus the HouziBuilder desktop customisation platform and the Houzi-REST-API WordPress plugin.',
        impact:
          "Reached 53,000+ Houzez theme owners with a ready-made mobile solution, earning a 4.84★ rating, 500+ Envato sales, and 5,000+ Play Store downloads.",
        stack: ['Flutter', 'Bloc', 'Clean Architecture', 'REST APIs', 'WordPress Plugin'],
      },
      {
        slug: 'linked-golf',
        mark: 'LG',
        name: 'Linked Golf',
        metric: 'Deployed to App Store & Google Play',
        challenge:
          'A golf social and booking product needed real-time chat, payments, and push notifications working together without building each integration from scratch.',
        solution:
          'Built a Flutter app with real-time in-app chat via PubNub, Stripe payment integration, FCM push notifications, and an Express backend.',
        impact:
          'Shipped to both the App Store and Google Play as a complete golf social and booking experience.',
        stack: ['Flutter', 'PubNub', 'Stripe', 'FCM', 'Express'],
      },
      {
        slug: 'aniflex',
        mark: 'AF',
        name: 'Aniflex',
        metric: 'Fitness & gamification',
        challenge:
          'A fitness client wanted gamified progress tracking to keep users engaged with their workout routines, beyond a plain log of sets and reps.',
        solution:
          'Built a Flutter fitness and gamification app covering workout tracking, gamified progress milestones, and user achievements.',
        impact:
          'Delivered an engagement-first fitness app that turns routine tracking into a rewarding, achievement-driven experience.',
        stack: ['Flutter'],
      },
      {
        slug: 'exodus-app',
        mark: 'EX',
        name: 'Exodus App',
        metric: 'Full rebrand from Blue Sky (EPIC PC)',
        challenge:
          "EPIC PC needed the 'Blue Sky' app fully rebranded — new visual identity, theming, and store presence — without disrupting the underlying app.",
        solution:
          'Delivered a full visual and branding rebrand: theming, assets, navigation, and app-store metadata updated end-to-end in Flutter.',
        impact:
          'Relaunched the app under its new identity with a consistent look across every screen and store listing.',
        stack: ['Flutter'],
      },
      {
        slug: 'linked-home-ipt-force-fsf-ticket',
        mark: 'LH',
        name: 'Linked Home · IPT Force · FSF-Ticket',
        metric: 'Multiple delivered apps',
        challenge:
          'Three separate BooleanBites-era clients each needed a purpose-built Flutter app — property management, field operations, and support ticketing — on tight, parallel timelines.',
        solution:
          'Delivered three independent Flutter apps: Linked Home (property listing and management), IPT Force (field operations), and FSF-Ticket (support ticketing system).',
        impact:
          'Shipped three production apps across different domains using a consistent Flutter + REST + Firebase toolkit.',
        stack: ['Flutter', 'REST APIs', 'Firebase'],
      },
    ],
  },
  {
    id: 'web',
    icon: 'ri-global-line',
    title: 'Web & Desktop',
    blurb: 'Corporate sites and desktop tools built for performance and control.',
    items: [
      {
        slug: 'houzibuilder',
        mark: 'HB',
        name: 'HouziBuilder',
        metric: 'Drag-and-drop theme configurator',
        challenge:
          'Non-technical Houzi theme owners had no way to preview and configure typography, colours, and layout before publishing changes.',
        solution:
          'Built a desktop drag-and-drop theme configurator as a companion tool to the Houzi ecosystem.',
        impact:
          'Let theme owners self-serve visual changes with zero code, reducing back-and-forth support requests.',
        stack: ['Desktop', 'WordPress'],
      },
      {
        slug: 'techtiz-corporate-website',
        mark: 'TC',
        name: 'Techtiz Corporate Website',
        metric: 'Astro rebuild · performance & SEO',
        challenge:
          "Techtiz's corporate site needed better performance and SEO fundamentals than its previous stack could deliver.",
        solution:
          'Rebuilt the site fully in Astro, improving Core Web Vitals and structured metadata.',
        impact:
          'Faster first-load and stronger SEO fundamentals across the corporate site.',
        stack: ['Astro'],
      },
      {
        slug: 'attn-agency-homepage',
        mark: 'AA',
        name: 'ATTN Agency Homepage',
        metric: 'Go High Level native-element build',
        challenge:
          "ATTN wanted an agency homepage inside Go High Level without the constraints of its built-in page builder.",
        solution:
          'Built the homepage natively with custom CSS and HTML elements inside Go High Level, bypassing the external page builder entirely.',
        impact:
          'Full control over layout and performance within a platform that normally limits both.',
        stack: ['Go High Level', 'HTML', 'CSS'],
      },
    ],
  },
  {
    id: 'automation',
    icon: 'ri-flow-chart',
    title: 'Automation Systems',
    blurb: 'Building intelligent workflows and integrations that eliminate repetitive tasks and improve operational efficiency.',
    items: [
      {
        slug: 'lead-response-automation',
        mark: 'LR',
        name: 'Lead Response Automation — United Global Vanline',
        metric: 'Contact < 1 min · AI voice call < 2 min',
        challenge:
          'A US-based moving company was losing leads to slow response times — every minute of delay before first contact lowers conversion.',
        solution:
          'Built an n8n + Go High Level pipeline that contacts new leads within 1 minute and places an AI voice call within 2 minutes via Retell AI + Aloware, with OpenAI-based call scoring and fraud detection to route genuine leads and suppress junk.',
        impact:
          'Cut lead response time to under a minute with automatic quality filtering, built on n8n, Go High Level, and CloseBot.',
        stack: ['n8n', 'Go High Level', 'Retell AI', 'Aloware', 'OpenAI', 'CloseBot'],
      },
      {
        slug: 'agentc-job-discovery',
        mark: 'AG',
        name: 'AGENTC — Agentic Job Discovery Automation',
        metric: 'Daily verified leads before business hours',
        challenge:
          'Manually finding and verifying decision-maker contacts for outreach ate hours every morning before the sales team could start calling.',
        solution:
          'Built a daily n8n pipeline using Apify scrapers to discover matching contacts, ZeroBounce and Clearout Phone to validate emails and numbers, and Nocodb to dedupe against the existing CRM.',
        impact:
          'Delivers a ready-to-call, verified lead list before business hours every morning, automatically.',
        stack: ['n8n', 'Apify', 'ZeroBounce', 'Clearout Phone', 'Nocodb'],
      },
      {
        slug: 'capital-shack-ocr',
        mark: 'CS',
        name: 'Capital Shack — Document OCR Processing',
        metric: 'OCR bank statement extraction',
        challenge:
          'Extracting structured financial data from PDF bank statements by hand was slow and error-prone.',
        solution:
          'Built an OCR-based document processing pipeline in Google Apps Script that extracts structured data from bank statement PDFs and routes it downstream.',
        impact:
          'Automated bank statement data extraction, removing manual entry from the workflow.',
        stack: ['Google Apps Script', 'OCR'],
      },
      {
        slug: 'ramirez-legal-clickup-sync',
        mark: 'RL',
        name: 'Ramirez Legal Group — ClickUp Dashboard Sync',
        metric: 'Real-time case data sync',
        challenge:
          'The legal team and their clients had no single live view of case status — updates lived only inside ClickUp.',
        solution:
          'Built a Zapier + Emergent Labs pipeline that syncs ClickUp case data in real time to a client-facing dashboard.',
        impact:
          'Gave the legal team and clients one live view of case status with zero manual updates.',
        stack: ['Zapier', 'Emergent Labs', 'ClickUp'],
      },
      {
        slug: 'social-media-outreach-automation',
        mark: 'SM',
        name: 'Social Media & Outreach Automation',
        metric: 'Daily post scheduling · lead routing',
        challenge:
          'A client needed both a steady social content cadence and a way to keep sales focused on genuinely qualified inbound leads.',
        solution:
          'Built two n8n pipelines: one generates platform-specific captions on a schedule and auto-posts across channels; the other filters and validates inbound leads and routes qualified replies to sales via Slack.',
        impact:
          'Kept a consistent posting cadence while routing only qualified leads to the sales team.',
        stack: ['n8n', 'Slack'],
      },
    ],
  },
  {
    id: 'templates',
    icon: 'ri-layout-grid-line',
    title: 'Templates & Tools',
    blurb: 'Reusable FlutterFlow starter kits published to the marketplace.',
    items: [
      {
        slug: 'kumquat-talent-match',
        mark: 'KQ',
        name: 'Kumquat — Talent Match',
        metric: 'Published FlutterFlow Marketplace',
        challenge:
          'Recruitment and talent-matching apps needed a proven FlutterFlow starting point instead of being built from a blank canvas.',
        solution:
          'Published Kumquat, a FlutterFlow starter template with profile listings, filtering, and match request flows.',
        impact:
          'Published to the FlutterFlow Marketplace as a reusable starting point for talent-matching apps.',
        stack: ['FlutterFlow'],
      },
      {
        slug: 'foodii-recipe-book',
        mark: 'FB',
        name: 'Foodii — Recipe Book',
        metric: 'Published FlutterFlow Marketplace',
        challenge:
          'Recipe and meal-planning apps needed a clean, card-based starting point rather than a from-scratch build.',
        solution:
          'Published Foodii, a FlutterFlow starter template covering browsing, saving, and categorising recipes.',
        impact:
          'Published to the FlutterFlow Marketplace as a reusable recipe-app starting point.',
        stack: ['FlutterFlow'],
      },
    ],
  },
];

// Flattened list, in the same order categories/items are declared above —
// used to build /work/<slug> pages and their prev/next navigation.
export const allProjects = categories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat }))
);

export function getProjectBySlug(slug) {
  return allProjects.find((p) => p.slug === slug);
}
