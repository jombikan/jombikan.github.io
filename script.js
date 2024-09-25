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
