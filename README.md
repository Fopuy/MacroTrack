# MacroTrack

MacroTrack is a lightweight web application for tracking daily macronutrients (protein, carbs, fats) and calories with a clean interface. The goal is simple: log food fast, see totals instantly, and stay consistent without bloated features.

This project is built as a practical portfolio piece and a real tool I personally use.

---

## Why MacroTrack Exists

Most macro trackers are either:

* Overloaded with features nobody asked for
* Locked behind paywalls

MacroTrack focuses on **speed, clarity, and control**. Just data.

---

## Features

* Log daily food entries with macros
* Automatic calculation of daily totals
* Responsive layout (desktop-first, mobile-friendly)

Planned / in progress:

* User authentication
* Saved foods / templates
* Weekly and monthly summaries
* Macro targets and progress comparison
* Edit and delete entries
* Persistent storage (database-backed)

---

## Tech Stack

**Frontend**

* React
* Vite
* Tailwind CSS

**Backend**

* Node.js
* Express

**Database**

* PostgreSQL

---

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm or pnpm

### Installation

```bash
git clone https://github.com/your-username/macrotrack.git
cd macrotrack
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## Project Structure

```
macrotrack/
├── src/           # React frontend
├── server/        # Node/Express backend
├── README.md
└── package.json
```

---

## Design Philosophy

* Fewer clicks > fancy UI
* Data first, visuals second
* Explicit control over automation

If a feature does not make logging faster or insight clearer, it does not belong.

---

## Roadmap

* [ ] Auth (JWT-based)
* [ ] Daily macro targets
* [ ] Historical charts
* [ ] Deployment (Vercel / Render)


---

## What This Project Demonstrates

* Practical React state management
* API design and CRUD operations
* Clean separation between frontend and backend
* Building software for real-world use

---

## Contributing

This is primarily a personal project, but suggestions and critiques are welcome. Open an issue or submit a PR if you have something concrete to improve.

---

## License

MIT License

---

## Author

Joshua De Jesus

If you're reviewing this as a recruiter or developer: this project prioritizes **clarity and correctness**
