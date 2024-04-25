// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Cart Notification
function showNotification() {
  var notification = document.getElementById("notification");
  notification.classList.add("show");

  setTimeout(closeNotification, 3000); // Close after 3 seconds (3000 milliseconds)
}

function closeNotification() {
  var notification = document.getElementById("notification");
  notification.classList.remove("show");
}
