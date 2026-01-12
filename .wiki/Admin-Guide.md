# Admin Guide

This guide is for non-technical admins who want to update website content.

## 🎯 What You Can Change

All content is in **JSON files** - no coding needed!

### Content Files Location
```
client/public/data/
├── site.json              # Site name, emails, social links
├── hero.json              # Homepage header
├── about.json             # About section
├── team.json              # Team members
├── achievements.json      # Achievements & events
├── expertise.json         # Skills/expertise areas
├── industry.json          # Industry partnerships
└── navigation.json        # Menu items
```

### Image Files Location
```
client/public/images/
├── team/                  # Team member photos
└── achievements/          # Achievement event photos
```

## 📝 How to Update Content

### Step 1: Open JSON File
1. Open any file from `client/public/data/` in a text editor
2. You'll see structured data like:
```json
{
  "title": "Team LGC",
  "subtitle": "Meet the Team",
  "members": [...]
}
```

### Step 2: Edit Content
- Change text values
- Update links
- Add/remove items

### Step 3: Upload Images (if needed)
- Add photos to `client/public/images/[section]/`
- Reference in JSON: `"image": "/images/team/photo.jpg"`

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Update: Changed [what you changed]"
git push origin main
```

Site automatically deploys! ✅

## 🔄 Content Update Examples

### Change Team Member
**File**: `client/public/data/team.json`
```json
{
  "id": "member-id",
  "name": "Full Name",        ← Change this
  "role": "Their Position",   ← Change this
  "image": "/images/team/photo.jpg"
}
```

### Update Hero Section
**File**: `client/public/data/hero.json`
```json
{
  "headline": "Main Title",       ← Change this
  "subheadline": "Subtitle",      ← Change this
  "description": "Description"    ← Change this
}
```

### Add Achievement
**File**: `client/public/data/achievements.json`
```json
{
  "id": "new-achievement",
  "title": "Achievement Name",
  "description": "What happened",
  "date": "2026",
  "type": "achievement",
  "image": "/images/achievements/photo.jpg"
}
```

### Update Social Links
**File**: `client/public/data/site.json`
```json
{
  "socialLinks": {
    "linkedin": "your-linkedin-url",
    "instagram": "your-instagram-url",
    "whatsapp": "your-whatsapp-url"
  }
}
```

## 📸 Adding Images

1. **Prepare image**:
   - Save as `.jpg` or `.png`
   - Optimize size (compress if large)

2. **Upload to correct folder**:
   - Team photos → `client/public/images/team/`
   - Achievement photos → `client/public/images/achievements/`

3. **Reference in JSON**:
   - Use exact filename: `/images/team/john-doe.jpg`

4. **Push changes**

Site will show images automatically!

## ✅ Checklist Before Pushing

- [ ] JSON syntax is correct (valid JSON)
- [ ] Image paths are correct
- [ ] All required fields are filled
- [ ] No typos in important text
- [ ] File saved

## ❌ Common Mistakes

❌ Forgetting commas in JSON  
❌ Mismatched quotes  
❌ Wrong image paths  
❌ Missing required fields  

✅ Use a JSON validator to check: https://jsonlint.com/

## 🆘 Need Help?

See [Troubleshooting](Troubleshooting) page!
