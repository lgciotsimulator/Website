# Adding New Sections

Guide to create custom sections that match the site style.

## Overview

Adding a new section requires:
1. **JSON file** - Content data
2. **React component** - Display logic
3. **Images** (optional) - Supporting graphics
4. **Add to App** - Include in page

## Step 1: Create JSON File

Create `client/public/data/[section-name].json`

**Example**: `client/public/data/testimonials.json`

```json
{
  "title": "What People Say",
  "subtitle": "Testimonials",
  "description": "Feedback from partners",
  "items": [
    {
      "id": "testimonial-1",
      "name": "Person Name",
      "company": "Company",
      "testimonial": "What they said...",
      "image": "/images/testimonials/person.jpg"
    }
  ]
}
```

## Step 2: Create React Component

Create `client/src/components/[SectionName].tsx`

**Example**: `client/src/components/Testimonials.tsx`

```tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchData } from '@/lib/data';

interface Item {
  id: string;
  name: string;
  company: string;
  testimonial: string;
  image?: string;
}

interface SectionData {
  title: string;
  subtitle: string;
  description: string;
  items: Item[];
}

export function Testimonials() {
  const [data, setData] = useState<SectionData | null>(null);

  useEffect(() => {
    fetchData<SectionData>('testimonials.json').then(setData);
  }, []);

  if (!data) return null;

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
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
              {item.image && (
                <img src={item.image} alt={item.name} 
                  className="w-full h-40 object-cover rounded mb-4" />
              )}
              <h3 className="font-display font-semibold text-lg mb-1">
                {item.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-2">
                {item.company}
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

## Step 3: Add Images (Optional)

1. Create folder: `client/public/images/testimonials/`
2. Add images: `person1.jpg`, `person2.jpg`, etc
3. Reference in JSON: `/images/testimonials/person1.jpg`

## Step 4: Import in App

Edit `client/src/pages/Home.tsx` or `client/src/App.tsx`:

```tsx
import { Testimonials } from "@/components/Testimonials";

// Add to your JSX:
<Testimonials />
```

## Step 5: Add to Navigation (Optional)

Edit `client/public/data/navigation.json`:

```json
{
  "id": "testimonials",
  "label": "Testimonials",
  "href": "#testimonials"
}
```

## ✅ Design Consistency

Follow these patterns:

**Container**: `py-32 relative`  
**Typography**: `font-display text-4xl md:text-5xl`  
**Cards**: `p-6 rounded-2xl glass hover:border-primary/30`  
**Animation**:
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
```

**Colors**:
- Title: `text-foreground`
- Subtitle: `text-primary`
- Description: `text-muted-foreground`

## 🎯 Common Section Types

| Type | Grid | Image Size | Key Fields |
|------|------|-----------|-----------|
| Testimonials | 3 cols | Square | name, company, message |
| Case Studies | 2 cols | Wide | title, description, link |
| Clients | 3 cols | Logo | name, logo, description |
| Awards | 3 cols | Square | title, date, category |
| Blog Posts | 3 cols | Wide | title, excerpt, date |

## 🔄 Workflow

1. Create JSON file
2. Create React component
3. Add images to folder
4. Import in App
5. Add to navigation
6. Push to GitHub
7. Site deploys automatically

## 📚 See Also

- [Image Management](Image-Management)
- [Content Management](Content-Management)
- [Troubleshooting](Troubleshooting)
