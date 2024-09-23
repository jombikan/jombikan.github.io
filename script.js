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

// Pöttyök létrehozása és mozgatása
const dotContainer = document.getElementById('dot-container');
const numDots = 50; // Pöttyök száma
const dots = [];

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.x = Math.random() * window.innerWidth;
    dot.y = Math.random() * window.innerHeight;
    dot.speedX = (Math.random() - 0.5) * 2;
    dot.speedY = (Math.random() - 0.5) * 2;
    dot.style.left = `${dot.x}px`;
    dot.style.top = `${dot.y}px`;
    dotContainer.appendChild(dot);
    dots.push(dot);
}

// Mozgás frissítése és ütközéskezelés
function moveDots() {
    dots.forEach(dot => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Ütközés az ablak szélével
        if (dot.x <= 0 || dot.x >= window.innerWidth - 15) {
            dot.speedX *= -1;
        }
        if (dot.y <= 0 || dot.y >= window.innerHeight - 15) {
            dot.speedY *= -1;
        }

        // Ütközés más pöttyökkel
        dots.forEach(otherDot => {
            if (dot !== otherDot) {
                const dx = dot.x - otherDot.x;
                const dy = dot.y - otherDot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 15) {
                    dot.speedX *= -1;
                    dot.speedY *= -1;
                    otherDot.speedX *= -1;
                    otherDot.speedY *= -1;
                }
            }
        });

        // Pöttyök pozíciójának frissítése
        dot.style.left = `${dot.x}px`;
        dot.style.top = `${dot.y}px`;
    });

    requestAnimationFrame(moveDots);
}

moveDots(); // Mozgás indítása
