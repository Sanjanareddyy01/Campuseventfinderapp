import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { HomeScreen } from "./components/HomeScreen";
import { EventDetails } from "./components/EventDetails";
import { FilterScreen } from "./components/FilterScreen";
import { MyEvents } from "./components/MyEvents";
import { Event } from "./components/EventCard";

// Mock event data
const MOCK_EVENTS: Event[] = [
  {
    id: "1",
    title: "Tech Talk: AI & Machine Learning",
    date: "Feb 10, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Engineering Hall, Room 301",
    category: "Tech",
    description:
      "Join us for an insightful session on the latest developments in AI and Machine Learning. Industry experts will share their experiences and insights on how AI is transforming various sectors. Perfect for students interested in pursuing careers in tech.",
    imageUrl:
      "https://images.unsplash.com/photo-1580893207371-9ae163385856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBjb2Rpbmd8ZW58MXx8fHwxNzcwMzAwNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 120,
  },
  {
    id: "2",
    title: "Annual Music Festival",
    date: "Feb 15, 2026",
    time: "6:00 PM - 11:00 PM",
    location: "Campus Main Ground",
    category: "Music",
    description:
      "Experience an amazing evening of live music performances by talented student bands and special guest artists. This year's festival features multiple genres including rock, pop, and classical. Food stalls and refreshments will be available throughout the event.",
    imageUrl:
      "https://images.unsplash.com/photo-1610900538035-b04c4d957d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBmZXN0aXZhbCUyMHN0YWdlfGVufDF8fHx8MTc3MDMwMDczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 450,
  },
  {
    id: "3",
    title: "Basketball Championship Finals",
    date: "Feb 12, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "University Sports Complex",
    category: "Sports",
    description:
      "Cheer for your favorite team in the most anticipated basketball championship finals of the year. The top two teams will compete for the trophy. Free entry for all students. Don't miss the halftime entertainment and prize giveaways!",
    imageUrl:
      "https://images.unsplash.com/photo-1641138294059-8bbb8f809a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiYXNrZXRiYWxsJTIwY291cnR8ZW58MXx8fHwxNzcwMzAwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 300,
  },
  {
    id: "4",
    title: "Art Exhibition: Student Showcase",
    date: "Feb 18, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Campus Art Gallery",
    category: "Arts",
    description:
      "Discover incredible artwork created by our talented students. The exhibition features paintings, sculptures, digital art, and photography. Meet the artists, learn about their creative process, and get inspired. Some pieces will be available for purchase.",
    imageUrl:
      "https://images.unsplash.com/photo-1569342380852-035f42d9ca41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzAyNjAzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 85,
  },
  {
    id: "5",
    title: "Career Fair 2026",
    date: "Feb 20, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "University Convention Center",
    category: "Career",
    description:
      "Connect with leading companies and explore internship and job opportunities. Over 50 companies from various industries will be present. Bring your resumes and dress professionally. Career counseling sessions and resume review stations will also be available.",
    imageUrl:
      "https://images.unsplash.com/photo-1613687969216-40c7b718c025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NzAzMDA3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 600,
  },
  {
    id: "6",
    title: "Graduation Ceremony 2026",
    date: "Feb 25, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Main Auditorium",
    category: "Academic",
    description:
      "Celebrate the achievements of our graduating class. The ceremony will feature speeches from distinguished guests, award presentations, and the conferring of degrees. Family and friends are welcome. Reception to follow in the Grand Hall.",
    imageUrl:
      "https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc3MDI5NDg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 800,
  },
  {
    id: "7",
    title: "Coding Workshop: React & TypeScript",
    date: "Feb 14, 2026",
    time: "1:00 PM - 5:00 PM",
    location: "Computer Science Lab 2",
    category: "Workshop",
    description:
      "Learn modern web development with React and TypeScript in this hands-on workshop. Suitable for beginners with basic programming knowledge. Participants will build a real project by the end of the session. Bring your laptop!",
    imageUrl:
      "https://images.unsplash.com/photo-1580893207371-9ae163385856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBjb2Rpbmd8ZW58MXx8fHwxNzcwMzAwNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 75,
  },
  {
    id: "8",
    title: "Cultural Night: Diversity Celebration",
    date: "Feb 22, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Student Center Hall",
    category: "Cultural",
    description:
      "Celebrate the rich diversity of our campus community! Enjoy performances, traditional dances, music from around the world, and authentic cuisine from various cultures. A wonderful opportunity to learn and appreciate different traditions.",
    imageUrl:
      "https://images.unsplash.com/photo-1613687969216-40c7b718c025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBldmVudHxlbnwxfHx8fDE3NzAzMDA3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    attendees: 250,
  },
];

type Screen =
  | "splash"
  | "home"
  | "details"
  | "filter"
  | "myEvents";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("splash");
  const [selectedEvent, setSelectedEvent] =
    useState<Event | null>(null);
  const [savedEventIds, setSavedEventIds] = useState<string[]>(
    [],
  );
  const [selectedCategories, setSelectedCategories] = useState<
    string[]
  >([]);

  // Load saved events from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("savedEvents");
    if (saved) {
      setSavedEventIds(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever savedEventIds changes
  useEffect(() => {
    localStorage.setItem(
      "savedEvents",
      JSON.stringify(savedEventIds),
    );
  }, [savedEventIds]);

  const handleSplashComplete = () => {
    setCurrentScreen("home");
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentScreen("details");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
    setSelectedEvent(null);
  };

  const handleToggleSave = (eventId: string) => {
    setSavedEventIds((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId],
    );
  };

  const handleApplyFilters = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  // Filter events by selected categories
  const filteredEvents =
    selectedCategories.length > 0
      ? MOCK_EVENTS.filter((event) =>
          selectedCategories.includes(event.category),
        )
      : MOCK_EVENTS;

  const savedEvents = MOCK_EVENTS.filter((event) =>
    savedEventIds.includes(event.id),
  );

  return (
    <>
      {currentScreen === "splash" && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {currentScreen === "home" && (
        <HomeScreen
          events={filteredEvents}
          onEventClick={handleEventClick}
          onFilterClick={() => setCurrentScreen("filter")}
          onMyEventsClick={() => setCurrentScreen("myEvents")}
        />
      )}

      {currentScreen === "details" && selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onBack={handleBackToHome}
          isSaved={savedEventIds.includes(selectedEvent.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      {currentScreen === "filter" && (
        <FilterScreen
          onBack={handleBackToHome}
          selectedCategories={selectedCategories}
          onApplyFilters={handleApplyFilters}
        />
      )}

      {currentScreen === "myEvents" && (
        <MyEvents
          savedEvents={savedEvents}
          onBack={handleBackToHome}
          onEventClick={handleEventClick}
        />
      )}
    </>
  );
}