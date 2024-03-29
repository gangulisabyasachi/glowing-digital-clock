// JavaScript

// Toggle sidebar visibility
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });
});
