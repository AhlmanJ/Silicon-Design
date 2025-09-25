
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