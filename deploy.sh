#!/bin/bash

# GitHub Pages deployment script
# Usage: ./deploy.sh [repository-name]
# Example: ./deploy.sh my-website
# For user/org pages: ./deploy.sh (no argument)

REPO_NAME="${1:-.}"
BASE_URL="/${REPO_NAME}/"

# If deploying to username.github.io or organization.github.io
if [ "$REPO_NAME" = "." ]; then
    BASE_URL="/"
fi

echo "Building for GitHub Pages deployment..."
echo "Base URL: $BASE_URL"

# Build the client with the correct base URL
VITE_BASE_URL="$BASE_URL" npm run build

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Build successful!"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push this repo to GitHub"
echo "2. Go to Settings > Pages"
echo "3. Set 'Source' to 'GitHub Actions'"
echo "4. Or manually:"
echo "   - Copy the dist/public directory to your gh-pages branch"
echo "   - Push to deploy"
