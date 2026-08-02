# MixDoctor Landing Page

Professional landing page for MixDoctor - Audio Analysis App

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle with system preference detection
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Fast loading and performance optimized
- ✅ Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- ✅ Modern gradient design matching your app's branding

## Theme Toggle

The page automatically detects your system theme preference and can be toggled:
- Click the theme toggle button in the top-right corner
- Keyboard shortcut: Press 'T' key
- Theme preference is saved in localStorage

## Structure

```
MixDoctor-Landing/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Theme toggle and interactions
└── README.md       # This file
```

## Publishing Options

### Option 1: GitHub Pages (Recommended - Free)

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MixDoctor landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/MixDoctor-Landing.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch "main"
   - Folder: / (root)
   - Save

4. Your site will be live at: `https://YOUR_USERNAME.github.io/MixDoctor-Landing/`

### Option 2: Netlify (Free with continuous deployment)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up/Login
3. Drag and drop your folder or connect GitHub repo
4. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free with excellent performance)

1. Go to [vercel.com](https://vercel.com/)
2. Sign up/Login
3. Import your GitHub repository or upload files
4. Deploy with one click

### Option 4: Firebase Hosting (Free)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 5: Traditional Web Hosting

Upload the three files (index.html, styles.css, script.js) to any web hosting service via FTP.

## Local Development

To test locally, simply open `index.html` in your browser or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Customization

### Update Content
- Edit `index.html` to change text, links, and structure
- Update the App Store link (currently placeholder "#")
- Add your actual download links

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-purple: #6B46C1;
    --secondary-pink: #EC4899;
    /* ... more variables */
}
```

### Add Analytics
Add Google Analytics or other tracking code before the closing `</body>` tag in `index.html`.

### Custom Domain
After publishing, you can connect a custom domain through your hosting provider's settings.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- Optimized CSS and JavaScript
- Fast load time < 1 second
- Lazy loading support built-in
- Smooth 60fps animations

## SEO

- Semantic HTML5
- Meta descriptions and keywords
- Proper heading hierarchy
- Alt text ready for images
- Mobile-friendly

## Contact

For questions about the app:
- Email: sound1980@gmail.com

## License

© 2025 MixDoctor. All rights reserved.
