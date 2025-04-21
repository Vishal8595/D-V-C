function toggleMode() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: "My Digital Card",
      text: "Check out my profile! - Made by Nihab ♥️",
      url: window.location.href
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.log('Sharing failed:', error));
  } else {
    alert("Sharing not supported on this browser.");
  }
}
