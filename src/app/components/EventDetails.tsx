import { ArrowLeft, Calendar, MapPin, Users, Bookmark, BookmarkCheck } from 'lucide-react';
import { Event } from './EventCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventDetailsProps {
  event: Event;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (eventId: string) => void;
}

export function EventDetails({ event, onBack, isSaved, onToggleSave }: EventDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-[#1E2A5A]" />
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-medium text-[#1E2A5A]">{event.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <h1 className="text-3xl font-bold text-[#1E2A5A] mb-4">{event.title}</h1>
        
        {/* Event Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">{event.date}</p>
              <p className="text-sm text-gray-600">{event.time}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">{event.location}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">{event.attendees} people attending</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#1E2A5A] mb-3">About Event</h2>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 sticky bottom-6">
          <button
            onClick={() => onToggleSave(event.id)}
            className={`flex-shrink-0 p-4 rounded-full transition-colors ${
              isSaved
                ? 'bg-purple-500 hover:bg-purple-600'
                : 'bg-white border-2 border-purple-500 hover:bg-purple-50'
            }`}
          >
            {isSaved ? (
              <BookmarkCheck className="w-6 h-6 text-white" />
            ) : (
              <Bookmark className="w-6 h-6 text-purple-500" />
            )}
          </button>
          
          <button className="flex-1 bg-[#1E2A5A] hover:bg-[#2A3A6A] text-white py-4 px-6 rounded-full font-semibold transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
