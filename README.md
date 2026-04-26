# VoterLens

> Your vote. Your voice. Understand it.

A civic education platform that helps users from any country understand their local election process through personalized, interactive, step-by-step guidance.

**Live:** https://voter-lens-yhl8.vercel.app

---

## Overview

VoterLens provides a conversational guide for elections across 195 countries. Users select their country and language, then explore structured learning paths covering voter registration, the election process, voting day, and vote counting — or ask their own questions freely.

---

## Features

- Personalized election guide for 195 countries
- Conversational step-by-step learning paths
- Real-time AI-powered Q&A
- Voice input support
- Civic knowledge quiz with scoring and badges
- Multi-language support across 22+ languages
- Google, Email/Password, and Phone OTP authentication
- Protected routes — authentication required to access guides
- Fully responsive across mobile and desktop

---

## Tech Stack

```
Framework       Next.js 15 (App Router)
Language        TypeScript
Styling         Tailwind CSS v4
Animations      Framer Motion v11
Authentication  Firebase Auth
Database        Cloud Firestore
AI              Google Gemini API
Deployment      Vercel
Voice           Web Speech API
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm
- Firebase project
- Gemini API key from Google AI Studio

### Clone and Install

```bash
git clone https://github.com/SakshiHanwat/VoterLens.git
cd VoterLens
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
GEMINI_API_KEY=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
GOOGLE_TRANSLATE_API_KEY=
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
voterlens/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        # Landing page
│   ├── globals.css
│   │
│   ├── login/
│   │   └── page.tsx                    # Authentication page
│   │
│   ├── [country]/
│   │   ├── guide/
│   │   │   └── page.tsx                # AI assistant guide
│   │   ├── quiz/
│   │   │   └── page.tsx                # Civic quiz
│   │   └── badge/
│   │       └── page.tsx                # Badge and certificate
│   │
│   └── api/
│       ├── gemini/
│       │   └── route.ts                # Gemini API route
│       └── quiz/
│           └── route.ts                # Quiz generation route
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── CountryPicker.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── MarqueeStrip.tsx
│   │   └── CTASection.tsx
│   │
│   ├── assistant/
│   │   ├── AssistantWindow.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── PathSelector.tsx
│   │   ├── ProgressBar.tsx
│   │   └── TypingIndicator.tsx
│   │
│   ├── quiz/
│   │   └── QuizApp.tsx
│   │
│   └── auth/
│       ├── LoginPage.tsx
│       └── ProtectedRoute.tsx
│
├── context/
│   ├── AuthContext.tsx
│   └── LanguageContext.tsx
│
├── lib/
│   ├── firebase.ts
│   ├── gemini.ts
│   ├── firestore.ts
│   ├── countries.ts
│   ├── animations.ts
│   └── translate.ts
│
├── types/
│   └── index.ts
│
├── public/
│
├── .env.local                          # Not committed
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Authentication

Three sign-in methods are supported:

- **Google** — OAuth via Firebase
- **Email and Password** — Standard registration and login
- **Phone Number** — OTP verification via Firebase

All routes under `/[country]/*` are protected. Users who are not signed in are redirected to `/login`.

---

## Learning Paths

Each country has five available paths:

| Path | Steps |
|---|---|
| Voter Registration | 5 |
| Election Process | 6 |
| Voting Day | 4 |
| Vote Counting | 4 |
| Ask Your Own Question | Open-ended |

---

## Quiz and Badges

Users can take a country-specific quiz after completing any learning path.

| Score | Badge |
|---|---|
| 0 – 3 | Civic Newcomer |
| 4 – 5 | Informed Voter |
| 6 – 7 | Democracy Champion |
| 8 / 8 | Election Expert |

---

## Supported Languages

English, Hindi, Spanish, French, Arabic, Portuguese, Bengali, Russian, Japanese, German, Chinese, Korean, Italian, Turkish, Urdu, Telugu, Marathi, Tamil, Swahili, Dutch, Polish, Bahasa Indonesia

---

## Deployment

The project is deployed on Vercel.

### Deploy Your Own Instance

1. Fork this repository
2. Create a new project on [vercel.com](https://vercel.com)
3. Import the forked repository
4. Add all environment variables under Project Settings → Environment Variables
5. Add your Vercel domain to Firebase Console → Authentication → Authorized Domains
6. Deploy

---

## Firebase Setup

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication — Google, Email/Password, Phone
3. Create a Firestore database in test mode
4. Register a web app and copy the config values to `.env.local`

---

## Gemini API Setup

1. Visit [aistudio.google.com](https://aistudio.google.com)
2. Generate an API key
3. Add it to `.env.local` as `GEMINI_API_KEY`

---

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

---

## License

MIT
