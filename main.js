
// -----------------------------------------------------ACCORDION CODE START---------------------------------------------------------------------//

const items = document.querySelectorAll('.item'); // Declare a constant variable for all my "item" i the HTML with the name "items".

// For each "item" i HTML i want to add the "active" class that will open each "answer" i the accordion, with a 'click'.
items.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');    // Added a "?" to avoid getting a "ERROR" if there are no "activ-class" i my item.
        item.classList.add('active');
    });
});

// -----------------------------------------------------ACCORDION CODE END---------------------------------------------------------------------//

// -----------------------------------------------------DARKMODE CODE START---------------------------------------------------------------------//

const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode()
    }else(
        disableDarkMode()
    )
} else if(hasDarkmode === 'on') {
    enableDarkMode()
} else if(hasDarkmode === 'off') {
    disableDarkMode()
}

darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    }else{
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
})

function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}


// -----------------------------------------------------DARKMODE CODE END---------------------------------------------------------------------//