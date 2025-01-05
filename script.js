// Chargement initial des cryptomonnaies depuis le localStorage ou cryptos.js
if (!localStorage.getItem('cryptos')) {
    localStorage.setItem('cryptos', JSON.stringify(defaultCryptos));
}

// Charger les cryptomonnaies depuis le localStorage
let cryptos = JSON.parse(localStorage.getItem('cryptos'));

// Fonction pour afficher les cryptomonnaies
function displayCryptos(filteredCryptos) {
    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = '';

    filteredCryptos.forEach((crypto, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <img src="${crypto.logo}" class="card-img-top" alt="${crypto.name} logo" />
                <div class="card-body">
                    <h5 class="card-title">${crypto.name} (${crypto.symbol})</h5>
                    <p class="card-text">Prix : ${crypto.price} €</p>
                    <button class="btn btn-info mb-2" onclick="showDescription('${crypto.description.replace(/'/g, "\\'")}')">En savoir plus</button>
                    <button class="btn btn-warning" onclick="editCrypto(${index})">Edit</button>
                </div>
            </div>
        `;
        cryptoList.appendChild(card);
    });
}

// Fonction pour afficher la description d'une cryptomonnaie
function showDescription(description) {
    alert(description);
}

// Fonction pour éditer une cryptomonnaie
function editCrypto(index) {
    const crypto = cryptos[index];
    const newPrice = prompt(`Modifier le prix de ${crypto.name} (actuel : ${crypto.price} €)`, crypto.price);
    const newLogo = prompt(`Modifier le logo de ${crypto.name} (actuel : ${crypto.logo})`, crypto.logo);
    const newDescription = prompt(`Modifier la description de ${crypto.name}`, crypto.description);

    if (newPrice !== null && !isNaN(parseFloat(newPrice))) crypto.price = parseFloat(newPrice);
    if (newLogo !== null && newLogo.trim() !== "") crypto.logo = newLogo.trim();
    if (newDescription !== null && newDescription.trim() !== "") crypto.description = newDescription.trim();

    // Sauvegarder les modifications dans le localStorage
    localStorage.setItem('cryptos', JSON.stringify(cryptos));

    // Réafficher les cryptomonnaies
    displayCryptos(cryptos);
}

// Fonction pour filtrer les cryptomonnaies
function filterCryptos() {
    const nameInput = document.getElementById('name').value.toLowerCase();
    const priceInput = parseFloat(document.getElementById('price').value);

    const filtered = cryptos.filter((crypto) => {
        const matchesName = crypto.name.toLowerCase().includes(nameInput) || crypto.symbol.toLowerCase().includes(nameInput);
        const matchesPrice = !priceInput || crypto.price <= priceInput;
        return matchesName && matchesPrice;
    });

    displayCryptos(filtered);
}

// Initialisation de la page
function initializePage() {
    cryptos = JSON.parse(localStorage.getItem('cryptos')) || [];
    displayCryptos(cryptos);

    // Ajouter un écouteur d'événement au bouton de filtrage
    document.getElementById('filter-button').addEventListener('click', filterCryptos);
}

// Charger les données lorsque la page est prête
window.onload = initializePage;
