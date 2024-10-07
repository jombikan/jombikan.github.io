const subtitles = [
    "Emberek jönnek és emberek távoznak...",
    "Uram, a késemért jöttem...",
    "Álljunk bele, ha kell!..."
];

document.addEventListener("DOMContentLoaded", () => {
    // Set a random subtitle on page load
    const subtitleElement = document.getElementById("subtitle");
    subtitleElement.innerText = subtitles[Math.floor(Math.random() * subtitles.length)];

    // Show home section by default
    showSection('home');
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function showSection(section) {
    document.getElementById("introduction").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("content").style.display = "none";
    
    if (section === 'home') {
        document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');
    } else if (section === 'introduction') {
        document.getElementById("introduction").style.display = "block";
    } else if (section === 'contact') {
        document.getElementById("contact").style.display = "block";
    }
    
    document.getElementById("menu").style.display = "none"; // Close menu on section change
}

function showContent(content) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // Clear previous content
    document.getElementById("introduction").style.display = "none";
    
    if (content === 'favorites') {
        contentDiv.innerHTML = "<h3>Kedvencek</h3><p>Legkedvesebb könyveim és zenéim...</p>";
    } else if (content === 'vector') {
        contentDiv.innerHTML = `
            <h3>Vektoros rajzok</h3>
            <div class="image-gallery">
                <img src="janosvitez.png" class="bordered" alt="János Vitéz">
                <img src="12honap.png" class="bordered" alt="12 hónap">
                <img src="lo.png" class="bordered" alt="Ló">
                <img src="bethlen.png" class="bordered" alt="Bethlen">
                <img src="sedes.png" class="bordered" alt="Sedes">
            </div>
        `;
    } else if (content === 'cv') {
        window.open('oneletrajz.pdf', '_blank');
    } else if (content === 'gallery') {
        contentDiv.innerHTML = `
            <h3>Galéria</h3>
            <div class="image-carousel">
                <img src="csaladom.jpg" alt="Családom">
                <img src="orsom.jpg" alt="Őrsöm">
                <img src="osztaly.jpg" alt="Osztály">
                <img src="baratok.jpg" alt="Barátok">
                <img src="babak.jpg" alt="Bababák">
            </div>
        `;
    }
    
    contentDiv.style.display = "block";
}

function sendEmail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Email sent to: ${jombikan@gmail.com}\nMessage: ${message}`);
}
