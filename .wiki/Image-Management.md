# Image Management

Complete guide to managing images on the website.

## Image Locations

```
client/public/images/
├── team/              # Team member photos
├── achievements/      # Achievement & event photos
├── testimonials/      # (if added) Testimonial photos
└── partners/         # (if added) Partner logos
```

## Image Specifications

### Team Photos
- **Location**: `client/public/images/team/`
- **Size**: 400x400px (square) or larger
- **Format**: JPEG or PNG
- **File Size**: <500KB
- **Used in**: Team section

### Achievement Photos
- **Location**: `client/public/images/achievements/`
- **Size**: 800x600px or wider
- **Format**: JPEG or PNG
- **File Size**: <1MB
- **Used in**: Achievements section

### Logo/Favicon
- **Location**: `client/public/favicon.png`
- **Size**: 512x512px or larger
- **Format**: PNG, JPEG, or ICO
- **Used in**: Browser tab, navigation, footer

## How to Add Images

### Step 1: Prepare Image
1. Open image editor (Photoshop, GIMP, Canva, etc)
2. **Resize** to recommended size
3. **Optimize** for web:
   - JPEG quality: 80-85%
   - PNG: compress with tool like TinyPNG
4. **Save** with descriptive name:
   - ✅ `john-smith.jpg`
   - ✅ `ieee-event.jpg`
   - ❌ `photo1.jpg`
   - ❌ `image.jpg`

### Step 2: Upload Image
1. Open file explorer/Finder
2. Navigate to correct folder in `client/public/images/`
3. Drag & drop image file

### Step 3: Update JSON
Edit the corresponding JSON file and add image path:

**Example** - Add team member:
```json
{
  "id": "new-member",
  "name": "Full Name",
  "role": "Their Role",
  "image": "/images/team/full-name.jpg"
}
```

**Example** - Add achievement:
```json
{
  "id": "new-achievement",
  "title": "Achievement Name",
  "description": "Description",
  "date": "2026",
  "type": "achievement",
  "image": "/images/achievements/event-name.jpg"
}
```

### Step 4: Push Changes
```bash
git add .
git commit -m "Add: [description] image"
git push origin main
```

## Image Naming Convention

**Use lowercase with hyphens**:
- ✅ `john-smith.jpg`
- ✅ `ieee-cas-event.jpg`
- ✅ `hardware-design-contest.jpg`
- ❌ `JohnSmith.jpg`
- ❌ `John Smith.jpg`
- ❌ `john_smith.jpg`

## Replace Existing Images

1. Keep the **same filename**
2. Upload new image with same name
3. Old image automatically replaced
4. No JSON changes needed

**Example**: Replace Harsha's photo
- Old: `client/public/images/team/Harsha sai.jpeg`
- Upload new photo with same name
- Old one is replaced

## Compress Images

**Online Tools**:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim: https://imageoptim.com

**Before**: 2.5MB  
**After**: 200KB ✅

## Troubleshooting

### Image Not Showing?

❌ Check these:
1. **File exists** in correct folder
2. **Filename matches** JSON exactly (case-sensitive!)
3. **Path correct**: `/images/team/name.jpg`
4. **Hard refresh**: Ctrl+Shift+R
5. **Check console**: F12 → Console → look for 404 errors

❌ **Wrong paths**:
- `images/team/photo.jpg` ← Missing leading /
- `/image/team/photo.jpg` ← Wrong folder
- `/images/Team/photo.jpg` ← Wrong case
- `/images/team/photo.PNG` ← Wrong extension

✅ **Correct**:
- `/images/team/photo.jpg` ✅

### Image Looks Blurry?

- Image resolution too low
- Scaled up in HTML
- Solution: Use larger original image

### File Too Large?

- Use optimization tool
- Reduce dimensions
- Convert to JPEG (smaller than PNG)

## Batch Operations

**Upload multiple images**:
1. Prepare all images (same size, optimized)
2. Upload all to same folder at once
3. Update JSON with all paths
4. Push together

## Image Best Practices

✅ **DO**:
- Use descriptive filenames
- Optimize before upload
- Keep consistent dimensions
- Use same format per section
- Backup originals
- Test on mobile

❌ **DON'T**:
- Use spaces in filenames
- Upload unoptimized files
- Mix formats (JPEG + PNG)
- Use generic names
- Upload oversized images
- Forget to reference in JSON

## Favicon Update

**Update website icon**:
1. Prepare image (512x512px min)
2. Save as `favicon.png` or `favicon.ico`
3. Upload to `client/public/`
4. Replace existing `favicon.png`
5. Hard refresh to see change

## Image Gallery

Full image list:

### Team
- `Harsha sai.jpeg`
- `Hemanth.jpeg`
- `Shalini.jpeg`
- `Shivani.jpeg`
- `Yeshwanth.jpeg`
- `Kanishk.jpeg`

### Achievements
- `IEEE Event.jpeg`
- `Hardware Design Contest.jpeg`
- `Innovators Concleva.jpeg`
- `Concleva hackaton 2025.jpeg`
- `CEO Meeting - Intrino.jpeg`

## Support

See [Troubleshooting](Troubleshooting) for more help!
