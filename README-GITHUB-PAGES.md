# GitHub Pages Deployment Guide

This website has been configured to work with GitHub Pages. Here's how to set it up:

## Prerequisites

- Your project pushed to a GitHub repository
- GitHub Pages enabled in repository settings

## Deployment Options

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push your code to the `main` or `master` branch
2. Go to your repository **Settings > Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site

### Option 2: Manual Deployment

#### For User/Organization Pages (`username.github.io`)
```bash
npm run build
# Deploy the contents of dist/public to your gh-pages branch
```

#### For Project Pages (`username.github.io/repo-name`)
```bash
# Build with the correct base URL
VITE_BASE_URL=/repo-name/ npm run build

# Or use the deployment script
./deploy.sh repo-name
```

Then deploy the `dist/public` directory to the `gh-pages` branch.

### Option 3: Using gh-pages CLI

```bash
npm install --save-dev gh-pages

# Add to package.json:
"deploy": "gh-pages -d dist/public"

# Then run:
npm run deploy
```

## Configuration

### Setting the Base URL

The base URL is automatically set based on deployment context:

- **GitHub Pages (User/Organization)**: `VITE_BASE_URL=/`
- **GitHub Pages (Project)**: `VITE_BASE_URL=/repo-name/`

This is configured in `vite.config.ts`:
```typescript
base: process.env.VITE_BASE_URL || "/",
```

## SPA Routing

GitHub Pages now supports SPA (Single Page Application) routing through the `404.html` file. This redirects all requests to `index.html` so React Router can handle client-side routing.

The `404.html` file in `client/public/` handles this automatically.

## Static Data

All your JSON data files in `client/public/data/` will be served as static assets. No server-side processing is needed.

## What Changed

✅ Removed Express server dependency  
✅ Added SPA routing support with 404.html  
✅ Configurable base path for subdirectory deployments  
✅ GitHub Actions workflow for automatic deployment  
✅ Deployment script for manual builds  

## Troubleshooting

**Assets not loading:**
- Ensure `VITE_BASE_URL` is set correctly for your deployment
- Check browser console for 404 errors on static assets

**Routes not working:**
- Verify `404.html` is deployed to the root of your site
- Check that React Router is configured with the correct base path

**Data not loading:**
- Ensure JSON files in `client/public/data/` are in the deployment
- Check network tab in browser DevTools for 404 errors on data files

## No More Server Needed

Your website is now a fully static site that works on GitHub Pages. The Express server is only needed for local development if you want to test with Node.js. For GitHub Pages, only the compiled React app is deployed.
