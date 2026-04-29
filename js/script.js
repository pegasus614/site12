// ---------- SCREENS ----------
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');

// ---------- OPEN SCREEN 3 (TRANSFER) ----------
document.querySelector('.action-card .action').addEventListener('click', () => {
  screen3.classList.add('active');
});

// ---------- OPEN SCREEN 5 ----------
document.querySelector('.hero-btn')?.addEventListener('click', () => {
  screen5.classList.add('active');
});

// ---------- CLOSE SCREEN 3 ----------
screen3?.querySelector('.fa-times')?.addEventListener('click', () => {
  screen3.classList.remove('active');
});

// ---------- CLOSE SCREEN 4 ----------
screen4?.querySelector('.back-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  screen4.classList.remove('active');
});

// ---------- SCREEN 3 → SCREEN 4 ----------
screen3?.querySelector('.transfer-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  screen4.classList.add('active');
  updateScreen4Count();
});

// ---------- SEATS ----------
const seats = document.querySelectorAll('.seat-card');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateScreen4Count();
  });
});

// ---------- UPDATE SCREEN 4 ----------
function updateScreen4Count() {
  const selectedSeats = document.querySelectorAll('.seat-card.selected').length;

  const ticketDetails = screen4?.querySelector('.ticket-details');
  const submitBtn = screen4?.querySelector('.submit-btn');

  if (ticketDetails) {
    ticketDetails.innerHTML = `
      <br />${selectedSeats} Tickets Selected<br />
      
    `;
  }

  if (submitBtn) {
    submitBtn.textContent = `TRANSFER ${selectedSeats} TICKETS`;
  }
}

