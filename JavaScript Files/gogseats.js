window.addEventListener('DOMContentLoaded', function() {
  // Get the seating plan container
  const seatingPlan = document.getElementById('seatingPlan');
  const selectedSeatsInfo = document.getElementById('selectedSeatsInfo');
  const totalSeatsBooked = document.getElementById('totalSeatsBooked');
  const totalPriceToPay = document.getElementById('totalPriceToPay');
  const form = document.querySelector('form');

  // Define the available and booked seats
  const availableSeats = [ 'I3', 'I2', 'I1','H10', 'H6', 'I6', 'I5','D10' , 'J5',  'J2', 
                          'G10', 'G9', 'G8', 'G7', 'G6', 'G5', 'G4', 'G3', 'G2', 'G1',
                          'F10', 'F9', 'F8', 'F7', 'F6', 'F5', 'F4', 'F3', 'F2', 'F1',
                          'E8', 'E7', 'E6', 'E5', 'E4', 'E3', 'E2', 'E1','H5', 'H4',
                           'D8', 'D7', 'D6', 'D5', 'D4', 'D3', 'D2', 'D1',
                          'C10', 'C9', 'C8', 'C7', 'C6', 'C5', 'C4', 'C3', 'C2', 'C1',
                          'B10', 'B6', 'B5', 'B4', 'B3', 'B2', 'B1',
                          'A10', 'A9', 'A8', 'A7', 'A6',  'A2', 'A1','J3', 'J4', 'H9',   'B8', 'B7', 'E10', 'E9'];

  const bookedSeats = ['H3', 'J10', 'J9', 'J8', 'J7', 'J6',  'J1','I10', 'I9',
			   'I8',  'I4','H2','I7','A4', 'A3', 'B9','D9','H8', 'H7', 'H1','A5'];

  // Keep track of selected seats
  const selectedSeats = [];

  // Calculate the total price and update UI
  function updateBookingDetails() {
    const ticketPrice = 100;
    const totalSeatsBookedValue = selectedSeats.length;
    const totalPriceToPayValue = totalSeatsBookedValue * ticketPrice;

    totalSeatsBooked.textContent = `Total Seats Booked: ${totalSeatsBookedValue}`;
    totalPriceToPay.textContent = `Total Price to Pay: ₹${totalPriceToPayValue}`;
  }

  // Generate the seats dynamically
  for (let row = 10; row >= 1; row--) {
    const seatRow = document.createElement('div');
    seatRow.className = 'seat-row';

    for (let col = 1; col <= 10; col++) {
      const seat = document.createElement('div');
      seat.className = 'seat';
      const seatLabel = document.createElement('span');
      seatLabel.textContent = String.fromCharCode(65 + row - 1) + col;

      if (availableSeats.includes(seatLabel.textContent)) {
        seat.classList.add('available');
      } else if (bookedSeats.includes(seatLabel.textContent)) {
        seat.classList.add('booked');
seat.setAttribute('disabled', 'disabled');
}
  seat.addEventListener('click', function() {
    if (seat.classList.contains('available')) {
      if (selectedSeats.length < 4 || seat.classList.contains('selected')) {
        seat.classList.toggle('selected');
        const seatIndex = selectedSeats.indexOf(seatLabel.textContent);
        if (seatIndex === -1) {
          selectedSeats.push(seatLabel.textContent);
        } else {
          selectedSeats.splice(seatIndex, 1);
        }
        selectedSeatsInfo.textContent = `Selected Seats: ${selectedSeats.join(', ')}`;
        updateBookingDetails();
      } else {
        alert('You can select only 4 seats at a time.');
      }
    } else if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      const seatIndex = selectedSeats.indexOf(seatLabel.textContent);
      if (seatIndex !== -1) {
        selectedSeats.splice(seatIndex, 1);
      }
      selectedSeatsInfo.textContent = `Selected Seats: ${selectedSeats.join(', ')}`;
      updateBookingDetails();
    }
  });

  seat.appendChild(seatLabel);
  seatRow.appendChild(seat);
}

seatingPlan.appendChild(seatRow);
}

form.addEventListener('submit', function(event) {
if (selectedSeats.length === 0) {
event.preventDefault();
alert('Please select at least one seat.');
}
});
});
