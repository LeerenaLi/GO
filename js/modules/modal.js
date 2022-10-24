const openModalBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeElem = document.querySelector('.modal__close');
const closeOver = document.querySelector('.modal__overlay');
const closeSubmit = document.querySelector('.form-modal__btn');

let heightWrapper = 0;

if (heightWrapper < modalWrapper.scrollHeight) {
    heightWrapper = modalWrapper.scrollHeight;
}

openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modalWrapper.style.height =
    modalWrapper.classList.contains('active') ?
    '' : `${heightWrapper}px`;
    modalWrapper.classList.add('active');
});

closeElem.addEventListener('click', () => {
    modal.classList.remove('active');
    modalWrapper.classList.remove('active');
});

closeOver.addEventListener('click', () => {
    modal.classList.remove('active');
    modalWrapper.classList.remove('active');
});

closeSubmit.addEventListener('click', () => {
    modal.classList.remove('active');
    modalWrapper.classList.remove('active');
});
