# Projects Description (2021 - 2026)

## Junior Software Engineer (2021 - 2024) — BooleanBites, Johar Town, Lahore

### 1. Houzi - Real Estate Mobile Application

**Problem:** Real estate businesses running a Houzez WordPress site (a theme used by 56,000+ sites globally) had no easy way to offer their users a dynamic native mobile app without commissioning a fully custom build for each individual site — a slow, expensive process that put a mobile presence out of reach for smaller agencies.

**Stack:** Flutter · Bloc (state management) · WordPress (Houzez theme integration) · Google Maps · OneSignal Push Notifications · App/Deep Linking · RTL

**Solution:** Houzi is a white-label template mobile application I developed in collaboration with the team. Rather than a bespoke build per client, the app connects to any Houzez-powered WordPress site through simple configuration and dynamically pulls in that site's listings and content, so a single codebase powers every deployment. It supports property browsing via Google Maps, push notifications through OneSignal, and RTL layouts for Arabic-language markets, and ships to both the Google Play Store and Apple App Store.

**Impact:** Any Houzez-based real estate site can launch a fully branded, dynamic native mobile app in a fraction of the time and cost of a custom build, turning what used to be an enterprise-only feature into something accessible to smaller agencies too.

### 2. Houzi Builder - Desktop Application

**Problem:** Customizing Houzi's UI, theme, and color scheme for each client previously required manual configuration and direct code changes for every deployment, which didn't scale as the number of Houzi client sites grew.

**Stack:** Desktop application with a drag-and-drop UI/theme builder (specific framework not captured in the source material — worth confirming before reuse).

**Solution:** I fully developed Houzi Builder, a desktop application purpose-built for customizing the Houzi mobile app without touching code. Users can restructure the whole UI of each screen with simple drag-and-drop operations, and the theme and color scheme can be adjusted through built-in controls rather than a code change and rebuild.

**Impact:** Gave non-technical users complete control to configure an entire Houzi deployment from one platform, removing the need for a developer to hand-customize each client's app.

### 3. Houzi Rest Api Plugin - Wordpress PHP Plugin

**Problem:** The Houzi mobile app needed a reliable, real-time channel for exchanging data with the WordPress website, and that channel had to keep expanding as new engagement features — push, chat, comments — were added over time.

**Stack:** PHP · WordPress · REST API · OneSignal Push Notifications

**Solution:** Houzi Rest API Plugin is the WordPress PHP plugin that bridges the website and the mobile app, exposing APIs for both fetching data and posting/updating it back to the site. I helped maintain the plugin and extended it over time, most notably integrating OneSignal push notifications and adding chat, comments, and reply functionality.

**Impact:** Kept the app and website reliably synchronized as the platform scaled, while steadily expanding the feature set — push, chat, comments — that keeps end users engaged with the app.

**Technologies & Skills:**

- Flutter
- PHP
- WordPress
- Google Maps
- One Signal Push Notifications
- Deployment (Google Play Store and Apple App Store)
- App/Deep Linking
- RTL
- Bloc (state management)
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

**Problem:** Golfers had no streamlined way to coordinate availability, find and connect with playing partners, and stay in touch after a round — organizing a game usually meant juggling separate messaging apps and manual scheduling.

**Stack:** Flutter · Express · PubNub · Firebase Cloud Messaging (FCM) · Stripe · App/Deep Linking

**Solution:** I fully developed Linked Golf end to end — a Flutter app with an Express backend — designed around social connectivity for golfers on both Android and iOS. Users can match their availability against friends to find a time to play, scan a QR code to instantly add a fellow golfer right after a round, and chat within community groups powered by PubNub. Push notifications run through Firebase Cloud Messaging, event subscriptions are billed through Stripe, and app/deep linking routes shared content straight into the relevant in-app screen. The app is deployed on both the Google Play Store and Apple App Store.

**Impact:** Removed the traditional hassle of organizing golf rounds, giving golfers a single, user-friendly app for scheduling, connecting, and building community around the game.

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

**Problem:** The existing Blue Sky mobile application, originally built for EPIC PC, needed to be relaunched as a distinct product with its own brand identity.

**Stack:** Flutter

**Solution:** I fully rebranded and refactored the Flutter application, replacing the branding, visual identity, and relevant naming throughout the app to turn Blue Sky into the Exodus app.

**Impact:** Relaunched the product under its new brand and identity on the existing, proven Flutter codebase, avoiding the cost and risk of a ground-up rebuild.

### 8. Capital Shack

**Problem:** Manually reviewing incoming client documents sent by email, categorizing them, filing them correctly, and cross-referencing the details into spreadsheets was slow, repetitive, and prone to human error at any real volume.

**Stack:** Gmail · Google Drive · Google Sheets · App Script · Google Form Parser (Document AI)

**Solution:** I fully developed this end-to-end automation across Gmail, Google Drive, Google Sheets, App Script, and Google Form Parser. As documents arrive by email, the first automation reviews each attachment, categorizes the message, and uploads the attachments into a specifically labeled Google Drive folder while logging a corresponding entry in Google Sheets. A second automation then picks up these newly logged, unprocessed entries and runs the attachments through Google Form Parser (Document AI), identifying whether each one is an application form, bank statement, or other document type, and updates the correct fields in the appropriate sheet.

**Impact:** Eliminated manual document triage and data entry entirely, ensuring every incoming document is consistently categorized, filed, and logged without anyone having to open and process it by hand.

### 9. Agentic Job Discovery Automation

**Problem:** Manually researching and verifying contact details — email and phone — for decision-makers (CEOs, CTOs, COOs, etc.) at companies posting jobs in specific niches was slow, inconsistent, and hard to keep current.

**Stack:** n8n · Nocodb · Apify · ZeroBounce · Clearout Phone

**Solution:** I fully developed this four-stage automation using n8n, Nocodb, Apify actors, ZeroBounce, and Clearout Phone. Apify actors scrape job postings from LinkedIn and other career sites, with results stored in Nocodb and duplicates filtered out. A second automation verifies every discovered email address through ZeroBounce, and a third does the same for phone numbers through Clearout Phone, updating the database as results come back. A fourth automation compiles everything into a summary and a Google Sheet of successfully scraped and verified results, delivered before the start of the working day.

**Impact:** Replaces what would be hours of manual research and verification with a daily, pre-verified list of decision-maker contacts waiting in the team's inbox each morning.

### 10. Social Media Post Management Automation

**Problem:** A realtor client had to manually write a caption for every social media platform using Open AI and then manually upload and schedule each promotional video across multiple accounts — a repetitive process that ate into time better spent on the business itself.

**Stack:** Google Forms · Google Sheets · App Script · n8n · Open AI

**Solution:** I solved this by giving the client a single Google Form as the entire interface: he specifies a title, description, and the Google Drive link to the video, chooses a schedule date and time, selects long-form or short-form (reels), and picks which platforms to include or exclude. Submitting the form creates a new Google Sheets entry, which triggers an n8n automation that generates a caption tailored to each selected platform. An App Script continuously tracks the scheduled date and time and, when it arrives, triggers n8n to publish the video according to the sheet's details; afterward, a detailed posting summary is sent to the client. A separate automation keeps each social account's access token refreshed automatically, notifying the client with a simple one-tap link only if a token ever needs manual renewal.

**Impact:** Automated the entire pipeline — from caption writing to scheduling to multi-platform publishing to token upkeep — turning a manual daily chore into a single form submission.

### 11. Leads Management System

**Problem:** Decision-makers had no unified, synchronized view of raw versus scraped lead data or of how email-outreach campaigns were performing over time, making it hard to judge what was actually working.

**Stack:** Google Data Studio (backing database not further specified in the source material).

**Solution:** I fully developed this internal system for tracking leads and campaigns. The business team supplies stats such as raw data versus scraped data and uploads campaign reports at the start and end of each outreach campaign; all of this is stored and kept properly in sync with Data Studio for visualization.

**Impact:** Gives decision-makers a clear, always-current view of overall and individual outreach performance — old versus new, success versus failure — directly inside Data Studio, without manual report compilation.

### 12. Outreach Emails Automation

**Problem:** Replies from the company's many outreach email accounts were all funneled into a single inbox, mixed in with warm-up emails, bot replies, and unsubscribe notices, making it difficult to spot genuine prospects among the noise.

**Stack:** Gmail · Google Sheets · App Script · n8n · Open AI · Slack

**Solution:** I fully developed this Gmail/Sheets/App Script/n8n/Open AI automation. As soon as an email arrives, App Script performs a first pass to filter out the most obviously unwanted messages. The remainder is passed to n8n, where Open AI analyzes and validates the email content; anything that passes validation, along with its key details, is posted to a Slack channel for the business management team to review and act on directly.

**Impact:** Lets the business management team focus exclusively on genuine prospects instead of manually reading every reply, filtering out noise automatically at a scale manual review couldn't match.

### 13. The Ramirez Legal Group

**Problem:** The client's ClickUp case-tracking data and their client-facing dashboard, built on Emergent Labs, had to be kept in sync by hand, risking the two falling out of step.

**Stack:** ClickUp · Emergent Labs · Zapier

**Solution:** This automation was built using ClickUp, Emergent Labs, and Zapier. ClickUp is used to track legal cases, while the client-facing dashboard is built and deployed on Emergent Labs. Zapier workflows watch ClickUp continuously: whenever a case is created or updated, the change is synchronized to the dashboard automatically, and whenever a new client is added in ClickUp, a matching client record is created and kept in sync on the dashboard as well.

**Impact:** Keeps the case tracker and the client-facing dashboard continuously synchronized in real time, removing duplicate manual data entry and the risk of the two systems drifting apart.

### 14. United Global Vanline

**Problem:** Leads must be contacted within roughly 5 minutes of form submission to maximize the probability of closing a deal, but during off-hours and holidays, leads often went unaddressed within that window and the deal was effectively lost.

**Stack:** n8n · Go High Level (Opportunities, Pipelines, Automations, Tasks, Contacts) · Retell AI · Aloware · CloseBot · Open AI

**Solution:** I created a multi-workflow automation combining n8n, Go High Level (Opportunities, Pipelines, Automations, Tasks, Contacts), Retell AI call bots, Aloware (inbound/outbound calling, chat bots, local presence lines, sequences, and seniority-tiered agent inboxes/teams for Senior, Junior, and Fresh agents), and CloseBot for handling SMS during and after hours. As soon as the website form is submitted, a contact message reaches the lead within a minute, followed by a voicemail after one minute, and within two minutes a bot call warmly transfers the lead to a live agent during business hours. Every call is recorded and later processed by Open AI, which scores the agent against defined criteria and screens for fraud, feeding a daily progress report that assigns promotion, demotion, or training status per agent and notifies managers. After hours or on holidays, an incoming voice bot instead gathers the lead's inventory details directly and attempts to close the deal itself; if the lead asks for a human agent, they're added to the Aloware Power Dialer queue for priority contact once business hours resume.

**Impact:** Solved the core problem of reaching every lead within the critical grace period, day or night, materially increasing the probability of booking the deal, while giving managers automated visibility into agent performance and fraud risk.

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

**Problem:** Field sales agents across Pakistan needed a reliable way to scan product batches and track incentives with real-time SAP ERP synchronization, in an environment where SAP connectivity and availability couldn't always be guaranteed.

**Stack:** Nest.js · React Native · MongoDB · SAP RFC · AWS S3 · Firebase · Twilio · JWT

**Solution:** A production-grade platform for Orient Electronic (Pvt.) Ltd. that powers its Field Sales Manager (FSM) Incentive Program. The solution consists of a FastAPI backend, an administrative web portal, and a React Native mobile application used by field agents across Pakistan to scan product batches, track incentives, receive notifications, and synchronize activity with SAP ERP in real time:

- Developed a cross-platform React Native mobile application used by field sales agents nationwide for product batch scanning, incentive tracking, notifications, and account management.
- Architected and built a scalable Nest.js backend supporting thousands of daily batch scans and real-time ERP synchronization workflows.
- Integrated with custom SAP BAPIs through SAP RFC services for user registration, account activation, batch scanning, and batch status synchronization.
- Implemented resilient synchronization mechanisms with automatic fallback queues and scheduled reconciliation processes when SAP services are unavailable.
- Built automated overnight synchronization pipelines to handle registrations, account status updates, batch verification, reconciliation, and operational reporting.
- Implemented a four-level organizational hierarchy (National → Zone → Branch → FSM) with role-based access control and organization-aware data visibility.
- Integrated JWT authentication, Twilio SMS OTP verification, Firebase Cloud Messaging (FCM), and AWS S3 storage services.
- Developed bulk processing workflows supporting Excel and CSV uploads for large-scale SAP operations with asynchronous background execution.
- Built monitoring, logging, and administrative reporting systems to provide visibility into synchronization status, operational metrics, and system health.

**Impact:** Supports thousands of daily batch scans nationwide with reliable ERP synchronization, automatic fallback and reconciliation whenever SAP is unavailable, and full operational visibility for the teams monitoring the incentive program.

### 17. Techtiz Website

**Problem:** The company needed a public website that loaded fast and performed well in search rankings, without the overhead of a heavier framework.

**Stack:** Astro

**Solution:** I fully developed the entire Techtiz website in Astro, chosen specifically for its performance and SEO characteristics as a mostly-static site generator.

**Impact:** Delivered a fast, SEO-optimized public site for the company that reflects well on its technical brand.

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

**Stack:** Go High Level

**Solution:** I fully developed the native, element-based homepage inside Go High Level, building the layout directly with the platform's own components rather than embedding external code.

**Impact:** Delivered a native, fully GHL-integrated homepage for the agency that's easy for their team to maintain going forward using Go High Level's own tools.

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
