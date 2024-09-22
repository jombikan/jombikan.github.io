// Tartalom megjelenítése a gombokra kattintva
function showSection(section) {
    const content = document.getElementById('content');
    content.innerHTML = `<a href="#" class="back-home" onclick="goHome()">🏠</a><p>Szöveg a ${section} részről</p>`;
    content.classList.add('active');
}

// Visszatérés a kezdőlapra
function goHome() {
    const content = document.getElementById('content');
    content.classList.remove('active');
    content.innerHTML = '';
}
