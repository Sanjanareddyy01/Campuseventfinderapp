import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

interface FilterScreenProps {
  onBack: () => void;
  selectedCategories: string[];
  onApplyFilters: (categories: string[]) => void;
}

const CATEGORIES = [
  'Academic',
  'Sports',
  'Cultural',
  'Tech',
  'Arts',
  'Music',
  'Workshop',
  'Social',
  'Career',
  'Health'
];

export function FilterScreen({ onBack, selectedCategories, onApplyFilters }: FilterScreenProps) {
  const [tempCategories, setTempCategories] = useState<string[]>(selectedCategories);

  const toggleCategory = (category: string) => {
    setTempCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleApply = () => {
    onApplyFilters(tempCategories);
    onBack();
  };

  const handleClear = () => {
    setTempCategories([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E2A5A] text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Filter Events</h1>
          </div>
          
          {tempCategories.length > 0 && (
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="text-sm">Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">
          Categories {tempCategories.length > 0 && `(${tempCategories.length} selected)`}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {CATEGORIES.map(category => {
            const isSelected = tempCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`py-4 px-6 rounded-xl font-medium transition-all ${
                  isSelected
                    ? 'bg-purple-500 text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="w-full bg-[#1E2A5A] hover:bg-[#2A3A6A] text-white py-4 px-6 rounded-full font-semibold transition-colors sticky bottom-6"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
