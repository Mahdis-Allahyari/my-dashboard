# MyApp Dashboard

A full-stack ready React dashboard application built with modern frontend technologies.

## 🚀 Live Demo
[Add your Vercel link here after deployment]

## ✨ Features

- 🔐 Authentication system with protected routes
- 👥 Users management with add user modal
- 🛒 Shopping cart with Zustand state management
- 📦 Products page with real API data
- 🌙 Dark mode with localStorage persistence
- 📱 Fully responsive design
- ⚡ Performance optimized with React.memo, useMemo, useCallback
- 🔄 Lazy loading for all pages

## 🛠️ Technologies Used

- **React 18** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Ant Design** — UI components (forms, modals)
- **Material UI** — UI components (product cards)
- **Zustand** — State management
- **React Router v6** — Navigation
- **Axios** — API calls
- **React Query** — Data fetching

## 📁 Project Structure
src/

components/       # Reusable UI components

Layout/         # App layout (Sidebar + TopBar)

Sidebar/        # Navigation sidebar

TopBar/         # Top navigation bar

ProductCard/    # Product display card

UserCard/       # User display card

AddUserModal/   # Add user form modal

ProtectedRoute/ # Auth guard component

pages/            # Application pages

Dashboard/      # Main dashboard

Users/          # Users management

Products/       # Products listing

Cart/           # Shopping cart

Settings/       # App settings

Login/          # Authentication

hooks/            # Custom React hooks

useFetch/       # Data fetching hook

useTheme/       # Dark mode hook

store/            # Zustand stores

authStore/      # Authentication state

cartStore/      # Shopping cart state

services/         # API services

axiosInstance/  # Axios configuration

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Mahdis-Allahyari/my-dashboard.git

# Navigate to project
cd my-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔑 Demo Credentials
Email: admin@myapp.com
Password: password123

## 🌐 API Sources

- Users: [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- Products: [Fake Store API](https://fakestoreapi.com)