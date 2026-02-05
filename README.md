# 📅 Campus Event Finder

A modern, mobile-first web application designed to help college students discover, browse, and save campus events in one centralized platform. Built with React, TypeScript, and Tailwind CSS.

![Campus Event Finder](https://images.unsplash.com/photo-1613687969216-40c7b718c025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NzAzMDA3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080)

## 🎯 Problem Statement

College students often miss important campus events because information is scattered across multiple platforms (WhatsApp groups, email newsletters, physical posters, social media). There's no single, unified app where students can easily discover all college events in one place.

## ✅ Solution

**Campus Event Finder** provides a centralized, student-friendly platform where users can:
- Browse all upcoming campus events
- Search and filter events by category
- View detailed event information
- Save events for quick access
- Never miss important campus activities

## ✨ Features

### 🏠 **Core Functionality**
- **Splash Screen** - Welcoming animated introduction to the app
- **Event Discovery** - Browse all upcoming campus events in a clean, card-based layout
- **Real-time Search** - Instantly search events by title, category, or location
- **Advanced Filtering** - Filter events by 10 categories (Academic, Sports, Cultural, Tech, Arts, Music, Workshop, Social, Career, Health)
- **Event Details** - View comprehensive information including date, time, location, description, and attendee count
- **Save Events** - Bookmark favorite events with persistent storage
- **My Events** - Quick access to all saved events

### 🎨 **Design & UX**
- Mobile-first responsive design
- Clean, modern interface with intuitive navigation
- Smooth animations and transitions
- Consistent color scheme (Dark Blue #1E2A5A primary, purple accents)
- Student-friendly UI optimized for ages 18-24

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **State Management:** React Hooks (useState, useEffect)
- **Data Persistence:** localStorage

## 📁 Project Structure

```
campus-event-finder/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── SplashScreen.tsx       # Welcome screen
│   │   │   ├── HomeScreen.tsx         # Main event listing
│   │   │   ├── EventCard.tsx          # Reusable event card component
│   │   │   ├── EventDetails.tsx       # Detailed event view
│   │   │   ├── FilterScreen.tsx       # Category filter interface
│   │   │   └── MyEvents.tsx           # Saved events screen
│   │   └── App.tsx                    # Main app component with routing
│   └── styles/
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/campus-event-finder.git
   cd campus-event-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

## 💡 Usage

### User Flow

```
1. Open App
   ↓
2. Splash Screen (2 seconds)
   ↓
3. Home Screen - Browse Events
   ↓
4. Search/Filter Events (optional)
   ↓
5. Click Event Card
   ↓
6. View Event Details
   ↓
7. Save Event / Register
```

### Key Interactions

- **Search:** Type in the search bar to filter events by title, category, or location
- **Filter:** Click the filter icon to select specific event categories
- **Save Event:** Click the bookmark icon on event details to save for later
- **My Events:** Access saved events from the bookmark icon in the header
- **Navigation:** Use back arrows to return to previous screens

## 📱 Screens

### 1. Splash Screen
- App branding and tagline
- Smooth fade-in animation
- Auto-transitions to home screen

### 2. Home Screen
- List of all upcoming events
- Search bar for quick filtering
- Filter button for category selection
- Access to "My Events" via bookmark icon

### 3. Event Details
- Full-screen event image
- Complete event information (date, time, location, attendees)
- Detailed description
- Save/Register buttons

### 4. Filter Screen
- 10 category options
- Multi-select functionality
- Clear all filters option
- Apply filters button

### 5. My Events
- Displays all saved events
- Empty state when no events saved
- Quick access to event details

## 🎨 Design System

### Color Palette
- **Primary:** #1E2A5A (Dark Blue)
- **Secondary:** #8B5CF6 (Purple)
- **Background:** #FFFFFF (White)
- **Surface:** #F9FAFB (Light Gray)
- **Text:** #1E2A5A (Dark Blue), #6B7280 (Gray)

### Typography
- **Font Family:** System default
- **Headings:** Bold weight
- **Body:** Regular weight

### Components
- Rounded corners (2xl for cards)
- Shadow effects for depth
- Hover states for interactivity
- Smooth transitions

## 🔄 State Management

The app uses React's built-in state management:
- `currentScreen` - Controls which screen is displayed
- `selectedEvent` - Stores the event being viewed in detail
- `savedEventIds` - Array of saved event IDs (persisted to localStorage)
- `selectedCategories` - Active filter categories

## 💾 Data Persistence

- **localStorage** is used to persist saved events
- Data survives page refreshes
- Automatic sync when events are saved/removed

## 🎓 UX Case Study

### Project Overview
**Role:** UI/UX Designer & Frontend Developer  
**Duration:** Learning Project  
**Tools:** Figma (design), React + TypeScript (development)

### Problem
College students miss important campus events due to scattered information across multiple platforms (WhatsApp, posters, emails).

### User Research
- **Target Users:** College students (18-24 years old)
- **Pain Points:** 
  - Information overload
  - No centralized event platform
  - Missed event notifications
  - Difficulty finding relevant events

### Solution
A mobile-first web application that centralizes all campus event information with intuitive search, filtering, and bookmarking features.

### Design Process
1. **User Research** - Identified target audience and pain points
2. **User Flow Mapping** - Defined navigation and interactions
3. **Wireframing** - Created low-fidelity layouts for 5 core screens
4. **Visual Design** - Applied color scheme, typography, and UI components
5. **Prototyping** - Built functional React application
6. **Testing** - Validated user flows and interactions

### Outcome
A clean, simple, and easy-to-use event discovery app that solves the problem of scattered campus event information.

### Key Learnings
- Mobile-first design principles
- User-centered design approach
- Component-based architecture in React
- State management and data persistence
- Responsive web design with Tailwind CSS

## 🚧 Future Enhancements

- [ ] User authentication and personalized recommendations
- [ ] Push notifications for saved events
- [ ] Calendar integration (Google Calendar, iCal)
- [ ] Event check-in with QR codes
- [ ] Social features (comments, reactions, sharing)
- [ ] Admin dashboard for event creation
- [ ] Backend API with real-time updates
- [ ] Dark mode support
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Portfolio: [yourportfolio.com](https://yourportfolio.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI components inspired by modern design systems
- Built as part of a UI/UX learning journey

---

**⭐ If you find this project helpful, please give it a star!**

Made with ❤️ for college students everywhere
