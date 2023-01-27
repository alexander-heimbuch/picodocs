const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("opened");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("opened");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
