// Maps a project's `slug` (from projects.js) to its case-study screenshots, stored
// under public/assets/screenshots/<slug>/. Not every project has an entry — only
// ones cleared to show real product screenshots (see Confidentiality in CLAUDE.md).
// `hero` renders in the hero card itself, alongside the title/description,
// replacing the generic mark-tile/logo for projects that have one — for NebuFit,
// Creative OS, and Houzi this is a pre-rendered multi-device mockup composite
// (real device renders + dust/smoke effect, not a raw in-app screenshot), so it
// drops in as a plain image with no extra CSS device-frame chrome around it.
// These composites are also reused as the project's `screenshot` tile image on
// Home/Work/About (see the `screenshot` field in index.astro/about/index.astro/
// projects.js) — one shared featured image across all four pages that render
// that project. `gallery` is the full set of raw in-app screenshots rendered in
// an auto-scrolling marquee placed after Project Overview (so the narrative sets
// up what the screenshots show) and before the Challenge/Solution/Impact
// breakdown — deliberately the complete screenshot set (not a curated highlight
// reel), in the app's own narrative order (NebuFit: splash → onboarding →
// dashboard → training/nutrition/coach → profile; Creative OS: splash → empty
// state → workspace editor → library search → collections/tagging → analysis →
// RAG chat; Houzi: home discovery → map search → results → filters → property
// detail → agent profile → agent-side add-property/CRM/insights tools).
// Keeping this separate from projects.js (rather than inline `screenshot`
// fields per item) means the case study page can do a single keyed lookup and
// projects without screenshots need no extra fields.
export const projectScreenshots = {
  nebufit: {
    hero: {
      src: '/assets/screenshots/nebufit/feature-mockup.png',
      alt: 'NebuFit shown across five iPhone screens — sign-in, AI coach chat, home dashboard, blood report analysis, and subscription management',
    },
    gallery: [
      {
        src: '/assets/screenshots/nebufit/01-splash-logo.png',
        alt: 'NebuFit splash screen showing the shield logo while the app loads',
      },
      {
        src: '/assets/screenshots/nebufit/02-brand-splash.png',
        alt: 'NebuFit sign-in screen with the app logo and "Elite AI Body Optimization" tagline',
      },
      {
        src: '/assets/screenshots/nebufit/03-create-account.png',
        alt: 'Create account form with full name, email, category, and password fields',
      },
      {
        src: '/assets/screenshots/nebufit/04-login.png',
        alt: 'Login screen with email and password fields',
      },
      {
        src: '/assets/screenshots/nebufit/05-onboarding-physiology.png',
        alt: 'Onboarding step 1 of 3, Physiology, collecting date of birth, sex, height, and weight',
      },
      {
        src: '/assets/screenshots/nebufit/06-onboarding-lifestyle.png',
        alt: 'Onboarding step 2 of 3, Lifestyle, selecting primary goal, training experience, and training days per week',
      },
      {
        src: '/assets/screenshots/nebufit/07-onboarding-lifestyle-hours.png',
        alt: 'Onboarding step 2 continued, selecting weekly work hours and comfort with cooking or meal prep',
      },
      {
        src: '/assets/screenshots/nebufit/08-onboarding-objectives.png',
        alt: 'Onboarding step 3 of 3, Objectives, capturing biggest obstacle, food preferences and allergies, and injuries or limitations',
      },
      {
        src: '/assets/screenshots/nebufit/09-paywall.png',
        alt: 'NebuFit Pro paywall with annual and monthly pricing plans',
      },
      {
        src: '/assets/screenshots/nebufit/10-checkin-photos-front.png',
        alt: 'Initial assessment photo upload screen for the front view',
      },
      {
        src: '/assets/screenshots/nebufit/11-checkin-photos-back-side.png',
        alt: 'Initial assessment photo upload screens for the back and side views',
      },
      {
        src: '/assets/screenshots/nebufit/12-checkin-metrics.png',
        alt: 'Initial assessment screen for current weight, stress level, and average sleep per night',
      },
      {
        src: '/assets/screenshots/nebufit/13-checkin-processing.png',
        alt: 'Processing modal shown while the AI finalizes the initial body assessment',
      },
      {
        src: '/assets/screenshots/nebufit/14-home-dashboard.png',
        alt: 'NebuFit home dashboard showing a training streak, next check-in, blood report upload, and front/side/back visual progress photos',
      },
      {
        src: '/assets/screenshots/nebufit/15-ai-body-assessment.png',
        alt: 'AI-generated body assessment summarizing physique, estimated body fat, and conditioning',
      },
      {
        src: '/assets/screenshots/nebufit/16-training-plan.png',
        alt: "A day's training plan with exercise list, sets, reps, and rest periods",
      },
      {
        src: '/assets/screenshots/nebufit/17-nutrition-today.png',
        alt: "Today's Nutrition tab with daily calorie, protein, and carb targets and the first meal",
      },
      {
        src: '/assets/screenshots/nebufit/18-body-assessment-detail.png',
        alt: 'Full body assessment page with detailed physique summary and body fat and conditioning analysis',
      },
      {
        src: '/assets/screenshots/nebufit/19-training-today-detailed.png',
        alt: "Today's Training detail page listing all 7 exercises with sets, reps, and rest periods",
      },
      {
        src: '/assets/screenshots/nebufit/20-nutrition-today-detailed.png',
        alt: "Today's Nutrition detail page with the full meal-by-meal breakdown",
      },
      {
        src: '/assets/screenshots/nebufit/21-training-week.png',
        alt: "Weekly training page showing Monday's 8-exercise session",
      },
      {
        src: '/assets/screenshots/nebufit/22-nutrition-week.png',
        alt: 'Daily nutrition targets for calories, protein, and carbohydrates with a structured meal plan below',
      },
      {
        src: '/assets/screenshots/nebufit/23-coaching-guidance.png',
        alt: 'Coaching guidance page with sleep directive, sleep quality markers, and stress management notes',
      },
      {
        src: '/assets/screenshots/nebufit/24-coach-chat-question.png',
        alt: "Coach chat screen with a user question and the AI coach's response loading",
      },
      {
        src: '/assets/screenshots/nebufit/25-coach-chat-answer.png',
        alt: "Coach chat screen with the AI coach's detailed answer about the day's training focus",
      },
      {
        src: '/assets/screenshots/nebufit/26-profile.png',
        alt: 'Profile screen with account info, NebuFit philosophy quote, and security & access settings',
      },
      {
        src: '/assets/screenshots/nebufit/31-subscription.png',
        alt: 'Manage Subscription screen showing the active annual plan, next billing date, payment method, and included Pro features',
      },
      {
        src: '/assets/screenshots/nebufit/27-blood-report.png',
        alt: 'Blood Report Analysis complete marker summary table with priority-ranked results out of reference range',
      },
      {
        src: '/assets/screenshots/nebufit/28-blood-report.png',
        alt: 'Blood Report Analysis complete marker summary table continued, including basophils, absolute counts, and RBC count',
      },
      {
        src: '/assets/screenshots/nebufit/29-blood-report.png',
        alt: 'Blood Report Analysis priority sections listing markers near boundary and well within reference range',
      },
      {
        src: '/assets/screenshots/nebufit/30-blood-report.png',
        alt: 'Blood Report Analysis expanded marker detail with an AI-written explanation of what it measures and performance context',
      },
    ],
  },
  'creative-os': {
    hero: {
      src: '/assets/screenshots/creative-os/feature-mockup.png',
      alt: 'Creative OS shown across three laptop screens — the Library semantic search, the Workspace screenplay editor with RAG + Claude chat, and the Analysis dashboard',
    },
    gallery: [
      {
        src: '/assets/screenshots/creative-os/00-splash-branded.png',
        alt: "Creative OS splash screen showing the app icon, name, and 'Writer's desktop' tagline while it loads",
      },
      {
        src: '/assets/screenshots/creative-os/01-empty-state-onboarding.png',
        alt: 'Empty state prompting the user to add a folder — Desktop, Downloads, Dropbox — to start watching files for indexing',
      },
      {
        src: '/assets/screenshots/creative-os/02-workspace-screenplay-editor.png',
        alt: 'Workspace view with a Final Draft screenplay open in the scene editor, AI actions, and a chat panel alongside',
      },
      {
        src: '/assets/screenshots/creative-os/03-library-semantic-search.png',
        alt: 'Library semantic search returning ranked results across indexed screenplay, outline, and production notes documents for a natural-language query',
      },
      {
        src: '/assets/screenshots/creative-os/04-collections-ai-tagging.png',
        alt: 'Collections page with a Festival Submissions collection and AI-suggested tags — Beat Outline, Tech Thriller, Character Arc, Themes — awaiting accept or dismiss',
      },
      {
        src: '/assets/screenshots/creative-os/05-analysis-dashboard.png',
        alt: 'Analysis dashboard showing document, scene, and word counts, tag frequency, scene length distribution, and a thematic clustering scatter plot',
      },
      {
        src: '/assets/screenshots/creative-os/06-rag-chat.png',
        alt: "RAG + Claude chat answering a question about the screenplay's plot with an answer grounded in the indexed script and outline",
      },
    ],
  },
  houzi: {
    hero: {
      src: '/assets/screenshots/houzi/feature-mockup.png',
      alt: 'Houzi shown across five iPhone screens — the home discovery feed, map search, a property detail page, search results, and the agent-side insights dashboard',
    },
    gallery: [
      {
        src: '/assets/screenshots/houzi/01-home-discovery.png',
        alt: 'Houzi home screen for Miami with For Rent/For Sale/Commercial/Residential shortcuts, Featured Properties, and Latest Properties in Miami',
      },
      {
        src: '/assets/screenshots/houzi/02-map-search.png',
        alt: 'Map search screen with price-tagged property pins across Miami and a property card preview at the bottom',
      },
      {
        src: '/assets/screenshots/houzi/03-search-results.png',
        alt: 'Search results list showing 5 for-rent residential properties in Miami with photos, price, and specs',
      },
      {
        src: '/assets/screenshots/houzi/04-filters.png',
        alt: 'Filters screen for rent/sale type, location, property type, and price range',
      },
      {
        src: '/assets/screenshots/houzi/05-property-detail.png',
        alt: 'Property detail page for a single-family home for sale, with photo, price, bedroom/bathroom/garage counts, and a details table',
      },
      {
        src: '/assets/screenshots/houzi/06-property-detail-description.png',
        alt: 'Property detail page continued — description, address with map, floor plans, and agent contact information',
      },
      {
        src: '/assets/screenshots/houzi/07-agent-profile.png',
        alt: 'Agent profile page with an about section and contact details for a company agent',
      },
      {
        src: '/assets/screenshots/houzi/08-quick-add-property.png',
        alt: 'Quick Add Property form for agents, with title, description, price, area size, and bedroom/bathroom fields',
      },
      {
        src: '/assets/screenshots/houzi/09-activities-crm.png',
        alt: 'Activities dashboard with lead stats, a deals breakdown donut chart, and a feed of new reviews, leads, and deals',
      },
      {
        src: '/assets/screenshots/houzi/10-insights.png',
        alt: 'Insights dashboard with unique view counts, a visits chart, and a top-countries breakdown',
      },
    ],
  },
};
