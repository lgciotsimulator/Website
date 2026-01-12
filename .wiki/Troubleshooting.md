# Troubleshooting

Solutions for common issues.

## 🌐 Website Issues

### Page Shows Blank/404

**Problem**: Website shows nothing or 404 error after deployment

**Solutions**:
1. **Hard refresh browser**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear cache**: F12 → Application → Clear site data
3. **Check GitHub Actions**: Go to repository > Actions tab
   - Look for red X (failed build)
   - Click workflow to see error details
4. **Verify GitHub Pages settings**:
   - Settings > Pages
   - Source should be "GitHub Actions"

### Images Not Loading

**Problem**: Website displays but images are missing

**Solutions**:
1. **Check file paths**:
   - Right path: `/images/team/photo.jpg` ✅
   - Wrong: `images/team/photo.jpg` (missing /)

2. **Check filename case**:
   - JSON has: `/images/team/Harsha sai.jpeg`
   - File must be: `Harsha sai.jpeg` (exact case)

3. **Hard refresh**: `Ctrl+Shift+R`

4. **Open DevTools**:
   - Press F12
   - Console tab
   - Look for 404 errors
   - Check exact URL it's trying to load

5. **Verify upload**:
   - Check folder `client/public/images/`
   - File should be there
   - File size > 0 bytes

### JSON Data Not Showing

**Problem**: Section title/text doesn't appear

**Solutions**:
1. **Validate JSON**:
   - Open JSON file
   - Check syntax at https://jsonlint.com
   - Fix any errors
   - Save file

2. **Check for typos**:
   - Field name wrong (case-sensitive)
   - Missing quotes
   - Missing commas

3. **Check component imports**:
   - Component must be imported in `Home.tsx`
   - Fetch function must reference correct file name

### Styling Looks Broken

**Problem**: Colors wrong, layout broken, missing styles

**Solutions**:
1. **Clear CSS cache**: `Ctrl+Shift+R`
2. **Check Tailwind classes**: Ensure correct class names
3. **Verify CSS file**: Should be in `index.css`
4. **Rebuild**: `npm run build`

---

## 💻 Development Issues

### Dev Server Won't Start

**Problem**: `npm run dev` fails with error

**Solutions**:
```bash
# Clear cache
rm -rf node_modules
npm install

# Try again
npm run dev
```

**If port is in use**:
```bash
# Find what's using port 5000
lsof -ti:5000

# Kill process
lsof -ti:5000 | xargs kill -9

# Try different port
PORT=3000 npm run dev
```

### Module Not Found Error

**Problem**: `Cannot find module '@/...'`

**Solutions**:
1. Check import path is correct
2. File exists at that location
3. Restart dev server
4. Clear node_modules: `rm -rf node_modules && npm install`

### TypeScript Errors

**Problem**: Type errors in console

**Solutions**:
1. **Check types**:
```bash
npm run check
```

2. **Add types to function**:
```typescript
function getData(param: string): Promise<Data> {
  // ...
}
```

3. **Use correct types**:
   - Objects: `const obj: ObjType = {}`
   - Arrays: `const arr: string[] = []`
   - Optional: `prop?: value`

### Styling Not Updating

**Problem**: CSS changes don't show

**Solutions**:
1. Hard refresh: `Ctrl+Shift+R`
2. Restart dev server: `npm run dev`
3. Check class spelling exactly
4. Ensure Tailwind config is correct

---

## 📝 Git Issues

### Merge Conflicts

**Problem**: `git push` fails with conflict

**Solution**:
```bash
# Pull changes
git pull origin main

# See conflicts
git status

# Edit files manually to fix conflicts

# Mark as resolved
git add .

# Commit
git commit -m "Resolve merge conflict"

# Push
git push origin main
```

### Wrong Branch

**Problem**: Made changes on wrong branch

**Solution**:
```bash
# Check current branch
git branch

# Switch to correct branch
git checkout main

# Pull latest
git pull origin main

# Create new branch
git checkout -b feature/name
```

### Commit Mistakes

**Problem**: Committed something wrong

**Solution**:
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Amend last commit
git commit --amend -m "New message"
```

---

## 🔧 Deployment Issues

### GitHub Actions Fails

**Problem**: Workflow shows red X in Actions tab

**Solutions**:
1. Click workflow to see error
2. Check Node version compatibility
3. Verify all files are committed
4. Check for large files (>100MB)

Common errors:
- `npm install` failed → Check package.json syntax
- Build failed → Check TypeScript errors with `npm run check`
- Deploy failed → Check GitHub Pages settings

### Wrong Base URL

**Problem**: Site at `lgciotsimulator.github.io/Website` but assets wrong path

**Solution**:
- Check `vite.config.ts`:
```typescript
base: process.env.VITE_BASE_URL || "/",
```

- GitHub Actions should set: `VITE_BASE_URL=/Website/`

### Deploy Never Starts

**Problem**: GitHub Actions workflow doesn't run

**Solutions**:
1. Go to Settings > Pages
2. Source: Must be "GitHub Actions"
3. Check `.github/workflows/deploy.yml` exists
4. Push to main branch (not other branches)
5. Wait 30 seconds for workflow to appear

---

## 🆘 Advanced Debugging

### Check Browser Console

Press F12, go to Console tab, look for:
- Red errors (problems)
- Yellow warnings (minor issues)

**Image 404**:
```
GET /images/team/photo.jpg 404
```
→ Check filename and path

**Script Error**:
```
Uncaught TypeError: Cannot read property 'x' of undefined
```
→ Check data structure, add type checking

### Check Network Tab

F12 → Network tab:
- **Red items** = Failed requests
- **4xx errors** = Not found
- **5xx errors** = Server error

Click item to see details:
- URL being loaded
- Response code
- Response body

### Check GitHub Actions Logs

1. Go to Actions tab
2. Click failed workflow
3. Click job name
4. Expand each step to see output
5. Look for error messages

---

## 📞 Still Need Help?

**Check these pages**:
- [FAQ](FAQ) - Common questions
- [Admin Guide](Admin-Guide) - Content updates
- [Content Management](Content-Management) - Detailed guides
- [Development Setup](Development-Setup) - Dev environment

**Or ask in repository Issues tab!**
