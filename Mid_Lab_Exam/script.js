

// Get references to the logo and navigation bar container
const logo = document.getElementById('logo');
const navbarContainer = document.getElementById('navbar-container');

// Add a click event listener to the logo
logo.addEventListener('click', () => {
    // Check if the navigation bar container exists
    if (navbarContainer) {
        // Remove the navigation bar container from the DOM
        navbarContainer.remove();
    }
});


