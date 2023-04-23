// Стрелки
const secondsEl = document.querySelector('.s');
const minutesEl = document.querySelector('.m');
const hoursEl = document.querySelector('.h');

// Элементы секундомера
const stopMinutes = document.querySelector('.stopwatch__minutes');
const stopSeconds = document.querySelector('.stopwatch__seconds');
const stopHours = document.querySelector('.stopwatch__hours');
const stopBtn = document.querySelector('.stopwatch__btn');
const stopSpan = document.querySelector('.tabsLink__span')

// Цифры
minClock = document.querySelector('.minutes');
hourClock = document.querySelector('.hours');

// Элементы смены режима
const tabsLinks = document.querySelectorAll('.tabsItem');
const tabsContent = document.querySelectorAll('.tabsContentItem');

// Смена режима
for(let i = 0; i < tabsLinks.length; i++) {
    tabsLinks[i].addEventListener('click', function(event) {
        event.preventDefault();

        for(let x = 0; x < tabsLinks.length; x++) {
            tabsLinks[x].classList.remove('active');
            tabsContent[x].classList.remove('active');
        }
    
        this.classList.add('active');
        tabsContent[i].classList.add('active')
    })
}

// Запуск секундомера
stopBtn.addEventListener('click', function() {

    if(this.innerHTML === 'start') {

        this.innerHTML = 'stop';
        stopSpan.classList.add('active');

        let i = 0;
        setTimeout(() => secundomer(this, i), 1000)

    }else if(this.innerHTML === 'stop') {

        this.innerHTML = 'clear';
        stopSpan.classList.remove('active');
        stopSpan.classList.add('active_clear');

    } else {

        this.innerHTML = 'start';
        stopSpan.classList.remove('active_clear')

        stopSeconds.innerHTML = 0;
        stopMinutes.innerHTML = 0;
        stopHours.innerHTML = 0;
    }
})


// Логика часов
function clock() {
    
    // Получение данных времени
    const time = new Date();
    const secondsValue = time.getSeconds();
    const minutesValue = time.getMinutes();
    const hoursValue = time.getHours();

    // Поворот стрелок
    secondsEl.style.transform = `rotate(${secondsValue * 6}deg)`;
    minutesEl.style.transform = `rotate(${minutesValue * 6}deg)`;
    hoursEl.style.transform = `rotate(${hoursValue * 30}deg)`;

    // Заполнение значений цифр
    minClock.innerText = minutesValue > 9 ? minutesValue : '0' + minutesValue;
    hourClock.innerText = hoursValue > 9 ? hoursValue : '0' + hoursValue;

    // Вызов рекурсией
    setTimeout(clock, 1000)
}

// Логика секундомера
function secundomer(btn, i) {

    if(btn.innerHTML === 'stop') {

        if(i >= 59) {

            i = 0;
            stopSeconds.innerHTML = i

            if(stopMinutes.innerHTML >= 59) {
                stopMinutes.innerHTML = 0;
                stopHours.innerHTML++;

            }else {
                stopMinutes.innerHTML++;
            }

        } else {

            i++;
            stopSeconds.innerHTML = i
        }

        setTimeout(() => secundomer(btn, i), 1000);
    }

}

clock()