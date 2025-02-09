# 🌐 My Personal Portfolio

Welcome to my personal portfolio! 🚀 This is a fully responsive, dark-mode-supported website that showcases my projects, skills, and experiences. It also includes a contact form for visitors to reach out.

## 📑 Table of Contents
- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [📥 Installation](#-installation)
- [🚀 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [📬 Contact](#-contact)

---

## ✨ Features
✅ **Responsive Design** – Fully adaptable to all screen sizes 📱💻🖥️
✅ **Dark Mode** – Toggle between light and dark themes 🌞🌙
✅ **Projects Showcase** – Displays projects with descriptions, technologies, and links 🔗💡
✅ **Contact Form** – Visitors can send messages directly via email 📧

---

## 🛠 Technologies Used
- **Frontend:** React ⚛️, TypeScript ⌨️, Tailwind CSS 🎨
- **Build Tool:** Vite ⚡
- **Email Service:** Nodemailer 📩
- **Deployment:** Vercel ☁️

---

## 📥 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Bharath-S-J/Portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your Gmail credentials:
   ```sh
   GMAIL_USER_F=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   GMAIL_USER_T=your-email@gmail.com
   ```

---

## 🚀 Usage
1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

3. To build the project for production:
   ```sh
   npm run build
   ```
4. To preview the production build:
   ```sh
   npm run preview
   ```

---

## 📂 Project Structure
```
.vite/
api/
  ├── contact.ts  # Handles contact form submission using Nodemailer
src/
  ├── components/
  │   ├── ContactForm.tsx  # Contact form component
  │   ├── Navbar.tsx  # Navigation bar
  │   ├── ProjectCard.tsx  # Project card component
  │   ├── ProjectModal.tsx  # Project details modal
  │   ├── ThemeToggle.tsx  # Dark mode toggle
  ├── App.tsx  # Main application file
  ├── main.tsx  # React entry point
  ├── index.css  # Global styles
  ├── vite-env.d.ts  # TypeScript environment definitions
public/
  ├── vite.svg  # Vite logo
index.html  # Main HTML file
package.json  # Project metadata & dependencies
tsconfig.json  # TypeScript configuration
vite.config.ts  # Vite configuration
postcss.config.js  # PostCSS configuration
```

---

## 📬 Contact
If you have any questions or want to get in touch, feel free to reach out via:

🔗 **Portfolio:** [Live Demo](https://portfolio-bharathsj.vercel.app/)
🐙 **GitHub:** [Bharath-S-J](https://github.com/Bharath-S-J)
💼 **LinkedIn:** [Bharath S J](https://www.linkedin.com/in/bharath-s-j-56a734206)

---

🚀 **Thank you for visiting my portfolio! Feel free to explore and connect.**
