# kakeibo

Rough outline
kakeibo-app/
│
├── client/                 # React + TypeScript (frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/     # Charts, forms, UI parts
│   │   ├── pages/          # Home, Dashboard, Login
│   │   ├── services/       # API calls
│   │   ├── types/          # TypeScript interfaces
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── vite.config.ts
│
├── server/                 # Node.js + Express + TS (backend)
│   ├── src/
│   │   ├── controllers/    # Logic for routes
│   │   ├── models/         # Prisma models
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth, error handling
│   │   └── index.ts
│   └── prisma/             # Prisma schema + migrations
│       └── schema.prisma
│
├── .env
├── package.json
└── README.md
