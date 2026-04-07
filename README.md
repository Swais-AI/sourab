# SWAIS Frontend

Frontend application for Saraf Worldsphere AI Services — an enterprise intelligence platform for operations, industry, and education.

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with Server & Client Components
- **Redux Toolkit** for state management
- **NextAuth** for Google OAuth authentication
- **Tailwind CSS 4** for styling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
