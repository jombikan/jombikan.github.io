// Eseménykezelők gombokhoz
function showInfo(section) {
    let infoDiv = document.getElementById('info');

    switch(section) {
        case 'Rólam':
            infoDiv.innerHTML = '<p>Jombik Anna vagyok, webfejlesztő és szoftverfejlesztési rajongó. Szeretem az új technológiákat felfedezni és kreatív projekteken dolgozni.</p>';
            break;
        case 'Projektek':
            infoDiv.innerHTML = '<p>Korábbi projektek közé tartoznak: webalkalmazások, reszponzív design, és interaktív felhasználói élmények.</p>';
            break;
        case 'Kapcsolat':
            infoDiv.innerHTML = '<p>Elérhető vagyok emailen: jombik.anna@example.com</p>';
            break;
        default:
            infoDiv.innerHTML = '';
    }
}
