const hamburder_menu = document.querySelector('.hamburger-menu');
const offScreen_menu = document.querySelector('.off-screen-menu');

const listItems = document.querySelectorAll('.header-lists li'); // Select all list items
const social = document.querySelectorAll('.header-social a'); // Select all social items 


console.log(listItems);
hamburder_menu.addEventListener('click', () => {
    hamburder_menu.classList.toggle('active');
    offScreen_menu.classList.toggle('active');
});

listItems.forEach(item => {
    item.addEventListener('click', () => {
        offScreen_menu.classList.remove('active'); // Close the off-screen menu
        hamburder_menu.classList.remove('active'); // Also remove active class from hamburger menu if needed
    });
});

social.forEach(item => {
    item.addEventListener('click', () => {
        offScreen_menu.classList.remove('active'); // Close the off-screen menu
        hamburder_menu.classList.remove('active'); // Also remove active class from hamburger menu if needed
    });
});