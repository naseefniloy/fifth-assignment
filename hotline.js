// State variables
let favoritesCount = 0;
let coinsCount = 100;
let copyCount = 0;
let callHistory = [];

// DOM Elements
const favoritesCountEl = document.getElementById('favorites-count');
const coinsCountEl = document.getElementById('coins-count');
const copyCountEl = document.getElementById('copy-count');
const mobileFavoritesCountEl = document.getElementById('mobile-favorites-count');
const mobileCoinsCountEl = document.getElementById('mobile-coins-count');
const mobileCopyCountEl = document.getElementById('mobile-copy-count');
const callHistoryListEl = document.getElementById('call-history-list');
const emptyHistoryMessageEl = document.getElementById('empty-history-message');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize the UI
function updateUI() {
favoritesCountEl.textContent = favoritesCount;
coinsCountEl.textContent = coinsCount;
copyCountEl.textContent = copyCount;
mobileFavoritesCountEl.textContent = favoritesCount;
mobileCoinsCountEl.textContent = coinsCount;
mobileCopyCountEl.textContent = copyCount;
}

// Heart icon functionality
document.querySelectorAll('.heart-icon').forEach(icon => {
icon.addEventListener('click', function() {
if (this.classList.contains('fa-regular')) {
this.classList.remove('fa-regular');
this.classList.add('fa-solid', 'text-red-500');
favoritesCount++;
} else {
this.classList.remove('fa-solid', 'text-red-500');
this.classList.add('fa-regular');
favoritesCount--;
}
updateUI();
});
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(button => {
button.addEventListener('click', function() {
const number = this.getAttribute('data-number');
const service = this.getAttribute('data-service');

// Copy to clipboard
navigator.clipboard.writeText(number).then(() => {
alert(`Copied ${service} number: ${number}`);
copyCount++;
updateUI();
}).catch(err => {
console.error('Failed to copy: ', err);
alert('Failed to copy number. Please try again.');
});
});
});

// Call button functionality
document.querySelectorAll('.call-btn').forEach(button => {
button.addEventListener('click', function() {
const number = this.getAttribute('data-number');
const service = this.getAttribute('data-service');

// Check if user has enough coins
if (coinsCount < 20) {
alert("You don't have enough coins to make a call. You need 20 coins.");
return;
}

// Deduct coins
coinsCount -= 20;
updateUI();

// Show alert
alert(`Calling ${service} at ${number}`);

// 

// Add to call history
function addToCallHistory(service, number) {
// Get current time
const now = new Date();
const timeString = now.toLocaleTimeString();
const dateString = now.toLocaleDateString();

// Create history item
const historyItem = {
service,
number,
time: `${dateString} ${timeString}`
};

// Add to beginning of array
callHistory.unshift(historyItem);

// Update UI
renderCallHistory();
}

// Render call history
function renderCallHistory() {
// Clear current history
callHistoryListEl.innerHTML = '';

if (callHistory.length === 0) {
callHistoryListEl.appendChild(emptyHistoryMessageEl);
return;
}

emptyHistoryMessageEl.remove();

// Add each history item
callHistory.forEach(item => {
const historyItemEl = document.createElement('div');
historyItemEl.className = 'call-history-item';
historyItemEl.innerHTML = `
<p class="font-semibold">${item.service}</p>
<p class="text-lg my-1">${item.number}</p>
<p class="text-sm text-gray-500">${item.time}</p>
`;
callHistoryListEl.appendChild(historyItemEl);
});
}

// Clear history functionality
clearHistoryBtn.addEventListener('click', function() {
callHistory = [];
renderCallHistory();
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', function() {
mobileMenu.classList.toggle('hidden');
});

// Initialize the UI
updateUI();
renderCallHistory();