// Subtitle options
const subtitles = [
  "Emberek jönnek és emberek távoznak...",
  "Uram, a késemért jöttem...",
  "Álljunk bele, ha kell!..."
];

// Set random subtitle on page load
window.onload = function() {
  const subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  document.getElementById("subtitle").textContent = subtitle;
};

// Show content based on rhombus click
function showContent(type) {
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.classList.remove("hidden");
  let content = "";

  switch(type) {
    case 'kedvencek':
      content = "<p>Kedvenc könyveim és dalaim...</p>";
      break;
    case 'vektoros':
      content = `
        <img src="janosvitez.jpg" class="art" alt="János vitéz">
        <img src="12honap.jpg" class="art" alt="12 Hónap">
      `;
      break;
    case 'oneletrajz':
      window.open('oneletrajz.pdf');
      return;
    case 'galeria':
      content = "<div class='gallery'><img src='csaladom.jpg' alt='Gallery Image'></div>";
      break;
  }
  dynamicContent.innerHTML = content;
}

// Email sending function (placeholder)
function sendEmail() {
  alert("Email sent successfully!");
}
