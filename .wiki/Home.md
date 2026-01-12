# LGC Website Wiki

Welcome to the LGC Website Documentation!

This wiki contains everything you need to manage, update, and deploy the LGC website.

## 📚 Quick Navigation

- **[Admin Guide](Admin-Guide)** - Overview of managing the website
- **[Content Management](Content-Management)** - How to update each section
- **[Adding New Sections](Adding-New-Sections)** - Create custom sections
- **[Image Management](Image-Management)** - Upload and manage images
- **[Development Setup](Development-Setup)** - For developers
- **[Troubleshooting](Troubleshooting)** - Common issues & fixes
- **[FAQ](FAQ)** - Frequently asked questions

## 🚀 Quick Start

### For Non-Technical Admins:
1. Update content via **JSON files** in `client/public/data/`
2. Add images to `client/public/images/`
3. Push changes to GitHub
4. Site automatically deploys via GitHub Actions

### For Developers:
1. Clone the repo
2. Run `npm install && npm run dev`
3. Make changes
4. Push to deploy

## 📁 Project Structure

```
Website/
├── client/
│   ├── public/
│   │   ├── data/          # Content (JSON files)
│   │   ├── images/        # Images (team, achievements, etc)
│   │   └── favicon.png    # Website logo
│   └── src/
│       └── components/    # React components
├── README.md              # Full documentation
└── .github/workflows/     # Auto-deploy configuration
```

## ✨ Key Features

- ✅ Static website (no backend needed)
- ✅ GitHub Pages compatible
- ✅ Automatic deployment on push
- ✅ Easy content updates via JSON
- ✅ Responsive design
- ✅ Fast loading

## 📞 Questions?

See [FAQ](FAQ) or [Troubleshooting](Troubleshooting) pages for help!
