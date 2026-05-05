// Dark Mode and Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuDropdown = document.querySelector('.nav-menu-dropdown');
    const navLinks = document.querySelectorAll('.nav-menu a');

    themeToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent dropdown from closing
            toggleDarkMode();
        });
    });

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            // On mobile, toggle nav-menu; on desktop, toggle nav-menu-dropdown
            if (window.innerWidth <= 768) {
                navMenu.classList.toggle('active');
            } else {
                navMenuDropdown.classList.toggle('active');
            }
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navMenuDropdown) {
                navMenuDropdown.classList.remove('active');
            }
        });
    });

    const saved = localStorage.getItem('dark-mode');
    if (saved === 'true') {
        document.documentElement.classList.add('dark-mode');
    }
    updateToggleLabel();
});

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark);
    updateToggleLabel();
}

function updateToggleLabel() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) {
        return;
    }
    const isDark = document.documentElement.classList.contains('dark-mode');
    toggle.setAttribute('aria-label', isDark ? 'Toggle light mode' : 'Toggle dark mode');
}
