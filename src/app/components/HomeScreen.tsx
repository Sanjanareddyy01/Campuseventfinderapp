import { Search, SlidersHorizontal, Calendar, Bookmark } from 'lucide-react';
import { EventCard, Event } from './EventCard';
import { useState } from 'react';

interface HomeScreenProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  onFilterClick: () => void;
  onMyEventsClick: () => void;
}

export function HomeScreen({ events, onEventClick, onFilterClick, onMyEventsClick }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E2A5A] text-white px-6 pt-8 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Campus Events</h1>
          </div>
          <button
            onClick={onMyEventsClick}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            onClick={onFilterClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">
          {searchQuery ? `Search Results (${filteredEvents.length})` : 'Upcoming Events'}
        </h2>
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} onClick={onEventClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
}
