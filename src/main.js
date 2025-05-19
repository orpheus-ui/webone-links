import "./style.css";
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const stored = localStorage.getItem("theme");

const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");
const logoLight = document.getElementById("logo-light");
const logoDark = document.getElementById("logo-dark");

function syncUI(isDark) {
  // SVGs
  iconSun.classList.toggle("hidden", isDark);
  iconMoon.classList.toggle("hidden", !isDark);
  // Logos
  logoLight.classList.toggle("hidden", isDark);
  logoDark.classList.toggle("hidden", !isDark);
}

// 1) Initialize theme & icons/logos
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark = stored === "dark" || (!stored && prefersDark);
root.classList.toggle("dark", isDark);
syncUI(isDark);

// 2) Toggle on click
toggle.addEventListener("click", () => {
  const nowDark = root.classList.toggle("dark");
  localStorage.setItem("theme", nowDark ? "dark" : "light");
  syncUI(nowDark);
});
