const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
  });
}
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}