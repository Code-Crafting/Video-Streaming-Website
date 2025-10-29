# 🎬 VidTube

**VidTube** is a YouTube-like video streaming platform built with **ReactJS** and powered by the **YouTube Data API**.  
It allows users to seamlessly **watch, explore, and engage** with videos while maintaining fast performance and clean UI.

---

## 🚀 Features

- 🎯 **Filter videos by category** – Browse by topics like Gaming, Music, etc.  
- 🔎 **Search videos** – Instantly find what you're looking for.  
- 📃 **Playlist support** – Videos related playlist  
- 💬 **Comments section** – See what others think about each video.  
- 🌙 **Dark/Light theme toggle** – Choose your preferred viewing mode.

---

## ⚡ Optimizations Implemented

1. **Reduced redundant fetches**  
   - Earlier, data was fetched on every category change (e.g., *All → Gaming → All*).  
   - Now, the app fetches data **only once per category**, skipping already loaded ones.

2. **Conditional fetching for comments**  
   - Comments are fetched **only when users open them**, saving unnecessary API calls.

3. **Lazy loading for images**  
   - Only visible images are downloaded to improve performance.

4. **Debounced search functionality**  
   - Used a **custom debounce hook** to delay search execution and prevent excessive API hits.

5. **React Lazy & Suspense**  
   - Pages load **only when needed**, improving initial load performance and reducing bundle size.

---

## 🧩 Custom Hooks Used

- `useDebounce` – Delays API requests for better performance.  
- `useFetch` – Handles API calls efficiently.  
- `useLocalStorage` – Stores and retrieves data locally to enhance UX.

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, TailwindCSS
- **API:** YouTube Data API v3
- **Deployment:** Vercel
