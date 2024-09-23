// Tartalom megjelenítése a gombokra kattintva
function showPage(section) {
    const mainPage = document.getElementById('main-page');
    const contentPage = document.getElementById('content-page');
    const contentDiv = document.querySelector('.content');

    mainPage.classList.add('hidden');
    contentPage.classList.add('active');

    contentDiv.innerHTML = `<h2>${section}</h2><p>Szöveg a ${section} témához.</p>`;
}

// Visszatérés a kezdőlapra
function goHome() {
    const mainPage = document.getElementById('main-page');
    const contentPage = document.getElementById('content-page');

    contentPage.classList.remove('active');
    mainPage.classList.remove('hidden');
}
