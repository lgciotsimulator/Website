# Development Setup

Guide for developers working on the website codebase.

## Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher
- **Git**: for version control
- **Code Editor**: VS Code recommended

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/lgciotsimulator/Website.git
cd Website
```

### 2. Install Dependencies
```bash
npm install
```

This installs all packages listed in `package.json`.

### 3. Start Development Server
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

## Project Structure

```
Website/
├── client/                      # Frontend (React)
│   ├── public/
│   │   ├── data/               # JSON content files
│   │   ├── images/             # Static images
│   │   ├── 404.html            # SPA routing
│   │   └── favicon.png         # Logo
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # Page components
│   │   ├── lib/                # Utilities
│   │   ├── hooks/              # Custom hooks
│   │   ├── index.css           # Global styles
│   │   └── main.tsx            # Entry point
│   └── index.html              # HTML template
├── server/                      # Backend (Express)
│   ├── index.ts                # Server entry
│   ├── routes.ts               # API routes
│   ├── vite.ts                 # Vite integration
│   └── storage.ts              # Data storage
├── shared/                      # Shared types
│   └── schema.ts               # Database schema
├── script/                      # Build scripts
│   └── build.ts                # Build process
├── package.json                # Dependencies
├── vite.config.ts              # Vite config
├── tsconfig.json               # TypeScript config
└── .github/workflows/          # GitHub Actions
    └── deploy.yml              # Auto-deploy config
```

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run check            # TypeScript type checking
npm run start            # Run production server
npm run build:gh-pages   # Build for GitHub Pages
```

## Tech Stack

**Frontend**:
- React 18
- TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Radix UI (components)

**Backend**:
- Express.js
- Node.js
- Vite (dev server)

**Database**:
- Drizzle ORM (ready for use)
- PostgreSQL (optional)

## Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/feature-name
```

### 2. Make Changes
```bash
# Edit files
npm run dev          # Test locally
npm run check        # Type checking
```

### 3. Commit Changes
```bash
git add .
git commit -m "feat: description of changes"
```

### 4. Push to GitHub
```bash
git push origin feature/feature-name
```

### 5. Create Pull Request
- Go to GitHub repo
- Click "New Pull Request"
- Select your branch
- Describe changes

## Component Development

### Create New Component

**File**: `client/src/components/ComponentName.tsx`

```tsx
import { motion } from 'framer-motion';

export function ComponentName() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Component content
    </motion.div>
  );
}
```

### Add to Page

**File**: `client/src/pages/Home.tsx`

```tsx
import { ComponentName } from '@/components/ComponentName';

export default function Home() {
  return (
    <>
      <ComponentName />
    </>
  );
}
```

## Styling

### Tailwind CSS Classes

```tsx
// Container
<div className="container mx-auto px-6">

// Typography
<h2 className="font-display text-4xl md:text-5xl font-bold">

// Cards
<div className="p-6 rounded-2xl glass hover:border-primary/30 transition-all">

// Grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Custom Colors

From `tailwind.config.ts`:
- `text-primary` - Accent color
- `text-muted-foreground` - Secondary text
- `bg-background` - Background
- `border-border/50` - Borders

## Animations

Using Framer Motion:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
  Content
</motion.div>
```

## API Development

### Add New Route

**File**: `server/routes.ts`

```typescript
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get('/api/endpoint', (req, res) => {
    res.json({ data: 'response' });
  });

  return httpServer;
}
```

### Use Storage

```typescript
import { storage } from "./storage";

// Get user
const user = await storage.getUser('id');

// Create user
const newUser = await storage.createUser({ username, email });
```

## Database Setup

1. Install PostgreSQL
2. Configure connection in `.env`
3. Run migrations: `npm run db:push`

See `shared/schema.ts` for schema definition.

## Testing Locally

```bash
# Start dev server
npm run dev

# In another terminal, test API
curl http://localhost:5000/api/endpoint
```

## Production Build

```bash
npm run build
npm run start
```

Output:
- `dist/index.cjs` - Server bundle
- `dist/public/` - Client bundle

## Debugging

### Console Logs
```typescript
console.log('Variable:', variable);
```

### Browser DevTools
- F12 to open
- Console tab for logs
- Network tab for requests
- Elements tab for DOM

### TypeScript Checking
```bash
npm run check
```

## Common Issues

### Port Already in Use
```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm run dev
```

### Module Not Found
```bash
rm -rf node_modules
npm install
```

### Hot Reload Not Working
```bash
# Restart dev server
npm run dev
```

## Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "feat: description"

# Push
git push origin branch-name

# Pull latest
git pull origin main
```

## Code Style

- Use TypeScript
- Follow existing patterns
- Add types to functions
- Use descriptive names
- Comment complex logic

## Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)

## Support

See [Troubleshooting](Troubleshooting) or [FAQ](FAQ)!
