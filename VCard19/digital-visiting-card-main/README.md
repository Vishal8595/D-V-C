# Digital Visiting Card

A sleek, responsive digital visiting card you can fully customize and deploy for yourself. This project is ideal for showcasing your basic contact info and links in a clean one-page format.

## Features

- Mobile-first, fully responsive layout
- Theme toggle (Light/Dark mode)
- Profile photo + cover banner
- Call & Email button
- Download contact info
- Share button
- About section
- Footer
- Hosted-friendly (Netlify)
- Easy to customize

---

## Demo

**Live Preview:** [https://your-username.netlify.app](https://profile-bio.netlify.app/)

---

## How to Use This Repository

### 1. Clone this repo

You can either:

- Download as ZIP and extract  
- Or use Git:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Customize Info

Open the following file:

```
index.html
```

Edit the following sections:

| Section | What to Change | Example |
|--------|----------------|---------|
| `<h2>John Doe</h2>` | Your name | Nihab |
| `<p><i class="fas fa-phone"></i> +1234567890</p>` | Phone number | +1234567890 |
| `<p><i class="fas fa-envelope"></i> email@example.com</p>` | Email address | `email@example.com` |
| `<img src="profile.jpg"` | **Profile image URL** | Use postimages.org `https://i.postimg.cc/xyz/image.jpg` |
| Social Links | GitHub, AniList, Discord | Replace with your profile URLs |
| About Section | Your intro/about | Write in your own words |

---

### 3. Upload Images (Profile + Cover)

Use **https://postimages.org/**

- Upload your profile photo and cover banner
- Copy the **Direct Link**
- Replace in `index.html` or `style.css`:

Open the `intex.html` file and replace it.
```html
<img src="https://i.postimg.cc/XYZ/your-photo.jpg" class="profile-pic" />
```

Same for cover photo:
Go to `style.css` file and replace it.

```css
.cover-photo {
  height: 180px;
  background: url('https://i.postimg.cc/xyz/cover.jpg') no-repeat center/cover;
  border-radius: 0 0 12px 12px;
}
```

---

### 4. Deploy to Netlify

**Step-by-step:**

1. Visit: [https://app.netlify.com/](https://app.netlify.com/)
2. Sign up or log in
3. Click **"Add new site" > "Import from GitHub"**
4. Connect your GitHub account
5. Choose this repository
6. Set **Build Command** = _leave blank_  
   Set **Publish directory** = `./`
7. Click **Deploy Site**

Done! You'll get a live link like: `https://yourname.netlify.app`

---

## Optional: Edit `info.txt`

This file downloads when clicking the download button.  
You can write your contact info like this:

```
Name: John Doe
Phone: +1234567890
Email: email@example.com
GitHub: github.com/username
Location: Dhaka, Bangladesh
```

---

## Screenshots

Here you can upload and organize screenshots inside a `screenshots/` folder.

| Screen | View |
|--------|------|
| Mobile View | ![Mobile](screenshots/mobile.png) |
| Theme Toggle | ![Dark](screenshots/theme-toggle.png) |
| About Section | ![About](screenshots/about.png) |

---

## Clone and Use

Anyone can use this:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Then open `index.html`, make your changes, and host it.

---

## License

Free for personal use. You may edit, host and distribute your customized version.

---

### Need Help?

Open an issue or message me directly!
