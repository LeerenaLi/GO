const items = document.querySelectorAll('.questions__item');
const buttons = document.querySelectorAll('.questions__btn');
const textWrapper = document.querySelectorAll('.questions__item_text-wrapper');

let heightWrapper = 0;

textWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight;
    }
});

items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        const target = e.target;

        buttons.forEach((button, btnIndex) => {
            if (button === target || index === btnIndex) {
                button.classList.toggle('active');
            } else {
                button.classList.remove('active');
            }
        });

        for (let i = 0; i < items.length; i++) {
            if (index === i) {
                textWrapper[i].style.height =
                textWrapper[i].classList.contains('active') ?
                '' : `${heightWrapper}px`;
                textWrapper[i].classList.toggle('active');
            } else {
                textWrapper[i].classList.remove('active');
                textWrapper[i].style.height = '';
            }
        }
    });
});


