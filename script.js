// Tartalom megjelenítése a gombokra kattintva
function showPage(section) {
    const mainPage = document.getElementById('main-page');
    const contentPage = document.getElementById('content-page');
    const contentDiv = document.querySelector('.content');

    mainPage.classList.add('hidden');
    contentPage.classList.add('active');

    contentDiv.innerHTML = `<h2>${section}</h2><p>Szöveg a ${section} témához.</p>`;
}
function showPage(page) {
    const mainPage = document.getElementById('main-page');
    const portfolioPage = document.getElementById('portfolio-page');

    // Elrejti a kezdőlapot
    mainPage.classList.add('hidden');

    // Megjeleníti a megfelelő oldalt
    if (page === 'Portfólió') {
        portfolioPage.classList.remove('hidden');
    }
}

function goHome() {
    const mainPage = document.getElementById('main-page');
    const portfolioPage = document.getElementById('portfolio-page');

    // Elrejti a Portfólió oldalt
    portfolioPage.classList.add('hidden');

    // Megjeleníti a kezdőlapot
    mainPage.classList.remove('hidden');
}

// Visszatérés a kezdőlapra
function goHome() {
    const mainPage = document.getElementById('main-page');
    const contentPage = document.getElementById('content-page');

    contentPage.classList.remove('active');
    mainPage.classList.remove('hidden');
}
