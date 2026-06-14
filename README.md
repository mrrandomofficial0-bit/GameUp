# 🎮 GameUp

**GameUp** is a multiplayer social gaming platform where friends can create lobbies, join with a code, and play fun party games together.

The goal of GameUp is to make online game nights easy. Create a room, invite your friends, choose a game, and start playing.

---

## 🚀 Features

### 👥 Lobby System

* Create private lobbies
* Join with a room code
* Invite friends instantly
* Host-controlled game selection

### 🎮 Multiple Games

GameUp supports multiple party games inside a single platform.

Current planned games:

* 🎥 Wrong Clip
* 😂 Meme Detective
* 🎵 Song Faker
* 🧠 Trivia Battle
* 🎬 Movie Mix-Up

More games are planned for future updates.

---

## 🎥 Wrong Clip

Wrong Clip is the first game being developed.

### How It Works

1. Players join a lobby.
2. Everyone watches a video.
3. One player receives a different but similar video.
4. Each player submits a clue word.
5. Players discuss the clues.
6. Everyone votes on who they think received the different video.
7. The imposter wins if they survive the vote.

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS

### Backend

* Supabase
* PostgreSQL
* Supabase Authentication
* Supabase Realtime

### Hosting

* Vercel

---

## 📂 Project Structure

```text
app/
├── auth/
├── games/
├── lobby/
├── profile/
├── component/
├── utils/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
└── page.tsx
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/gameup.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🗺️ Roadmap

### Phase 1

* User authentication
* Lobby creation
* Join lobby system
* Wrong Clip MVP

### Phase 2

* Additional games
* Player profiles
* Friends system
* Match history

### Phase 3

* Rankings
* Achievements
* XP & Levels
* Custom game modes

### Phase 4

* Mobile optimization
* Voice chat
* Creator tools
* Public lobbies

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.

If you'd like to contribute:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

Built with ❤️ for game nights and friend groups.
