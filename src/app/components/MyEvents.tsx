import { ArrowLeft, BookmarkX } from 'lucide-react';
import { Event, EventCard } from './EventCard';

interface MyEventsProps {
  savedEvents: Event[];
  onBack: () => void;
  onEventClick: (event: Event) => void;
}

export function MyEvents({ savedEvents, onBack, onEventClick }: MyEventsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E2A5A] text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">My Events</h1>
        </div>
      </div>

      {/* Saved Events */}
      <div className="px-6 py-6">
        {savedEvents.length > 0 ? (
          <>
            <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">
              Saved Events ({savedEvents.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedEvents.map(event => (
                <EventCard key={event.id} event={event} onClick={onEventClick} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <BookmarkX className="w-10 h-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E2A5A] mb-2">No Saved Events</h3>
            <p className="text-gray-600 text-center max-w-sm">
              Start exploring events and save the ones you're interested in!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
