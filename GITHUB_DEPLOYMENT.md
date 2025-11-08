# 🚀 GitHub Deployment Guide - Sunset Escape Villa

## ✅ Local Git Repository Created!

Your website is now ready to deploy to GitHub. Follow these steps:

---

## 📋 Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. **Go to GitHub:**
   - Open: https://github.com
   - Log in to your account
   - If you don't have an account, create one (it's FREE!)

2. **Create New Repository:**
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

3. **Repository Settings:**
   ```
   Repository name: sunset-escape-villa
   Description: Professional villa booking website for Sunset Escape Villa
   Visibility: Public (for free GitHub Pages hosting)
   
   ⚠️ DO NOT initialize with README, .gitignore, or license
   (We already have these files!)
   ```

4. **Click "Create repository"**

---

## 📋 Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Open Terminal and run:

```bash
cd "/Users/tharukawanniarachchi/Desktop/sunset escape html"

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/sunset-escape-villa.git

# Push to GitHub
git push -u origin main
```

### Example:
If your GitHub username is "john123":
```bash
git remote add origin https://github.com/john123/sunset-escape-villa.git
git push -u origin main
```

**Enter your GitHub credentials when prompted.**

---

## 📋 Step 3: Enable GitHub Pages (FREE Hosting!)

1. **Go to Repository Settings:**
   - On your GitHub repository page
   - Click **"Settings"** tab

2. **Navigate to Pages:**
   - Scroll down to **"Pages"** in left sidebar
   - Or go to: `https://github.com/YOUR-USERNAME/sunset-escape-villa/settings/pages`

3. **Configure GitHub Pages:**
   ```
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   ```

4. **Click "Save"**

5. **Wait 2-3 minutes** for deployment

6. **Your website will be live at:**
   ```
   https://YOUR-USERNAME.github.io/sunset-escape-villa/
   ```

---

## 🎯 Quick Commands Reference

```bash
# Navigate to project
cd "/Users/tharukawanniarachchi/Desktop/sunset escape html"

# Check Git status
git status

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/sunset-escape-villa.git

# Push to GitHub
git push -u origin main

# Future updates
git add .
git commit -m "Update website"
git push
```

---

## ⚠️ Important: Netlify Forms Configuration

**GitHub Pages vs Netlify:**
- ✅ GitHub Pages: FREE hosting, perfect for static sites
- ⚠️ Contact Form: Won't work on GitHub Pages (needs Netlify)

### Solution: Deploy to BOTH!

**1. GitHub Pages (Website hosting):**
- Follow steps above
- Free hosting at: `your-username.github.io/sunset-escape-villa`

**2. Netlify (Form handling):**
- Go to: https://netlify.com
- Click "Add new site" → "Import from Git"
- Connect your GitHub account
- Select: `sunset-escape-villa` repository
- Deploy settings:
  ```
  Build command: (leave empty)
  Publish directory: (leave empty or /)
  ```
- Click "Deploy site"
- Forms will work automatically on Netlify!

### Result:
- **GitHub Pages**: Main website hosting (free)
- **Netlify**: Form submissions work here (free)
- **Choose one** or use both!

---

## 🔐 GitHub Authentication

### Using Personal Access Token (Recommended):

If GitHub asks for credentials:

1. **Generate Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Classic"
   - Name: `Sunset Escape Deployment`
   - Expiration: 90 days (or longer)
   - Scopes: Select **"repo"** (full control)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Use Token as Password:**
   ```
   Username: your-github-username
   Password: paste-your-token-here
   ```

---

## 📊 What's Been Done

✅ **Local Git initialized**
✅ **All files committed**
✅ **Branch renamed to main**
✅ **Contact info updated** (+94 71 417 5072)
✅ **Location updated** (Homagama)
✅ **Google Maps updated**
✅ **WhatsApp link updated**
✅ **.gitignore created**
✅ **Ready to push to GitHub**

---

## 🎨 Custom Domain (Optional)

After deploying to GitHub Pages:

1. **Buy Domain:**
   - sunsetescape.lk (Rs. 1,500/year)
   - From: LK Domain Registry

2. **Configure DNS:**
   - In domain settings, add:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

3. **Update GitHub Pages:**
   - Settings → Pages → Custom domain
   - Enter: www.sunsetescape.lk
   - Click Save

**Takes 24-48 hours to activate**

---

## 🆘 Troubleshooting

### "Permission denied" error:
```bash
# Check if Git is installed
git --version

# Check remote URL
git remote -v

# If wrong, remove and re-add
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/sunset-escape-villa.git
```

### "Repository not found" error:
- Make sure repository exists on GitHub
- Check spelling of username and repository name
- Verify you're logged into correct GitHub account

### "Failed to push" error:
- Check internet connection
- Verify GitHub credentials
- Try using Personal Access Token instead of password

---

## 📞 Next Steps After Deployment

### Test Your Live Site:

1. **Open live URL:**
   ```
   https://YOUR-USERNAME.github.io/sunset-escape-villa/
   ```

2. **Test everything:**
   - ✅ All sections load
   - ✅ Images appear
   - ✅ Gallery lightbox works
   - ✅ Mobile responsive
   - ✅ Navigation works

3. **Share with customers!** 🎉

### For Working Contact Form:

**Option 1: Deploy to Netlify (Recommended)**
- Forms work automatically
- Free 100 submissions/month
- Follow DEPLOYMENT_GUIDE.md

**Option 2: Use WhatsApp/Email fallback**
- Already configured
- Works without backend
- Opens user's WhatsApp/Email app

---

## 🎉 Success!

Once pushed to GitHub and deployed:

✅ **Live Website:** https://YOUR-USERNAME.github.io/sunset-escape-villa/
✅ **Source Code:** https://github.com/YOUR-USERNAME/sunset-escape-villa
✅ **Free Hosting:** Forever (GitHub Pages)
✅ **Easy Updates:** Just push to GitHub
✅ **Professional URL:** Add custom domain anytime

---

## 📚 Additional Resources

- **GitHub Pages Docs:** https://pages.github.com
- **Git Basics:** https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
- **Netlify Deployment:** See DEPLOYMENT_GUIDE.md
- **Custom Domain Setup:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Ready to deploy!** 🚀

**Run these commands now:**
```bash
cd "/Users/tharukawanniarachchi/Desktop/sunset escape html"
git remote add origin https://github.com/YOUR-USERNAME/sunset-escape-villa.git
git push -u origin main
```

**Then enable GitHub Pages in repository settings!**

---

**Updated:** November 8, 2025
**Status:** ✅ Ready for GitHub Deployment
