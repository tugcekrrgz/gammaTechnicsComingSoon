function calculateTimeDifference(startDate, endDate) {
    const difference = endDate.getTime() - startDate.getTime();
    return difference;
}


const startDate = new Date(2023, 6, 28);
const endDate = new Date(2023,7,17);

const timerDisplay = document.getElementById('timer'); 


function startTimer() {
    const now = new Date();

    const timerValueInSeconds = Math.floor(calculateTimeDifference(now, endDate) / 1000);

    if (timerValueInSeconds <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Süre Doldu!';
        return;
    }

    const seconds = timerValueInSeconds % 60;
    const minutes = Math.floor((timerValueInSeconds % (60 * 60)) / 60);
    const hours = Math.floor((timerValueInSeconds % (60 * 60 * 24)) / (60 * 60));
    const days = Math.floor(timerValueInSeconds / (60 * 60 * 24));

    timerDisplay.textContent = `Kalan Süre: ${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
}

function setTimerDisplay(days, hours, minutes, seconds) {
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function startTimer() {
    const now = new Date();

    const timerValueInSeconds = Math.floor(calculateTimeDifference(now, endDate) / 1000);

    if (timerValueInSeconds <= 0) {
        clearInterval(timerInterval);
        setTimerDisplay(0, 0, 0, 0); 
        return;
    }

    const seconds = timerValueInSeconds % 60;
    const minutes = Math.floor((timerValueInSeconds % (60 * 60)) / 60);
    const hours = Math.floor((timerValueInSeconds % (60 * 60 * 24)) / (60 * 60));
    const days = Math.floor(timerValueInSeconds / (60 * 60 * 24));

    setTimerDisplay(days, hours, minutes, seconds);
}

const timerInterval = setInterval(startTimer, 1000);
startTimer();
