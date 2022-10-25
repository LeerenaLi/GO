const openModalBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const form = document.querySelector('#form-modal');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelector('#phone');
const closeElem = document.querySelector('.modal__close');
const closeOver = document.querySelector('.modal__overlay');


const modalControl = () => {
    let heightWrapper = 0;

    if (heightWrapper < modalWrapper.scrollHeight) {
        heightWrapper = modalWrapper.scrollHeight;
    }

    const openModal = () => {
        modal.classList.add('active');
        modalWrapper.style.height =
        modalWrapper.classList.contains('active') ?
        '' : `${heightWrapper}px`;
        modalWrapper.classList.add('active');
    };

    openModalBtn.addEventListener('click', openModal);

    const closeModal = () => {
        modal.classList.remove('active');
        modalWrapper.classList.remove('active');
    };

    closeElem.addEventListener('click', closeModal);
    closeOver.addEventListener('click', closeModal);

    return {closeModal};
};

const {closeModal} = modalControl();

const formControl = (closeModal) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!inputName.value || !inputPhone.value) {
            return;
        } else {
            closeModal();
        }
    });
};
formControl(closeModal);

