# Projects Description (2021 - 2026)

## Junior Software Engineer (2021 - 2024) — BooleanBites, Johar Town, Lahore

### 1. Houzi - Real Estate Mobile Application

**Problem:** Real estate businesses running a Houzez WordPress site (a theme used by 53,000+ site owners globally) had a fully functional website but no native mobile presence. Building a separate mobile app from scratch for each client would mean duplicating business logic, API integrations, and UI work, while still needing to let individual agencies customize branding, behavior, and features without maintaining separate forks of the whole codebase.

**Stack:** Flutter · Dart · Houzez WordPress REST API · Dio (HTTP client) · Hive (local storage) · Provider (state management/ChangeNotifier) · Google Maps · OneSignal Push Notifications · App/Deep Linking · RTL · Android · iOS

**Solution:** Houzi is a white-label real estate mobile application I developed in collaboration with the team. Rather than a bespoke build per client, the app connects to any Houzez-powered WordPress site over its REST API and dynamically pulls in that site's listings, agents, and content, so a single Flutter codebase powers every deployment. To solve the customization problem, the codebase is split into a thin app shell (lib/) that exposes white-label "hooks" and a shared local package (packages/houzi_package/) containing nearly all app logic — API layer, models, state providers, pages, and widgets. Client-specific behavior (custom widgets, login flows) is layered on top via the hooks system rather than modifying the shared package, and a remote JSON configuration file lets branding and feature toggles be updated without shipping new app builds or app-store review. Feature-wise, it covers property browsing and search with a clustered Google Maps view, detailed property pages with similar listings/reviews/PDF export, agent and agency directories, email/Google/Apple/Facebook/OTP login, listing management with image uploads for agents and owners, favorites and saved-search alerts, in-app messaging, push and in-app notifications through OneSignal, a blog/articles section with commenting, membership packages with in-app purchases for featured listings, deep linking, light/dark themes, RTL layouts, and 11 bundled languages. A later addition, Houzi AI (v1.4.8), layers in natural-language property search with voice input and an "Ask About This Listing" chat grounded in a specific property's data, on a bring-your-own-key model across Google Gemini, Claude, and OpenAI, with the API key held on the client's own WordPress server rather than in the app.

**Impact:** Any Houzez-based real estate site can launch a fully branded, dynamic native mobile app in a fraction of the time and cost of a custom build. Houzi is sold on CodeCanyon as a source-code product and has reached 53,000+ Houzez theme owners, earning a 4.84★ rating, 500+ CodeCanyon sales, and 5,000+ Play Store downloads.

### 2. Houzi Builder - Desktop Application

**Problem:** Houzez WordPress theme owners who wanted to offer a companion mobile app (Houzi) previously had to hand-edit a configuration file to control the app's colors, layouts, navigation, and content sections. This manual, code-level process was error-prone and inaccessible to non-technical site owners, since any change to branding or screen layout required directly editing structured JSON rather than using a visual interface. There was also no straightforward way to preview how configuration changes would look inside the actual mobile app before shipping them, and no built-in mechanism to verify that only legitimately licensed users (via a Code Canyon-style purchase) could access the configuration tool.

**Stack:** Flutter · Dart · Hive (local persistence) · REST API · JWT Authentication · WordPress (Houzez theme integration) · Windows · macOS

**Solution:** I fully developed Houzi Builder, a Flutter desktop application for Windows and macOS that replaces manual file editing with a guided, form-driven builder. The app walks the user through three stages: purchase-code license verification (cached locally for 24 hours via Hive so re-verification isn't required every session), a connection wizard that links to the user's live WordPress site through the Houzez theme's REST API and JWT-auth plugins to pull in real taxonomies and site data, and a large drawer-driven builder UI covering every visual and functional section of the mobile app — branding, home screen, navigation, search, property profiles, blog design, and the add-property form. A live device-frame preview shows changes as they're made, and the final result is serialized into a configurations.json file that can be version-bumped and copied to the clipboard for direct use by the Houzi mobile app. State management is manual and callback-based rather than a package like Bloc/Provider/Riverpod, and the app ships with five localizations (English, Urdu, Chinese, French, and Arabic).

**Impact:** Turned a manual, code-editing workflow into a guided, form-driven desktop tool with live previews, lowering the technical barrier for Houzez site owners to customize and ship their branded mobile app. Configuration that once required understanding a JSON schema can now be done visually, reducing configuration errors, speeding up setup time, and keeping license enforcement and WordPress site integration built into the same tool.

### 3. Houzi Rest Api Plugin - Wordpress PHP Plugin

**Problem:** The Houzi mobile app needed a reliable, real-time channel for exchanging data with the WordPress website, and that channel had to keep expanding as new engagement features — push, chat, comments — were added over time.

**Stack:** PHP · WordPress · REST API · OneSignal Push Notifications

**Solution:** Houzi Rest API Plugin is the WordPress PHP plugin that bridges the website and the mobile app, exposing APIs for both fetching data and posting/updating it back to the site. I helped maintain the plugin and extended it over time, most notably integrating OneSignal push notifications and adding chat, comments, and reply functionality.

**Impact:** Kept the app and website reliably synchronized as the platform scaled, while steadily expanding the feature set — push, chat, comments — that keeps end users engaged with the app.

**Technologies & Skills:**

- Flutter
- Dart
- PHP
- WordPress
- Dio (HTTP client)
- Hive (local storage)
- Provider (state management/ChangeNotifier)
- Google Maps
- One Signal Push Notifications
- Deployment (Google Play Store and Apple App Store)
- App/Deep Linking
- RTL
- Git
- Trello

## Senior Software Engineer (2024 - 2026) — Techtiz, Township, Lahore

### 1. Aniflex Mobile Application

**Problem:** Users need motivation to stay consistent with regular fitness routines, and generic tracking apps often fail to keep people engaged over the long term.

**Stack:** Flutter

**Solution:** Aniflex is a fitness app I developed in collaboration with the team, built around a "Cool Avatars" system: as the user's fitness level progresses, their avatar visibly grows and unlocks new customization options, turning workout consistency into visible, rewarding progress. It also lets users share their fitness activity with buddies so friends can track and encourage one another.

**Impact:** Gamifying progress through avatars and social accountability gives users a concrete, motivating reason to keep training consistently instead of losing momentum after the first few weeks.

### 2. Unity Desktop Application

**Problem:** The client needed a single, role-based desktop workspace that combined web browsing, credential management, notifications, and call/meeting handling — capabilities that were otherwise spread across several disconnected tools.

**Stack:** Electron · Nest.js · WebSockets

**Solution:** I fully developed this Electron desktop application, backed by a Nest.js API, around a collapsible left-hand menu whose labeled, icon-based items — including expandable dropdown groups — are dynamically fetched and rebuilt per user role at login. Clicking a menu item loads the corresponding page in the main view, which doubles as an embedded browser with bookmarks and script-injected credential auto-fill that replicates the behavior of Chrome's password manager. The app also includes socket-based real-time notifications, background timers/alarms that alert the user on completion, and a "patient meeting" call flow where an incoming contact request rings and the user can accept or reject it.

**Impact:** Delivered one unified, role-aware desktop tool whose navigation, permissions, and available features are all built dynamically per user, replacing what would otherwise be several separate applications.

### 3. Unity Web Portal

**Problem:** Admins needed a central place to manage users, roles, and each role's custom navigation/layout for the Unity desktop application, rather than configuring each user's experience by hand.

**Stack:** Next.js · Nest.js

**Solution:** I fully developed this Next.js portal, backed by a Nest.js API, as the administrative counterpart to the Unity desktop app. It gives admins a dashboard with live stats (total users, currently active users), dedicated sections for managing roles and users, and the ability to customize the navigation/layout assigned to each role. Once a user is assigned a role, their custom layout is fetched from the portal the next time they log into the Unity desktop application, and the UI is built dynamically from it.

**Impact:** Centralized all role and layout administration in one portal, so a single change made by an admin propagates automatically into every affected user's desktop app experience without any manual per-user setup.

### 4. Linked Golf Mobile Application

**Problem:** Linked Golf — a Flutter app with an Express backend for golf-focused social and booking — was already live and had been built out by several other developers by the time I joined. Bloc was in place for state management but poorly integrated and tightly coupled to the UI, so state issues surfaced across nearly every core screen: Home, Availability, Add Golf Buddy, the QR page (profile QR + scan), user search, the golfer profile page, and Golf Courses & Events. Chat, built on PubNub, wasn't working reliably either — reactions were wired up but did nothing, and messages weren't grouped by date. The backend had accumulated a lot of dead code and tight coupling, and several screens fired redundant, duplicate API calls that hurt performance. On top of that, golf-course owners had no way to create events, golfers had no way to subscribe to one or manage a team, joining a team had no verification step, applink/dynamic linking didn't route correctly, and a course's profile page didn't surface golfer availability.

**Stack:** Flutter · Dart · Bloc · Express · Node.js · MongoDB · PubNub · Stripe · Firebase Cloud Messaging (FCM) · JWT · App/Deep Linking · QR Code

**Solution:** Refactored both the Flutter frontend and the Express backend of this already-live golf social and booking app:

- Refactored the Bloc integration and decoupled the UI from it screen by screen — Home, Availability, Add Golf Buddy, the QR profile/scan page, user search, the golfer profile page, and Golf Courses & Events — fixing the state issues each had been carrying.
- Removed dead code and broke apart tightly coupled modules on the Express backend, and consolidated the redundant, duplicate API calls that had been slowing the app down.
- Fixed chat end to end — reactions now apply instead of no-op, and messages are grouped date-wise — and fixed the comments feature.
- Repaired the applink/dynamic-link flow so shared content routes correctly into the right in-app screen.
- Added event creation for golf-course owners, letting them publish new events directly in the app.
- Added the ability for golfers to subscribe to an event after paying through Stripe, and to manage their team once subscribed.
- Added OTP verification for joining a golf team.
- Added golfer availability directly on the Golf Course profile page.

**Impact:** Turned an already-live but fragile app into a stable, noticeably faster one — the state, chat, and redundant-API-call issues affecting nearly every core screen were resolved — while giving golf-course owners a new paid-event capability (event creation, Stripe-billed subscriptions, team management, OTP-verified team joins) that didn't exist before this engagement.

### 5. Kumquat - Talent Match - Flutter Flow

**Problem:** Needed a polished, working demonstration of a consultation platform where clients could discover and book real-time sessions with vetted professionals across tech, design, business, and other fields.

**Stack:** FlutterFlow

**Solution:** I fully developed this FlutterFlow template application, building out the screens and flows needed to showcase how a client would browse vetted professionals, review their profiles, and book a real-time consultation session.

**Impact:** Delivered a ready-to-use UI-kit/template that demonstrates a complete talent-matching consultation experience, giving teams a working starting point instead of designing the flow from a blank canvas.

### 6. Foodii - Recipe Book - Flutter Flow

**Problem:** Developers building recipe-sharing apps need a credible, ready-made starting point rather than designing and building every screen and flow of a food-content app from scratch.

**Stack:** FlutterFlow

**Solution:** I fully developed this FlutterFlow template app, building out pre-made screens and flows that showcase the layout and UI of a modern recipe-sharing platform, from browsing and viewing recipes to the surrounding app structure.

**Impact:** Gives developers a jumpstart template they can adapt directly into their own food-related apps, cutting significant time off the initial build.

### 7. Exodus

**Problem:** The existing Blue Sky mobile application, originally built for EPIC PC, needed to be relaunched as a distinct product with its own brand identity. Blue Sky/Exodus is a healthcare app for doctors and patients — appointments (patients can self-schedule), medications, lab test results, and health vitals in one place; labs upload results through their own portal and both patients and doctors view/download them via the app's API instead of a lab visit or printout. The app also pairs with the JSTYLE 2208A customized medical health smart wristband so patients' health vitals can be monitored by both patients and doctors, but syncing vitals from the wristband was slow and often failed — every scan sent its data through an API call to the wristband's SDK/plugin, and that call failed often.

**Stack:** Flutter

**Solution:** I fully rebranded the Flutter application, replacing the branding, visual identity, and relevant naming throughout the app to turn Blue Sky into the Exodus app. Alongside the rebrand, I downloaded the wristband's vitals SDK and packaged it directly into the app build instead of calling it over the network per scan, removing the failure-prone API round trip and generating vitals results faster and in a more optimized way.

**Impact:** Relaunched the product under its new brand and identity on the existing, proven Flutter codebase, avoiding the cost and risk of a ground-up rebuild, while also making wearable health-vitals syncing faster and more reliable for the doctors and patients who depend on it.

### 8. Capital Shack

**Problem:** Client documents — application forms, bank statements, and other supporting paperwork — arrived by email in a continuous, unpredictable stream, and every one had to be opened, read, categorized, filed into the right place, and cross-referenced into a spreadsheet by hand before anyone downstream could act on it. That process held up fine at low volume, but became a genuine bottleneck as volume grew: slow, repetitive, and prone to the transcription and filing mistakes that come from doing the same manual triage over and over.

**Stack:** Gmail · Google Drive · Google Sheets · Google Apps Script · Google Form Parser (Document AI)

**Solution:** I built two linked automations in Google Apps Script that hand off to each other through a shared Google Sheet. The first watches the inbox as documents arrive: it reviews each email's attachments, categorizes the message, uploads the attachments into a specifically labeled Google Drive folder, and logs a corresponding entry in Google Sheets marked unprocessed. The second automation picks up those newly logged, unprocessed entries on its own schedule and runs each attachment through Google Form Parser (Document AI), which identifies whether it's an application form, a bank statement, or another document type and extracts the relevant structured data — writing the results into the correct fields in the appropriate sheet automatically.

**Impact:** Manual document triage and data entry were eliminated entirely: every incoming document is now consistently categorized, filed into Drive, and logged and populated in Sheets without anyone needing to open or process it by hand — removing both the bottleneck and the transcription errors that came with doing it manually.

### 9. Agentic Job Discovery Automation

**Problem:** Manually researching and verifying contact details — email and phone — for decision-makers (CEOs, CTOs, COOs, etc.) at companies posting jobs in specific niches was slow, inconsistent, and hard to keep current.

**Stack:** n8n · Nocodb · Apify · ZeroBounce · Clearout Phone

**Solution:** I fully developed this four-stage automation using n8n, Nocodb, Apify actors, ZeroBounce, and Clearout Phone. Apify actors scrape job postings from LinkedIn and other career sites, with results stored in Nocodb and duplicates filtered out. A second automation verifies every discovered email address through ZeroBounce, and a third does the same for phone numbers through Clearout Phone, updating the database as results come back. A fourth automation compiles everything into a summary and a Google Sheet of successfully scraped and verified results, delivered before the start of the working day.

**Impact:** Replaces what would be hours of manual research and verification with a daily, pre-verified list of decision-maker contacts waiting in the team's inbox each morning.

### 10. Social Media Post Management Automation

**Problem:** A realtor client had to manually write a caption for every social media platform using Open AI and then manually upload and schedule each promotional video across multiple accounts — a repetitive process that ate into time better spent on the business itself. The publishing side had its own complexity: six platforms (YouTube, Facebook, Instagram, LinkedIn, Threads, TikTok), each with a different upload API, its own OAuth token that expires on its own schedule, and — for Threads specifically — extra Meta platform-compliance requirements (deauthorization/data-deletion callbacks, a two-step short-lived-to-long-lived token exchange) that a manual process had no consistent way to handle.

**Stack:** n8n · Google Cloud Functions · Google Apps Script · Google Forms · Google Drive · Google Sheets · Google Calendar · Gmail · Open AI · TikTok API · LinkedIn API · Meta Graph API (Facebook, Instagram, Threads) · YouTube Data API

**Solution:** Built an end-to-end publishing system across four layers. Google Forms and Drive handle client intake — the client uploads the video/thumbnail to Drive and submits a form with the title, description, schedule date/time, post type (long-form or short-form), and target platforms. Google Sheets is the system of record: every submission becomes a row that a **Generate Metadata of Post** n8n workflow enriches with AI-generated, platform-specific captions and hashtags and marks **"Pending"** — nothing publishes until the client or a manager reviews and approves it directly in the same sheet. A **Google Apps Script** trigger scans the sheet every minute for approved, due posts and fires the **Post Automation** n8n workflow by webhook, which checks per-platform permissions and content type (long-form vs. Shorts/Reels) before publishing through per-platform **Google Cloud Functions** — each platform's upload logic (auth headers, payload shape, chunked/resumable uploads, error handling) lives in its own independently deployable function — then merges every platform's result into one summary emailed to the team. A **Refresh Access Token Workflow** keeps all six platforms' OAuth tokens alive on a schedule, silently renewing what it can and emailing a one-tap re-authorization link only when a refresh token itself has expired. An **Auth Code Callbacks** workflow handles the OAuth handshake for every platform, including Threads' required deauthorization/data-deletion endpoints and its short-lived-to-long-lived token exchange. A centralized **Error Logging** workflow catches and alerts on any unhandled failure across the other four.

**Impact:** Automated the entire pipeline — from AI caption drafting to scheduling to multi-platform publishing to OAuth upkeep — down to a single manual step for the client: approving AI-drafted copy in the same spreadsheet he was already using.

### 11. Leads Management System

**Problem:** Decision-makers had no unified, synchronized view of raw versus scraped lead data or of how email-outreach campaigns were performing over time, making it hard to judge what was actually working.

**Stack:** Google Data Studio (backing database not further specified in the source material).

**Solution:** I fully developed this internal system for tracking leads and campaigns. The business team supplies stats such as raw data versus scraped data and uploads campaign reports at the start and end of each outreach campaign; all of this is stored and kept properly in sync with Data Studio for visualization.

**Impact:** Gives decision-makers a clear, always-current view of overall and individual outreach performance — old versus new, success versus failure — directly inside Data Studio, without manual report compilation.

### 12. Outreach Email Classification Automation

**Problem:** Every reply to an outreach campaign had to be opened and read by hand just to tell a genuinely interested prospect apart from a bounce, an out-of-office reply, or an unsubscribe request, delaying follow-up on the replies that actually mattered. An earlier version of the pipeline used n8n's built-in Gmail Trigger to poll the inbox directly, but that gave no granular control over what counted as a valid outreach reply — no recipient allow-list, blocked-domain/sender filtering, or warm-up/unsubscribe keyword detection — and no way to throttle delivery to the AI classification step at a safe, sub-rate-limit pace, risking delayed or dropped notifications whenever replies arrived in a burst. Classification rules and the AI's own behavior also needed regular tuning as new outreach patterns appeared, an unhandled AI JSON-parsing failure could silently corrupt a Slack notification with no clear cause, and a failed webhook delivery risked losing a genuine reply outright.

**Stack:** n8n · Google Apps Script · Gmail · Google Sheets · Google Gemini (2.5 Flash Lite) · Slack

**Solution:** I moved inbox polling out of n8n entirely and into a Google Apps Script bound to a Google Sheet: a time-based trigger scans the Gmail inbox every minute, filters incoming mail against configurable allowed-recipient, blocked-domain/sender, and warm-up/unsubscribe keyword rules read straight from Sheet tabs, and queues qualifying replies to an n8n webhook at a strict 6-per-minute, 35-second-gap pace calibrated to Gemini's rate limits — with `LAST_RUN_TIMESTAMP`, `PENDING_QUEUE`, and `PROCESSED_IDS` persisted in script properties so polling stays stateful across every run. n8n receives each reply over webhook, unwraps and formats it, and passes it to an AI Agent running Gemini 2.5 Flash Lite (with automatic retry on Gemini's 429 rate-limit responses) that classifies it as Interested, Not Interested, Schedule Later, Wrong Person, Out of Office, or Unsubscribe and drafts a status summary; classification behavior itself lives entirely in the agent's system prompt, so tuning it means editing the prompt, not the workflow. A dedicated Normalize node strips any accidental ```json``` wrapping and explicitly throws on a parsing failure so it surfaces in n8n's execution logs instead of producing a malformed Slack message, and the Apps Script poller re-queues any email whose webhook delivery failed so it's retried on the next run rather than lost. The formatted result — status, timestamp, sender, recipient, subject, and snippet — posts to a dedicated #outreach-automation Slack channel over OAuth2. The same n8n canvas still holds the earlier, now-deactivated Gmail Trigger approach it replaced, left in place rather than deleted.

**Impact:** Replaced manual inbox triage with automatic, rate-safe classification and instant Slack visibility the moment a reply lands, rather than after someone works through the inbox by hand. Filtering rules and classification accuracy are both tunable in minutes — by editing a spreadsheet tab or the AI agent's prompt — without a developer touching workflow code, and rate-limit protection plus webhook re-queuing mean classification keeps working reliably even during reply bursts or transient delivery failures.

### 13. The Ramirez Legal Group

**Problem:** ClickUp is used to track legal cases, while the client's client-facing dashboard is built and deployed on Emergent Labs. The two had to be kept in sync by hand — whenever a case was created or updated in ClickUp, someone had to manually re-enter or relay that change onto the dashboard, risking the two systems falling out of step.

**Stack:** Zapier · ClickUp · Emergent Labs

**Solution:** I built a Zapier pipeline that watches ClickUp continuously: whenever a case is created or updated, the change is synchronized to the Emergent Labs client-facing dashboard automatically, and whenever a new client is added in ClickUp, a matching client record is created and kept in sync on the dashboard as well.

**Impact:** Keeps the case tracker and the client-facing dashboard continuously synchronized in real time, removing duplicate manual data entry and eliminating the risk of the two systems drifting apart.

### 14. United Global Van Line (UGVL)

**Problem:** United Global Van Line (UGVL), a household moving brokerage, needed its entire lead-to-deposit funnel to run on autopilot with zero tolerance for slow response times or leads falling through the cracks. The original build fell short in several ways: voice, SMS, and voicemail automation were split across three separate outside vendors (Retell AI, Closebot, and Slybroadcast), each with its own credentials, webhooks, and billing, and — critically — its own conversation thread that Go High Level and human agents couldn't fully see. Every warm-transferred lead, whether a small local move or a high-value interstate relocation, landed in a single ring group containing every agent, so a Senior closer's time could easily go to a low-value lead while a high-value one waited. Leads could also silently stall at any pipeline stage — never blitzed, never quoted, a deposit asked but never paid — and agent performance issues could go unnoticed for a week or more. Getting a deposit "asked" didn't mean it was collected, and every collected deposit still needed to be reliably tied back to the right lead, agent, and pipeline stage, with refunds handled just as cleanly. And a lead's first real value only arrived once a human agent engaged, often minutes after intake.

**Stack:** n8n · Go High Level (GHL — Opportunities, Pipelines, Automations, Tasks, Contacts) · Aloware (human power dialer + AloAi voice/text bots) · Clover (deposit payments) · Open AI (call QA) · Inventory Link API · Retell AI, Closebot, and Slybroadcast (original vendors, later replaced by Aloware AloAi and GHL Voicemail Drop)

**Solution:** Built as a middleware-orchestrated stack with n8n as the central nervous system connecting Go High Level (CRM system of record), Aloware, Clover, OpenAI, and a dedicated Inventory Link API, 13 n8n workflows run the full lifecycle of a lead:

- Consolidated all voice-bot, text-bot, and voicemail-drop functionality onto Aloware, which the client already used as its human dialer platform: two purpose-built Aloware AloAi voice bots replaced Retell AI for business-hours outbound and after-hours inbound calls, two AloAi text bots replaced Closebot for business-hours and after-hours SMS, and GHL's native Voicemail Drop replaced Slybroadcast — with Aloware configured as GHL's SMS provider so every message lives in one unified conversation thread.
- Scored every lead on intake — move-date urgency, home size, move distance, and post-contact engagement — into a HOT/WARM/LOW temperature, and split the single all-agent warm-transfer ring group into role-matched Senior/Junior/Fresh groups that the AloAi voice bot routes into by reading the lead's temperature at transfer time, guaranteeing HOT leads a Senior closer first.
- Built a two-tier oversight layer: a daily audit running nine parallel checks against every pipeline stage's allowed time window, texting a manager a summary each morning, and a 3-minute HOT Lead Enforcement Monitor that SMS-alerts a manager the moment a HOT-tagged lead sits uncalled in the dialer.
- Used OpenAI to score every recorded call against a rubric — confidence, urgency, objection handling, deposit ask, call control — rolled that up weekly, and fed it into a role engine that promotes or demotes agents between Fresh, Junior, and Senior tiers based on 4- and 8-week revenue averages.
- Built a three-workflow deposit chain: pulling a lead from the active dialer the moment a quote is given, computing the deposit amount (agent override, or 10% of quote with a $300 floor), creating a Clover hosted-checkout session and texting the payment link, then matching the payment webhook back to the CRM contact, moving the opportunity to Booked, and crediting the agent's revenue scorecard — with a mirrored workflow handling refunds.
- Added an Inventory Link integration so that immediately after a new contact is created, the Inventory Link API generates a personalized moving-inventory link, saves it to the lead's record, and delivers it through the very first automated SMS — before a human agent ever answers.

**Impact:** Three external vendor subscriptions and their separate credential/webhook surfaces were eliminated, replaced by one unified conversation thread per lead across voice, SMS, and voicemail. HOT leads are now guaranteed a Senior closer without any manual dispatching, funnel leaks and coaching-worthy calls surface automatically instead of relying on a manager to notice them, and deposit collection, refunds, and agent revenue crediting all reconcile themselves end to end with an auditable idempotency key on every request — turning a purely reactive, manually-monitored sales process into one that scores, routes, and polices itself.

### 15. NebuFit Mobile Application

**Problem:** Users need accessible, deeply personalized fitness and nutrition coaching, health and bloodwork insight, and consistent progress tracking, spanning the full journey from onboarding through an ongoing subscription — without needing a human trainer.

**Stack:** Flutter · FastAPI · PostgreSQL (Supabase) · Redis · RAG · Claude AI · OpenAI GPT-4o · Anthropic · ElevenLabs · Stripe · JWT · Sharp

**Solution:** NebuFit is an AI-powered fitness and health platform I helped build, consisting of a scalable backend infrastructure and a React Native mobile application. It provides personalized coaching through computer vision, AI-generated workout and nutrition plans, bloodwork analysis, health insights, voice-based recommendations, and a Retrieval-Augmented Generation (RAG) fitness assistant, and manages the complete user journey — authentication, onboarding, subscriptions, health assessments, progress tracking, AI coaching, and administrative operations — while supporting real-time AI interactions and scalable processing pipelines:

- Developed a cross-platform mobile application for iOS and Android focused on fitness coaching, nutrition planning, progress tracking, and health monitoring.
- Built onboarding flows, profile management, subscription management, AI chat experiences, workout tracking, and health analytics dashboards.
- Integrated real-time AI responses, health reports, and personalized recommendations.
- Implemented computer vision workflows using Claude and GPT-4o to analyze body images and generate personalized fitness assessments.
- Generated body composition insights, improvement recommendations, and progress comparisons over time.
- Built image-processing pipelines using Sharp for optimization, resizing, and analysis preparation.
- Developed AI-driven workout generation tailored to user goals, fitness levels, equipment availability, and health conditions.
- Created personalized meal plans, nutritional guidance, calorie recommendations, and macro calculations.
- Supported dynamic plan adjustments based on user progress and engagement data.
- Built document-processing pipelines capable of extracting and analyzing health data from uploaded bloodwork reports.
- Generated AI-powered health summaries, risk indicators, and actionable recommendations.
- Integrated ElevenLabs text-to-speech capabilities to convert health reports into audio explanations.
- Designed and implemented a Retrieval-Augmented Generation (RAG) system that provides contextual fitness, nutrition, recovery, and health guidance.
- Enabled semantic retrieval from curated fitness knowledge bases, research documents, and health resources.
- Delivered highly personalized AI coaching experiences through conversational interfaces.
- Integrated Stripe subscription management, billing workflows, and webhook processing.
- Implemented subscription lifecycle handling, plan upgrades, cancellations, renewals, and payment recovery mechanisms.
- Built secure entitlement management tied directly to premium AI features.
- Implemented Supabase authentication with multi-factor authentication (MFA).
- Developed role-based access controls, authorization guards, and secure API access patterns.
- Built user onboarding, profile management, and administrative management tools.
- Developed multi-provider AI orchestration supporting Anthropic Claude, OpenAI GPT-4o, and ElevenLabs services.
- Implemented streaming AI responses using Server-Sent Events (SSE) for real-time user experiences.
- Added intelligent model fallback strategies, retry mechanisms, and provider failover handling for reliability.
- Built scalable PostgreSQL data models and migration workflows using Supabase.
- Leveraged Redis for caching, session optimization, and performance improvements.
- Designed a modular service architecture with reusable middleware, guards, interceptors, and shared infrastructure components.
- Implemented environment-driven model routing and AI provider selection for operational flexibility.

**Impact:** Delivered a complete, end-to-end personalized fitness coaching experience — assessment, planning, tracking, and ongoing guidance — backed by scalable, reliable AI infrastructure capable of real-time interaction at subscription-product scale.

### 16. Orient Champions Mobile Application

**Problem:** Orient Champions — the field-sales incentive platform for Orient Electronic (Pvt.) Ltd.'s Field Sales Manager (FSM) Incentive Program — was already live and had been built out by several prior developers by the time I joined. Both the React Native frontend and Nest.js backend were in poor shape: heavy dead code, tightly coupled modules with no clear separation of concerns, no real state management on the frontend beyond trivial local useState, several screens running on hardcoded data instead of real APIs, non-operational push notifications, a broken App Updater and filters, and poorly managed cron jobs that didn't reliably produce accurate results before business hours. The client called in daily about bugs, and field agents regularly struggled to scan batches and receive their incentives correctly.

**Stack:** React Native · Expo · TypeScript · Redux · Axios · AsyncStorage · Node.js · Nest.js · MongoDB · JWT · bcrypt · SAP RFC · AWS S3 · Firebase · Firebase Cloud Messaging (FCM) · Twilio

**Solution:** A production-grade platform for Orient Electronic (Pvt.) Ltd. consisting of a Nest.js backend, an administrative web portal, and a React Native mobile application used by field agents nationwide to scan product batches, track incentives, receive notifications, and synchronize activity with SAP ERP in real time. The application already had this core architecture in place — a four-level organizational hierarchy (National → Zone → Branch → FSM), custom SAP BAPIs via SAP RFC, JWT + Twilio SMS OTP auth, and bulk Excel/CSV processing on AWS S3 — but the codebase itself needed to be stabilized and modernized:

- Refactored and decoupled both the React Native frontend and the Nest.js backend into clearly separated modules, removing dead code and breaking apart the tight coupling that made changes risky and slow.
- Replaced the frontend's ad hoc useState-only approach with Redux, giving the app predictable, centralized state management and a measurable performance improvement.
- Audited and rebuilt the backend's cron-job pipeline, fixing broken scheduling logic and retiming jobs so they complete with accurate, fully-reconciled results before business hours start each day.
- Found several screens rendering hardcoded static data, moved that data into the database, built real APIs for those modules, and wired the mobile app to consume them.
- Diagnosed and fixed push notifications end to end via Firebase Cloud Messaging — they had never worked before this engagement.
- Repaired the App Updater so users reliably get prompted onto new releases, and fixed broken filters agents relied on daily.
- Redesigned the UI across the mobile app for a cleaner, more usable experience.
- Preserved and continued operating the existing resilient synchronization mechanisms — automatic fallback queues and scheduled reconciliation whenever SAP itself is slow or unavailable — and the automated overnight synchronization pipelines for registrations, account status updates, batch verification, reconciliation, and operational reporting.
- Preserved the existing role-based access control and organization-aware data visibility across the four-level hierarchy, plus the monitoring, logging, and administrative reporting systems that give visibility into synchronization status, operational metrics, and system health.

**Impact:** Eliminated roughly 90% of the bugs and issues that previously generated daily client phone calls, most of them centered on agents' scanning and incentive-tracking difficulties. Post-refactor, the client's calls shifted almost entirely from bug fixes to discussing new features — a clear signal the underlying platform had stabilized — and field agents now use a redesigned, Redux-powered app with working push notifications and filters, without the friction that used to generate support tickets.

### 17. Techtiz Website

**Problem:** Techtiz needed a large multi-vertical marketing site — services, industries, a separate government-subcontracting (SLED) audience, and a blog — while migrating off a legacy static HTML/CSS/JS site. The build had to support SEO-heavy, JSON-LD-rich pages at scale, avoid duplicating markup across dozens of near-identical service/industry pages, keep a completely separate tone and trust-signal set for the SLED (government) audience without cross-contaminating commercial pages, and integrate a headless WordPress blog without triggering full-site rebuilds on every post edit.

**Stack:** Astro · TypeScript · JavaScript · HTML · CSS · Tailwind CSS v4 · Vite · Node.js · Vercel · Nodemailer · PDFKit · AOS · Lucide · Microsoft Clarity · WordPress REST API (headless blog)

**Solution:** I fully developed the Techtiz marketing site as a static-first Astro build deployed on Vercel, with most pages statically generated and a handful of dynamic pieces (contact/careers API routes, blog post pages) served as server-rendered routes:

- Built a "constants-first" architecture where page copy, SEO metadata, and JSON-LD live in typed TypeScript files separate from components.
- Implemented a two-tier system for the repetitive Services and Industries verticals: a generic catch-all dynamic route renders most pages from shared data files, while high-traffic pages (healthcare, real estate, e-commerce, logistics, AI agents, custom software, etc.) get their own dedicated directories with custom components, copy, and stylesheets.
- Built a separate US-SLED section targeting government subcontracting audiences (state/local/education primes), with its own layout, navigation, and compliance-conscious trust signals (SAM/UEI, NIST 800-171, ISO targets), fully isolated from the commercial pages.
- Wired a headless WordPress blog to the WordPress REST API (content authored externally on blog.techtiz.co) with client-side filtering, sorting, and pagination, plus a server-side comment proxy so WordPress credentials are never exposed to the client and new posts appear without a redeploy.
- Styled the site with Tailwind CSS v4 against a custom design-token system (navy/cyan brand palette, custom fonts), with AOS driving scroll animations and Lucide for iconography.
- Set up SEO infrastructure through shared layout components injecting Schema.org JSON-LD and page-level metadata, plus an IndexNow integration for fast search-engine reindexing.
- Wired contact and careers forms to send mail through Nodemailer with reCAPTCHA, and used PDFKit to generate capability-statement PDFs for the SLED flow.
- Added Microsoft Clarity for session-recording/heatmap analytics.
- Documented and fixed a set of cross-browser reliability issues (iOS Safari clipping bugs, Tailwind v4 range-query fallbacks, mobile header behavior) as part of ongoing hardening.

**Impact:** Delivered a maintainable, SEO-optimized site where new service or industry pages can be added by following a documented, repeatable pattern rather than one-off custom work, content editors can publish blog posts without needing a code deploy, and the government-focused SLED funnel stays compliant and message-safe as a fully separate path from the commercial site.

### 18. Creative OS

**Problem:** Writers, filmmakers, musicians, and other creators juggle large local libraries of screenplays, notes, lyrics, and research material with no easy way to search, reason across, or edit them as a connected whole — and typical AI chatbots can't reach into local files or hold onto creative context over time.

**Stack:** Electron · React · Claude API · MCP (Model Context Protocol) · RAG · ChromaDB · SQLite · TypeScript

**Solution:** Creative OS is an AI-powered desktop application I built for writers, filmmakers, musicians, and content creators. Rather than acting as a traditional chatbot, it functions as an intelligent operating system for creative work: it indexes local creative assets — including Final Draft screenplays, PDFs, lyrics, notes, outlines, shot lists, and research documents — and lets Claude search, reason about, analyze, and edit them directly through Retrieval-Augmented Generation (RAG). The platform is fully local-first, so this all happens without any of the user's creative work leaving their machine, while still providing AI-assisted writing, semantic search, knowledge retrieval, document editing, and long-term contextual memory. Built with Electron and React, it offers a native desktop experience on a modular architecture that can be extended through MCP (Model Context Protocol) servers:

#### Local Knowledge Indexing

- Built document ingestion pipelines to index local creative assets including Final Draft (.FDX), PDFs, lyrics, notes, outlines, and research documents.
- Implemented automatic metadata extraction and searchable document indexing.
- Enabled semantic retrieval across an entire local creative knowledge base.

#### Retrieval-Augmented Generation (RAG)

- Designed and implemented a complete RAG pipeline for contextual document retrieval.
- Generated vector embeddings and stored them in a local vector database.
- Retrieved relevant document context before every AI request, improving response accuracy and grounding.

#### Claude AI Integration

- Integrated Claude API to provide AI-powered writing assistance.
- Supported screenplay rewriting, dialogue enhancement, content expansion, brainstorming, summarization, and creative ideation.
- Combined Claude responses with retrieved document context for highly personalized outputs.

#### Final Draft (.FDX) Editing

- Built native support for Final Draft screenplay files.
- Parsed screenplay structures including scenes, dialogue, characters, action blocks, and transitions.
- Enabled AI-assisted editing while preserving the original screenplay formatting.

#### Desktop Application

- Developed a cross-platform desktop application using Electron and React.
- Built a conversational interface for interacting with creative projects.
- Enabled seamless navigation, document search, editing, and AI-assisted workflows.

#### Multi-Document Semantic Search

- Implemented semantic search across multiple document types simultaneously.
- Allowed AI to reason across scripts, notes, research, lyrics, and outlines.
- Combined information from multiple sources into unified, context-aware responses.

#### MCP Server Framework

- Built the application around the Model Context Protocol (MCP) architecture.
- Designed modular integrations for future expansion with external tools and services.
- Established a scalable foundation for plugin-based AI workflows.

#### Auto-Tagging & Collections

- Developed AI-powered document categorization and tagging.
- Automatically generated themes, genres, characters, and topic tags.
- Organized creative assets into searchable collections for improved project management.

#### Analysis Dashboard

- Built dashboards displaying indexed content statistics, AI activity, search analytics, writing progress, and collection insights.
- Provided visibility into project organization and overall creative productivity.

**Impact:** Gave creators a genuine AI-assisted "operating system" for their work — searchable, editable, and context-aware across every local file they own — without asking them to trade away privacy or hand their creative material to the cloud.

### 19. ATTN Agency

**Problem:** The agency needed a fully native, on-brand homepage built directly within Go High Level's page builder, rather than an embedded page or iframe bolted onto the platform.

**Stack:** Go High Level · Google Gemini (AI asset generation)

**Solution:** I fully developed the native, element-based homepage inside Go High Level, building the layout directly with the platform's own components (Row, Column, Container, Text, etc.) rather than embedding external code, and used Google Gemini to generate the custom visual assets — like the hero's themed video panel — that the native component library doesn't provide on its own.

**Impact:** Delivered a native, fully GHL-integrated homepage for the agency that's easy for their team to maintain going forward using Go High Level's own tools.

### 20. Zendesk AI Support Automation

**Problem:** A support team's agents were spending time piecing together context by hand before every reply — reading through screenshots and PDF attachments on a new ticket, listening back through an Aircall call recording, or re-reading a long conversation thread to draft the next response. None of that AI-assisted work was logged anywhere central, so there was no shared record of what had already been summarized or proposed for a given ticket, and nothing stopped the same trigger — a retried webhook, a re-added tag — from generating the same AI response twice.

**Stack:** n8n · Zendesk · Google Vision AI (OCR) · OpenAI (GPT-4o) · ElevenLabs · Aircall · Microsoft SQL Server · Google Cloud Storage

**Solution:** I built three linked n8n workflows, each triggered directly from Zendesk. New Ticket Response Automation fires when a ticket is created: it normalizes the incoming webhook payload, checks for attachments, and — if any exist — uploads them to Google Cloud Storage and routes them through Google Vision AI OCR on separate paths for images vs. PDFs, polling the asynchronous job until it completes. The OCR text plus the ticket body feed a GPT-4o agent that drafts a summary, sentiment read, and proposed first reply, posted back as an internal note with a completion tag to block reprocessing. Pending Call Analysis Automation fires when a ticket is tagged #summarize-call: it locates the Aircall recording link in the ticket's comments, filters out missed calls with no actual recording, downloads the audio, transcribes it with ElevenLabs Speech-to-Text, and has GPT-4o summarize the call and its sentiment before posting both as an internal note. Ticket Summary Response Automation fires when a ticket is tagged #propose-answer: it pulls the full comment history, formats it chronologically, checks the database for an existing record, and has GPT-4o draft a context-aware proposed response — gated by a comment-duplication check before posting. All three write through the same SourceData → AiOutputs → Interactions tables in a Microsoft SQL Server–backed Central Intelligence Hub, and every AI output is posted to Zendesk as an internal note rather than sent directly to the customer, keeping a human agent as the final review gate.

**Impact:** Every new ticket, pending call, and ongoing conversation now gets an instant AI-drafted summary and reply logged straight into Zendesk before an agent even opens it, replacing the manual read-transcribe-and-draft work that used to precede every reply. Duplicate-prevention checks and completion tagging keep each ticket's AI notes clean and non-redundant, and because all three workflows log through the same Central Intelligence Hub tables, the team gets one queryable, cross-workflow audit trail of every AI touchpoint instead of three disconnected automations with no shared record.

**Technologies & Skills:**

- Flutter
- Electron
- Node.js
- Next.js
- Redux (state management)
- MongoDB
- PubNub
- Firebase Notification (Firebase Cloud Messaging - FCM)
- Flutter Flow
- n8n
- App Script
- Google Sheets
- Google Form Parser
- Apify (for scrapping profiles and jobs from LinkedIn, Google etc.)
- Nocodb
- Hunter.io
- ZeroBounce
- Google Forms
- Open AI
- Google Gemini
- Supabase
- Google Data Studio
- Click Up
- Emergent Labs
- Zapier
- Go High Level
- Retell AI
- Aloware
- CloseBot
- React Native
- Expo
- Stripe
- Express
- Astro
- Zendesk
- Google Vision AI (OCR)
- ElevenLabs
- Aircall
- Microsoft SQL Server
- Google Cloud Storage
