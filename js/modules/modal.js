const openModalBtn = document.querySelector('.header__btn');
const navOpenModalBtn = document.querySelector('.navigation__btn');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const form = document.querySelector('#form-modal');
const formModalBtn = document.querySelector('.form-modal__btn');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelector('#phone');
const closeElem = document.querySelector('.modal__close');
const closeOver = document.querySelector('.modal__overlay');
const modalTitle = document.querySelector('.modal__title');
const modalFormFieldset = document.querySelector('.form-modal__fieldset');


const modalControl = () => {
    let heightWrapper = 0;

    if (heightWrapper < modalWrapper.scrollHeight) {
        heightWrapper = modalWrapper.scrollHeight;
    }

    const openModal = () => {
        modal.classList.add('modal_active');
        modalWrapper.style.height =
        modalWrapper.classList.contains('modal__wrapper_active') ?
        '' : `${heightWrapper}px`;
        modalWrapper.classList.add('modal__wrapper_active');
    };

    openModalBtn.addEventListener('click', openModal);
    navOpenModalBtn.addEventListener('click', openModal);

    const closeModal = () => {
        modal.classList.remove('modal_active');
        modalWrapper.classList.remove('modal__wrapper_active');
    };

    closeElem.addEventListener('click', closeModal);
    closeOver.addEventListener('click', closeModal);

    return {closeModal};
};

const {closeModal} = modalControl();

// валидация полей формы

const formControl = (closeModal) => {
    const telMask = new Inputmask('+7 (999)-999-99-99');
    telMask.mask(inputPhone);
    const justValidate = new JustValidate(form);

    justValidate
            .addField(inputName, [
                {
                    rule: 'required',
                    errorMessage: 'Укажите ваше имя',
                },
                {
                    rule: 'minLength',
                    value: 3,
                    errorMessage: 'Не короче 3х символов',
                },
                {
                    rule: 'maxLength',
                    value: 30,
                    errorMessage: 'Слишком длинное имя',
                },
            ])
            .addField(inputPhone, [
                {
                    rule: 'required',
                    errorMessage: 'Укажите ваш телефон',
                },
                {
                    validator(value) {
                        const phone = inputPhone.inputmask.unmaskedvalue();
                        return !!(Number(phone) && phone.length === 10);
                    },
                    errorMessage: 'Телефон не корректный',
                },
            ])
            .onSuccess(event => {
                const target = event.target;
                axios.post('https://jsonplaceholder.typicode.com/posts', {
                    name: target.name.value,
                    tel: inputPhone.inputmask.unmaskedvalue(),
                }).then(response => {
                    target.reset();
                    modalFormFieldset.disabled = true;
                    formModalBtn.disabled = true;
                    modalTitle.textContent =
                        `Спасибо, ваша заявка принята, номер заявки ${response.data.id}`;
                    setTimeout(closeModal, 3000);
                }).catch(err => {
                    console.error('err: ', err);
                    target.reset();
                    modalFormFieldset.disabled = false;
                    modalTitle.textContent = 'Что-то пошло не так, попробуйте позже';
                });
            });
};

formControl(closeModal);

