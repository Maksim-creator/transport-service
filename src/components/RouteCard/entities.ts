export interface BusRoute {
  id: string;
  busName: string;
  from: string;
  to: string;
  seats: {seatNumber: number; available: boolean}[];
}
