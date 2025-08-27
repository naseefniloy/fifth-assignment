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