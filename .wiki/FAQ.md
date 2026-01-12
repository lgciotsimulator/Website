# FAQ - Frequently Asked Questions

Common questions and answers about the LGC website.

## General Questions

### Q: What is this website?
**A**: This is the official website for LGC (Let's Get Connected), an IoT and embedded systems team. It's built with React, deployed on GitHub Pages, and uses JSON files for content.

### Q: Can I edit the website without coding?
**A**: **Yes!** You can edit all content through JSON files. No coding knowledge needed:
- Update text, links, emails in JSON
- Add/replace images in image folders
- Push changes to GitHub
- Site updates automatically

### Q: How often is the site updated?
**A**: **Automatically on every push!** When you push changes to GitHub, GitHub Actions automatically:
1. Builds the site
2. Deploys to GitHub Pages
3. Goes live (usually 1-2 minutes)

### Q: Where is my website hosted?
**A**: On **GitHub Pages** at: `https://lgciotsimulator.github.io/Website`

## Content Management

### Q: How do I change text on the website?
**A**: Edit JSON files in `client/public/data/`:
1. Open file (e.g., `team.json`)
2. Change text values
3. Commit and push
4. Site updates automatically

**Example**:
```json
{
  "title": "Old Title" → "New Title"
}
```

See [Content Management](Content-Management) for detailed guide.

### Q: How do I add a team member?
**A**: 
1. Add photo to `client/public/images/team/`
2. Edit `client/public/data/team.json`
3. Add member entry with name, role, image path
4. Push changes

See [Image Management](Image-Management) for details.

### Q: How do I add an achievement/event?
**A**:
1. Add photo to `client/public/images/achievements/`
2. Edit `client/public/data/achievements.json`
3. Add achievement entry with title, description, date, type, image
4. Push changes

### Q: What are achievement types?
**A**: Three types:
- `achievement` - Award or success
- `event` - Event conducted
- `milestone` - Important milestone

### Q: How do I update social links?
**A**: Edit `client/public/data/site.json`:
```json
{
  "socialLinks": {
    "linkedin": "your-linkedin-url",
    "instagram": "your-instagram-url",
    "whatsapp": "your-whatsapp-url",
    "googleForm": "your-google-form-url"
  }
}
```

### Q: Can I change the site email?
**A**: Yes! Edit `client/public/data/site.json`:
```json
{
  "email": "new-email@example.com"
}
```

## Images

### Q: What image formats are supported?
**A**: JPEG and PNG. Both work great.

### Q: What size should images be?
**A**:
- **Team photos**: 400x400px (square)
- **Achievement photos**: 800x600px (landscape)
- **Logo**: 512x512px or larger
- **File size**: <500KB (optimize before upload)

### Q: How do I replace an existing image?
**A**: Upload new image with **same filename**:
- Old file: `john-smith.jpg`
- Upload new: `john-smith.jpg` (replaces old)
- No JSON changes needed

### Q: Images not showing?
**A**: Check:
1. File exists in correct folder
2. JSON path matches exactly (case-sensitive!)
3. Path format: `/images/team/photo.jpg`
4. Hard refresh: `Ctrl+Shift+R`

See [Troubleshooting](Troubleshooting) for more help.

## Sections

### Q: Can I add new sections?
**A**: **Yes!** But requires some technical work:
1. Create JSON file for content
2. Create React component to display it
3. Add images (optional)
4. Import in App
5. Push changes

See [Adding New Sections](Adding-New-Sections) for step-by-step guide.

### Q: What sections exist?
**A**:
1. Hero - Homepage header
2. About - About LGC
3. Expertise - Skills and areas
4. Team - Team members
5. Achievements - Events and awards
6. Industry - Partnerships
7. Projects - GitHub projects (automatic)
8. Connect - Contact form

See [Content Management](Content-Management) for details.

## Deployment

### Q: How is the website deployed?
**A**: Automatically via **GitHub Actions**:
1. You push code to GitHub
2. GitHub Actions builds it
3. Deploys to GitHub Pages
4. Site goes live (1-2 minutes)

### Q: Where is it deployed?
**A**: GitHub Pages: `https://lgciotsimulator.github.io/Website`

### Q: How do I deploy manually?
**A**: Run:
```bash
npm run build
# Built files in dist/public/
```

Then upload `dist/public/` to GitHub Pages.

### Q: Why isn't my change showing?
**A**: Common reasons:
1. Hard refresh browser: `Ctrl+Shift+R`
2. Wait 1-2 minutes for build
3. Check GitHub Actions for errors
4. Clear browser cache

See [Troubleshooting](Troubleshooting).

## Development

### Q: I'm a developer. Where do I start?
**A**: See [Development Setup](Development-Setup) for:
- Installation steps
- Running locally
- Development workflow
- Project structure

### Q: How do I run the website locally?
**A**:
```bash
npm install
npm run dev
```

Site runs at `http://localhost:5000`

### Q: Can I add API features?
**A**: Yes! The backend (Express.js) is configured and ready.
- Add routes in `server/routes.ts`
- Use storage for data
- Database ready (Drizzle ORM)

See [Development Setup](Development-Setup).

### Q: What's the tech stack?
**A**:
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Backend**: Express.js
- **Deployment**: GitHub Pages
- **Icons**: Lucide React

## Troubleshooting

### Q: Website is blank/404?
**A**: See [Troubleshooting](Troubleshooting) → Website Issues

### Q: Images not loading?
**A**: See [Troubleshooting](Troubleshooting) → Images Not Loading

### Q: Dev server won't start?
**A**: See [Troubleshooting](Troubleshooting) → Development Issues

### Q: Git conflicts/errors?
**A**: See [Troubleshooting](Troubleshooting) → Git Issues

## Other

### Q: What's the GitHub repo URL?
**A**: `https://github.com/lgciotsimulator/Website`

### Q: Can I fork/clone this?
**A**: Yes! It's yours. Clone with:
```bash
git clone https://github.com/lgciotsimulator/Website.git
```

### Q: Who built this?
**A**: Designed & Developed by [K. Shritej](https://github.com/shritej-koneru)

### Q: Is there documentation?
**A**: **Lots!**
- README.md - Full documentation
- This Wiki - Quick guides
- Code comments - Implementation details
- GitHub Issues - Report bugs

### Q: Can I customize the design?
**A**: Yes! Edit CSS in:
- `client/src/index.css` - Global styles
- Components - Tailwind classes
- `tailwind.config.ts` - Theme colors

### Q: Can I add a database?
**A**: Yes! Already set up:
- Drizzle ORM configured
- PostgreSQL ready
- Add schema in `shared/schema.ts`

### Q: How long to learn this?
**A**: 
- **Non-tech admin**: 30 mins
- **Adding content**: 10 mins per item
- **Development**: Depends on your experience
- **New section**: 1-2 hours

### Q: Need more help?
**A**: Check:
1. [Troubleshooting](Troubleshooting) - Common issues
2. [Admin Guide](Admin-Guide) - Content updates
3. [Development Setup](Development-Setup) - Dev work
4. GitHub Issues tab - Report problems

---

## Quick Links

- **Main Site**: https://lgciotsimulator.github.io/Website
- **Repository**: https://github.com/lgciotsimulator/Website
- **Admin Guide**: [Admin-Guide](Admin-Guide)
- **Troubleshooting**: [Troubleshooting](Troubleshooting)

**Still have questions?** Create an issue on GitHub or contact the team!
