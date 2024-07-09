export const groupSeats = (
  seats: {seatNumber: number; available: boolean}[] | undefined,
) => {
  const grouped = [];
  if (seats) {
    for (let i = 0; i < seats.length; i += 2) {
      grouped.push([seats[i], seats[i + 1]]);
    }
  }
  return grouped;
};
