
# NOIRÉ - Luxury Perfume Brand Website

<p align="center">
  <img src="https://raw.githubusercontent.com/lakshaygupta2004/noire/main/public/Noire.png" alt="NOIRÉ Logo" width="100" />
</p>

<p align="center">
  <b>A premium, cinematic, dark-luxury perfume brand website</b><br/>
  Built with modern full-stack tools and elegant microinteractions
</p>

<p align="center">
  <a href="https://github.com/lakshaygupta2004/noire/stargazers">
    <img src="https://img.shields.io/github/stars/lakshaygupta2004/noire?style=social" alt="GitHub stars"/>
  </a>
  <a href="https://github.com/lakshaygupta2004/noire/issues">
    <img src="https://img.shields.io/github/issues/lakshaygupta2004/noire?color=8F6A35" alt="GitHub issues"/>
  </a>
  <a href="https://github.com/lakshaygupta2004/noire/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/lakshaygupta2004/noire?color=green" alt="License"/>
  </a>
</p>

---

## 🔗 Live Demo (Live Link Coming Soon)


## ✨ About NOIRÉ

NOIRÉ is a luxurious perfume brand website designed to deliver a **cinematic** and **immersive** shopping experience.  
With fluid 3D models, elegant scroll animations, and a golden-black aesthetic, NOIRÉ stands out as a high-end ecommerce experience.

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,tailwind,nodejs,express,mongodb,javascript,vite,css,html,git,github" />
</p>

Additional Libraries & Tools:
- 🎥 **GSAP**, **Framer Motion** – for animations
- ✨ **React Bits** – for prebuilt animated components
- 🌀 **Lenis** – for smooth scrolling
- 🔐 **JWT** – for authentication
- 🔄 **React Toastify** – for button feedback
- 🧠 **React Context API** – for global state management

---

## 🚀 Features

✅ Fully responsive dark-luxury design  
✅ 3D Model viewer for products (GLB format)  
✅ Protected routes with JWT authentication  
✅ Smooth scroll & animated transitions  
✅ Microinteractions on buttons & navigation  
✅ Contact form with backend message storage  
✅ Cart system with animated UI  
✅ Custom backgrounds: LightRays, SplashCursor, MagicBento, etc.  

---

## 📁 Project Structure

```
client/
│
├── ReactBits/           # Backgrounds, ModelViewer, Animations
├── components/          # Navbar, AuthForm, ProtectedRoute
├── context/             # Auth & Cart Contexts
├── pages/               # Home, Auth, Products, About, etc.
├── App.jsx              # Main app logic with routes
└── main.jsx             # ReactDOM renderer

server/
|
├── controllers/         # authController.js
├── models/              # User.js, ContactMessage.js
├── routes/              # auth.js, contact.js
├── utils/               # Utility functions
└── server.js            # Express setup + MongoDB connection
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/lakshaygupta2004/noire.git
cd noire
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 4. Setup Environment Variables

**Frontend (`/client/.env`):**
```
VITE_API_URL=http://localhost:5000/api
```

**Backend (`/server/.env`):**
```
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### 5. Run the Project

**Start Backend**
```bash
cd server
npm run dev
```

**Start Frontend**
```bash
cd ../client
npm run dev
```

The site will be live on `http://localhost:5173`

---

## 🧪 Pages Overview

- `/auth` – LightRays background, AuthForm & ModelViewer  
- `/` – Gooey Navbar, Scroll-triggered ModelViewer Cards, Smooth animations  
- `/collections` – GSAP gift collections, rolling gallery, StickerPeel  
- `/products` – Infinite scroll of products  
- `/cart` – Star-border buttons, SplashCursor background  
- `/about` – Variable proximity text, glowing founder image  

---

## 🔐 Authentication

- 🔒 Login/Register form via React Hook Form
- 🪪 JWT token stored in localStorage
- 🔁 Auto-redirect to `/auth` if not logged in
- ✅ ProtectedRoute wrapper for secure pages

---

## 📦 Backend Integration

- MongoDB for users & contact messages  
- Express routes (`/api/auth`, `/api/contact`)  
- Custom middlewares for token validation  

---

## 📫 Contact

To get in touch or send queries, use the Contact Form available on the Home Page.  
All messages are stored in MongoDB via the backend API.

---

## 🧠 Contributing

Feel free to submit pull requests or suggest features through issues.  
This project is designed with creativity and growth in mind — contributions are welcome!

---

## 📜 License

Licensed under the **MIT License**.  
See [`LICENSE`](https://github.com/lakshaygupta2004/noire/blob/main/LICENSE) for more information.

---

<p align="center"><i>Built with passion and precision by <b>Lakshay Gupta</b> ❤️</i></p>
