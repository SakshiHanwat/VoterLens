# VoterLens 🗳️

> **Your vote. Your voice. Understand it.**

VoterLens is an AI-powered civic education assistant that helps users from any country understand their local election process — step by step, in their own language.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-voter--lens--yhl8.vercel.app-5b6ef5?style=for-the-badge&logo=vercel)](https://voter-lens-yhl8.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%2B%20Firestore-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI%20Powered-blue?style=for-the-badge&logo=google)](https://ai.google.dev)

---

## 🌍 What is VoterLens?

Most people don't vote because they don't understand the process. VoterLens solves this by providing a personalized, conversational AI guide for elections in **195 countries** — not a Wikipedia page, not a textbook, but a real step-by-step interactive assistant that speaks your language.

---

## ✨ Features

- 🌐 **195 Countries Supported** — Personalized election guide for every country in the world
- 🤖 **Gemini AI Assistant** — Real-time answers powered by Google's Gemini AI
- 🗺️ **5 Learning Paths** — Voter Registration, Election Process, Voting Day, Vote Counting, Free Q&A
- 🎯 **Civic Quiz** — Test your knowledge with AI-generated questions per country
- 🏆 **Badge System** — Earn badges: Civic Newcomer → Informed Voter → Democracy Champion → Election Expert
- 🎤 **Voice Input** — Ask questions using your microphone
- 🌏 **Multi-language** — Support for 22+ languages including Hindi, Spanish, Arabic, and more
- 🔐 **Authentication** — Google Sign-In, Email/Password, Phone OTP
- 📱 **PWA Ready** — Works on mobile like a native app
- ⚡ **Real-time** — Instant AI responses with typing indicators

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v11 |
| AI | Google Gemini AI |
| Auth | Firebase Authentication |
| Database | Cloud Firestore |
| Deployment | Vercel |
| Voice | Web Speech API |
| Fonts | Instrument Serif + Geist Sans |

---

## 📸 Screenshots

### Landing Page
> Beautiful dark editorial design with typewriter animation cycling through 195 countries

### AI Assistant
> Conversational guide with 5 learning paths, progress tracking, and voice input

### Quiz Page
> Gamified civic knowledge quiz with countdown timer and badge rewards

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/SakshiHanwat/VoterLens.git

# Navigate to project
cd VoterLens

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
voterlens/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── login/page.tsx           # Authentication
│   ├── [country]/
│   │   ├── guide/page.tsx       # AI Assistant (core)
│   │   ├── quiz/page.tsx        # Civic quiz
│   │   └── badge/page.tsx       # Badge/certificate
│   └── api/
│       ├── gemini/route.ts      # Gemini AI endpoint
│       └── quiz/route.ts        # Quiz generation
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── landing/                 # Hero, CountryPicker, HowItWorks
│   ├── assistant/               # Chat UI, PathSelector, ProgressBar
│   ├── quiz/                    # Quiz components
│   └── auth/                    # Login, ProtectedRoute
├── context/
│   ├── AuthContext.tsx          # Firebase auth state
│   └── LanguageContext.tsx      # Language preference
├── lib/
│   ├── firebase.ts              # Firebase config
│   ├── gemini.ts                # Gemini client
│   └── countries.ts             # 195 countries data
└── types/
    └── index.ts                 # TypeScript types
```

---

## 🔐 Authentication

VoterLens supports three authentication methods:

- **Google Sign-In** — One-click login with Google account
- **Email & Password** — Traditional sign up and sign in
- **Phone OTP** — Sign in with phone number verification

All protected routes (`/[country]/guide`, `/[country]/quiz`) require authentication. Unauthenticated users are automatically redirected to `/login`.

---

## 🤖 How the AI Works

VoterLens uses **Google Gemini AI** to provide personalized election information:

1. User selects their country
2. User picks a learning path (Registration, Process, Voting Day, Counting, or Free Q&A)
3. System generates a country-specific prompt with non-partisan rules
4. Gemini responds with accurate, simple, educational content
5. User progresses through guided steps or asks free questions

The AI is instructed to:
- Never take political sides
- Never mention specific candidates
- Always be specific to the selected country's laws
- Respond in the user's preferred language
- End each response with a follow-up suggestion

---

## 🏆 Badge System

| Score | Badge |
|---|---|
| 0–3 correct | 🌱 Civic Newcomer |
| 4–5 correct | 📖 Informed Voter |
| 6–7 correct | 🏛️ Democracy Champion |
| 8/8 correct | ⭐ Election Expert |

---

## 🌐 Supported Languages

English, हिन्दी, Español, Français, العربية, Português, বাংলা, Русский, 日本語, Deutsch, 中文, 한국어, Italiano, Türkçe, اردو, తెలుగు, मराठी, தமிழ், Kiswahili, Nederlands, Polski, Bahasa Indonesia

---

## 🚢 Deployment

This project is deployed on **Vercel**.

### Deploy your own:

1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Add all environment variables in Vercel settings
5. Add your Vercel domain to Firebase authorized domains
6. Deploy!

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Built By

**Sakshi Hanwat**

Built with ❤️ using Google Gemini AI + Firebase for the hackathon.

> *"Democracy starts with understanding."*

---

## 🙏 Acknowledgements

- [Google Gemini AI](https://ai.google.dev) — For powering the election assistant
- [Firebase](https://firebase.google.com) — For authentication and database
- [Vercel](https://vercel.com) — For hosting
- [Framer Motion](https://www.framer.com/motion/) — For beautiful animations
- [Next.js](https://nextjs.org) — For the framework
