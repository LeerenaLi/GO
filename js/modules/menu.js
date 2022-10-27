const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation');

let startTime = NaN;
const duration = 1000;

let left = -document.documentElement.scrollWidth;

menu.style.cssText = `
    left: ${left}px;
`;

const stepMenu = (timestamp) => {
    startTime ||= timestamp;

    const progress = (timestamp - startTime) / duration;

    left = Math.trunc(document.documentElement.scrollWidth * progress) - 2;

    if (progress < 1) {
        requestAnimationFrame(stepMenu);
    } else {
        startTime = NaN;
    }

    menu.style.transform = `translateX(${left}px)`;
};

const deleteMenu = (timestamp) => {
    startTime ||= timestamp;

    const progress = (timestamp - startTime) / duration;

    left = 0;

    menu.style.cssText = `
        left: ${left}px;
    `;

    const right = Math.trunc(document.documentElement.scrollWidth * progress);

    if (progress < 1) {
        requestAnimationFrame(deleteMenu);
    } else {
        startTime = NaN;
        menu.style.cssText = `
            left: ${-right}px;
        `;
    }

    menu.style.transform = `translateX(${-right}px)`;
};

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');

    if (hamburger.classList.contains('hamburger__active')) {
        requestAnimationFrame(stepMenu);
    } else {
        requestAnimationFrame(deleteMenu);
    }
});

