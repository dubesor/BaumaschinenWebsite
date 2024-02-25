/* aktuell ungenutzt
// Einfaches Script für ein Dropdown-Menü
document.addEventListener('DOMContentLoaded', function() {
    // Alle Menüpunkte mit Untermenüs
    var menuItems = document.querySelectorAll('nav ul li');

    // Funktion zum Ein- und Ausklappen der Untermenüs
    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.children[1].style.display = 'block';
        });
        item.addEventListener('mouseout', function() {
            this.children[1].style.display = 'none';
        });
    });
});

// Script zum Merken der Menüauswahl			
document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.pathname;

    var menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(function(item) {
        var itemPath = new URL(item.href).pathname; // Extraktet den URL namen vom Linkattribut
        if (itemPath === currentPath) {
            item.classList.add("active");
        }
    });
});
*/

// Pageload Popup
window.onload = function() {
  var modal = document.getElementById("demoPopup");
  modal.style.display = "block"; // Show the modal
  span.onclick = function() {
    modal.style.display = "none"; // Hide the modal
  }
}
// POPUP Schliessen
var span = document.getElementsByClassName("close")[0];



// Popupschließen 2
window.onclick = function(event) {
  var modal = document.getElementById("demoPopup");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Hamburger menu mobile
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});


