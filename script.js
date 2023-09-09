function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // Add/remove the open class for this element
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}