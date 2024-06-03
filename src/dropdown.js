const dropDownButtons = document.querySelectorAll('.drop-down');


dropDownButtons.forEach(element => {
    element.addEventListener('click', ()=> {
    element.nextElementSibling.classList.toggle('active');
})
});
