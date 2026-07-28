# CrackerShop Backend Configuration & Security Guide

## Overview
This document provides comprehensive information about your CrackerShop project's environment setup, git configuration, and the three critical .env files.

---

## 📁 Three .env Files in Backend Directory

### File Comparison

| Aspect | `.env` | `.env.example` | `.env.production` |
|--------|--------|----------------|-------------------|
| **Purpose** | Local development | Team template | Production server |
| **Contains Secrets** | ✅ YES | ❌ NO | ✅ YES |
| **Git Ignored** | ✅ YES | ❌ NO | ✅ YES |
| **Who Sees It** | Only you | All team members | Production admin only |
| **When Created** | Copy from example | Already in repo | Manually for production |
| **Update Frequency** | When you change local config | Every time vars change | Only for production deploy |

---

## 📋 .env File Details

### `.env` - Local Development Environment
**Location:** `backend/.env`  
**Git Status:** Ignored (not committed)  
**Usage:** Used when running locally with `npm start`

```dotenv
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb://localhost:27017/crackershop
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=replace_with_a_strong_random_secret
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8081,http://192.168.1.37:8081
LOG_LEVEL=debug
```

**Key Points:**
- ✅ Safe to modify - changes won't affect git history
- ✅ Contains your actual local secrets
- ✅ Can have different values than production
- ❌ Never commit this file

---

### `.env.example` - Safe Template
**Location:** `backend/.env.example`  
**Git Status:** Committed (in repository)  
**Usage:** Reference for what variables are needed

```dotenv
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/CrackerShop
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=replace_with_a_strong_random_secret
LOG_LEVEL=debug
```

**Key Points:**
- ✅ Safe to commit - no real secrets
- ✅ Shows all required variables
- ✅ Team members use this as template
- ✅ Must be kept up-to-date
- ❌ Don't use directly - copy to .env first

---

### `.env.production` - Production Environment
**Location:** `backend/.env.production`  
**Git Status:** Ignored (not committed)  
**Usage:** Used on production server with NODE_ENV=production

```dotenv
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb://production-db-url:27017/crackershop
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=replace_with_a_strong_random_secret
ALLOWED_ORIGINS=https://yourdomain.com
LOG_LEVEL=info
ENABLE_CLUSTERING=true
WORKER_THREADS=auto
```

**Key Points:**
- ✅ Production-specific values
- ✅ More strict rate limiting
- ✅ Enhanced security settings
- ❌ Never commit this file
- ❌ Never share with team via chat
- ⚠️ Handle with care - production data

---

## 🔐 Security Guidelines

### DO ✅
```
- Keep .env and .env.production in .gitignore
- Use different secrets for dev vs production
- Store secrets in .env.example without real values
- Rotate JWT_SECRET regularly
- Use strong passwords for MONGO_URI
- Limit ALLOWED_ORIGINS to actual domains
- Review .env changes before committing
- Store production secrets in secure vault
```

### DON'T ❌
```
- Never commit .env to repository
- Never share production .env via email/chat
- Never use same secrets for dev and prod
- Never hardcode credentials in code
- Never leave sensitive data in logs
- Never push secrets to GitHub
- Never commit plaintext passwords
- Never use generic passwords like "password123"
```

---

## 🛡️ Git Configuration

### What's Ignored (Protected Files)

Your `.gitignore` protects:
```
# Secrets & sensitive data
.env                    # ← Local development secrets
.env.local
.env.production         # ← Production secrets
.env.*.local

# Node & dependencies
node_modules/
package-lock.json (sometimes - check your .gitignore)
npm-debug.log*

# Logs & temporary files
logs/
*.log
.tmp/
temp/

# Build outputs
build/
dist/
.next/

# IDE & OS files
.vscode/
.idea/
.DS_Store
Thumbs.db

# Cache files
.cache/
coverage/
```

### What's Committed (Safe to Share)
```
✅ .env.example - Safe template with placeholder values
✅ package.json - Dependency list
✅ package-lock.json - Dependency lock (if not ignored)
✅ .gitignore - Protection rules themselves
✅ *.md files - Documentation
✅ Source code - Your actual code files
✅ config/ - Configuration files without secrets
```

---

## 🚀 Setup Instructions

### For New Team Member
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/CrackerShop.git
cd CrackerShop/backend

# 2. Copy the example file
cp .env.example .env

# 3. Ask project lead for actual secrets
# (Never share via message - use secure channel)

# 4. Edit .env with correct values
nano .env

# 5. Install dependencies
npm install

# 6. Run the server
npm start
```

### For Production Deployment
```bash
# 1. SSH into production server
ssh user@production-server

# 2. Clone the repository
git clone https://github.com/yourusername/CrackerShop.git
cd CrackerShop/backend

# 3. Create production .env
cp .env.example .env.production

# 4. Add production secrets (from secure vault)
nano .env.production

# 5. Install dependencies
npm install

# 6. Start the server
npm start
```

---

## 📝 Adding New Environment Variables

When you add a new feature requiring configuration:

### Step 1: Update `.env.example`
```dotenv
# In backend/.env.example
NEW_API_KEY=placeholder_key_here
NEW_API_SECRET=placeholder_secret_here
```

### Step 2: Update Local `.env`
```dotenv
# In backend/.env
NEW_API_KEY=your_actual_local_key
NEW_API_SECRET=your_actual_local_secret
```

### Step 3: Update Production `.env.production`
```dotenv
# In backend/.env.production
NEW_API_KEY=actual_production_key
NEW_API_SECRET=actual_production_secret
```

### Step 4: Use in Code
```javascript
// In backend/server.js or config files
const newApiKey = process.env.NEW_API_KEY;
const newApiSecret = process.env.NEW_API_SECRET;

if (!newApiKey || !newApiSecret) {
    throw new Error('NEW_API_KEY and NEW_API_SECRET are required');
}
```

### Step 5: Communicate to Team
- Update .env.example in repository
- Tell team members to copy new vars to their .env
- Provide instructions for getting actual values

---

## 🔧 Troubleshooting

### Environment variables not loading
```
❌ Problem: Variables are undefined in code
✅ Solution: 
   1. Make sure .env file exists in backend/
   2. Restart the server after creating .env
   3. Check variable name matches exactly
   4. Use console.log(process.env.VAR_NAME) to debug
```

### Different behavior in production vs local
```
❌ Problem: Works locally but fails in production
✅ Solution:
   1. Compare .env vs .env.production
   2. Check MONGO_URI points to correct database
   3. Verify ALLOWED_ORIGINS includes production domain
   4. Check LOG_LEVEL (production may hide debug info)
```

### Accidentally committed .env
```
❌ Problem: Secrets are now in git history
✅ Solution:
   1. git rm --cached .env
   2. Update .gitignore to include .env
   3. Commit the removal
   4. REGENERATE all secrets (they're compromised)
   5. Force push to remove from history
   6. Create new tokens/API keys everywhere
```

---

## 📊 Current Project Structure

```
CrackerShop/
├── backend/
│   ├── .env                    ← YOUR LOCAL SECRETS (ignored)
│   ├── .env.example            ← SAFE TEMPLATE (committed)
│   ├── .env.production         ← PROD SECRETS (ignored)
│   ├── .gitignore              ← Defines what to ignore
│   ├── package.json
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── frontend/
│   ├── .gitignore
│   ├── package.json
│   └── ...
├── .gitignore                  ← ROOT .gitignore
├── ENV_CONFIGURATION.md        ← This file's detailed companion
└── README.md
```

---

## ✅ Verification Checklist

Before you start development:
- [ ] `.env` file exists in backend/
- [ ] `.env` file is NOT tracked by git (`git status` shows it ignored)
- [ ] All variables from `.env.example` are in your `.env`
- [ ] MongoDB is running locally
- [ ] All secrets have actual values (not placeholders)
- [ ] `.env.example` has only placeholder values
- [ ] Production `.env.production` is NOT in version control

---

## 🎯 Quick Reference

### To Setup Locally
```bash
cp backend/.env.example backend/.env
# Edit .env with your local values
npm install
npm start
```

### To Deploy to Production
```bash
# Prepare .env.production on production server
# with actual production secrets
NODE_ENV=production npm start
```

### To Add New Variable
1. Add to `.env.example` (with placeholder)
2. Add to `.env` (with actual value)
3. Add to `.env.production` (with production value)
4. Update code to use `process.env.VARIABLE_NAME`

---

## 📞 Questions?

Refer to:
- `ENV_CONFIGURATION.md` - Detailed environment setup
- `TROUBLESHOOTING_MANAGEBOUTUS_ERROR.md` - Component error fixing
- `backend/server.js` - How environment variables are loaded
- `backend/config/db.js` - Database configuration

Last Updated: January 23, 2026  
Project: CrackerShop E-Commerce Platform
