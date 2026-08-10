// Maps a project's `slug` (from projects.js) to its case-study screenshots, stored
// under public/assets/screenshots/<slug>/. Not every project has an entry — only
// ones cleared to show real product screenshots (see Confidentiality in CLAUDE.md).
// `hero` renders in the hero card itself, alongside the title/description,
// replacing the generic mark-tile/logo for projects that have one — for NebuFit,
// Creative OS, Houzi, Orient Champions, UNITY, Linked Golf, HouziBuilder, Exodus
// App, and Foodii this is a pre-rendered multi-device mockup composite (real
// device renders, not a raw in-app screenshot — Exodus App's lacks the
// dust/smoke effect the others have, just plain phone renders), so it drops in
// as a plain image with no extra CSS device-frame chrome around it. ATTN Agency
// Homepage and Techtiz Corporate Website — both desktop websites rather than
// apps — use the same kind of composite but across two desktop monitors instead
// of phones. AGENTC — Agentic Job Discovery Automation reuses the same
// two-desktop-monitor composite style, but with n8n workflow canvases in
// place of a website UI, since the "product" here is the automation itself.
// These composites are also reused as the project's `screenshot` tile
// image on Home/Work/About (see the `screenshot` field in index.astro/about/
// index.astro/projects.js) — one shared featured image across all pages that
// render that project (Orient Champions, UNITY, Linked Golf, HouziBuilder,
// Techtiz Corporate Website, Exodus App, Foodii, and AGENTC have no Home entry
// since none is one of Home's 3 "Selected works").
// `gallery` is the full set of raw in-app screenshots rendered in an auto-scrolling
// marquee placed after Project Overview (so the narrative sets up what the
// screenshots show) and before the Challenge/Solution/Impact breakdown —
// deliberately the complete screenshot set (not a curated highlight reel), in
// the app's own narrative order (NebuFit: splash → onboarding → dashboard →
// training/nutrition/coach → profile; Creative OS: splash → empty state →
// workspace editor → library search → collections/tagging → analysis → RAG
// chat; Houzi: home discovery → map search → results → filters → property
// detail → agent profile → agent-side add-property/CRM/insights tools; Orient
// Champions: splash → login → signup → dashboard → paid cards → help/FAQ →
// more menu → account; UNITY: desktop app screens first — login → home/browser
// → tasks/tickets → how-to guide → bookmarks → credentials manager → IT helpdesk —
// then the admin portal — login → dashboard → organizations → roles → navigation
// builder → users; Linked Golf: splash → onboarding/signup → profile → availability
// (day → calendar → detail) → chat inbox → courses discover → course detail →
// golf buddies → chat detail → settings; HouziBuilder: desktop app activation →
// WordPress plugin integration test → Basic/Style/Home/Navigation Bar/Drawer/Search
// tabs → Results and Maps (two card designs) → Listing Details → Blog Details →
// Add Property, each paired with its own live drag-and-drop layout panel — two
// screens with a real Google Maps API key and AdMob ad unit IDs visible were
// excluded from the set; ATTN Agency Homepage: hero → featured-in/struggle points →
// results and brand logos → services and lead-magnet download → client
// testimonials → "Who is Will Giles" bio → final CTA and footer; Foodii: splash →
// onboarding → welcome/auth choice → login → signup → home dashboard → recipe
// detail → recipe ingredients/steps preview → full cooking steps → recommended
// grid → explore → add-recipe basic info → add-recipe ingredients → favourites →
// profile → notifications; Kumquat — Talent Match: client login → create account →
// choose client/professional account type → choose professional category →
// email verification → registration success → Explore home feed → an expert's
// public profile → chat conversation → incoming/active video call → book-an-
// appointment calendar → payment methods → add card → payment summary →
// payment success → messages inbox → scheduled/completed sessions → own-profile
// menu → professional rate/summary editor → professional login → the
// professional's home dashboard with pending session requests and upcoming
// sessions; AGENTC — Agentic Job Discovery Automation: schedule-trigger
// orchestration overview of all five sub-workflows → LinkedIn & career sites
// job scraping and NocoDB storage → decision-maker discovery via Hunter.io →
// decision-maker enrichment and refresh → email verification via ZeroBounce →
// phone number verification via Clearout Phone → AI-summarized daily CSV
// report and email delivery → the separate Tech Inventory workflow that
// monitors API credit balances across all four providers and reports NocoDB
// record totals (these are n8n workflow-canvas screenshots, not app UI, so
// each one is a full editor view rather than a single screen); Techtiz Corporate Website: homepage hero → services capability grid →
// expert-team credentials and stats bar → case studies preview → footer CTA →
// Healthcare industry page hero → AI Agents service page hero → About page hero →
// Case Studies listing page → SLED Subcontracting hub hero → Blog index; Exodus
// App: splash icon → splash branded logo → home dashboard → create-schedule
// appointment form → cancelled appointments list → Health Vitals list → Blood
// Pressure detail graph → Test Result Questions message thread → Pharmacy
// medications list → Test Results list).
// Keeping this
// separate from projects.js (rather than inline `screenshot` fields per item)
// means the case study page can do a single keyed lookup and projects without
// screenshots need no extra fields.
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
      alt: 'Creative OS shown across two laptop screens — the Workspace screenplay editor with RAG + Claude chat, and the Analysis dashboard',
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
  'orient-champions': {
    hero: {
      src: '/assets/screenshots/orient-champions/feature-mockup.png',
      alt: 'Orient Champions shown across five iPhone screens — login, account creation, the paid/approved/outstanding dashboard, a paid cards list, and account settings',
    },
    gallery: [
      {
        src: '/assets/screenshots/orient-champions/01-splash.webp',
        alt: 'Orient Champions splash screen showing the brand mark while the app loads',
      },
      {
        src: '/assets/screenshots/orient-champions/02-login.webp',
        alt: 'Login screen with mobile number and password fields',
      },
      {
        src: '/assets/screenshots/orient-champions/03-signup.webp',
        alt: 'Account creation form with name, mobile number, CNIC/social security, dealer code, password, and company selection',
      },
      {
        src: '/assets/screenshots/orient-champions/04-dashboard.webp',
        alt: 'Dashboard showing total paid, approved, and outstanding amounts, plus paid/approved/verified/pending/rejected card counts and a scan button',
      },
      {
        src: '/assets/screenshots/orient-champions/05-paid-cards.webp',
        alt: 'Paid Cards list with card IDs, names, and amounts, paginated with previous/next controls',
      },
      {
        src: '/assets/screenshots/orient-champions/06-help-faq.webp',
        alt: 'Help/FAQ screen with About, FAQs, Contact Us, Privacy Policy, Gallery, and Terms & Conditions tiles',
      },
      {
        src: '/assets/screenshots/orient-champions/07-more-menu.webp',
        alt: 'More menu with links to videos, blogs, catalogue, policies, and the brand\'s social media profiles',
      },
      {
        src: '/assets/screenshots/orient-champions/08-account.webp',
        alt: 'Account screen with profile info and links to account settings, policies, help/FAQ, and sign out',
      },
    ],
  },
  'unity-desktop-admin-portal': {
    hero: {
      src: '/assets/screenshots/unity-desktop-admin-portal/feature-mockup.png',
      alt: 'UNITY shown across the Electron desktop app and the Next.js admin portal',
    },
    gallery: [
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/01-desktop-login.png',
        alt: 'UNITY desktop app authorization screen with email and password fields',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/02-desktop-home-browser.png',
        alt: 'UNITY desktop app home screen with the Instant Visit panel and embedded browser view',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/03-desktop-tasks-workgroups.png',
        alt: 'Tasks and Projects panel listing workgroups and projects with created and last-updated dates',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/04-desktop-notifications-tickets.png',
        alt: 'Ticket Systems panel with Issue and Checklist ticket categories and a notifications history flyout',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/05-desktop-how-to-guide.png',
        alt: 'UNITY Platform How To Guide page with an introduction and general menu section',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/06-desktop-bookmarks-manager.png',
        alt: 'Bookmarks Manager panel listing saved links with edit and delete controls',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/07-desktop-credentials-manager.png',
        alt: 'Credentials Manager panel listing connected third-party systems for centralized credential storage',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/08-desktop-it-helpdesk.png',
        alt: 'IT HelpDesk page with Unlock Form, IT Ticket Form, and Laptop Request/Replacement Form links',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/09-admin-login.png',
        alt: 'UNITY Admin Portal login screen with email and password fields',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/10-admin-dashboard.png',
        alt: 'Admin Portal dashboard with Total Organizations, Total Users, Total Role Assigned, and Total Admin stat cards plus Organizations & Users and Users & Navigations charts',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/11-admin-organizations.png',
        alt: 'Admin Portal Organizations list showing organization names, user counts, and active status',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/12-admin-roles.png',
        alt: 'Admin Portal Roles page with a Create Role button and empty state',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/13-admin-add-role.png',
        alt: 'Add Title modal for creating a new role with a role title field and organization selector',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/14-admin-roles-listing.png',
        alt: 'Roles listing table with role name, organization name, status, and row actions',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/15-admin-navigations.png',
        alt: 'Admin Portal Navigations page with an Add Navigation button and empty state',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/16-admin-add-navigation.png',
        alt: 'Add Navigation Item modal with title, id, and type fields, type set to Navigation Dropdown',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/17-admin-navigation-listing-01.png',
        alt: 'Draggable navigation items list including Notifications, How To Guide, Browser, Chat, and Patient Virtual Connect',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/18-admin-navigation-listing-02.png',
        alt: 'Draggable navigation items list continued, including Incident Report, Playbook, Onboarding, Offboarding, and Credential Manager',
      },
      {
        src: '/assets/screenshots/unity-desktop-admin-portal/19-admin-users-listing.png',
        alt: 'Admin Portal Users table with email, current organization, current role, joining date, and status columns',
      },
    ],
  },
  'linked-golf': {
    hero: {
      src: '/assets/screenshots/linked-golf/feature-mockup.png',
      alt: 'Linked Golf shown across multiple phone screens',
    },
    gallery: [
      {
        src: '/assets/screenshots/linked-golf/01-splash-logo.png',
        alt: 'Linked Golf splash screen with the app logo over a putting green',
      },
      {
        src: '/assets/screenshots/linked-golf/02-splash-tagline.png',
        alt: 'Linked Golf splash screen with the "Let\'s Golf." tagline',
      },
      {
        src: '/assets/screenshots/linked-golf/03-welcome-signup.png',
        alt: 'Welcome screen with a golf course illustration and sign up with Google, Apple, or email options',
      },
      {
        src: '/assets/screenshots/linked-golf/04-profile.png',
        alt: 'User profile screen with name, location, age, bio, and availability sections',
      },
      {
        src: '/assets/screenshots/linked-golf/05-availability-day.png',
        alt: 'Availability screen for a selected day showing an empty golf buddies state and a prompt to invite friends',
      },
      {
        src: '/assets/screenshots/linked-golf/06-availability-calendar.png',
        alt: 'Availability calendar for August 2026 with a marked available day',
      },
      {
        src: '/assets/screenshots/linked-golf/07-availability-detail.png',
        alt: 'Availability detail panel with preferred golf course, round format tags, and golfers needed',
      },
      {
        src: '/assets/screenshots/linked-golf/08-chat-inbox.png',
        alt: 'Chat inbox with direct messages and a group chats coming soon section',
      },
      {
        src: '/assets/screenshots/linked-golf/09-courses-discover.png',
        alt: 'Courses discover list for Philadelphia with nearby golf clubs and follower counts',
      },
      {
        src: '/assets/screenshots/linked-golf/10-course-detail.png',
        alt: 'Golf course profile page with ratings, reviews, photos, and contact details',
      },
      {
        src: '/assets/screenshots/linked-golf/11-golf-buddies.png',
        alt: 'My Golf Buddies list with mutual buddy counts and an invite friends banner',
      },
      {
        src: '/assets/screenshots/linked-golf/12-chat-empty.png',
        alt: 'Empty chat conversation state',
      },
      {
        src: '/assets/screenshots/linked-golf/13-settings-account.png',
        alt: 'Account settings screen with name, location, and a blocked users list',
      },
    ],
  },
  houzibuilder: {
    hero: {
      src: '/assets/screenshots/houzibuilder/feature-mockup.png',
      alt: 'HouziBuilder shown across two desktop screens — the activation splash and the Home Elegant configurator with a live phone preview',
    },
    gallery: [
      {
        src: '/assets/screenshots/houzibuilder/01-activate-app.png',
        alt: 'HouziBuilder desktop app activation screen with a purchase-code entry field',
      },
      {
        src: '/assets/screenshots/houzibuilder/02-plugin-integration.png',
        alt: 'Houzi Plug-in Integration screen with a WordPress URL field and a 5/5 passed API connectivity test',
      },
      {
        src: '/assets/screenshots/houzibuilder/03-basic-home-preview.png',
        alt: 'Basic tab showing a live Home Elegant phone preview alongside a drag-and-drop Home Layout widget list',
      },
      {
        src: '/assets/screenshots/houzibuilder/04-style-appbar-colors.png',
        alt: 'Style tab with an AppBar preview and hex color pickers for primary, secondary, slider, and icon tint colors',
      },
      {
        src: '/assets/screenshots/houzibuilder/05-home-designs.png',
        alt: 'Home tab with four selectable home-screen designs — Carousel, Elegant, Location, Tabbed — and a drag-and-drop layout list',
      },
      {
        src: '/assets/screenshots/houzibuilder/06-navigation-bar-designs.png',
        alt: 'Navigation Bar tab with three selectable bottom nav bar designs and a drag-and-drop layout list',
      },
      {
        src: '/assets/screenshots/houzibuilder/07-drawer-layout.png',
        alt: 'Drawer tab showing the side menu preview alongside a drag-and-drop Drawer Layout widget list',
      },
      {
        src: '/assets/screenshots/houzibuilder/08-search-filters.png',
        alt: 'Search tab showing the Filters screen preview alongside a drag-and-drop Search Layout list',
      },
      {
        src: '/assets/screenshots/houzibuilder/09-results-list-design.png',
        alt: 'Results and Maps tab with eight selectable result card designs and a list-style preview',
      },
      {
        src: '/assets/screenshots/houzibuilder/10-results-grid-design.png',
        alt: 'Results and Maps tab with a grid-style property card design selected in the preview',
      },
      {
        src: '/assets/screenshots/houzibuilder/11-listing-details.png',
        alt: 'Listing Details tab with contact-button configuration checkboxes and a drag-and-drop Listing Details Layout list',
      },
      {
        src: '/assets/screenshots/houzibuilder/12-blog-details.png',
        alt: 'Blog Details tab showing a blog post preview alongside a drag-and-drop Blog Details Layout list',
      },
      {
        src: '/assets/screenshots/houzibuilder/13-add-property-form.png',
        alt: 'Add Property tab showing the multi-step Add Property form alongside its own page layout list',
      },
    ],
  },
  'attn-agency-homepage': {
    hero: {
      src: '/assets/screenshots/attn-agency-homepage/feature-mockup.png',
      alt: 'ATTN Agency Homepage shown across two desktop monitors — the hero booking section and the results/brands section',
    },
    gallery: [
      {
        src: '/assets/screenshots/attn-agency-homepage/01-hero.png',
        alt: 'ATTN homepage hero with a "Back to the Future" themed video panel and a free strategy call booking form',
      },
      {
        src: '/assets/screenshots/attn-agency-homepage/02-featured-in-struggles.png',
        alt: 'As-featured-in press logo strip followed by a five-point "do you struggle with" section covering time, leads, trust, ROI, and strategy',
      },
      {
        src: '/assets/screenshots/attn-agency-homepage/03-results-brands.png',
        alt: 'Results panel citing $250M+ in combined client revenue alongside a ten-brand logo grid',
      },
      {
        src: '/assets/screenshots/attn-agency-homepage/04-services-lead-magnet.png',
        alt: 'Five-service breakdown (paid media, social media, websites, email marketing, AI & automation) above a free Growth Strategy Blueprint lead-magnet download',
      },
      {
        src: '/assets/screenshots/attn-agency-homepage/05-testimonials.png',
        alt: 'Client testimonials section with three five-star review cards',
      },
      {
        src: '/assets/screenshots/attn-agency-homepage/06-who-is-will-giles.png',
        alt: '"Who is Will Giles" bio section with four credibility points and a book-a-call button',
      },
      {
        src: '/assets/screenshots/attn-agency-homepage/07-final-cta-footer.png',
        alt: 'Final "let\'s build what\'s next" call-to-action form above the site footer',
      },
    ],
  },
  'kumquat-talent-match': {
    hero: {
      src: '/assets/screenshots/kumquat-talent-match/feature-mockup.png',
      alt: 'Kumquat shown across five phone screens — a chat conversation, the professional home dashboard, the Explore expert-search feed, the Sessions list, and an active video call',
    },
    gallery: [
      {
        src: '/assets/screenshots/kumquat-talent-match/01-login-client.png',
        alt: 'Login screen with Client selected, email and password fields, and Google/Facebook login options',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/02-create-account.png',
        alt: 'Create Account form with User ID, email, and password fields',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/03-choose-account-type.png',
        alt: 'Choose Your Profession screen offering Clients or Professionals account types',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/04-choose-profession-category.png',
        alt: 'Professional category grid — Design & Creative, Development & Engineering, Content Writing, Marketing & Growth, Product & Strategy, Data & AI, Low Code, Virtual Assistance, and Add Other',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/05-verification-code.png',
        alt: 'Email verification screen with a 5-digit code entry and resend option',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/06-register-success.png',
        alt: 'Register Success confirmation modal with a Go to Login Page button',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/07-explore-home.png',
        alt: 'Explore home feed with a search bar, category shortcuts, Featured Experts, Upcoming Sessions, and Recently Viewed rows',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/08-expert-profile.png',
        alt: 'An expert\'s public profile with rating, Book a Consultation button, skills tags, summary, social links, and reviews',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/09-chat-conversation.png',
        alt: 'Chat conversation thread with a client and an expert exchanging messages',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/10-video-call-incoming.png',
        alt: 'Full-screen video call with a picture-in-picture self view and mic/speaker/camera/end-call controls',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/11-video-call-active.png',
        alt: 'Active voice/video call screen with a circular avatar, call timer, and control buttons',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/12-book-appointment.png',
        alt: 'Book An Appointment screen with the expert summary and a month calendar for selecting a date',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/13-payment-methods.png',
        alt: 'Payment Methods screen listing saved cards plus PayPal, Apple Pay, and Google Pay options',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/14-add-new-card.png',
        alt: 'Add New Card form with a live card preview and cardholder name, number, expiration, and CVV fields',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/15-appointment-payment-summary.png',
        alt: 'Appointment Payment summary showing the expert, date and time, package, duration, and total amount due',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/16-payment-success.png',
        alt: 'Payment Success confirmation modal stating the appointment is scheduled',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/17-messages.png',
        alt: 'Messages inbox listing conversations with unread-count badges',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/18-sessions-scheduled.png',
        alt: 'Sessions screen on the Scheduled tab, listing upcoming sessions with Reschedule and Join Call buttons',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/19-sessions-completed.png',
        alt: 'Sessions screen on the Completed tab, listing past sessions with a Completed status pill',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/20-profile-menu.png',
        alt: 'Own-profile screen with Edit Profile, Change Password, and Logout menu rows',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/21-profile-details-edit.png',
        alt: 'Profile Details editor for a professional, with video/phone chat hourly rates, a summary field, and social link fields',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/22-login-professional.png',
        alt: 'Login screen with Professional selected',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/23-professional-dashboard-requests.png',
        alt: 'Professional home dashboard with rating and response scores, earnings and consultation stats, a pending session request to approve, and upcoming sessions',
      },
      {
        src: '/assets/screenshots/kumquat-talent-match/24-professional-dashboard-upcoming.png',
        alt: 'Professional home dashboard scrolled to the Upcoming Sessions list',
      },
    ],
  },
  'foodii-recipe-book': {
    hero: {
      src: '/assets/screenshots/foodii-recipe-book/feature-mockup.png',
      alt: 'Foodii shown across five iPhone screens — splash, onboarding, the home dashboard, a recipe detail page, and the Foodii Recommended grid',
    },
    gallery: [
      {
        src: '/assets/screenshots/foodii-recipe-book/01-splash.png',
        alt: "Foodii splash screen showing the app's sun-and-wave logo while it loads",
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/02-onboarding.png',
        alt: 'Onboarding screen with a recipe-book illustration, "Explore now to experience the benefits" copy, and a Get Started button',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/03-welcome.png',
        alt: 'Welcome screen with Log In and Sign Up buttons plus continue with Google or Facebook options',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/04-login.png',
        alt: 'Login screen with email and password fields, remember me, and forgot password',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/05-signup.png',
        alt: 'Sign up form with user name, email, password, and confirm password fields',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/06-home-dashboard.png',
        alt: 'Home dashboard with a morning greeting, cuisine filter chips, a Foodii Recommended carousel, and a Trending Recipes grid',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/07-recipe-detail.png',
        alt: 'Recipe detail page for Spaghetti with Tomato Garlic Sauce, with cook time, difficulty, and serving badges, chef info, and description',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/08-recipe-ingredients-preview.png',
        alt: 'Recipe detail Ingredients list with quantities, and a preview of the Cooking Steps section below',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/09-recipe-steps.png',
        alt: 'Recipe detail Cooking Steps list with all 7 numbered steps expanded',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/10-recommended-grid.png',
        alt: 'Foodii Recommended full grid of recipe cards with chef avatars and names',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/11-explore.png',
        alt: 'Explore tab with cuisine filter chips, a Popular Chefs row, and a Best Recipes row',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/12-add-recipe-basic-info.png',
        alt: 'Add New Recipe form for title, category, description, cooking time, serving, and video URL',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/13-add-recipe-ingredients.png',
        alt: 'Add New Recipe ingredients step showing an empty ingredients state with Back and Next buttons',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/14-favourites.png',
        alt: 'Favourites tab showing saved recipe cards with chef names',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/15-profile.png',
        alt: 'Profile screen with account info and language, privacy policy, terms, help, and logout options',
      },
      {
        src: '/assets/screenshots/foodii-recipe-book/16-notifications.png',
        alt: 'Notifications screen listing recipe likes, bookmarks, uploads, and new posts from chefs',
      },
    ],
  },
  'techtiz-corporate-website': {
    hero: {
      src: '/assets/screenshots/techtiz-corporate-website/feature-mockup.png',
      alt: 'Techtiz corporate site shown across two desktop monitors — the SLED Subcontracting hub hero and the AI-native engineering homepage hero',
    },
    gallery: [
      {
        src: '/assets/screenshots/techtiz-corporate-website/01-homepage-hero.jpg',
        alt: 'Techtiz homepage hero reading "AI-native engineering for products that ship" alongside a build-pipeline status panel and a live app preview card',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/02-services-grid.jpg',
        alt: 'Services section grid listing six capabilities — Development, AI & Intelligence, Automation & AI, Digital Transformation, UX Design, and Data & Platform',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/03-expert-team-stats.jpg',
        alt: 'Expert Team section citing 8+ average years of experience, followed by a stats bar of 5+ years shipping, 98% client satisfaction, 180+ projects delivered, and 200+ clients served',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/04-case-studies.jpg',
        alt: 'Case studies preview cards for LinkedGolf, Dashboard.Earth, and Capsule Lab, each with a Challenge/Solution/Outcome breakdown',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/05-footer-cta.jpg',
        alt: 'Footer call-to-action offering a 30-minute consultation call, above the site footer with services, industries, SLED subcontracting, and contact columns',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/06-healthcare-industry-hero.jpg',
        alt: 'Healthcare industry page hero reading "We automate the healthcare admin that burns clinician hours" with a clinic photo and FHIR/HIPAA feature tags',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/07-ai-agent-service-hero.jpg',
        alt: 'AI Agents service page hero reading "We ship AI agents that survive production" with a perceive/plan/act/reflect device illustration',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/08-about-hero.jpg',
        alt: 'About Us page hero reading "We build the parts of your software that have to work in production" alongside a Lahore engineering studio photo',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/09-case-studies-listing.jpg',
        alt: 'Case Studies listing page header with "Real-world success stories" copy and a healthcare-focused case studies intro',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/10-sled-hub-hero.jpg',
        alt: 'SLED Subcontracting hub hero reading "AI engineering behind your SLED prime contract" over a U.S. Capitol building photo, with a Hub/How We Partner/Capabilities/Engagement Examples/Contact sub-nav',
      },
      {
        src: '/assets/screenshots/techtiz-corporate-website/11-blog-index.jpg',
        alt: 'Blog index page titled "Notes from the build" with a category filter bar and a featured healthcare article',
      },
    ],
  },
  'agentc-job-discovery': {
    hero: {
      src: '/assets/screenshots/agentc-job-discovery/feature-mockup.png',
      alt: 'AGENTC shown across two desktop monitors — the LinkedIn & Career Sites Job Scrapers Automation canvas and the Get Decision Makers Automation canvas',
    },
    gallery: [
      {
        src: '/assets/screenshots/agentc-job-discovery/01-aiml-job-niche-automation.png',
        alt: 'Orchestration overview showing five schedule-triggered sub-workflows — job scraping, decision-maker enrichment, email verification, phone number verification, and CSV generation',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/02-linkedin-career-sites-scrapers.png',
        alt: 'LinkedIn & Career Sites Job Scrapers Automation canvas — scraping and filtering LinkedIn and career-site job listings, then storing both sets to NocoDB',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/03-get-decision-makers.png',
        alt: 'Get Decision Makers Automation canvas — fetching decision-maker contacts from Hunter.io by phone number and email, with error handling and NocoDB storage',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/04-decision-makers-enrichment.png',
        alt: 'Decision Makers Enrichment Automation canvas — refreshing 30-day-old company data and enriching decision makers for new and existing companies',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/05-email-verification.png',
        alt: 'Email Verification Automation canvas — batch-validating decision-maker email addresses via the ZeroBounce API and updating their status',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/06-phone-number-verification.png',
        alt: 'Phone Number Verification Automation canvas — batch-validating decision-maker phone numbers via the Clearout Phone API and updating their status',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/07-summarize-jobs-generate-csv.png',
        alt: 'Summarize Jobs & Generate CSV Automation canvas — an AI agent summarizing the day\'s scraping and enrichment activity, generating a CSV, and emailing the report',
      },
      {
        src: '/assets/screenshots/agentc-job-discovery/08-tech-inventory-automation.png',
        alt: 'Tech Inventory Automation Workflow canvas — checking API credit balances across ZeroBounce, Hunter.io, Clearout Phone, and Apify, and emailing a merged status report',
      },
    ],
  },
  'exodus-app': {
    hero: {
      src: '/assets/screenshots/exodus-app/feature-mockup.png',
      alt: 'Exodus App shown across five iPhone screens — the home dashboard, blood pressure detail graph, health vitals list, cancelled appointments list, and test results list',
    },
    gallery: [
      {
        src: '/assets/screenshots/exodus-app/01-splash-icon.png',
        alt: 'Exodus App splash screen showing the compass-star icon on a dark green background while the app loads',
      },
      {
        src: '/assets/screenshots/exodus-app/02-splash-branded.png',
        alt: 'Exodus App splash screen with the full compass-star logo and "EXODUS" wordmark',
      },
      {
        src: '/assets/screenshots/exodus-app/03-home-dashboard.webp',
        alt: 'Home dashboard with Health System Connect and Wearable rows, Previous/Upcoming/Schedule New appointment shortcuts, and Health Vitals, Communication, and Medication Management links',
      },
      {
        src: '/assets/screenshots/exodus-app/04-create-schedule.webp',
        alt: 'Create Schedule form for entering appointment date, location, provider, and reason, with an available-slots count at the bottom',
      },
      {
        src: '/assets/screenshots/exodus-app/05-appointments-cancelled.webp',
        alt: 'Appointments screen on the Cancelled tab, listing lab, X-ray, and office-visit appointments with dates and locations',
      },
      {
        src: '/assets/screenshots/exodus-app/06-health-vitals.webp',
        alt: 'Health Vitals list showing temperature, pulse, pulse ox, blood pressure, and weight readings with last-updated dates',
      },
      {
        src: '/assets/screenshots/exodus-app/07-blood-pressure-detail.webp',
        alt: 'Blood Pressure Detail screen with a systolic/diastolic trend graph, current values, and an explanation of what the readings mean',
      },
      {
        src: '/assets/screenshots/exodus-app/08-test-result-questions.webp',
        alt: 'Test Result Questions message thread between a patient and their care team about delayed test results',
      },
      {
        src: '/assets/screenshots/exodus-app/09-pharmacy-medications.webp',
        alt: 'Pharmacy screen listing current medications and their doses',
      },
      {
        src: '/assets/screenshots/exodus-app/10-test-results.webp',
        alt: 'Test Results screen with a search bar and a filtered list of ordered lab and imaging results',
      },
    ],
  },
};
