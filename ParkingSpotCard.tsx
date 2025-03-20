import React from 'react';
import { Car, MapPin, Clock, DollarSign } from 'lucide-react';
import type { ParkingSpot } from '../types';

interface ParkingSpotCardProps {
  spot: ParkingSpot;
}

export const ParkingSpotCard: React.FC<ParkingSpotCardProps> = ({ spot }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{spot.name}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin size={16} className="mr-1" />
            <p className="text-sm">{spot.address}</p>
          </div>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {spot.distance}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <Car className="w-6 h-6 mx-auto text-gray-600" />
          <p className="mt-1 text-sm text-gray-600">Available</p>
          <p className="font-semibold text-gray-900">{spot.availableSpaces}/{spot.totalSpaces}</p>
        </div>
        <div className="text-center">
          <Clock className="w-6 h-6 mx-auto text-gray-600" />
          <p className="mt-1 text-sm text-gray-600">24/7</p>
          <p className="font-semibold text-gray-900">Open</p>
        </div>
        <div className="text-center">
          <DollarSign className="w-6 h-6 mx-auto text-gray-600" />
          <p className="mt-1 text-sm text-gray-600">Per Hour</p>
          <p className="font-semibold text-gray-900">${spot.pricePerHour}</p>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Navigate Here
      </button>
    </div>
  );
};
