document.addEventListener('DOMContentLoaded', (event) => {
  loadTickets();
});

// Searchbar

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
  // Search Bar JavaScript code here
});


// This lets the user(s) know that there ticket has been added
function addFlightTicket(flightName) {
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.push(flightName);
  localStorage.setItem('tickets', JSON.stringify(tickets));
  alert(`${flightName} added to your tickets`);
}

// This adds and removes the tickets from the cart
function addTicketToList(ticketName) {
  const ticketList = document.getElementById('ticketList');
  const newTicket = document.createElement('li');
  newTicket.className = 'list-group-item d-flex justify-content-between align-items-center';
  newTicket.textContent = ticketName;

  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-danger btn-sm';
  removeButton.textContent = 'Remove';
  removeButton.onclick = () => {
      ticketList.removeChild(newTicket);
      saveTickets();
  };

  newTicket.appendChild(removeButton);
  ticketList.appendChild(newTicket);
}


// This makes sure that the tickets stay displayed on the cart when moving between the pages
function saveTickets() {
  const ticketList = document.getElementById('ticketList');
  const tickets = [];
  for (let i = 0; i < ticketList.children.length; i++) {
      tickets.push(ticketList.children[i].textContent.replace('Remove', '').trim());
  }
  localStorage.setItem('tickets', JSON.stringify(tickets));
}

function loadTickets() {
  const ticketList = document.getElementById('ticketList');
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.forEach(ticket => addTicketToList(ticket));
}

// JS for counter thingy

function decreaseMars(){
  if (document.getElementById('ticketsMars').value != 0){
      document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) - 1;
  } else {
      document.getElementById('ticketsMars').value = 0;
  }
}

function increaseMars(){
  document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}

//Neptune
function decreaseNeptune(){
  if (document.getElementById('ticketsNeptune').value != 0){
      document.getElementById('ticketsNeptune').value = parseInt(document.getElementById('ticketsNeptune').value) - 1;
  } else {
      document.getElementById('ticketsNeptune').value = 0;
  }
}

function increaseNeptune(){
  document.getElementById('ticketsNeptune').value = parseInt(document.getElementById('ticketsNeptune').value) + 1;
}

//Jupiter
function decreaseJupiter(){
  if (document.getElementById('ticketsJupiter').value != 0){
      document.getElementById('ticketsJupiter').value = parseInt(document.getElementById('ticketsJupiter').value) - 1;
  } else {
      document.getElementById('ticketsJupiter').value = 0;
  }
}

function increaseJupiter(){
  document.getElementById('ticketsJupiter').value = parseInt(document.getElementById('ticketsJupiter').value) + 1;
}

//Saturn
function decreaseSaturn(){
  if (document.getElementById('ticketsSaturn').value != 0){
      document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1;
  } else {
      document.getElementById('ticketsSaturn').value = 0;
  }
}

function increaseSaturn(){
  document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}

//Uranus
function decreaseUranus(){
  if (document.getElementById('ticketsUranus').value != 0){
      document.getElementById('ticketsUranus').value = parseInt(document.getElementById('ticketsUranus').value) - 1;
  } else {
      document.getElementById('ticketsUranus').value = 0;
  }
}

function increaseUranus(){
  document.getElementById('ticketsUranus').value = parseInt(document.getElementById('ticketsUranus').value) + 1;
}

//Moon
function decreaseMoon(){
  if (document.getElementById('ticketsMoon').value != 0){
      document.getElementById('ticketsMoon').value = parseInt(document.getElementById('ticketsMoon').value) - 1;
  } else {
      document.getElementById('ticketsMoon').value = 0;
  }
}

function increaseMoon(){
  document.getElementById('ticketsMoon').value = parseInt(document.getElementById('ticketsMoon').value) + 1;
}

let totalCostMars = 0;
let totalCostNeptune = 0;
let totalCostJupiter = 0;
let totalCostSaturn = 0;
let totalCostUranus = 0;
let totalCostMoon = 0;
let finalTotalCost = 0;

function total(){
  totalCostMars = parseInt(document.getElementById('ticketsMars').value) * 25000;
  totalCostNeptune = parseInt(document.getElementById('ticketsNeptune').value) * 45000;
  totalCostJupiter = parseInt(document.getElementById('ticketsJupiter').value) * 65000;
  totalCostSaturn = parseInt(document.getElementById('ticketsSaturn').value) * 40000;
  totalCostUranus = parseInt(document.getElementById('ticketsUranus').value) * 50000;
  totalCostMoon = parseInt(document.getElementById('ticketsMoon').value) * 15000;
  finalTotalCost = totalCostMars + totalCostNeptune + totalCostJupiter + totalCostSaturn + totalCostUranus+ totalCostMoon;
  document.getElementById('total').innerHTML = "R " + finalTotalCost;

}


// Contact Form JavaScript 

// Get the form element
const form = document.getElementById('myForm');

// Add an event listener to the form's submit event
form.addEventListener('submitForm', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's name from the form
  const userName = document.getElementById('name').value;

  // Display an alert with the user's name
  alert(`Thank you for your message, ${userName}!`);
});