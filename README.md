# 🍅 Domatini - A Modern Pomodoro Timer

Domatini is a beautiful, feature-rich Pomodoro timer application built with React and TypeScript. It helps users manage their time effectively using the Pomodoro Technique while keeping track of their tasks.

## ✨ Features

- **Customizable Timer Settings**
  - Study time duration
  - Short break duration
  - Long break duration
  - Pomodoros until long break
  - Auto-start options

- **Task Management**
  - Add, edit, and delete tasks
  - Mark tasks as complete
  - Persistent task list

- **User Authentication**
  - GitHub integration
  - Google integration
  - User profile management

- **Modern UI/UX**
  - Clean, minimalist design
  - Dark mode interface
  - Responsive layout
  - Custom font (Agbalumo)
  - Smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── modals/         # Modal components
│   ├── Navbar.tsx      # Navigation component
│   ├── Timer.tsx       # Timer component
│   └── TaskList.tsx    # Task list component
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── services/           # External services (Firebase)
├── types/              # TypeScript type definitions
└── main.tsx           # Application entry point
```

## ⚙️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Timer Settings
You can customize various timer settings through the settings modal:
- Study duration
- Short break duration
- Long break duration
- Number of Pomodoros until long break
- Sound notifications
- Auto-start preferences

### Styling
The project uses Tailwind CSS for styling. You can customize the theme by modifying:
- `tailwind.config.js` for theme customization
- `index.css` for global styles

## 🔒 Authentication

The application supports two authentication methods:
1. GitHub Authentication
2. Google Authentication

Users can:
- Sign in with their GitHub or Google account
- View their profile information
- Sign out

## 📱 Responsive Design

Domatini is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile devices

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Lucide Icons](https://lucide.dev/)