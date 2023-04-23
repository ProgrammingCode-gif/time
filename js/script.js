// Стрелки
const secondsEl = document.querySelector('.s');
const minutesEl = document.querySelector('.m');
const hoursEl = document.querySelector('.h');

// Цифры
minClock = document.querySelector('.minutes');
hourClock = document.querySelector('.hours');

function clock() {
    const time = new Date();
    const secondsValue = time.getSeconds();
    const minutesValue = time.getMinutes();
    const hoursValue = time.getHours();

    secondsEl.style.transform = `rotate(${secondsValue * 6}deg)`;
    minutesEl.style.transform = `rotate(${minutesValue * 6}deg)`;
    hoursEl.style.transform = `rotate(${hoursValue * 30}deg)`;

    minClock.innerText = minutesValue > 10 ? minutesValue : '0' + minutesValue;
    hourClock.innerText = hoursValue >= 10 ? hoursValue : '0' + hoursValue;
}

clock();