import React, { useState } from 'react';
import { Search, MapPin, Car } from 'lucide-react';
import { ParkingSpotCard } from './components/ParkingSpotCard';
import type { ParkingSpot } from './types';

// Mock data - In a real app, this would come from an API
const mockParkingSpots: ParkingSpot[] = [
  {
    id: '1',
    name: 'Central Parking Garage',
    address: '123 Main Street, Downtown',
    availableSpaces: 45,
    totalSpaces: 100,
    distance: '0.3 mi',
    pricePerHour: 2.50,
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: 'City Plaza Parking',
    address: '456 Market Street',
    availableSpaces: 25,
    totalSpaces: 75,
    distance: '0.5 mi',
    pricePerHour: 3.00,
    coordinates: { lat: 40.7129, lng: -74.0061 }
  },
  {
    id: '3',
    name: 'Park & Go Complex',
    address: '789 Broadway Ave',
    availableSpaces: 15,
    totalSpaces: 50,
    distance: '0.8 mi',
    pricePerHour: 2.00,
    coordinates: { lat: 40.7130, lng: -74.0062 }
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoading(false);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">ParkFinder</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter location or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button
                onClick={handleLocationSearch}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
              <button
                onClick={handleGetCurrentLocation}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                Current Location
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockParkingSpots.map((spot) => (
            <ParkingSpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
