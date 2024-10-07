const subtitles = [
  "Emberek jönnek és emberek távoznak...",
  "Uram, a késemért jöttem...",
  "Álljunk bele, ha kell!..."
];

function setRandomSubtitle() {
  const subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  document.getElementById("subtitle").innerText = subtitle;
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function showSection(section) {
  document.getElementById("gyemantok").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.innerHTML = "";

  switch(section) {
    case "kedvencek":
      dynamicContent.innerHTML = "<p>Kedvenc dalaim és könyveim...</p>";
      break;
    case "vektoros":
      dynamicContent.innerHTML = "<img src='janosvitez.jpg' class='gallery-image' alt='János Vitéz'><img src='12honap.jpg' class='gallery-image' alt='12 Hónap'>";
      break;
    case "oneletrajz":
      window.open("oneletrajz.pdf", "_blank");
      break;
    case "galeria":
      dynamicContent.innerHTML = "<div class='image-slider'><img src='csaladom.jpg' alt='Családom'><img src='orsom.jpg' alt='Őrsöm'></div>";
      break;
    default:
      break;
  }
}

function backToMain() {
  document.getElementById("gyemantok").style.display = "flex";
  document.getElementById("content").classList.add("hidden");
}

function sendEmail() {
  const email = document.getElementById("email").value;
  if (email) {
    alert("Email küldése folyamatban...");
  } else {
    alert("Kérem, adjon meg egy email címet.");
  }
}

window.onload = setRandomSubtitle;
