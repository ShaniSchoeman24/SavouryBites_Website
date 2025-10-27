const greetingEl = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();
  let greetingText = "";

  if (hour >= 5 && hour < 12) greetingText = "Good morning! Welcome to Savoury Bites!";
  else if (hour >= 12 && hour < 18) greetingText = "Good afternoon! Welcome to Savoury Bites!";
  else greetingText = "Good evening! Welcome to Savoury Bites!";

  greetingEl.textContent = greetingText;


const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") enableDarkMode();
else enableLightMode();

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) enableLightMode();
  else enableDarkMode();
});

function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  toggleBtn.innerHTML = "☀️";
}

function enableLightMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  toggleBtn.innerHTML = "🌙";
}
