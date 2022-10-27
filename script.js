// gettig the toggle swich element from the HTML
const toggleSwich = document.querySelector('input[type="checkbox"]');
// getting all the HTML elements
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
    // changing the images to the dark mode/ light images:
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// toggle between dark and light mode
function toggleDarkLightMode(isLight) {
    // change the background color of our navigation to the light style color (white) we can say here if islight is true then do rgb(255 255 255 / 50%) is not then do this 
    // 'rgb(0 0 0 / 50%)'
    nav.style.background = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // change the background color of our textbox to the light style color (dark) or dark style color
    textBox.style.background = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    // change the text of our toggle-text to say light mode
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' :'Dark Mode';
    // replace the moon icon with the sun
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // call the image load function 
    isLight ? imageMode('light') : imageMode('dark')
}

// Swich Theme Dynamically (From Light To Dark and from Dark To Light) (passing the event of the switch)
function switchTheme(event) {
    // getting the checked boolean i.e. true when turned on and false when turned off
    // if that is true (that means we are in dark mode)
    if (event.target.checked) {
        // document.documentElement returns the element that is the root element of the document i.e. the highest possible element <html> for HTML for HTML documents
        // we set the attribute of data-theme to dark to get the dark colours 
        document.documentElement.setAttribute('data-theme', 'dark');
        // local storage allows you to save data between sessions we are setting the theme to dark in the local storage
        localStorage.setItem('theme', 'dark');
        // call the darkmode function
        toggleDarkLightMode(false);
        // else if we are in light mode
    } else {
        // we set the attribute of data-theme to light to get the light colours 
        document.documentElement.setAttribute('data-theme', 'light');
        // we are setting the theme to light in the local storage (this can be found in the inspect, application and local storage)
        localStorage.setItem('theme', 'light');
        // call the lightmode function
        toggleDarkLightMode(true);
    }
}


// On change event is where the change event has been changed
// Event Listender
toggleSwich.addEventListener('change', switchTheme);

// Check Local Storage For the current theme // local storage allows you to save data between sessions 
const currentTheme = localStorage.getItem('theme');
// Checks if anything is inside the localStorage
if (currentTheme) {
    // We then change the HTML to our current theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    // We are checking if the current theme is dark theme
    if (currentTheme === 'dark') {
        // we are then setting the toggle swich to true
        toggleSwich.checked = true;
        // we want to call the darkMode function
        toggleDarkLightMode(false);
    }
}

