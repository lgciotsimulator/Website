# Content Management

Detailed guide for updating each website section.

## 1️⃣ Site Information

**File**: `client/public/data/site.json`

Controls: Site name, tagline, email, social links, copyright

```json
{
  "name": "LGC",
  "fullName": "Let's Get Connected",
  "tagline": "Connecting People • Integrating Hardware & Software",
  "description": "LGC is a collaborative technology team...",
  "email": "lgc.iotsimulator@gmail.com",
  "socialLinks": {
    "linkedin": "https://linkedin.com/...",
    "instagram": "https://instagram.com/...",
    "whatsapp": "https://whatsapp.com/...",
    "googleForm": "https://forms.gle/..."
  },
  "copyright": "© LGC. All Rights Reserved."
}
```

**Update**: Change any value, keep JSON structure

---

## 2️⃣ Hero Section (Homepage Header)

**File**: `client/public/data/hero.json`

Controls: Main headline, taglines, description, buttons

```json
{
  "headline": "LGC",
  "subheadline": "Let's Get Connected",
  "taglines": ["IoT", "Hardware–Software Integration"],
  "description": "We bring together people...",
  "ctaText": "Explore Our Work",
  "ctaLink": "#projects",
  "secondaryCtaText": "Connect With Us",
  "secondaryCtaLink": "#connect"
}
```

---

## 3️⃣ About Section

**File**: `client/public/data/about.json`

Controls: About title, description, highlights

```json
{
  "title": "About LGC",
  "subtitle": "Who We Are",
  "description": "LGC is a student-driven IoT team...",
  "highlights": [
    {
      "title": "Embedded Hardware",
      "description": "Development of robust systems"
    }
  ],
  "differentiator": {
    "title": "What Makes LGC Different",
    "points": ["Hardware and software designed together", "..."]
  }
}
```

---

## 4️⃣ Expertise Section

**File**: `client/public/data/expertise.json`

Controls: Skills, expertise areas (max 8 shown)

```json
{
  "title": "Core Expertise",
  "subtitle": "What LGC Builds",
  "areas": [
    {
      "id": "iot-architecture",
      "title": "IoT System Architecture",
      "description": "Designing complete IoT ecosystems",
      "icon": "Network"
    }
  ]
}
```

**Icons**: Network, Cpu, Activity, CircuitBoard, Code, Wifi, LayoutDashboard, Zap

---

## 5️⃣ Team Section

**File**: `client/public/data/team.json`

Controls: Team members, roles, photos

```json
{
  "title": "Team LGC",
  "subtitle": "Meet the Team",
  "description": "LGC is powered by a multidisciplinary team",
  "members": [
    {
      "id": "harsha",
      "name": "K. Harsha Sai",
      "role": "Founder & Hardware Developer",
      "image": "/images/team/harsha.jpg"
    }
  ]
}
```

**To add member**:
1. Add photo to `client/public/images/team/`
2. Add object to `members` array with correct image path

---

## 6️⃣ Achievements Section

**File**: `client/public/data/achievements.json`

Controls: Events, achievements, milestones

```json
{
  "title": "Achievements & Events",
  "subtitle": "Our Journey",
  "items": [
    {
      "id": "ieee-event",
      "title": "IEEE CAS Event",
      "description": "Conducted IEEE CAS event",
      "date": "2025",
      "type": "event",
      "image": "/images/achievements/ieee.jpg"
    }
  ]
}
```

**Types**: `achievement`, `event`, `milestone`

---

## 7️⃣ Industry Section

**File**: `client/public/data/industry.json`

Controls: Company partnerships, learnings

```json
{
  "title": "Industry Collaboration",
  "subtitle": "Industry Exposure",
  "companies": [
    {
      "id": "ashok-leyland",
      "name": "Ashok Leyland",
      "description": "Industrial IoT workflows"
    }
  ],
  "learnings": [
    "Industrial IoT workflows",
    "Hardware validation"
  ]
}
```

---

## 8️⃣ Navigation Menu

**File**: `client/public/data/navigation.json`

Controls: Menu items, links

```json
{
  "items": [
    {
      "id": "home",
      "label": "Home",
      "href": "#home"
    },
    {
      "id": "about",
      "label": "About",
      "href": "#about"
    }
  ]
}
```

**Add new menu item**:
- Add object with unique `id`, display `label`, section `href`

---

## 📋 JSON Rules

✅ **DO**:
- Use double quotes: `"name": "value"`
- Separate items with commas
- Keep structure consistent

❌ **DON'T**:
- Use single quotes: `'name': 'value'`
- Forget commas between items
- Delete required fields

**Check JSON**: https://jsonlint.com/

---

## 🔄 Workflow

1. Edit JSON file
2. Validate JSON syntax
3. Commit: `git add . && git commit -m "Update: description"`
4. Push: `git push origin main`
5. Wait 1-2 minutes for automatic deployment
6. Check website for changes

Done! ✅
