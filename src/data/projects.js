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
          'Writers and filmmakers wanted AI assistance on screenplays and notes without sending unfinished creative work to the cloud, and without being locked into one fixed set of AI tools.',
        solution:
          'Built a local-first Electron/React desktop app that indexes Final Draft screenplays, PDFs, and notes via a RAG pipeline (ChromaDB + SQLite) for semantic search and Claude-powered rewriting, with an extensible MCP server architecture so Claude can reach indexed content and external tools through a typed protocol.',
        impact:
          'Gave writers AI-powered editing and search that never leaves their machine, with a tool ecosystem that grows without touching the core app.',
        challengeDetail:
          "Writers and filmmakers wanted AI assistance on screenplays and notes without sending unfinished creative work to the cloud — for many, script drafts and story notes are sensitive material they don't want touching a third-party server before it's ready. At the same time, they didn't want to be locked into one fixed set of AI tools or a single vendor's ecosystem, since the AI landscape moves fast and a rigid integration risks going stale. Any solution also needed to make sense of unstructured creative material — screenplays in Final Draft format, scattered PDFs, and loose notes — well enough to actually answer questions about it, not just store it.",
        solutionDetail:
          "Built a local-first Electron/React desktop app that indexes Final Draft screenplays, PDFs, and notes through a RAG pipeline running on ChromaDB and SQLite entirely on the user's machine, so nothing leaves local storage. That indexed context feeds Claude for semantic search and rewriting, letting writers ask questions about their own material and get grounded answers instead of generic suggestions. An extensible MCP server architecture sits behind the app, giving Claude a typed protocol to reach indexed content and external tools — new capabilities can be added to that ecosystem without touching the core app.",
        impactDetail:
          "Gave writers and filmmakers AI-powered editing and search that never leaves their machine, addressing a confidentiality concern generic cloud-based writing tools couldn't. The MCP-based architecture means the tool ecosystem around the app can keep growing — new integrations, new capabilities — without requiring changes to the core application itself, keeping the product from going stale as the AI tooling landscape evolves.",
        overview:
          "Creative OS gives writers and filmmakers an AI writing partner that never leaves their machine. Script drafts and story notes are sensitive, unfinished material, so the entire pipeline — indexing, search, and rewriting — runs locally rather than routing content through a third-party cloud service. It indexes Final Draft screenplays, PDFs, and notes through a local RAG pipeline built on ChromaDB and SQLite, then surfaces that context to Claude for semantic search and rewriting inside an Electron/React desktop app.\n\nAn MCP server architecture keeps the tool ecosystem extensible, so new capabilities can reach indexed content and external tools through a typed protocol without touching the core app. That matters for a product built on a fast-moving AI landscape — writers get a tool that can grow new integrations over time instead of being locked into one fixed set of AI capabilities at launch.",
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
        screenshot: '/assets/screenshots/orient-champions/feature-mockup.png',
        metric: 'Thousands of daily batch scans · SAP ERP',
        challenge:
          'Orient Electronic needed a nationwide field-sales incentive program spanning a four-level hierarchy (National → Zone → Branch → FSM), with real-time sync into their existing SAP ERP — without disrupting agents working offline in the field.',
        solution:
          'Architected a Nest.js backend supporting thousands of daily batch scans with real-time SAP ERP sync via custom BAPIs/RFC, resilient offline queuing and reconciliation, JWT + Twilio OTP auth, and bulk Excel/CSV processing on AWS S3.',
        impact:
          'Delivered a nationwide platform on both the App Store and Google Play that keeps field agents productive offline and reconciles cleanly with SAP the moment they reconnect.',
        challengeDetail:
          "Orient Electronic needed a nationwide field-sales incentive program spanning a four-level organisational hierarchy — National, Zone, Branch, and FSM — with real-time sync into their existing SAP ERP system. Field sales agents work across the country, often without reliable connectivity, so the program couldn't assume a constant connection back to headquarters. Any platform also had to fit around SAP rather than replace it, syncing cleanly with an ERP system the business already depended on rather than disrupting it.",
        solutionDetail:
          "Architected a Nest.js backend that supports thousands of daily batch scans from field agents, syncing in real time with SAP ERP through custom BAPIs and RFC calls rather than a generic integration layer. Resilient offline queuing and reconciliation let agents keep scanning and working while disconnected, with everything settling cleanly against SAP the moment connectivity returns. JWT-based sessions paired with Twilio OTP secure the login flow for a nationwide field force, and bulk Excel/CSV processing on AWS S3 handles the program's data at scale.",
        impactDetail:
          'Delivered a nationwide platform on both the App Store and Google Play that keeps field agents productive even while working offline, reconciling cleanly with SAP the moment they reconnect. The four-level hierarchy — National down to individual FSM — gets real-time visibility into thousands of daily batch scans without the manual reconciliation overhead a less resilient offline strategy would have required.',
        overview:
          "Orient Champions is a nationwide field-sales incentive platform built for Orient Electronic, spanning a four-level hierarchy — National, Zone, Branch, and FSM — and syncing in real time with the client's existing SAP ERP. A Nest.js backend handles thousands of daily batch scans, custom BAPIs/RFC keep SAP in sync, and resilient offline queuing lets field agents keep working without connectivity, reconciling cleanly the moment they reconnect.\n\nJWT and Twilio OTP secure the login flow for a nationwide field force, and bulk Excel/CSV processing on AWS S3 handles the program's data at scale. The platform shipped to both the App Store and Google Play, giving Orient Electronic a single incentive program that works the same way whether an agent is online in a branch office or offline in the field.",
        stack: ['Nest.js', 'SAP ERP / RFC', 'JWT', 'Twilio', 'AWS S3'],
      },
      {
        slug: 'unity-desktop-admin-portal',
        mark: 'UN',
        name: 'UNITY Desktop App & Admin Portal',
        screenshot: '/assets/screenshots/unity-desktop-admin-portal/feature-mockup.png',
        metric: 'Healthcare organisation · dual desktop + admin platform',
        challenge:
          'A healthcare organisation needed a desktop tool with role-based access and credential-managed auto-fill, paired with an admin portal giving staff live visibility into activity.',
        solution:
          'Built an Electron + Node.js desktop app with dynamic server-driven layouts, role-based access control, a credential manager, and script-injected auto-fill, paired with a Next.js + Nest.js admin web portal featuring real-time notifications via WebSockets.',
        impact:
          'Gave the client a secure, centrally-configurable desktop tool and a live admin view spanning dozens of staff logins and organizations.',
        challengeDetail:
          'A healthcare organisation needed a desktop tool that staff could use with tightly scoped, role-based access rather than a single shared login. Credentials for various downstream systems needed to be managed centrally and auto-filled into forms rather than handled manually by each staff member, reducing both friction and the risk of exposed credentials. The organisation also needed an admin layer giving oversight staff live visibility into desktop activity, without that visibility requiring a rebuild of the desktop app itself whenever requirements changed.',
        solutionDetail:
          'Built an Electron + Node.js desktop app with dynamic, server-driven layouts, so screens and workflows can be reconfigured from the server without shipping a new build. Role-based access control and a centralized credential manager govern who can see and do what, with script-injected auto-fill handling credential entry into downstream forms securely. A companion Next.js + Nest.js admin web portal gives oversight staff a live view into desktop activity, pushed in real time via WebSocket notifications rather than requiring a manual refresh.',
        impactDetail:
          'Gave the client a secure, centrally-configurable desktop tool paired with a live admin view, letting oversight staff adjust workflows and monitor activity across dozens of organizations and staff logins. The combination of role-based access and centralized credential management reduced the manual overhead and security risk of staff handling downstream credentials individually.',
        overview:
          'Built for a healthcare organisation, this project pairs an Electron + Node.js desktop app with a Next.js + Nest.js admin web portal. The desktop app uses dynamic server-driven layouts, role-based access control, a credential manager, and script-injected auto-fill, giving staff a secure, centrally-configurable tool rather than a rigid one-size-fits-all interface — bundling tools like Instant Visit, Tasks and Projects, Remote Desktop, a ticketing system, and internal chat behind a single sidebar.\n\nThe admin portal gives oversight staff live visibility into activity through real-time WebSocket notifications, so changes on the desktop side are reflected immediately rather than on a delay. Admins manage organizations, role-based permissions, users, and the desktop app\'s own navigation structure — reconfiguring what staff see without shipping a new build. The result is a secure, centrally-configurable desktop tool and a live admin view spanning dozens of organizations and staff logins.',
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
        metric: 'Deployed to App Store & Google Play',
        challenge:
          'A golf social and booking product needed real-time chat, payments, and push notifications working together without building each integration from scratch.',
        solution:
          'Built a Flutter app with real-time in-app chat via PubNub, Stripe payment integration, FCM push notifications, and an Express backend.',
        impact:
          'Shipped to both the App Store and Google Play as a complete golf social and booking experience.',
        challengeDetail:
          'A golf social and booking product needed real-time chat, payments, and push notifications all working together as one coherent experience, rather than as three separate integrations bolted on independently. Building each of those systems from scratch — a chat backend, a payments flow, a notification pipeline — would have meant months of infrastructure work before the actual golf social and booking features could ship. The product also needed to launch on both major mobile platforms rather than picking just one.',
        solutionDetail:
          'Built a Flutter app that pairs PubNub for real-time in-app chat, so golfers can message each other without a custom-built messaging backend, with Stripe handling payment integration for bookings. FCM push notifications keep users informed of chat messages and booking updates, and an Express backend ties the business logic together behind these third-party services rather than reinventing them.',
        impactDetail:
          'Shipped to both the App Store and Google Play as a complete golf social and booking experience, with chat, payments, and notifications working together from day one rather than being added incrementally after launch. Leaning on established providers (PubNub, Stripe, FCM) instead of custom infrastructure meant engineering effort could go toward the golf-specific social and booking features instead of messaging or payments plumbing.',
        overview:
          'Linked Golf needed real-time chat, payments, and push notifications working together as one golf social and booking experience, rather than as separate bolted-on integrations built from scratch. The Flutter app pairs PubNub for real-time in-app chat with Stripe for payments and FCM for push notifications, running on an Express backend that ties the business logic together behind these established providers.\n\nLeaning on PubNub, Stripe, and FCM instead of custom-built infrastructure meant engineering effort could go toward the golf-specific social and booking features rather than messaging or payments plumbing. It shipped to both the App Store and Google Play as a complete social and booking product from day one.',
        stack: [
          'Flutter',
          'Dart',
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
