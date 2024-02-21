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
