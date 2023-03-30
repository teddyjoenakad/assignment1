// Elements
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const darkButton = document.querySelector('.dark');
const h3 = document.querySelector('h3');
const list = document.querySelectorAll('li');


// dark theme
let changeBG = () => {
    main.classList.toggle('darkMain');
    h3.classList.toggle('darkMain');
    nav.classList.toggle('darkNav');
    for (let lists of li) {
        lists.classList.toggle('darkText');
    };

    if (darkButton.textContent === 'Dark Theme') {
        darkButton.innerText = 'Light Theme';
    } 
    else {
        darkButton.innerText = 'Dark Theme';
    }
};

darkButton.addEventListener('click', changeBG);

