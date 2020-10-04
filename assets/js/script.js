const toggleSwitch = document.querySelector('#checkbox_toggle');
const toggleIcon = document.getElementById('toggle_icon');


//* Darkmode 
function darkMode(){
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

//* Lightmode
function lightMode(){
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    toggleIcon.children[0].textContent = "Light Mode";

}


//* Switch theme Dynamically
function switchTheme(event) {
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//* Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

        if(currentTheme === 'dark'){
            toggleSwitch.checked = true;
            darkMode();
        }
}


//================ navigation

const menuBars = document.getElementById('menu-bars');
const overLay = document.getElementById('overlay');


function toggleNav(){
    //Toggle menu bars open/close
    menuBars.classList.toggle('change');
    //toggle menu active
    overLay.classList.toggle('overlay-active');
    if(overLay.classList.contains('overlay-active')){

        overLay.classList.replace('overlay-slide-up', 'overlay-slide-down')

    }else {

        overLay.classList.replace('overlay-slide-down', 'overlay-slide-up')

    }
}


