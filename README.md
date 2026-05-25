# CodeCraft Academy 

A professional, responsive coding bootcamp website built with HTML, CSS, JavaScript, and AngularJS.

![CodeCraft Academy](https://img.shields.io/badge/CodeCraft-Academy-4361ee?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![AngularJS](https://img.shields.io/badge/AngularJS-E23237?style=for-the-badge&logo=angularjs&logoColor=white)

---

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

##  Overview

CodeCraft Academy is a fully responsive, single-page website for a professional coding bootcamp. It features a modern dark UI, smooth animations, user authentication, QR code generation, an AngularJS-powered contact form with validation, and much more.

---

##  Features

- **Responsive Design** — Fully mobile-friendly layout across all screen sizes
- **Sticky Navigation** — Header with scroll effect and mobile hamburger menu
- **Authentication System** — Login/Register modal with localStorage persistence
- **AngularJS Contact Form** — Real-time phone number validation using `ng-messages`
- **QR Code Generator** — Auto-generates a scannable QR code for the website URL
- **Download & Print** — Download the HTML file or print the QR code
- **Smooth Animations** — CSS keyframe animations and IntersectionObserver scroll effects
- **Counter Animation** — Animated stat numbers on the hero section
- **Notification System** — Dynamic toast notifications for user actions
- **Dropdown User Menu** — Profile menu with logout functionality

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, CSS variables, responsive design |
| JavaScript (Vanilla) | DOM manipulation, auth logic, QR code, notifications |
| AngularJS 1.8.2 | Contact form with two-way data binding and validation |
| Chart.js 3.9.1 | (Loaded, ready to use for data visualizations) |
| QRCode.js | QR code generation |
| Font Awesome 6.4 | Icons throughout the site |
| Google Fonts | Poppins and Montserrat typefaces |

---

##  Sections

| Section | Description |
|---|---|
| Hero | Headline, CTA buttons, animated stats, floating cohort card |
| Programs | Full Stack, Mobile Dev, and Data Science course cards |
| Resources | Blog, Learning Resources, Career Services cards |
| Testimonials | Graduate success stories with avatars |
| QR Code | Auto-generated QR, download and print support |
| Contact | AngularJS form with validation + contact info panel |
| Footer | Links, social icons, copyright |

---

##  Getting Started

No build tools or dependencies needed. Just open the file in a browser.

### Option 1 — Open directly

```bash
# Clone the repository
git clone https://github.com/your-username/codecraft-academy.git

# Navigate into the folder
cd codecraft-academy

# Open in your browser
open index.html
```

### Option 2 — Use Live Server (recommended for development)

If you have VS Code installed:

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

### Option 3 — Serve with Python

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

> **Note:** An internet connection is required on first load to fetch CDN resources (AngularJS, Font Awesome, Chart.js, QRCode.js, Google Fonts).

---

##  Project Structure

```
codecraft-academy/
│
├── index.html          # Main HTML file (all-in-one: HTML + CSS + JS)
└── README.md           # Project documentation
```

This is a single-file project — all CSS is in a `<style>` block and all JavaScript is in a `<script>` block inside `index.html`.

---

##  Authentication

The auth system uses `localStorage` to persist sessions across page refreshes.

- **Login** — Enter any email/password to simulate a login
- **Register** — Fill in name, email, and matching passwords to create an account
- **Logout** — Available from the user dropdown in the header
- **Session persistence** — Logged-in state survives browser refresh

> This is a front-end simulation only — no backend or real authentication server is connected.

---

## QR Code

The QR code is auto-generated on page load pointing to:

```
https://example.com/codecraft-academy
```

To change the URL, find this line in the `<script>` section and update it:

```javascript
text: "https://example.com/codecraft-academy",
```

---

##  Contact Form Validation

The contact form uses AngularJS with `ng-messages` for real-time validation:

- Full name — required
- Email — required, valid email format
- Phone — required, must be exactly 10 digits
- Program — required dropdown selection
- Message — optional textarea

The submit button is disabled until all required fields pass validation.

---

##  Customization

All design tokens are defined as CSS variables at the top of the `<style>` block:

```css
:root {
  --primary: #4361ee;
  --accent:  #4cc9f0;
  --secondary: #f72585;
  --dark: #0f172a;
  --gradient: linear-gradient(135deg, #4361ee 0%, #4cc9f0 100%);
}
```

Change these to retheme the entire site instantly.

---

##  Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

##  License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

##  Author

Built with for CodeCraft Academy.  
Feel free to reach out at **info@codecraft.in** for any questions.

---

>  If you found this project helpful, give it a star on GitHub!
