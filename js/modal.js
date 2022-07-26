const openModalBtn = document.querySelector('.header__btn'),
    modal = document.querySelector('.modal'),
    closeElem = document.querySelector('.modal__close'),
    closeOver = document.querySelector('.modal__overlay'),
    closeSubmit = document.querySelector('.form-modal__btn');

openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeElem.addEventListener('click', () => {
    modal.classList.remove('active');
});

closeOver.addEventListener('click', () => {
    modal.classList.remove('active');
});

closeSubmit.addEventListener('click', () => {
    modal.classList.remove('active');
});