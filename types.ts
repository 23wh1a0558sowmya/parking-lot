export interface ParkingSpot {
  id: string;
  name: string;
  address: string;
  availableSpaces: number;
  totalSpaces: number;
  distance: string;
  pricePerHour: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}
