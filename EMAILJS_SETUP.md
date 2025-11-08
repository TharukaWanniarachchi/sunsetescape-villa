# 📧 EmailJS Setup Instructions

## Quick Setup (5 Minutes)

### Step 1: Create Account
1. Visit: https://www.emailjs.com/
2. Click "Sign Up" - it's FREE!
3. Verify your email address

### Step 2: Add Email Service
1. Go to Dashboard → **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider:
   - Gmail (easiest)
   - Outlook
   - Yahoo
   - Or custom SMTP

4. For Gmail:
   - Click "Connect Account"
   - Sign in with: **info@sunsetescape.lk**
   - Allow EmailJS access

5. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to Dashboard → **Email Templates**
2. Click **"Create New Template"**
3. Name it: `Sunset Escape Contact Form`

4. **Email Template Content:**
```
To: {{to_email}}
Subject: New Inquiry from {{from_name}}

Hello,

You have received a new inquiry from your Sunset Escape Villa website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     {{from_name}}
Email:    {{from_email}}
Phone:    {{phone}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent via Sunset Escape Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

5. Click **Save**
6. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to Dashboard → **Account** → **General**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like: `AbCd123EfGh456`)

### Step 5: Update Your Website

Open file: `/js/app.js`

**Find Line 151 and replace:**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```
**With:**
```javascript
emailjs.init('AbCd123EfGh456');  // Paste your actual public key
```

**Find Line 187 and replace:**
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```
**With:**
```javascript
emailjs.send('service_abc123', 'template_xyz789', {  // Paste your IDs
```

**Find Line 195 and replace the email:**
```javascript
to_email: 'info@sunsetescape.lk'  // Your email
```

**Find Line 231 and replace WhatsApp number:**
```javascript
const whatsappNumber = '94771234567';  // Your actual number
```
**With:**
```javascript
const whatsappNumber = '94777123456';  // Example
```

### Step 6: Test!
1. Save all files
2. Open your website
3. Fill out the contact form
4. Click "Send Message"
5. Check your email inbox!

---

## Free Plan Limits:
- ✅ 200 emails per month
- ✅ All features included
- ✅ No credit card required

## Upgrade Options (If Needed):
- Personal: $8/month → 2,000 emails
- Professional: $20/month → 10,000 emails

---

## Troubleshooting:

### "EmailJS is not defined"
- Make sure the EmailJS script is loaded in `index.html`
- Check line 10: `<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>`

### "Service not found"
- Double-check your Service ID
- Make sure you copied it correctly from EmailJS dashboard

### "Template not found"
- Double-check your Template ID
- Verify the template is saved in EmailJS

### Emails not arriving
- Check spam folder
- Verify email service is connected properly
- Check EmailJS dashboard for error logs

---

## Alternative: Web3Forms (Even Easier!)

If EmailJS seems complicated, try Web3Forms:

1. Go to: https://web3forms.com/
2. Enter your email: info@sunsetescape.lk
3. Click "Create Access Key"
4. Copy the access key
5. Add this to your form in `index.html`:

```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
    <!-- rest of your form fields -->
</form>
```

**That's it!** Emails will be sent automatically.

---

## Current Fallback:
Until you set up EmailJS, the form will:
1. Ask user to choose WhatsApp or Email
2. Open their preferred app with pre-filled message
3. User clicks send manually

After EmailJS setup:
1. Form sends email automatically
2. User sees success message
3. You receive email instantly
4. Professional and seamless! ✨
