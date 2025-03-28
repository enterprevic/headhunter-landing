# Headhunter.ng - Coming Soon

This is the under construction landing page for Headhunter.ng, Nigeria's premier talent recruitment platform. The page features a Nigerian-themed interactive game to engage visitors while the main site is being developed.

## Features

- Responsive under construction landing page
- Nigerian-themed design with the national colors (green and white)
- Interactive "Suwe" (hopscotch) inspired game
- Contact information
- Optimized for deployment on Vercel

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI library

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd headhunter

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Select your Git repository
   - Configure project settings (use default Next.js settings)
   - Click "Deploy"
3. Connect your custom domain (headhunter.ng):
   - In your project settings, navigate to "Domains"
   - Add your domain and follow the verification steps
   - Update your DNS settings as instructed by Vercel

## Project Structure

```
├── public/             # Static assets
│   └── images/         # Images including logo
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Landing page
│   └── components/    # React components
│       ├── GameWrapper.tsx # Client component wrapper
│       └── SuweGame.tsx    # Nigerian-themed game
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Game Instructions

The Nigerian-themed "Suwe" game is a simple click-based game:

1. Click "Start Game" to begin
2. Squares will highlight in orange one at a time
3. Click on the highlighted squares to score points
4. Clicking on non-highlighted squares will deduct points
5. The game lasts for 30 seconds
6. Try to achieve the highest score possible!

## License

Private - All rights reserved

## Contact

For any inquiries, please contact: info@headhunter.ng
