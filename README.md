# LGC - Let's Get Connected

Official website for **LGC (Let's Get Connected)** - a student-driven IoT and embedded systems team focused on designing and developing complete IoT-based solutions by integrating hardware, software, and cloud technologies.

## 🌐 About LGC

LGC is a collaborative technology team built on innovation and practical execution. We specialize in projects that require tight integration of hardware and software, ensuring every system we build is functional, scalable, and industry-relevant.

### Core Focus Areas
- **IoT System Architecture** - Complete ecosystems from sensors to cloud
- **Embedded Systems** - ESP32, Arduino, and custom microcontroller solutions
- **Circuit & PCB Design** - Professional-grade hardware design
- **Firmware Development** - Custom device control and communication
- **Web Dashboards** - Real-time monitoring and data visualization
- **Industry Collaboration** - Partnerships with Ashok Leyland, Intrino, Kiwistron

## 🚀 About This Website

This is LGC's official portfolio and information website, built with modern web technologies to showcase our work, team, achievements, and expertise.

### Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion (animations)
- **UI Components**: Radix UI + shadcn/ui
- **Backend**: Express.js (for development server)
- **Deployment**: GitHub Pages compatible

### Features
- ✨ Modern, responsive design
- 🎨 Smooth animations and transitions
- 📱 Mobile-first approach
- 🚀 Fast loading with optimized assets
- 📊 Dynamic content from JSON files
- 🎯 SEO optimized

---

## 📋 Content Management Guide

This section explains how to update different sections of the website by editing JSON files.

### General Structure

All content is stored in JSON files located at:
```
client/public/data/
```

Images are stored in:
```
client/public/images/
├── team/           # Team member photos
└── achievements/   # Achievement/event photos
```

---

## 🔧 Updating Website Sections

### 1. **Site Information** (Header, Footer, Meta)

**File**: `client/public/data/site.json`

**What you can change**:
- Site name and tagline
- Social media links (LinkedIn, Instagram, WhatsApp)
- Google Form link for inquiries
- Email address
- Copyright text

**Example**:
```json
{
  "name": "LGC",
  "socialLinks": {
    "linkedin": "your-linkedin-url",
    "googleForm": "your-google-form-url"
  },
  "email": "your-email@example.com"
}
```

---

### 2. **Hero Section** (Top of homepage)

**File**: `client/public/data/hero.json`

**What you can change**:
- Main headline and subheadline
- Rotating taglines
- Description text
- Call-to-action button text and links

**Component**: `client/src/components/Hero.tsx`

---

### 3. **About Section**

**File**: `client/public/data/about.json`

**What you can change**:
- Title and subtitle
- Description paragraph
- Highlight cards (4 items)
- Differentiator points

**Component**: `client/src/components/About.tsx`

---

### 4. **Expertise Section**

**File**: `client/public/data/expertise.json`

**What you can change**:
- Section title and subtitle
- Expertise areas (8 items)
- Each area has: id, title, description, icon name

**Component**: `client/src/components/Expertise.tsx`

**Adding a new expertise area**:
```json
{
  "id": "new-skill",
  "title": "New Skill Name",
  "description": "Description of the skill",
  "icon": "IconName"
}
```

---

### 5. **Team Section**

**File**: `client/public/data/team.json`

**What you can change**:
- Section title and subtitle
- Team members (add/remove/edit)
- Each member has: id, name, role, image

**Component**: `client/src/components/Team.tsx`

**Adding a new team member**:
1. Add member photo to `client/public/images/team/`
2. Add entry to `team.json`:
```json
{
  "id": "member-id",
  "name": "Full Name",
  "role": "Their Role",
  "image": "/images/team/photo.jpg"
}
```

---

### 6. **Achievements Section**

**File**: `client/public/data/achievements.json`

**What you can change**:
- Section title and subtitle
- Achievement items (events, achievements, milestones)
- Each item has: id, title, description, date, type, image

**Component**: `client/src/components/Achievements.tsx`

**Adding a new achievement**:
1. Add achievement photo to `client/public/images/achievements/`
2. Add entry to `achievements.json`:
```json
{
  "id": "achievement-id",
  "title": "Achievement Title",
  "description": "Description of the achievement",
  "date": "2026",
  "type": "achievement",
  "image": "/images/achievements/photo.jpg"
}
```

**Types**: `achievement`, `event`, `milestone`

---

### 7. **Industry Collaboration Section**

**File**: `client/public/data/industry.json`

**What you can change**:
- Section title and subtitle
- Company partnerships
- Key learnings list

**Component**: `client/src/components/Industry.tsx`

---

### 8. **Navigation Menu**

**File**: `client/public/data/navigation.json`

**What you can change**:
- Menu items
- Links (internal anchors)

**Component**: `client/src/components/Navigation.tsx`

---

### 9. **Projects Section**

**Component**: `client/src/components/Projects.tsx`

**Note**: This section fetches GitHub repositories automatically. To change which repos are shown, update the `GITHUB_USERNAME` constant in the component.

---

## ➕ Adding New Sections

To add a new section that follows the same theme and style, follow these steps:

### Step 1: Create the JSON Data File

Create a new file in `client/public/data/` with your section data.

**Example**: `client/public/data/testimonials.json`

```json
{
  "title": "What People Say",
  "subtitle": "Testimonials",
  "description": "Feedback from our partners and collaborators",
  "items": [
    {
      "id": "testimonial-1",
      "name": "Person Name",
      "role": "Their Position",
      "company": "Company Name",
      "testimonial": "What they said about us...",
      "image": "/images/testimonials/person.jpg"
    }
  ]
}
```

### Step 2: Create the React Component

Create a new component in `client/src/components/` that follows the existing pattern.

**Example**: `client/src/components/Testimonials.tsx`

```tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchData } from '@/lib/data';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image?: string;
}

interface TestimonialsData {
  title: string;
  subtitle: string;
  description: string;
  items: TestimonialItem[];
}

export function Testimonials() {
  const [data, setData] = useState<TestimonialsData | null>(null);

  useEffect(() => {
    fetchData<TestimonialsData>('testimonials.json').then(setData);
  }, []);

  if (!data) return null;

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {data.subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            {data.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass hover:border-primary/30 transition-all"
            >
              {/* Image */}
              {item.image && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <h3 className="font-display font-semibold text-lg mb-1">
                {item.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {item.role} at {item.company}
              </p>
              <p className="text-muted-foreground text-sm">
                {item.testimonial}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 3: Import and Add to Main App

Edit `client/src/App.tsx` and add your component:

```tsx
import { Testimonials } from "@/components/Testimonials";

// Add to the Router/Home component:
<Testimonials />
```

Or add it to `client/src/pages/Home.tsx` if sections are defined there.

### Step 4: Add to Navigation (Optional)

If you want the section in the navigation menu, update `client/public/data/navigation.json`:

```json
{
  "id": "testimonials",
  "label": "Testimonials",
  "href": "#testimonials"
}
```

### Step 5: Add Images

Create a folder in `client/public/images/` for your section's images:

```
client/public/images/testimonials/
├── person1.jpg
├── person2.jpg
└── ...
```

---

## 🖼️ Managing Images

### Team Photos
- **Location**: `client/public/images/team/`
- **Format**: JPEG, PNG
- **Recommended size**: 400x400px or larger (square)
- **Reference in**: `client/public/data/team.json`

### Achievement Photos
- **Location**: `client/public/images/achievements/`
- **Format**: JPEG, PNG
- **Recommended size**: 800x600px or landscape
- **Reference in**: `client/public/data/achievements.json`

### Logo/Favicon
- **Location**: `client/public/favicon.png`
- **Format**: PNG, ICO, or JPEG
- **Recommended size**: 512x512px
- **Used in**: Browser tab icon, navigation, footer

### Adding New Images - Step by Step

1. **Prepare your image**:
   - Optimize for web (compress if possible)
   - Use descriptive filenames (e.g., `john-smith.jpg`, not `photo1.jpg`)
   - Recommended formats: JPEG for photos, PNG for graphics with transparency

2. **Upload to the correct folder**:
   - Team images → `client/public/images/team/`
   - Achievement images → `client/public/images/achievements/`
   - Other → `client/public/images/[section-name]/`

3. **Reference in JSON**:
   - Update the corresponding JSON file in `client/public/data/`
   - Use the exact filename path: `/images/team/john-smith.jpg`

4. **Rebuild and test**:
   - Run `npm run dev` to test locally
   - Hard refresh (Ctrl+Shift+R) to see the new images

---

## 🎨 Styling Guidelines for New Sections

All sections follow these design patterns:

### Section Structure
```
1. Section Header
   - Subtitle (uppercase, mono font, primary color)
   - Title (large, bold, display font)
   - Description (muted foreground color)

2. Content Area
   - Grid layout (responsive: 1 col mobile, 2 col tablet, 3+ cols desktop)
   - Glass-morphism cards with hover effects
   - Smooth framer-motion animations
   - 0.1s stagger delay between items
```

### CSS Classes to Use

**Container & Spacing**:
- `py-32` - Vertical padding (section height)
- `container mx-auto px-6` - Responsive container with gutters
- `gap-8` - Space between grid items

**Typography**:
- `font-display` - For headings (Space Grotesk)
- `text-4xl md:text-5xl` - Large headings
- `text-primary` - Accent/highlight color
- `text-muted-foreground` - Secondary text

**Cards/Components**:
- `p-6 rounded-2xl glass` - Card styling with glass effect
- `hover:border-primary/30 transition-all` - Hover state
- `w-full h-full object-cover` - Image sizing

**Animations** (Framer Motion):
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
```

### Color Palette

- **Primary**: `text-primary` (accent color - teal/cyan)
- **Background**: `bg-background` (dark)
- **Borders**: `border-border/50` (subtle)
- **Text**: `text-foreground` (main), `text-muted-foreground` (secondary)
- **Hover States**: `hover:border-primary/30`, `hover:opacity-90`

### Icons (Lucide React)

Import and use icons from lucide-react:

```tsx
import { Trophy, Star, Award } from 'lucide-react';

<Trophy className="w-6 h-6 text-primary" />
```

### Common Lucide Icons
- `Trophy` - Achievements
- `Star` - Ratings
- `Award` - Awards
- `Users` - Team/People
- `Briefcase` - Experience
- `Zap` - Skills/Features
- `Calendar` - Dates/Events
- `MapPin` - Location

---

## 📝 Complete New Section Example

Here's a complete example for adding a "Partners" section:

**1. Create `client/public/data/partners.json`:**
```json
{
  "title": "Our Partners",
  "subtitle": "Strategic Partnerships",
  "description": "Organizations we collaborate with and learn from",
  "partners": [
    {
      "id": "partner-1",
      "name": "Partner Company",
      "description": "What we work on together",
      "logo": "/images/partners/logo.png",
      "link": "https://example.com"
    }
  ]
}
```

**2. Create `client/src/components/Partners.tsx`:**
```tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fetchData } from '@/lib/data';

interface Partner {
  id: string;
  name: string;
  description: string;
  logo?: string;
  link?: string;
}

interface PartnersData {
  title: string;
  subtitle: string;
  description: string;
  partners: Partner[];
}

export function Partners() {
  const [data, setData] = useState<PartnersData | null>(null);

  useEffect(() => {
    fetchData<PartnersData>('partners.json').then(setData);
  }, []);

  if (!data) return null;

  return (
    <section id="partners" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {data.subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            {data.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass hover:border-primary/30 transition-all block h-full"
              >
                {partner.logo && (
                  <div className="mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 object-contain"
                    />
                  </div>
                )}
                <h3 className="font-display font-semibold text-lg mb-2">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {partner.description}
                </p>
                {partner.link && (
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**3. Add images to `client/public/images/partners/`**

**4. Import in your main component and render it**

---

## 📂 File Summary for Common Section Types

| Section Type | JSON File | Component File | Image Folder | Key Fields |
|---|---|---|---|---|
| Team | `team.json` | `Team.tsx` | `images/team/` | id, name, role, image |
| Achievements | `achievements.json` | `Achievements.tsx` | `images/achievements/` | id, title, description, date, type, image |
| Expertise | `expertise.json` | `Expertise.tsx` | — | id, title, description, icon |
| Projects | — | `Projects.tsx` | — | Fetches from GitHub |
| Testimonials | `testimonials.json` | `Testimonials.tsx` | `images/testimonials/` | id, name, role, company, testimonial, image |
| Partners | `partners.json` | `Partners.tsx` | `images/partners/` | id, name, description, logo, link |
| Industry | `industry.json` | `Industry.tsx` | — | companies, learnings |

---

## 🚀 Deployment

### For GitHub Pages

1. **Build the site**:
   ```bash
   npm run build:gh-pages
   ```

2. **Deploy options**:
   - Use GitHub Actions (automatic) - see `.github/workflows/deploy.yml`
   - Or manually deploy `dist/public/` folder

See [README-GITHUB-PAGES.md](README-GITHUB-PAGES.md) for detailed deployment instructions.

---

## 💻 Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### Build for production
```bash
npm run build
```

---

## 📞 Contact

- **Email**: lgc.iotsimulator@gmail.com
- **LinkedIn**: [LGC Profile](https://www.linkedin.com/in/lgc-let-s-get-connected-4252243a5/)
- **Instagram**: [@lgc_official2025](https://www.instagram.com/lgc_official2025)
- **WhatsApp**: [Join Channel](https://whatsapp.com/channel/0029Vb7A7fyFsn0jkSEjbv0K)

---

## 👨‍💻 Website Credits

**Designed & Developed by**: [K. Shritej](https://github.com/shritej-koneru)

---

## 📄 License

© LGC. All Rights Reserved.
