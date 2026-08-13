// Canonical project list rendered on /work and, per project, at /work/<slug>
// (see src/pages/work/index.astro and src/pages/work/[slug].astro). `stack`
// entries are curated from the tech already named in each project's own
// solution/challenge copy (not invented) and, where possible, match a key in
// techIcons.js so the case study page can render an icon next to the label.
// `challenge`/`solution`/`impact` stay short — they're what /work's category
// cards render. `challengeDetail`/`solutionDetail`/`impactDetail` are the
// fuller, multi-sentence versions used only by the /work/<slug> case study
// breakdown; `overview` (case-study only) is a separate 1-3 paragraph narrative.
// Optional `heroDescription`: a distinct hero-card summary, written separately
// from `overview` rather than reusing its first paragraph (the old default —
// still the fallback for any project without this field), so the hero isn't
// just a truncated duplicate of the Project Overview text sitting right below
// it on the same page. Optional `logo` (case-study hero fallback) and
// `screenshot` (a real product image, shown in place of the mark/name/metric
// tile on both /work's category card and the case-study hero — see
// hc-work__tile--logo in hc-shared.css) render wherever `.hc-work__tile` is
// used; screenshots.js's per-slug `hero` still wins over both on the case
// study page specifically, since it's the more detailed override.
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
        logo: '/assets/logos/nebufit.jpg',
        screenshot: '/assets/screenshots/nebufit/feature-mockup.png',
        metric: 'RAG · multi-LLM · SSE streaming',
        challenge:
          "Fitness apps lean on generic templates instead of adapting to a user's real body data, bloodwork, and progress, and users want conversational coaching rather than static charts.",
        solution:
          'Built computer-vision body analysis, AI-generated workout and nutrition plans, and bloodwork processing on a RAG system for contextual guidance, orchestrating multiple LLM providers (Claude + GPT-4o + ElevenLabs) with SSE streaming and automatic failover for resilient voice coaching, backed by full Stripe subscription and entitlement management.',
        impact:
          'Shipped a production-ready AI coaching platform that delivers personalized, real-time guidance with resilient uptime and monetization built in from day one.',
        challengeDetail:
          "Fitness apps overwhelmingly lean on generic templates instead of adapting to a user's real body composition, bloodwork results, and week-to-week progress — a one-size-fits-all plan doesn't account for someone's actual physiology or how their body responds to training. Users increasingly want conversational, coach-like guidance rather than static charts and spreadsheets: a real answer to a question about a stalled plateau, not just another dashboard. Any solution also had to hold up under the realities of AI infrastructure at scale, since a single LLM provider is a single point of failure, and a coaching product that drops mid-session erodes trust fast.",
        solutionDetail:
          "Built computer-vision body analysis that reads a user's physique from photos, feeding AI-generated workout and nutrition plans that adapt as that data changes. Bloodwork is processed through a RAG system so recommendations are grounded in a user's actual lab results rather than generic advice, with the whole experience delivered conversationally. Multiple LLM providers (Claude, GPT-4o, and ElevenLabs) are orchestrated together behind an SSE streaming layer for real-time, token-by-token responses, with automatic failover between providers keeping voice coaching sessions resilient if one provider drops. Full Stripe subscription and entitlement management is wired in natively rather than bolted on.",
        impactDetail:
          "Shipped a production-ready AI coaching platform that delivers personalized, real-time guidance grounded in each user's actual body data and bloodwork, rather than generic templates. Resilient multi-provider failover keeps voice coaching sessions from dropping, and Stripe-backed subscriptions mean monetization and entitlement management were built into the platform from day one — giving the product a complete, shippable path from AI pipeline to paying subscriber.",
        overview:
          "NebuFit set out to replace one-size-fits-all fitness templates with coaching that responds to a user's actual body data, bloodwork, and progress — rather than a fixed plan that ignores how an individual actually responds to training. Computer-vision body analysis reads a user's physique directly from photos, while bloodwork gets processed through a RAG system so nutrition and training recommendations stay grounded in real lab results instead of generic advice. The product is built to feel conversational throughout, giving users a coach to talk to rather than another dashboard of static charts.\n\nUnderneath that experience, multiple LLM providers — Claude, GPT-4o, and ElevenLabs — are orchestrated together behind an SSE streaming layer, so responses arrive token-by-token in real time instead of after a long wait. Automatic failover between providers keeps voice coaching sessions resilient even if one provider has an outage, which matters for a product where a dropped mid-session call would break trust fast.\n\nThe experience is delivered through a Flutter mobile app backed by a Nest.js and TypeScript API, keeping the client and server on a consistent, type-safe foundation. Subscription access and entitlements run on Stripe, so the coaching experience and its monetization shipped together as one production system from day one — giving NebuFit a complete path from AI pipeline to paying subscriber.",
        heroDescription:
          "An AI-powered fitness coaching platform built around a user's real body data — computer-vision physique analysis, RAG-processed bloodwork, and multi-LLM voice coaching — delivered through a production Flutter app with full Stripe subscription management.",
        stack: [
          'Flutter',
          'Dart',
          'Claude API',
          'GPT-4o',
          'ElevenLabs',
          'RAG',
          'Stripe',
          'Node.js',
          'Nest.js',
          'TypeScript',
          'PostgreSQL (Supabase)',
          'Redis',
        ],
        faqs: [
          {
            q: 'How does NebuFit personalize coaching instead of using generic templates?',
            a: "Computer-vision body analysis reads a user's physique directly from photos, and bloodwork is processed through a RAG system, so workout and nutrition recommendations stay grounded in a person's actual physiology and lab results rather than a one-size-fits-all plan.",
          },
          {
            q: 'What happens if an AI provider goes down mid-session?',
            a: 'NebuFit orchestrates multiple LLM providers — Claude, GPT-4o, and ElevenLabs — with automatic failover between them, so a voice coaching session stays resilient instead of dropping if one provider has an outage.',
          },
          {
            q: 'Why do responses feel real-time instead of a static chat reply?',
            a: 'Responses are streamed token-by-token over an SSE layer, so users see answers arrive live rather than waiting for a full response to generate.',
          },
          {
            q: 'Does NebuFit handle subscriptions and payments?',
            a: 'Yes — Stripe subscription and entitlement management is built natively into the platform, so monetization and the coaching product shipped together from day one rather than being bolted on afterward.',
          },
        ],
      },
      {
        slug: 'creative-os',
        mark: 'CO',
        name: 'Creative OS',
        screenshot: '/assets/screenshots/creative-os/feature-mockup.png',
        metric: 'Local-first · MCP server architecture',
        challenge:
          "Writers, filmmakers, musicians, and other creators wanted AI assistance across screenplays, lyrics, and notes, but typical AI chatbots can't reach into local files or hold onto creative context over time — and sending unfinished creative work to the cloud, or being locked into one fixed set of AI tools, wasn't an option either.",
        solution:
          'Built Creative OS as a local-first Electron/React desktop app that works less like a chatbot and more like an operating system for creative work — indexing Final Draft screenplays, PDFs, lyrics, notes, and research through a RAG pipeline (ChromaDB + SQLite) for semantic search, auto-tagging, and Claude-powered rewriting with persistent context, including native .FDX editing that preserves screenplay formatting, on an extensible MCP server architecture.',
        impact:
          'Gave creators AI-powered editing, search, and organization across their entire local creative library that persists across sessions instead of resetting, with a tool ecosystem that grows without touching the core app.',
        challengeDetail:
          "Writers, filmmakers, musicians, and other creators wanted AI assistance across screenplays, lyrics, and notes — for many, script drafts, lyrics, and story notes are sensitive material they don't want touching a third-party server before it's ready. Typical AI chatbots compound the problem: they can't reach into a creator's local files at all, and they lose context the moment a conversation ends, forcing every new session to start from zero instead of building on accumulated work. At the same time, creators didn't want to be locked into one fixed set of AI tools or a single vendor's ecosystem, since the AI landscape moves fast and a rigid integration risks going stale. Any solution also needed to make sense of a large, unstructured local library — screenplays in Final Draft format, scattered PDFs, lyrics, notes, outlines, shot lists, and research documents — well enough to search across all of it at once and answer questions grounded in a creator's own material, not just store it.",
        solutionDetail:
          "Rather than acting as a traditional chatbot, Creative OS functions as an intelligent operating system for creative work — persistent, indexed knowledge that Claude can search, reason over, and edit directly, instead of a stateless conversation that forgets everything once it ends. Built as a local-first Electron/React desktop app, it indexes Final Draft screenplays, PDFs, lyrics, notes, outlines, shot lists, and research documents through a RAG pipeline running on ChromaDB and SQLite entirely on the user's machine, so nothing leaves local storage. That indexed context feeds Claude for semantic search, rewriting, and creative ideation, letting writers ask questions across their own material and get grounded answers instead of generic suggestions — including reasoning across scripts, notes, research, and lyrics simultaneously rather than one document at a time. Final Draft (.FDX) files get native support: scenes, dialogue, characters, action blocks, and transitions are parsed directly so AI-assisted edits happen without breaking the original screenplay formatting. AI-powered auto-tagging generates themes, genres, characters, and topic tags automatically, organizing everything into searchable collections, with an analysis dashboard surfacing indexed content stats, AI activity, and writing progress. An extensible MCP server architecture sits behind the app, giving Claude a typed protocol to reach indexed content and external tools — new capabilities can be added to that ecosystem without touching the core app.",
        impactDetail:
          "Gave writers, filmmakers, and musicians AI-powered editing, search, and organization that never leaves their machine, addressing both the confidentiality and short-term memory limits generic cloud-based chatbots couldn't solve — indexed context persists across sessions instead of resetting with every new conversation. Auto-tagging and collections keep a growing local library organized without manual upkeep, and the analysis dashboard gives creators visibility into their own project's activity and progress. The MCP-based architecture means the tool ecosystem around the app can keep growing — new integrations, new capabilities — without requiring changes to the core application itself, keeping the product from going stale as the AI tooling landscape evolves.",
        overview:
          "Creative OS isn't another AI chatbot — it's an intelligent operating system for creative work, built for writers, filmmakers, and musicians who need an AI partner that remembers their project instead of forgetting it the moment a conversation ends. Script drafts, lyrics, and story notes are sensitive, unfinished material, so the entire pipeline — indexing, search, and rewriting — runs locally on the user's own machine rather than routing content through a third-party cloud service. It indexes Final Draft screenplays, PDFs, lyrics, notes, outlines, shot lists, and research documents through a local RAG pipeline built on ChromaDB and SQLite, then surfaces that context to Claude for semantic search, rewriting, and creative ideation inside an Electron/React desktop app.\n\nFinal Draft (.FDX) files get native support — scenes, dialogue, characters, action blocks, and transitions are parsed directly, so AI-assisted edits happen without breaking the original screenplay formatting. Multi-document semantic search lets Claude reason across scripts, notes, research, and lyrics simultaneously rather than one file at a time, combining information from multiple sources into a single, context-aware answer. AI-powered auto-tagging organizes a growing library into searchable collections by theme, genre, character, and topic, and an analysis dashboard gives creators visibility into indexed content, AI activity, and writing progress.\n\nAn MCP server architecture keeps the tool ecosystem extensible, so new capabilities can reach indexed content and external tools through a typed protocol without touching the core app. That matters for a product built on a fast-moving AI landscape — writers get a tool that can grow new integrations over time instead of being locked into one fixed set of AI capabilities at launch.",
        stack: ['Electron', 'React', 'TypeScript', 'RAG', 'ChromaDB', 'SQLite', 'MCP', 'Claude API'],
        faqs: [
          {
            q: 'How is Creative OS different from a typical AI chatbot?',
            a: "Typical chatbots can't reach into local files and lose all context the moment a conversation ends. Creative OS instead functions as an operating system for creative work — it indexes a creator's entire local library and keeps that context persistent, so Claude builds on accumulated material across sessions instead of starting from zero each time.",
          },
          {
            q: 'What kinds of creative files does Creative OS index?',
            a: 'Final Draft (.FDX) screenplays, PDFs, lyrics, notes, outlines, shot lists, and research documents — all indexed locally through its RAG pipeline.',
          },
          {
            q: 'Does Creative OS edit Final Draft screenplay files directly?',
            a: "Yes — it natively parses scenes, dialogue, characters, action blocks, and transitions, so AI-assisted edits happen without breaking the original screenplay formatting.",
          },
          {
            q: 'Can Creative OS reason across multiple documents at once?',
            a: 'Yes — multi-document semantic search lets Claude reason across scripts, notes, research, and lyrics simultaneously, combining information from multiple sources into one context-aware answer.',
          },
          {
            q: 'How does Creative OS keep a growing creative library organized?',
            a: 'AI-powered auto-tagging generates themes, genres, characters, and topic tags automatically, organizing assets into searchable collections, with an analysis dashboard surfacing indexed content stats, AI activity, and writing progress.',
          },
        ],
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
        screenshot: '/assets/screenshots/orient-champions/feature-mockup.png',
        metric: 'Thousands of daily batch scans · ~90% fewer bug reports post-refactor',
        challenge:
          "Orient Electronic needed a nationwide field-sales incentive program spanning a four-level hierarchy (National → Zone → Branch → FSM), with real-time sync into their existing SAP ERP — while staying resilient to SAP's own downtime and response-time swings.",
        solution:
          'Inherited an already-live but poorly-built implementation — tightly coupled, dead-code-heavy, no real state management — and refactored it: decoupled the React Native frontend and Nest.js backend into clean modules, introduced Redux, rebuilt and retimed the cron-job pipeline for accurate pre-business-hours results, replaced hardcoded screens with real APIs, fixed push notifications and the App Updater, and redesigned the UI.',
        impact:
          'Eliminated roughly 90% of the bugs the client used to report daily — the client now calls to discuss new features rather than fix issues — and gave field agents a faster, redesigned app they use without friction.',
        challengeDetail:
          "Orient Champions was already live and in production when this engagement began, having been built out by several prior developers over time. The resulting codebase was in poor shape: heavy dead code, frontend and backend modules that weren't clearly separated, and tight coupling throughout that made changes risky and slow. The React Native app had no real state management — screens leaned on trivial local useState rather than anything app-wide — and several pages ran on hardcoded data instead of real APIs. Push notifications didn't work at all, the App Updater and several filters were broken, and the backend's cron jobs were poorly managed, on schedules that didn't reliably finish with accurate results before business hours started. The operational cost was real: the client called in daily about bugs, and field agents regularly struggled to scan batches and receive their incentives correctly.",
        solutionDetail:
          "Refactored both the React Native frontend and the Nest.js backend to break apart the tight coupling and separate concerns into clear modules, removing dead code along the way. Replaced the frontend's ad hoc useState-only approach with Redux, giving the app predictable, centralized state management and a real performance improvement across screens. Audited and rebuilt the backend's cron-job pipeline — fixing broken scheduling logic and retiming jobs so they complete with accurate, fully-reconciled results before business hours start each day, rather than agents and admins working off stale or partially-synced numbers. Found and replaced several screens that were rendering hardcoded static data by moving that data into the database and building real APIs for those modules, then wiring the mobile app to consume them. Diagnosed and fixed push notifications end-to-end (they had never worked), repaired the App Updater so users reliably get prompted onto new releases, fixed broken filters agents relied on daily, and redesigned the UI across the mobile app for a cleaner, more usable experience. The underlying platform — a React Native app and Nest.js backend syncing in real time with Orient Electronic's SAP ERP across a four-level hierarchy (National, Zone, Branch, FSM) via custom BAPIs/RFC, JWT + Twilio OTP auth, and bulk Excel/CSV processing on AWS S3 — stayed in place throughout; the engagement was about stabilizing and modernizing it, not rebuilding it from scratch.",
        impactDetail:
          "The refactor eliminated roughly 90% of the bugs and issues that previously generated daily client phone calls, most of them centered on agents' scanning and incentive-tracking difficulties. Post-refactor, the client's calls shifted almost entirely from bug fixes to discussing new features, a clear signal the underlying platform had stabilized. Field agents, who previously struggled with a slow, buggy app, now use a redesigned interface with working filters and notifications without the friction that used to generate support tickets, and the retimed cron-job pipeline gives every level of the hierarchy accurate data before the business day even starts.",
        overview:
          "Orient Champions is a nationwide field-sales incentive platform for Orient Electronic, built on a React Native app and Nest.js backend syncing in real time with the client's SAP ERP across a four-level hierarchy — National, Zone, Branch, and FSM. The app and backend were already live and built by several prior developers by the time this engagement began, but the codebase had accumulated heavy dead code, tightly coupled frontend/backend modules, no real state management beyond trivial useState, hardcoded data standing in on several screens, non-functional push notifications, and a poorly managed cron-job pipeline — and the client was calling in daily about agent-reported bugs.\n\nThe engagement centered on stabilizing and modernizing that existing platform: decoupling and cleanly separating modules on both sides, introducing Redux for app-wide state management, rebuilding and retiming the cron jobs to finish with accurate results before business hours, replacing hardcoded screens with real database-backed APIs, fixing push notifications and the App Updater end-to-end, repairing broken filters, and redesigning the mobile UI.\n\nThe results were immediate and measurable: roughly 90% of the bugs that used to trigger daily client calls disappeared, the client's calls shifted from firefighting to feature discussions, and field agents — who'd struggled daily with scanning and incentive issues — now use a faster, redesigned app without the friction that used to generate support tickets.",
        stack: [
          'React Native',
          'Expo',
          'TypeScript',
          'Redux',
          'Axios',
          'AsyncStorage',
          'Node.js',
          'Nest.js',
          'MongoDB',
          'JWT',
          'bcrypt',
          'SAP ERP / RFC',
          'AWS S3',
          'Firebase',
          'Firebase Cloud Messaging',
          'Twilio',
        ],
        faqs: [
          {
            q: 'How does Orient Champions handle SAP being unavailable?',
            a: 'Resilient fallback queues and scheduled reconciliation catch batch scans and account activity whenever SAP is slow or down, with automated overnight pipelines settling everything cleanly against SAP without manual intervention.',
          },
          {
            q: 'What happens to batch scans if SAP is slow to respond?',
            a: 'They queue through the resilient fallback path and settle automatically once SAP is responsive again or at the next overnight reconciliation run — agents aren’t left waiting on SAP mid-scan.',
          },
          {
            q: 'How is the four-level hierarchy enforced?',
            a: 'Role-based access control and organisation-aware data scoping mean National, Zone, Branch, and FSM users each see only the activity relevant to their level, with no manual filtering required.',
          },
          {
            q: 'How does Orient Champions integrate with SAP?',
            a: 'Through custom SAP BAPIs called via SAP RFC services, covering registration, account activation, batch scanning, and batch status synchronisation — not a generic, off-the-shelf integration layer.',
          },
          {
            q: 'Where is Orient Champions available?',
            a: "It's a React Native app shipped to both the App Store and Google Play, backed by a Nest.js/MongoDB server and an admin web portal for monitoring and reporting.",
          },
          {
            q: 'Why was Orient Champions refactored?',
            a: 'It was already live and built by several prior developers, but the codebase had heavy dead code, tightly coupled modules, no real state management, hardcoded data on several screens, and a poorly managed cron-job pipeline — issues serious enough that the client was calling in daily about agent-reported bugs.',
          },
          {
            q: 'What changed for the client after the refactor?',
            a: "Roughly 90% of the bugs that used to generate daily support calls were eliminated. The client's calls now center on new feature requests rather than firefighting, and field agents use a redesigned, Redux-powered app with working push notifications and filters.",
          },
        ],
      },
      {
        slug: 'unity-desktop-admin-portal',
        mark: 'UN',
        name: 'UNITY Desktop App & Admin Portal',
        screenshot: '/assets/screenshots/unity-desktop-admin-portal/feature-mockup.png',
        metric: 'Healthcare organisation · role-built nav, live admin config',
        challenge:
          "A healthcare organisation needed one desktop workspace that unified browsing, credentials, notifications, and patient call handling — capabilities otherwise spread across several disconnected tools — with an admin layer that could reconfigure each role's navigation without a new build.",
        solution:
          "Built an Electron + Nest.js desktop app whose role-based sidebar, embedded browser with credential auto-fill, socket-driven notifications, and incoming-call handling are all fetched per user at login, paired with a Next.js + Nest.js admin portal where staff drag-and-drop each role's navigation and watch live usage stats.",
        impact:
          'Delivered one unified, role-aware desktop tool whose navigation and permissions are configured centrally, replacing what would otherwise be several separate applications for organisations and staff spanning dozens of logins.',
        challengeDetail:
          "A healthcare organisation needed a single, role-based desktop workspace that combined web browsing, credential management, notifications, and call/meeting handling — capabilities that were otherwise spread across several disconnected tools, each with its own login and workflow. Staff needed tightly scoped, role-based access rather than a single shared login, and each user needed a personal, secure place to store their own credentials for downstream systems and have them auto-filled into forms rather than typed or copy-pasted by hand, reducing both friction and the risk of exposed credentials. What each role could see, and how their navigation was laid out, needed to be reconfigurable without a new build every time requirements changed, and the organisation needed an admin layer giving oversight staff live visibility into desktop activity across every organisation and user.",
        solutionDetail:
          "Built an Electron desktop app backed by a Nest.js API, structured around a collapsible left-hand menu whose labeled, icon-based items — including expandable dropdown groups like Instant Visit, Tasks and Projects, Ticket Systems, Bookmarks Manager, Credentials Manager, IT HelpDesk, and Patient Virtual Connect — are dynamically fetched and rebuilt per user role at login. Clicking a menu item loads the corresponding page in the main view, which doubles as an embedded browser with a bookmarks manager and script-injected credential auto-fill that replicates the behavior of Chrome's own password manager. Socket-based real-time notifications keep staff current, background timers and alarms alert users when a task completes, and a Patient Virtual Connect call flow rings an incoming contact request that the user can accept or reject. A companion Next.js + Nest.js admin portal is the administrative counterpart: a dashboard shows live stats — total organisations, users, role assignments, and admins, alongside usage charts — and dedicated sections let admins manage organisations, roles, and users, plus drag-and-drop the exact navigation items and dropdown groups assigned to each role. Once a role's layout is saved, it's fetched from the portal the next time an assigned user logs into the desktop app, and the sidebar is rebuilt dynamically from it.",
        impactDetail:
          "Delivered one unified, role-aware desktop tool whose navigation, permissions, and available features are all built dynamically per user — replacing what would otherwise be several separate applications for browsing, credentials, tasks, tickets, IT requests, and patient calls. Giving each user their own credential vault — store, view, update, and delete, scoped to that user — with script-injected auto-fill removed both the manual overhead and the security risk of staff typing or copy-pasting downstream credentials by hand, and a single admin change to a role's layout propagates automatically into every affected user's desktop app the next time they log in, giving oversight staff a live, centrally-configurable view across dozens of organisations and staff logins without any manual per-user setup.",
        overview:
          "Built for a healthcare organisation, UNITY pairs an Electron + Nest.js desktop app with a Next.js + Nest.js admin portal, replacing what would otherwise be several disconnected tools — browsing, credentials, notifications, tasks and tickets, IT requests, and patient calls — with one unified, role-aware workspace. A collapsible left-hand sidebar, including expandable dropdown groups like Instant Visit, Tasks and Projects, Ticket Systems, Bookmarks Manager, Credentials Manager, IT HelpDesk, and Patient Virtual Connect, is dynamically fetched and rebuilt per user role at login; the main view doubles as an embedded browser with script-injected credential auto-fill that replicates Chrome's own password manager, plus socket-based real-time notifications, background timers/alarms, and a ringing Patient Virtual Connect call flow the user can accept or reject.\n\nThe admin portal is the administrative counterpart: a live dashboard tracks total organisations, users, role assignments, and admins alongside usage charts, and dedicated sections let admins manage organisations, roles, and users, plus drag-and-drop the exact navigation items assigned to each role. Once a role's layout changes, it's fetched from the portal the next time an assigned user logs into the desktop app, and the sidebar is rebuilt dynamically from it — giving oversight staff a secure, centrally-configurable tool and a live admin view spanning dozens of organisations and staff logins.",
        stack: [
          'Electron',
          'Next.js',
          'React',
          'Node.js',
          'Nest.js',
          'TypeScript',
          'JavaScript',
          'MUI (Material UI)',
          'ApexCharts',
          'Axios',
          'Prisma',
          'PostgreSQL',
          'Socket.IO',
          'JWT',
          'Sentry',
        ],
        faqs: [
          {
            q: "How is each user's navigation built in UNITY?",
            a: "A role's navigation — including expandable dropdown groups like Instant Visit, Tasks and Projects, or Patient Virtual Connect — is configured once by an admin in the portal, then fetched and rebuilt dynamically in the desktop app's sidebar the next time an assigned user logs in.",
          },
          {
            q: 'What is Patient Virtual Connect?',
            a: 'A call-handling flow built into the desktop app: an incoming contact request rings the user, who can accept or reject it directly from UNITY rather than switching to a separate calling tool.',
          },
          {
            q: 'How does credential auto-fill work in UNITY?',
            a: "Each user stores, views, updates, and deletes their own credentials for downstream systems in their personal Credentials Manager; UNITY then auto-fills them into forms via script injection in the app's embedded browser, replicating the behavior of Chrome's own password manager without staff typing them by hand.",
          },
          {
            q: "What does UNITY's admin portal show?",
            a: 'A live dashboard with total organisations, users, role assignments, and admins alongside usage charts, plus dedicated sections for managing organisations, roles, users, and each role\'s drag-and-drop navigation configuration.',
          },
          {
            q: 'Does UNITY notify users in real time?',
            a: 'Yes — socket-based notifications, background timers and alarms that alert on task completion, and the ringing Patient Virtual Connect call flow all update live without a manual refresh.',
          },
        ],
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
        screenshot: '/assets/screenshots/houzi/feature-mockup.png',
        metric: '53K+ reach · 4.84★ · 500+ sales',
        challenge:
          'Houzez, a WordPress real estate theme used by 53,000+ site owners, had no companion mobile app — non-technical theme owners had no way to offer a native app experience without custom development.',
        solution:
          'Built Houzi, a Flutter real estate template app with Bloc state management and Clean Architecture, REST API integration, Google Maps-based search with marker clustering, RTL and multi-language localization, push notifications, in-app chat, comments, and an admin-only Houzez CRM insights view — plus the HouziBuilder desktop customisation platform and the Houzi-REST-API WordPress plugin.',
        impact:
          "Reached 53,000+ Houzez theme owners with a ready-made mobile solution, earning a 4.84★ rating, 500+ Code Canyon sales, and 5,000+ Play Store downloads.",
        challengeDetail:
          "Houzez, a WordPress real estate theme used by more than 53,000 site owners, had no companion mobile app — anyone wanting a native app experience alongside their Houzez site had no option but custom development from scratch. Most of those theme owners are non-technical, running real estate businesses rather than software teams, so a solution had to be something they could adopt off the shelf rather than commission and maintain themselves. It also needed to stay in sync with an existing WordPress site's listings and data rather than becoming a second, disconnected system, and to serve Houzez's international, non-English-speaking theme owner base — including right-to-left languages — while giving site admins visibility into CRM activity without exposing that data to regular app users.",
        solutionDetail:
          "Built Houzi, a Flutter real estate template app built on Bloc state management and Clean Architecture for a maintainable, testable codebase, with REST API integration connecting it directly to a Houzez WordPress site's listings. Property search runs on Google Maps, with marker clustering that keeps listings legible at any zoom level and lets users filter results straight from the map. The app ships with RTL layout support and full localization, so Houzez's international theme owner base can run Houzi in their own language and script rather than English-only. Push notifications, in-app chat, and comments round out the mobile experience, giving buyers and agents the interactions they'd expect from a native app, while an admin-only view surfaces Houzez CRM insights — leads and site activity — directly inside the app without exposing that data to regular users. The ecosystem extends beyond the app itself: the HouziBuilder desktop customisation platform lets theme owners configure the app without touching code, and the Houzi-REST-API WordPress plugin bridges the Flutter app to each owner's existing WordPress data.",
        impactDetail:
          "Reached over 53,000 Houzez theme owners with a ready-made mobile solution they could adopt without custom development, earning a 4.84★ rating, 500+ Code Canyon sales, and over 5,000 Play Store downloads. The combination of the Flutter app, HouziBuilder, and the REST API plugin turned what would have been a one-off custom build into a reusable product serving an entire theme's customer base.",
        overview:
          "Houzi fills a gap for Houzez, a WordPress real estate theme used by over 53,000 site owners who had no way to offer a native mobile app without custom development. Built in Flutter with Bloc state management and Clean Architecture, it layers in REST API integration, push notifications, in-app chat, and comments, giving buyers and agents a full native experience tied directly to each owner's existing WordPress listings.\n\nProperty discovery runs on Google Maps, with marker clustering that keeps listings legible at any zoom level and lets users filter search results straight from the map. The app also ships with RTL layout support and full localization, so Houzez's international theme owner base can run Houzi in their own language rather than English-only, and an admin-only view surfaces Houzez CRM insights — leads and site activity — directly inside the app, hidden from regular users.\n\nThe ecosystem extends beyond the app itself: the HouziBuilder desktop customisation platform lets non-technical theme owners configure the app without touching code, and the Houzi-REST-API WordPress plugin bridges the Flutter app to each owner's existing site data. Together they turned a one-off custom-app problem into a reusable product, reaching over 53,000 theme owners with a 4.84★ rating, 500+ Code Canyon sales, and 5,000+ Play Store downloads.",
        stack: [
          'Flutter',
          'Dart',
          'Bloc',
          'Clean Architecture',
          'REST APIs',
          'Google Maps',
          'PHP',
          'WordPress Plugin',
        ],
        faqs: [
          {
            q: 'Do I need coding knowledge to customize Houzi for my site?',
            a: "No — the HouziBuilder desktop customisation platform lets non-technical Houzez theme owners configure the app without touching code.",
          },
          {
            q: 'How does Houzi stay in sync with my Houzez WordPress site?',
            a: "Through the Houzi-REST-API WordPress plugin, which bridges the Flutter app directly to each owner's existing WordPress listings and data.",
          },
          {
            q: 'What features does the Houzi app include?',
            a: 'Push notifications, in-app chat, and comments, giving buyers and agents a full native experience tied to the underlying Houzez listings.',
          },
          {
            q: 'Where can I get Houzi?',
            a: "It's available on Code Canyon (500+ sales) and the Play Store (5,000+ downloads), with a 4.84★ average rating.",
          },
          {
            q: 'Does Houzi support other languages and right-to-left layouts?',
            a: 'Yes — Houzi ships with full localization and RTL layout support, so theme owners can run it in their own language and script rather than English-only.',
          },
          {
            q: 'How does property search work in Houzi?',
            a: "Search runs on Google Maps with marker clustering, so listings stay readable at any zoom level and users can filter results directly from the map.",
          },
          {
            q: 'Can site admins see CRM data inside the app?',
            a: "Yes — an admin-only view surfaces Houzez CRM insights, like leads and site activity, directly inside the app. That view is hidden from regular users.",
          },
        ],
      },
      {
        slug: 'linked-golf',
        mark: 'LG',
        name: 'Linked Golf',
        screenshot: '/assets/screenshots/linked-golf/feature-mockup.png',
        metric: 'Full-stack refactor · event subscriptions via Stripe',
        challenge:
          'Golfers had no streamlined way to match availability with friends, connect with new playing partners, and subscribe to golf-course events — and golf-course owners had no way to create or monetize those events themselves.',
        solution:
          'Inherited an already-live but poorly-integrated implementation — tightly coupled Bloc state across every core screen, dead backend code, non-functional chat — and refactored it: decoupled the state layer and backend, fixed chat/applink bugs, and added event creation, Stripe-billed subscriptions, team management, and OTP-verified team joins.',
        impact:
          'Delivered a stable, noticeably faster app plus a new paid-event capability for golf-course owners, on both the App Store and Google Play.',
        challengeDetail:
          "Linked Golf was already live and had been built out by several prior developers by the time this engagement began. Bloc was in place for state management, but poorly integrated and tightly coupled to the UI, so state bugs surfaced across nearly every core screen — Home, Availability, Add Golf Buddy, the QR page (for showing a profile QR and scanning another golfer's), user search, the golfer profile page, and Golf Courses & Events all had their own state issues. Chat, built on PubNub, wasn't working reliably either: message reactions were wired up but did nothing, and messages weren't grouped by date. The Express backend had accumulated a lot of dead code and tight coupling of its own, and several screens fired redundant, duplicate API calls that slowed the app down. On top of stabilizing all of that, golf-course owners had no way to create events, golfers had no way to subscribe to one or manage a team once subscribed, joining a team had no verification step, and a course's profile page didn't surface which golfers were available to play.",
        solutionDetail:
          "Refactored the Bloc integration and decoupled the UI from it screen by screen — Home, Availability, Add Golf Buddy, the QR profile/scan page, user search, the golfer profile page, and Golf Courses & Events — fixing the state bugs each had been carrying. On the backend, removed dead code, broke apart tightly coupled modules, and consolidated the redundant API calls that had been slowing the app down. Fixed chat end to end: reactions now actually apply instead of no-op, and messages are grouped date-wise; comments were fixed too. The applink/dynamic-link flow that had never worked correctly was repaired so shared content routes into the right in-app screen. On top of the refactor, added new functionality: golf-course owners can now create events, golfers can subscribe to an event after paying through Stripe and manage their team once subscribed, joining a team requires OTP verification, and a course's profile page now shows which golfers are available to play.",
        impactDetail:
          "The refactor turned an already-live but fragile app into a stable one — the state, chat, and redundant-API-call issues affecting nearly every core screen were resolved, and backend cleanup plus fewer duplicate API calls gave the app a real, noticeable performance improvement. On top of stabilizing the existing product, the new event-creation, Stripe-billed subscription, team-management, and OTP-verified team-join features gave golf-course owners a way to run paid events directly through the app — a capability that didn't exist before this engagement — while the fixed applink/dynamic linking and chat brought the existing social features up to a standard the app hadn't previously met.",
        overview:
          "Linked Golf is a Flutter golf social and booking app — availability matching against friends, QR-code buddy adds, PubNub chat, and Stripe-billed event subscriptions, behind an Express backend. It was already live and built out by several prior developers by the time this engagement began, but Bloc state management was poorly integrated and tightly coupled to the UI, so state issues surfaced across nearly every core screen — Home, Availability, Add Golf Buddy, the QR profile/scan page, user search, the golfer profile page, and Golf Courses & Events.\n\nChat had reactions that were wired up but did nothing, and messages weren't grouped by date; the backend itself carried a lot of dead code, tight coupling, and redundant API calls that slowed the app down.\n\nThe engagement refactored the Bloc integration and backend screen by screen and module by module, fixed chat reactions/date grouping and comments, repaired the applink/dynamic-link flow, and consolidated the duplicate API calls dragging down performance. On top of stabilizing the existing app, it added new functionality: golf-course owners can now create events, golfers can subscribe to one via Stripe and manage their team, joining a team requires OTP verification, and a course's profile page now surfaces which golfers are available to play. The result is a noticeably faster, more stable app on both the App Store and Google Play, plus a new paid-event capability for golf-course owners that didn't exist before this engagement.",
        heroDescription:
          "A Flutter golf social and booking app — availability matching, QR buddy adds, PubNub chat, and Stripe-billed event subscriptions — refactored from an inherited, tightly-coupled Bloc/Express codebase into a stable, faster product with new paid-event and team-management features.",
        stack: [
          'Flutter',
          'Dart',
          'Bloc',
          'PubNub',
          'Stripe',
          'Node.js',
          'Express',
          'MongoDB',
          'JWT',
          'FCM',
          'Firebase Admin',
          'SendGrid',
          'Nodemailer',
          'Google APIs',
          'QRCode',
          'Deep Linking',
        ],
        faqs: [
          {
            q: 'Why was Linked Golf refactored?',
            a: 'It was already live and built by several prior developers, but Bloc state management was poorly integrated and tightly coupled across nearly every core screen, chat reactions were non-functional, and the backend carried dead code and redundant API calls.',
          },
          {
            q: 'What changed for the app after the refactor?',
            a: "State bugs across Home, Availability, Add Golf Buddy, the QR profile/scan page, user search, the golfer profile page, and Golf Courses & Events were fixed, backend dead code and duplicate API calls were cleaned up, and chat reactions and date-wise grouping now work correctly.",
          },
          {
            q: 'How do golf-course owners create and monetize events?',
            a: 'Course owners can create events directly in the app, and golfers can subscribe to one after paying through Stripe and then manage their team once subscribed.',
          },
          {
            q: 'How does joining a golf team work?',
            a: 'Joining a team requires OTP verification, added during this engagement alongside team management for event subscribers.',
          },
          {
            q: 'How do golfers connect with a new playing partner?',
            a: 'A QR-code scan lets two golfers add each other as buddies right after a round, instead of trading contact details by hand.',
          },
          {
            q: 'Is Linked Golf available on both iOS and Android?',
            a: "Yes — it's deployed on both the Apple App Store and Google Play.",
          },
        ],
      },
      {
        slug: 'exodus-app',
        mark: 'EX',
        name: 'Exodus App',
        screenshot: '/assets/screenshots/exodus-app/feature-mockup.png',
        metric: 'Full rebrand from Blue Sky (EPIC PC)',
        challenge:
          "EPIC PC needed the 'Blue Sky' app fully rebranded — new visual identity, theming, and store presence — without disrupting the underlying app.",
        solution:
          'Delivered a full visual and branding rebrand: theming, assets, navigation, and app-store metadata updated end-to-end in Flutter.',
        impact:
          'Relaunched the app under its new identity with a consistent look across every screen and store listing.',
        challengeDetail:
          "EPIC PC needed its 'Blue Sky' app fully rebranded to a new identity — new visual design, theming, and store presence — without disrupting the underlying app that users already relied on. The challenge was scope, not just visuals: a rebrand touches theming across every screen, updated assets, navigation that needs to feel consistent with the new identity, and app-store metadata, all of which had to land together rather than as a patchwork of partial updates.",
        solutionDetail:
          'Delivered a full visual and branding rebrand end-to-end in Flutter — new theming applied consistently across every screen, updated assets, navigation adjusted to match the new identity, and app-store metadata updated to reflect the relaunch. The underlying app logic and functionality stayed untouched, keeping the rebrand a presentation-layer change rather than a rewrite.',
        impactDetail:
          "Relaunched the app under its new identity with a consistent look across every screen and store listing, giving EPIC PC a clean rebrand without the risk or cost of rebuilding the app's underlying functionality from scratch.",
        overview:
          "EPIC PC needed its 'Blue Sky' app fully rebranded — new visual identity, theming, and store presence — without disrupting the app underneath it. A rebrand touches more than a color palette: theming across every screen, updated assets, navigation adjusted to match the new identity, and app-store metadata all needed to land together rather than as a patchwork of partial updates.\n\nThe rebrand was delivered end-to-end in Flutter as a presentation-layer change, leaving the app's underlying logic and functionality untouched. It relaunched under its new identity with a consistent look across every screen and store listing.",
        stack: ['Flutter', 'Dart'],
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
        screenshot: '/assets/screenshots/houzibuilder/feature-mockup.png',
        metric: 'Drag-and-drop theme configurator',
        challenge:
          'Non-technical Houzi theme owners had no way to preview and configure typography, colours, and layout before publishing changes.',
        solution:
          'Built a desktop drag-and-drop theme configurator as a companion tool to the Houzi ecosystem.',
        impact:
          'Let theme owners self-serve visual changes with zero code, reducing back-and-forth support requests.',
        challengeDetail:
          'Non-technical Houzi theme owners had no way to preview and configure typography, colours, and layout before publishing changes to their live site — any visual tweak meant either learning to edit code directly or filing a support request and waiting. That gap turned simple visual preferences into either a technical barrier or an ongoing support burden for the Houzi team.',
        solutionDetail:
          'Built HouziBuilder, a desktop drag-and-drop theme configurator delivered as a companion tool to the Houzi ecosystem, letting theme owners adjust typography, colours, and layout visually and preview the result before publishing. No code editing or WordPress admin knowledge is required — the configurator handles translating visual choices into the underlying theme configuration.',
        impactDetail:
          "Let theme owners self-serve visual changes with zero code, reducing back-and-forth support requests that previously required the Houzi team's direct involvement for even simple visual tweaks. It turned a recurring support cost into a one-time tool investment.",
        overview:
          'Non-technical Houzi theme owners had no way to preview and configure typography, colours, and layout before publishing changes to their live site — any visual tweak meant either editing code directly or filing a support request. HouziBuilder is a desktop drag-and-drop theme configurator built as a companion tool to the Houzi ecosystem, letting theme owners adjust those settings visually and preview the result before publishing.\n\nNo code editing or WordPress admin knowledge is required to use it, letting theme owners self-serve visual changes with zero code and cutting down on the back-and-forth support requests that simple visual tweaks used to require.',
        stack: ['Flutter', 'Dart'],
      },
      {
        slug: 'techtiz-corporate-website',
        mark: 'TC',
        name: 'Techtiz Corporate Website',
        screenshot: '/assets/screenshots/techtiz-corporate-website/feature-mockup.png',
        metric: 'Astro rebuild · performance & SEO',
        challenge:
          "Techtiz's corporate site needed better performance and SEO fundamentals than its previous stack could deliver.",
        solution:
          'Rebuilt the site fully in Astro, improving Core Web Vitals and structured metadata.',
        impact:
          'Faster first-load and stronger SEO fundamentals across the corporate site.',
        challengeDetail:
          "Techtiz's corporate site needed better performance and SEO fundamentals than its previous stack could deliver — slow first-load times and weak structured metadata were holding back both user experience and search visibility, and incremental fixes on the existing stack weren't closing the gap.",
        solutionDetail:
          "Rebuilt the site fully in Astro, taking advantage of its static-first output to cut down the JavaScript shipped to the browser and improve Core Web Vitals directly. Structured metadata was rebuilt alongside the migration so search engines could parse the site's content correctly rather than as an afterthought bolted onto the old stack.",
        impactDetail:
          'Delivered a faster first-load and stronger SEO fundamentals across the corporate site, giving Techtiz a foundation that scales with content rather than working against it.',
        overview:
          "Techtiz's corporate site needed stronger performance and SEO fundamentals than its previous stack could deliver — slow first-load times and weak structured metadata were holding back both user experience and search visibility. Rebuilding it fully in Astro took advantage of its static-first output to cut down the JavaScript shipped to the browser and improve Core Web Vitals directly.\n\nStructured metadata was rebuilt alongside the migration so search engines could parse the site's content correctly, resulting in a faster first-load and stronger SEO fundamentals across the site.",
        stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel', 'WordPress'],
      },
      {
        slug: 'attn-agency-homepage',
        mark: 'AA',
        name: 'ATTN Agency Homepage',
        screenshot: '/assets/screenshots/attn-agency-homepage/feature-mockup.png',
        metric: 'Go High Level native-element build',
        challenge:
          "ATTN wanted an agency homepage inside Go High Level without the constraints of its built-in page builder.",
        solution:
          'Built the homepage natively with custom CSS and HTML elements inside Go High Level, bypassing the external page builder entirely.',
        impact:
          'Full control over layout and performance within a platform that normally limits both.',
        challengeDetail:
          "ATTN wanted an agency homepage built inside Go High Level, but the platform's built-in page builder imposes real constraints on layout and performance — anything outside its templated components meant fighting the tool rather than building the page ATTN actually wanted.",
        solutionDetail:
          "Built the homepage natively with custom CSS and HTML elements inside Go High Level, bypassing the external page builder entirely rather than working within its templated constraints. That approach kept the page inside the Go High Level platform ATTN was already using, without inheriting the page builder's layout and performance limitations.",
        impactDetail:
          'Gave ATTN full control over layout and performance within a platform that normally limits both, delivering a homepage that looks and performs like a custom build while still living inside their existing Go High Level setup.',
        overview:
          "ATTN wanted an agency homepage inside Go High Level without being boxed in by its built-in page builder, which imposes real constraints on layout and performance for anything outside its templated components. The homepage was built natively with custom CSS and HTML elements inside Go High Level, bypassing the external page builder entirely.\n\nThat approach kept the page living inside the Go High Level platform ATTN was already using, without inheriting the page builder's layout and performance limitations — giving full control over layout and performance within a platform that normally limits both.",
        stack: ['Go High Level', 'Gemini AI'],
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
        screenshot: '/assets/screenshots/lead-response-automation/feature-mockup.png',
        metric: 'Contact < 1 min · AI voice call < 2 min',
        challenge:
          'A US-based moving company was losing leads to slow response times — every minute of delay before first contact lowers conversion.',
        solution:
          'Built an n8n + Go High Level pipeline that contacts new leads within 1 minute and places an AI voice call within 2 minutes via Retell AI + Aloware, with OpenAI-based call scoring and fraud detection to route genuine leads and suppress junk.',
        impact:
          'Cut lead response time to under a minute with automatic quality filtering, built on n8n, Go High Level, and CloseBot.',
        challengeDetail:
          'A US-based moving company was losing leads to slow response times, since every minute of delay before first contact measurably lowers conversion in a business where customers are often comparing multiple movers at once. Manual response meant leads sat unattended outside business hours or during busy periods, and there was no automatic way to separate genuine inquiries from junk before a rep spent time on them.',
        solutionDetail:
          'Built an n8n and Go High Level pipeline that contacts new leads within 1 minute of submission and places an AI voice call within 2 minutes via Retell AI and Aloware, so leads get a response regardless of when they come in. OpenAI-based call scoring and fraud detection run on top, routing genuine leads to the sales team and suppressing junk automatically rather than requiring a rep to manually triage every inquiry.',
        impactDetail:
          'Cut lead response time to under a minute with automatic quality filtering built on n8n, Go High Level, and CloseBot, turning what used to be a manual, delay-prone process into an automated pipeline that responds faster than a human rep could manage around the clock.',
        overview:
          'A US-based moving company was losing leads to slow response times, where every minute of delay before first contact lowers conversion. The pipeline, built on n8n and Go High Level, contacts new leads within 1 minute and places an AI voice call within 2 minutes via Retell AI and Aloware.\n\nOpenAI-based call scoring and fraud detection route genuine leads and suppress junk automatically, with CloseBot rounding out the stack. Together they cut lead response time to under a minute with automatic quality filtering — a response speed no manual process running only during business hours could match.',
        stack: ['n8n', 'Go High Level', 'Retell AI', 'Aloware', 'OpenAI', 'CloseBot'],
      },
      {
        slug: 'agentc-job-discovery',
        mark: 'AG',
        name: 'AGENTC — Agentic Job Discovery Automation',
        screenshot: '/assets/screenshots/agentc-job-discovery/feature-mockup.png',
        metric: 'Daily verified leads before business hours',
        challenge:
          'Manually finding and verifying decision-maker contacts for outreach ate hours every morning before the sales team could start calling.',
        solution:
          'Built a daily n8n pipeline using Apify scrapers to discover matching contacts, ZeroBounce and Clearout Phone to validate emails and numbers, and Nocodb to dedupe against the existing CRM.',
        impact:
          'Delivers a ready-to-call, verified lead list before business hours every morning, automatically.',
        challengeDetail:
          'Manually finding and verifying decision-maker contacts for outreach ate hours every morning before the sales team could even start calling, since raw scraped contact lists are full of stale emails, dead phone numbers, and duplicates already sitting in the CRM. That manual triage delayed the start of the actual sales day rather than adding value to it.',
        solutionDetail:
          "Built a daily n8n pipeline that uses Apify scrapers to discover matching decision-maker contacts overnight, then runs them through ZeroBounce and Clearout Phone to validate emails and phone numbers before they ever reach a rep. Nocodb dedupes the results against the existing CRM, so the sales team never gets a contact they've already worked.",
        impactDetail:
          'Delivers a ready-to-call, verified lead list before business hours every morning, automatically — turning what used to be hours of manual triage into a pipeline that runs overnight and hands the sales team a clean list the moment they start work.',
        overview:
          'Manually finding and verifying decision-maker contacts for outreach was eating hours every morning before the sales team could start calling. A daily n8n pipeline uses Apify scrapers to discover matching contacts, ZeroBounce and Clearout Phone to validate emails and numbers, and Nocodb to dedupe against the existing CRM.\n\nRunning overnight rather than first thing in the morning means the validation and dedupe work happens before anyone on the sales team logs in — delivering a ready-to-call, verified lead list before business hours every morning, automatically, with no manual triage required.',
        stack: ['n8n', 'Apify', 'ZeroBounce', 'Clearout Phone', 'Nocodb'],
      },
      {
        slug: 'capital-shack-ocr',
        mark: 'CS',
        name: 'Capital Shack — Document OCR Processing',
        screenshot: '/assets/screenshots/capital-shack-ocr/feature-mockup.png',
        metric: 'OCR bank statement extraction',
        note: 'Client confidentiality prevents sharing screenshots or product media for this project.',
        challenge:
          'Extracting structured financial data from PDF bank statements by hand was slow and error-prone.',
        solution:
          'Built an OCR-based document processing pipeline in Google Apps Script that extracts structured data from bank statement PDFs and routes it downstream.',
        impact:
          'Automated bank statement data extraction, removing manual entry from the workflow.',
        challengeDetail:
          'Extracting structured financial data from PDF bank statements by hand was slow and error-prone, since every statement had to be opened, read, and manually transcribed into a usable format before it could be used downstream. That manual step was both a bottleneck and a source of transcription errors that propagated into whatever relied on the extracted data.',
        solutionDetail:
          'Built an OCR-based document processing pipeline in Google Apps Script that reads bank statement PDFs directly, extracts the structured financial data automatically, and routes it downstream without a human retyping any of it.',
        impactDetail:
          'Automated bank statement data extraction end-to-end, removing manual entry from the workflow entirely and eliminating the transcription errors that came with it.',
        overview:
          'Extracting structured financial data from PDF bank statements by hand was slow and error-prone — every statement had to be opened, read, and manually transcribed before it could be used downstream. An OCR-based document processing pipeline built in Google Apps Script reads those PDFs directly and extracts the structured data automatically.\n\nThat data routes downstream without a human retyping any of it, automating the extraction end-to-end and removing both the manual entry and the transcription errors that came with it.',
        stack: ['Google Apps Script', 'OCR'],
      },
      {
        slug: 'ramirez-legal-clickup-sync',
        mark: 'RL',
        name: 'Ramirez Legal Group — ClickUp Dashboard Sync',
        screenshot: '/assets/screenshots/ramirez-legal-clickup-sync/feature-mockup.png',
        metric: 'Real-time case data sync',
        challenge:
          'The legal team and their clients had no single live view of case status — updates lived only inside ClickUp.',
        solution:
          'Built a Zapier + Emergent Labs pipeline that syncs ClickUp case data in real time to a client-facing dashboard.',
        impact:
          'Gave the legal team and clients one live view of case status with zero manual updates.',
        challengeDetail:
          "The legal team and their clients had no single live view of case status — updates lived only inside ClickUp, which clients didn't have access to, so staff had to manually relay status through calls or emails whenever a client asked. That manual relay step meant status updates were only as current as the last time someone remembered to send one.",
        solutionDetail:
          "Built a Zapier and Emergent Labs pipeline that syncs ClickUp case data in real time to a client-facing dashboard, so status changes made inside ClickUp by the legal team appear on the client's dashboard automatically, without anyone manually re-entering or relaying the update.",
        impactDetail:
          'Gave the legal team and clients one live view of case status with zero manual updates, eliminating the status-update phone calls and emails that used to be the only way clients could check on their case.',
        overview:
          "The legal team and their clients had no single live view of case status — updates lived only inside ClickUp, which clients didn't have access to, so staff had to manually relay status through calls or emails. A Zapier and Emergent Labs pipeline syncs ClickUp case data in real time to a client-facing dashboard.\n\nStatus changes made inside ClickUp by the legal team appear on the client's dashboard automatically, giving both the legal team and clients one live view of case status with zero manual updates required.",
        stack: ['Zapier', 'Emergent Labs', 'ClickUp'],
      },
      {
        slug: 'social-media-posting-automation',
        mark: 'SM',
        name: 'Social Media Posting Automation',
        screenshot: '/assets/screenshots/social-media-posting-automation/feature-mockup.png',
        metric: 'Auto-posts to 6 platforms · zero silent failures',
        challenge:
          'A client needed a steady posting cadence across six social platforms without a person writing captions by hand, juggling six sets of OAuth tokens, or finding out about a failed post days later.',
        solution:
          'Built a suite of five linked n8n workflows: an AI agent that turns a form submission into ready-to-publish captions and hashtags and books it on a content calendar, a webhook-triggered publisher that checks per-platform permissions before uploading to YouTube, Facebook, Instagram, LinkedIn, Threads, and TikTok, a scheduled job that keeps every platform’s OAuth tokens refreshed, an auth-callback workflow that handles the OAuth handshake for each platform, and a centralized error logger that alerts the team the moment any of the above fails.',
        impact:
          'Replaced manual caption-writing, scheduling, and token babysitting with a fully automated pipeline that posts to six platforms and emails a status report after every run.',
        challengeDetail:
          'A client needed a steady posting cadence across six social platforms — YouTube, Facebook, Instagram, LinkedIn, Threads, and TikTok — without a person writing platform-specific captions by hand, tracking which of six separate OAuth tokens was about to expire, or discovering a failed upload only when someone happened to check. Each platform also has its own content-type quirks (YouTube Shorts vs. standard video, Instagram Reels vs. standard, Threads’ short-lived-then-long-lived token exchange) that a manual process had no consistent way to handle.',
        solutionDetail:
          'Built five linked n8n workflows that split the problem into independent, purpose-built pieces. A metadata-generation workflow watches a Google Sheets submission form, runs an AI agent to produce captions, hashtags, and titles, writes that metadata back to the sheet, and books a Google Calendar event for the scheduled post. A webhook-triggered publishing workflow normalizes the incoming post data, pulls the current access tokens, and — per platform — checks whether posting is enabled and whether the content is short-form before uploading through each platform’s API, then merges every platform’s result into a single summary emailed via Gmail. A scheduled token-refresh workflow checks each platform’s access and refresh tokens, silently renews what it can, and emails a re-authorization link when a refresh token itself has expired. An auth-callback workflow handles the one-time OAuth handshake for each platform — including Threads’ required deauthorization and data-deletion callbacks — and writes the resulting tokens to the sheet the other workflows read from. A centralized error-logging workflow is wired to all four, logging every failure to a sheet and emailing the team so nothing fails silently.',
        impactDetail:
          'Replaced manual caption-writing, scheduling, and per-platform token babysitting with a pipeline that posts to six platforms on its own, keeps its own credentials valid ahead of time, and emails a status report after every run — so the team finds out about a failure from an alert, not from a missing post.',
        overview:
          'A client needed a steady posting cadence across six social platforms — YouTube, Facebook, Instagram, LinkedIn, Threads, and TikTok — without a person writing platform-specific captions by hand, tracking six sets of OAuth tokens, or finding out about a failed upload after the fact. Five linked n8n workflows now handle it end to end: one turns a Google Sheets form submission into AI-generated captions and hashtags and books it on a content calendar, one publishes to each platform’s API based on per-platform permissions and content type, one keeps every platform’s OAuth tokens refreshed on a schedule, one handles the OAuth handshake (and Threads’ required deauthorization/data-deletion callbacks) for each platform, and one centrally logs and alerts on any failure across the other four.\n\nTogether they replace manual caption-writing, scheduling, and token babysitting with a pipeline that posts to six platforms and emails a status report after every run, so the client hears about problems from an alert instead of a missing post.',
        stack: ['n8n', 'OpenAI', 'Google Sheets', 'Google Calendar', 'Gmail'],
      },
      {
        slug: 'outreach-email-classification-automation',
        mark: 'EC',
        name: 'Outreach Email Classification Automation',
        screenshot: '/assets/screenshots/outreach-email-classification-automation/feature-mockup.png',
        metric: 'AI reply classification · instant Slack routing',
        challenge:
          'Every reply to an outreach campaign had to be opened and read by hand just to tell an interested prospect apart from a bounce, an out-of-office, or an unsubscribe request.',
        solution:
          "Built an n8n pipeline that receives outreach replies from a Gmail-polling Google Apps Script, classifies each one's intent with Gemini 2.5 Flash Lite, and posts a formatted status notification straight to Slack.",
        impact:
          'Replaced manual inbox triage with automatic classification and instant Slack visibility on every outreach reply.',
        challengeDetail:
          'Every reply to an outreach campaign had to be opened and read by hand just to tell an interested prospect apart from a bounce, an out-of-office, or an unsubscribe request, and that manual read-and-sort step delayed follow-up on the replies that actually mattered. There was no automatic way to surface a genuinely interested reply without someone first working through everything else in the inbox.',
        solutionDetail:
          "Built an n8n pipeline that receives outreach replies via webhook from a Google Apps Script Gmail poller, which filters incoming mail against allowed recipients, blocked domains/senders, and warmup or unsubscribe keywords before queuing valid replies through at a rate-limited pace. Each reply is formatted and passed to an AI agent running Gemini 2.5 Flash Lite, which classifies it as Interested, Not Interested, Schedule Later, Wrong Person, Out of Office, or Unsubscribe and drafts a status summary, before the pipeline normalizes that output and posts it as a formatted notification to a dedicated Slack channel.",
        impactDetail:
          "Replaced manual inbox triage with automatic classification and instant Slack visibility on every outreach reply, so the sales team sees a reply's status the moment it arrives instead of after someone works through the inbox by hand.",
        overview:
          "Every reply to an outreach campaign had to be opened and read by hand just to tell an interested prospect apart from a bounce, an out-of-office, or an unsubscribe request — delaying follow-up on the replies that actually mattered. An n8n pipeline now receives outreach replies via webhook from a Google Apps Script Gmail poller, which pre-filters incoming mail and queues valid replies through at a rate-limited pace.\n\nAn AI agent running Gemini 2.5 Flash Lite classifies each reply's intent — Interested, Not Interested, Schedule Later, Wrong Person, Out of Office, or Unsubscribe — and the pipeline posts a formatted status notification straight to a dedicated Slack channel, replacing manual inbox triage with instant, automatic visibility on every reply.",
        stack: ['n8n', 'Google Apps Script', 'Google Gemini', 'Slack'],
      },
      {
        slug: 'zendesk-ai-support-automation',
        mark: 'ZD',
        name: 'Zendesk AI Support Automation',
        screenshot: '/assets/screenshots/zendesk-ai-support-automation/feature-mockup.png',
        metric: '3 linked workflows · tickets, calls & replies',
        challenge:
          "A support team's agents were spending time piecing together context by hand on every new ticket, every pending call recording, and every ongoing conversation before they could even start drafting a reply.",
        solution:
          'Built three linked n8n workflows — OCR-and-GPT-4o analysis of new tickets and their attachments, ElevenLabs transcription and summarization of pending call recordings, and full-history-aware response drafting for ongoing conversations — all logging into a shared Central Intelligence Hub database.',
        impact:
          'Every new ticket, pending call, and ongoing conversation now gets an instant AI-drafted summary and reply logged straight into Zendesk and the Intelligence Hub, before an agent even opens it.',
        challengeDetail:
          "A support team's agents were spending time piecing together context by hand before they could reply to a ticket: reading through attachments on a new ticket, listening back through a call recording to find out what was discussed, or re-reading a long conversation thread to draft the next reply. Each of those three situations needed a different kind of context-gathering, and none of it was logged anywhere central — so there was no shared record of what the AI had already summarized or proposed for a given ticket.",
        solutionDetail:
          "Built three linked n8n workflows, each triggered directly from Zendesk. New Ticket Response Automation fires when a ticket is created, downloads any attached images or PDFs, runs them through Google Vision AI for OCR, and feeds the extracted text to GPT-4o to generate a summary, sentiment, and a proposed first reply — posted back to the ticket as an internal note for the agent. Pending Call Analysis Automation fires when a ticket is tagged #summarize-call, finds the Aircall recording link in the ticket's comments, downloads it, transcribes it with ElevenLabs Speech-to-Text, and summarizes it with GPT-4o before posting the summary and sentiment as an internal note. Ticket Summary Response Automation fires when a ticket is tagged #propose-answer, pulls the full conversation history, formats it chronologically, and has GPT-4o draft a context-aware proposed response for the agent to review. All three write through the same SourceData → AiOutputs → Interactions tables in a shared Central Intelligence Hub database, so every ticket, call, and conversation the AI has touched is logged in one place.",
        impactDetail:
          "Every new ticket, pending call, and ongoing conversation now gets an instant AI-drafted summary and reply logged straight into Zendesk as an internal note, before an agent even opens it — replacing the manual read-transcribe-and-draft work that used to precede every reply. Because all three workflows log through the same Central Intelligence Hub tables, the team also gets a single, queryable audit trail of every AI summary and proposed response across tickets and calls, rather than three disconnected automations with no shared record.",
        overview:
          "A support team's agents were spending time piecing together context by hand before every reply — reading attachments on a new ticket, listening back through a call recording, or re-reading a long thread to draft the next response. Three linked n8n workflows now handle each case directly from Zendesk: one OCRs new-ticket attachments with Google Vision AI and drafts a GPT-4o summary and proposed reply the moment a ticket is created, one transcribes and summarizes Aircall recordings with ElevenLabs and GPT-4o when a ticket is tagged for a call summary, and one drafts a context-aware response from the full conversation history when a ticket is tagged for a proposed answer.\n\nAll three post their output straight back to Zendesk as an internal note for the agent to review, and all three log through the same SourceData, AiOutputs, and Interactions tables in a shared Central Intelligence Hub database — giving the team one audit trail of every AI summary and proposed response, instead of three disconnected automations with no shared record.",
        stack: ['n8n', 'Zendesk', 'Google Vision AI', 'GPT-4o', 'ElevenLabs', 'Aircall'],
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
        screenshot: '/assets/screenshots/kumquat-talent-match/feature-mockup.png',
        metric: 'Published FlutterFlow Marketplace',
        challenge:
          'Recruitment and talent-matching apps needed a proven FlutterFlow starting point instead of being built from a blank canvas.',
        solution:
          'Published Kumquat, a FlutterFlow starter template with profile listings, filtering, and match request flows.',
        impact:
          'Published to the FlutterFlow Marketplace as a reusable starting point for talent-matching apps.',
        challengeDetail:
          'Recruitment and talent-matching apps needed a proven FlutterFlow starting point instead of being built from a blank canvas each time — the core flows (profile listings, filtering, match requests) are similar enough across talent-matching products that rebuilding them from scratch for every new project was pure repeated effort.',
        solutionDetail:
          'Published Kumquat, a FlutterFlow starter template covering profile listings, filtering, and match request flows out of the box, so a new talent-matching app can start from a working foundation instead of an empty canvas.',
        impactDetail:
          'Published to the FlutterFlow Marketplace as a reusable starting point for talent-matching apps, giving other builders a head start on the recruitment-specific flows that would otherwise need to be built from scratch every time.',
        overview:
          'Recruitment and talent-matching apps needed a proven FlutterFlow starting point instead of being built from a blank canvas each time, since the core flows — profile listings, filtering, match requests — repeat across nearly every talent-matching product. Kumquat is a FlutterFlow starter template covering those flows out of the box.\n\nRather than every new talent-matching project rebuilding the same profile and matching logic from scratch, Kumquat gives builders a working foundation to start from — published to the FlutterFlow Marketplace as a reusable starting point.',
        stack: ['FlutterFlow', 'Dart'],
      },
      {
        slug: 'foodii-recipe-book',
        mark: 'FB',
        name: 'Foodii — Recipe Book',
        screenshot: '/assets/screenshots/foodii-recipe-book/feature-mockup.png',
        metric: 'Published FlutterFlow Marketplace',
        challenge:
          'Recipe and meal-planning apps needed a clean, card-based starting point rather than a from-scratch build.',
        solution:
          'Published Foodii, a FlutterFlow starter template covering browsing, saving, and categorising recipes.',
        impact:
          'Published to the FlutterFlow Marketplace as a reusable recipe-app starting point.',
        challengeDetail:
          'Recipe and meal-planning apps needed a clean, card-based starting point rather than a from-scratch build, since the core browsing, saving, and categorising flows are largely the same from one recipe app to the next — rebuilding that foundation for every new project was avoidable repeated work.',
        solutionDetail:
          'Published Foodii, a FlutterFlow starter template covering recipe browsing, saving, and categorising in a clean, card-based UI, giving a new recipe or meal-planning app a working foundation to build on top of instead of starting empty.',
        impactDetail:
          'Published to the FlutterFlow Marketplace as a reusable recipe-app starting point, saving builders the work of recreating the same browsing, saving, and categorising flows for every new recipe-focused project.',
        overview:
          'Recipe and meal-planning apps needed a clean, card-based starting point rather than a from-scratch build, since the core browsing, saving, and categorising flows repeat across nearly every recipe app. Foodii is a FlutterFlow starter template covering those flows in a clean, card-based UI.\n\nRather than every new recipe-focused project rebuilding the same foundation, Foodii gives builders a working starting point — published to the FlutterFlow Marketplace as a reusable recipe-app template.',
        stack: ['FlutterFlow', 'Dart'],
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
