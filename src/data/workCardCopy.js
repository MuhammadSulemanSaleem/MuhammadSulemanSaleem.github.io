// Refined short Challenge/Solution/Impact copy for the grid view on /work.
// Copied from the About page's experience items (src/pages/about/index.astro),
// matched by slug. Full-width /work cards keep the longer copy from projects.js.
// A project missing from this map falls back to its own projects.js copy.
export const cardCopy = {
    'orient-champions': {
        challenge: 'A live field-sales platform had accumulated dead code, hardcoded data, and no reliable state management — while recurring bugs were disrupting the client’s daily operations.',
        solution: 'Reworked the React Native and Nest.js codebase, introduced Redux, rebuilt the scheduled processing pipeline, and repaired push notifications and the app updater.',
        impact: 'Reduced reported bugs by approximately 90%, shifting client conversations from recurring fixes to new feature work.',
    },
    'nebufit': {
        challenge: 'Generic fitness apps could not connect a user’s physique, bloodwork, and progress into genuinely personalized coaching.',
        solution: 'Built an AI coaching app that analyses physique photos, grounds recommendations in bloodwork through RAG, and coordinates multiple LLM providers with automatic failover.',
        impact: 'Delivered a production AI coach with real-time voice guidance, provider resilience, and integrated Stripe subscriptions.',
    },
    'lead-response-automation': {
        challenge: 'Lead handling was fragmented across three vendors, while high-value leads, stalled opportunities, and agent performance issues could go unnoticed for days.',
        solution: 'Consolidated voice, SMS, and voicemail automation into Aloware, introduced HOT/WARM/LOW lead scoring and role-based agent routing, and integrated OpenAI call QA, automated funnel monitoring, and Clover payment reconciliation.',
        impact: 'Unified lead conversations, prioritized HOT leads for Senior closers, surfaced stalled opportunities and coaching gaps, and automated deposit, refund, and agent revenue reconciliation.',
    },
    'creative-os': {
        challenge: 'Writers needed an AI workspace that could retain context across sessions and work with their existing creative library.',
        solution: 'Built Creative OS, a local-first desktop app with RAG-powered search and editing, an MCP server, and Final Draft (.FDX) support that preserves screenplay formatting.',
        impact: 'Made persistent AI search and editing available across a creator’s library while keeping their files on their own machine.',
    },
    'agentc-job-discovery': {
        challenge: 'A Selenium-based decision-maker scraper spanning four niches was fragile to maintain and cost the client $600–800 per month.',
        solution: 'Replaced browser-driven scraping with Apify actors and orchestrated nightly enrichment in n8n using Hunter.io, ZeroBounce, and Clearout Phone.',
        impact: 'Brought the monthly cost within the client’s $200–300 target while retaining nightly coverage across all four niches.',
    },
    'capital-shack-ocr': {
        challenge: 'Incoming client documents required repetitive manual review, categorization, filing, and spreadsheet entry — creating a bottleneck as document volume grew.',
        solution: 'Built two connected Google Apps Script automations: one processes incoming email attachments and organizes them in Drive, while the other uses Google Document AI to classify documents and extract structured data into Sheets.',
        impact: 'Eliminated manual document handling and data entry — incoming documents are automatically categorized, filed, and processed into structured spreadsheet records.',
    },
    'ramirez-legal-clickup-sync': {
        challenge: 'Case information in ClickUp and the client-facing Emergent Labs dashboard had to be updated separately, creating a risk of inconsistent records.',
        solution: 'Built a Zapier workflow that automatically carries case and client updates from ClickUp into the Emergent Labs dashboard.',
        impact: 'Keeps internal case records and the client-facing dashboard in sync without duplicate manual updates.',
    },
    'unity-desktop-admin-portal': {
        challenge: 'A healthcare organisation needed a unified desktop workspace and a central way to tailor its tools and navigation to different user roles.',
        solution: 'Built an Electron and Nest.js desktop app with role-based dynamic navigation and credential autofill, alongside a Next.js/Nest.js admin portal for drag-and-drop role configuration.',
        impact: 'Delivered a unified, role-aware workspace with centrally managed navigation and permissions.',
    },
    'linked-golf': {
        challenge: 'An inherited live app had tightly coupled Bloc state, broken chat, unused backend code, and reliability issues across core screens.',
        solution: 'Restructured the Bloc and backend layers, repaired chat and app-link flows, and introduced event creation, Stripe subscriptions, and OTP-based team joining.',
        impact: 'Improved app stability and performance while delivering a new paid-event workflow for golf-course owners.',
    },
    'exodus-app': {
        challenge: 'Blue Sky needed to transition to the Exodus brand, while wearable health-vitals syncing was slow and unreliable because it depended on repeated API calls.',
        solution: 'Delivered the Blue Sky-to-Exodus rebrand and integrated the wearable vitals SDK into the app build, replacing the failure-prone per-scan API request.',
        impact: 'Launched the app under its new identity with faster, more reliable wearable-vitals syncing.',
    },
    'social-media-posting-automation': {
        challenge: 'Publishing across six social platforms required manual caption writing, scheduling, OAuth maintenance, and monitoring of failed uploads.',
        solution: 'Built five connected n8n workflows with Google Cloud Functions for AI caption generation, human approval, minute-precision scheduling, platform publishing, OAuth management, and centralized error reporting.',
        impact: 'Automated the publishing lifecycle across six platforms, leaving AI-content approval as the primary manual step. Token renewal and publishing failures are handled automatically, with reauthorization requested when necessary.',
    },
    'outreach-email-classification-automation': {
        challenge: 'Every outreach reply had to be reviewed manually, while native n8n Gmail polling lacked the filtering and rate controls the workflow required.',
        solution: 'Created a Google Apps Script Gmail poller to filter and rate-limit replies before sending them through n8n for Gemini classification and Slack status notifications.',
        impact: 'Replaced manual inbox sorting with automated, rate-controlled classification and immediate Slack visibility.',
    },
    'zendesk-ai-support-automation': {
        challenge: 'Support agents manually reviewed ticket attachments, listened to call recordings, and revisited conversation histories before preparing customer responses.',
        solution: 'Built three connected n8n workflows for OCR-powered ticket analysis, AI call transcription and summarization, and conversation-history-aware response drafting, with centralized logging.',
        impact: 'Automatically generated ticket summaries, call insights, and context-aware reply suggestions as Zendesk internal notes, giving agents actionable context before responding to customers.',
    },
    'techtiz-corporate-website': {
        challenge: 'A multi-vertical marketing site needed to move off a legacy static build while supporting service pages, industry content, a distinct government audience, and a blog.',
        solution: 'Rebuilt the site in Astro with a reusable two-tier page system, a separate SLED experience, and a WordPress-backed blog that publishes independently of code deployments.',
        impact: 'Created a maintainable, SEO-focused site with repeatable page patterns and content publishing that does not require a redeploy.',
    },
    'attn-agency-homepage': {
        challenge: 'The client needed a branded homepage built entirely inside Go High Level — not an externally embedded page or iframe.',
        solution: 'Assembled the homepage with Go High Level’s native builder elements and used Google Gemini to create visual assets beyond the builder’s standard component library.',
        impact: 'Delivered a custom-looking homepage that remains fully native and editable by the client’s own team.',
    },
    'kumquat-talent-match': {
        challenge: 'Building a skill-sharing and consultation-booking app from scratch meant recreating dozens of common screens and workflows.',
        solution: 'Developed and published Kumquat, an 81-screen FlutterFlow template covering bookings, payments, chat, and video calling.',
        impact: 'Released a reusable FlutterFlow Marketplace foundation for coaching, tutoring, and telehealth products, reaching 577 downloads to date.',
    },
    'foodii-recipe-book': {
        challenge: 'A recipe app needed a reusable foundation for nested recipe and chef data before a live backend was available.',
        solution: 'Built and published Foodii, a FlutterFlow template with custom Data Types, shared components, and App State variables to simulate backend data.',
        impact: 'Provided a backend-ready Marketplace template designed for straightforward Firestore integration, reaching 537 downloads to date.',
    },
    'houzi': {
        challenge: 'Houzez theme owners needed a native mobile app without rebuilding the same functionality for every client or sacrificing brand customization.',
        solution: 'Created Houzi, a white-label Flutter app with a shared core package, client-specific customization hooks, and REST API integration for Houzez websites.',
        impact: 'Expanded the solution to a potential audience of 53,000+ theme owners, with a 4.84★ rating, 500+ CodeCanyon sales, and 5,000+ Play Store downloads.',
    },
    'houzibuilder': {
        challenge: 'Configuring the Houzi companion app meant editing JSON by hand, with no visual way to see the result before applying changes.',
        solution: 'Built a licensed desktop configurator with guided forms and a live device preview.',
        impact: 'Enabled theme owners to configure and preview their app visually without writing code.',
    },
};



// // Short Challenge/Solution/Impact copy for the grid view on /work.
// // Copied from the About page's experience items (src/pages/about/index.astro),
// // matched by slug. Full-width /work cards keep the longer copy from projects.js.
// // A project missing from this map falls back to its own projects.js copy.
// export const cardCopy = {
//     'orient-champions': {
//         challenge: 'Inherited a live, poorly-built field-sales platform — dead code, no state management, hardcoded data — with daily client bug calls.',
//         solution: 'Refactored the React Native + Nest.js codebase, added Redux, rebuilt the cron pipeline, and fixed push notifications and the App Updater.',
//         impact: 'Cut bug reports by ~90% — the client now calls about new features, not fixes.',
//     },
//     'nebufit': {
//         challenge: "Fitness apps run on generic templates that ignore a user's real body data, bloodwork, and progress.",
//         solution: 'Built an AI coaching app that reads physique from photos, grounds plans in bloodwork through RAG, and orchestrates multiple LLM providers with automatic failover.',
//         impact: 'Shipped a production AI coach with real-time voice guidance, resilient uptime, and Stripe subscriptions from day one.',
//     },
//     'lead-response-automation': {
//         challenge: 'Lead response automation was split across three disconnected vendors, and stalled leads or underperforming agents went unnoticed for days.',
//         solution: "Consolidated onto Aloware's native voice/SMS bots with temperature-based lead routing, OpenAI call QA, and an automated deposit-to-revenue pipeline.",
//         impact: 'One unified conversation thread per lead, with funnel leaks, coaching gaps, and deposits all reconciling automatically.',
//     },
//     'creative-os': {
//         challenge: 'Writers needed an AI partner that remembers their work across sessions instead of starting from scratch every time.',
//         solution: 'Built Creative OS as a local-first desktop app that searches and edits screenplays, lyrics, and notes through a RAG pipeline and an MCP server, with Final Draft (.FDX) editing that preserves formatting.',
//         impact: 'Gave creators persistent AI editing and search across their whole creative library, with everything kept on their own machine.',
//     },
//     'agentc-job-discovery': {
//         challenge: "The client's Selenium-based decision-maker scraper across four niches was expensive and fragile, running $600–800/month.",
//         solution: 'Replaced Selenium with Apify actors, orchestrating the nightly pipeline in n8n with Hunter.io, ZeroBounce, and Clearout Phone.',
//         impact: "Brought monthly cost into the client's $200–300 target while covering four full niches every night.",
//     },
//     'capital-shack-ocr': {
//         challenge: 'Manually reviewing, categorizing, filing, and cross-referencing every incoming client document into spreadsheets was slow, repetitive, and error-prone at volume.',
//         solution: 'Built two linked Google Apps Script automations — one files and logs every emailed document, the other runs each attachment through Document AI to classify and extract its data.',
//         impact: 'Eliminated manual document triage and data entry entirely, so every incoming document is consistently categorized, filed, and logged.',
//     },
//     'ramirez-legal-clickup-sync': {
//         challenge: 'ClickUp case data and the Emergent Labs client-facing dashboard had to be kept in sync by hand.',
//         solution: 'Built a Zapier pipeline that syncs ClickUp case and client updates to the Emergent Labs dashboard automatically.',
//         impact: 'Keeps the case tracker and dashboard continuously synchronized, with zero duplicate manual entry.',
//     },
//     'unity-desktop-admin-portal': {
//         challenge: 'A healthcare organisation needed one desktop tool unifying browsing, credentials, and patient calls, plus an admin layer to reconfigure each role.',
//         solution: 'Built an Electron + Nest.js desktop app with per-role dynamic navigation, credential auto-fill, and a Next.js/Nest.js admin portal for drag-and-drop role config.',
//         impact: 'Delivered one unified, role-aware desktop tool with centrally-configurable navigation and permissions.',
//     },
//     'linked-golf': {
//         challenge: 'Inherited a live, poorly-built app — tightly coupled Bloc state, broken chat, dead backend code — with issues across every core screen.',
//         solution: 'Refactored the Bloc/backend, fixed chat and applink bugs, and added event creation, Stripe subscriptions, and OTP team joins.',
//         impact: 'Delivered a faster, stable app plus a new paid-event flow for golf-course owners.',
//     },
//     'exodus-app': {
//         challenge: 'Blue Sky needed a full rebrand to its new Exodus identity, and syncing health vitals from a wearable device into the app was slow and often failed.',
//         solution: "Delivered a full rebrand from Blue Sky to Exodus, and packaged the wearable's vitals SDK into the app build to replace a failure-prone per-scan API call.",
//         impact: 'Relaunched under its new identity with faster, more reliable wearable vitals syncing.',
//     },
//     'social-media-posting-automation': {
//         challenge: 'Needed a steady posting cadence across six platforms without hand-written captions, token babysitting, or unreviewed AI copy going live.',
//         solution: 'Built five linked n8n workflows plus per-platform Cloud Functions for AI caption drafting, human approval, minute-precise scheduling, publishing, token refresh, and OAuth callbacks.',
//         impact: 'Replaced manual posting and token upkeep with a pipeline where the only manual step left is approving AI-drafted copy.',
//     },
//     'outreach-email-classification-automation': {
//         challenge: "Every outreach reply had to be read by hand to tell an interested prospect from a bounce or unsubscribe, and n8n's native Gmail polling gave no way to filter or rate-limit it.",
//         solution: 'Built a Google Apps Script Gmail poller that filters and rate-limits replies into an n8n pipeline, which classifies each with Gemini and posts a status notification to Slack.',
//         impact: 'Replaced manual inbox triage with automatic, rate-safe classification and instant Slack visibility.',
//     },
//     'zendesk-ai-support-automation': {
//         challenge: 'Agents were piecing together ticket, call, and conversation context by hand before every reply.',
//         solution: 'Built three linked n8n workflows for OCR-and-AI ticket analysis, call transcription, and history-aware reply drafting.',
//         impact: 'Every ticket, call, and conversation now gets an instant AI-drafted summary and reply logged into Zendesk.',
//     },
//     'techtiz-corporate-website': {
//         challenge: 'Needed a large multi-vertical marketing site — services, industries, a separate government audience, and a blog — migrated off a legacy static site without duplicating markup.',
//         solution: 'Built the site in Astro with a two-tier page system, an isolated SLED experience, and a WordPress-backed blog that publishes without a redeploy.',
//         impact: 'Delivered a maintainable, SEO-optimized site where new pages follow a documented pattern and content publishes without a code deploy.',
//     },
//     'attn-agency-homepage': {
//         challenge: "Client needed a fully native, on-brand homepage inside Go High Level — not an embedded page or iframe — built from the builder's own elements.",
//         solution: "Built the homepage entirely with Go High Level's native builder elements, using Google Gemini to generate custom visual assets the component library doesn't provide.",
//         impact: "A homepage that reads like a custom build while staying fully native to Go High Level, easy for the client's own team to keep editing.",
//     },
//     'kumquat-talent-match': {
//         challenge: 'Needed a proven starting point for skill-sharing and consultation-booking apps instead of building 81 screens from a blank canvas.',
//         solution: 'Built and published Kumquat, an 81-page FlutterFlow template covering booking, payments, chat, and video calling.',
//         impact: 'Published as a reusable FlutterFlow Marketplace starting point for coaching, tutoring, and telehealth apps — 577 downloads to date.',
//     },
//     'foodii-recipe-book': {
//         challenge: 'Needed a ready-made starting point for recipe apps, with a nested recipe/chef data model and no live backend to build against yet.',
//         solution: 'Built and published Foodii, a FlutterFlow template with custom Data Types, a shared component library, and App State variables simulating backend data.',
//         impact: 'Published as a backend-ready FlutterFlow Marketplace template — connecting real Firestore later needs minimal rework — 537 downloads to date.',
//     },
//     'houzi': {
//         challenge: 'Houzez theme owners had no native app, and building one per client meant duplicating logic with no easy way to customize branding.',
//         solution: 'Built Houzi, a white-label Flutter app with a shared core package and per-client customization hooks, connecting to any Houzez site via REST API.',
//         impact: 'Reached 53,000+ theme owners with a 4.84★ rating, 500+ CodeCanyon sales, and 5,000+ Play Store downloads.',
//     },
//     'houzibuilder': {
//         challenge: 'Theme owners had to hand-edit JSON to configure the companion app, with no way to preview their changes.',
//         solution: 'Built a licensed desktop configurator with a guided, form-driven builder and a live device preview.',
//         impact: 'Let theme owners make visual changes themselves, with zero code.',
//     },
// };