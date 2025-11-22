// የጨዋታ ውሂብ (Data)
const games = [
    // ጊዜያዊ ምስሎችን የሚሰሩ አድራሻዎች
    { id: 'freefire', name: 'Garena Free Fire', image: 'https://cdn.jsdelivr.net/gh/miankhalil/M-K-Image-Collection@main/Free%20Fire.jpg' },
    { id: 'mobilelegends', name: 'Mobile Legends: BB', image: 'https://cdn.jsdelivr.net/gh/miankhalil/M-K-Image-Collection@main/mobile%20legends.jpg' },
    { id: 'pubg', name: 'PUBG Mobile', image: 'https://cdn.jsdelivr.net/gh/miankhalil/M-K-Image-Collection@main/pubg%20mobile.jpg' },
    { id: 'roblox', name: 'Roblox', image: 'https://cdn.jsdelivr.net/gh/miankhalil/M-K-Image-Collection@main/Roblox.png' },
];

const gameListElement = document.getElementById('game-list');
const gameDetailsElement = document.getElementById('game-details');
const gameImageElement = document.getElementById('game-image');
const detailsTitle = gameDetailsElement.querySelector('h2');
const messageElement = document.getElementById('message');

let selectedGameId = null;

// የጨዋታ ካርዶችን ወደ ገጹ መጨመር
function renderGameList() {
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.setAttribute('data-game-id', game.id);
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name} Image">
            <p>${game.name}</p>
        `;
        card.addEventListener('click', () => selectGame(game));
        gameListElement.appendChild(card);
    });
}

// አንድ ጨዋታ ሲመረጥ
function selectGame(game) {
    selectedGameId = game.id;
    
    // ዝርዝሩን ማሳየት
    detailsTitle.textContent = `Purchase Credit for ${game.name}`;
    gameImageElement.src = game.image;
    
    gameDetailsElement.classList.remove('hidden');
    
    // ወደ ዝርዝሩ ቦታ ወደ ላይ ማሳየት (Smooth scroll)
    gameDetailsElement.scrollIntoView({ behavior: 'smooth' });

    // የክፍያ መልዕክትን ማጽዳት
    messageElement.textContent = '';
}

// የክፍያ አዝራር ሲጫን
function handlePayment() {
    const playerId = document.getElementById('player-id').value;
    const creditAmount = document.getElementById('credit-amount').value;
    const gameName = games.find(g => g.id === selectedGameId)?.name || 'Game';

    if (!playerId) {
        messageElement.textContent = 'Please enter your Player ID!';
        messageElement.style.color = '#e94560';
        return;
    }

    // የክፍያ ሂደትን ማስመሰል (Simulation)
    messageElement.textContent = `✅ Successfully purchased ${creditAmount} credits for ${gameName} ID: ${playerId}!`;
    messageElement.style.color = '#4CAF50';
    
    // (ማሳሰቢያ: እውነተኛ ክፍያ በስተጀርባ ሰርቨር ኮድ ያስፈልገዋል!)
}

// ድር ጣቢያው ሲከፈት ኮዱን ማስኬድ
document.addEventListener('DOMContentLoaded', renderGameList);
