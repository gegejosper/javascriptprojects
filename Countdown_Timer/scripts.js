let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const timer_data = document.querySelectorAll('.timer__button');

function run_timer(seconds){
    
    //Clear any existing timers
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000 ;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(function(){
        const secondsLeft =  Math.round((then  - Date.now()) / 1000);
        if(secondsLeft <=0){
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
        
    }, 1000);
    
}
function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' + remainderSeconds: remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
    //console.log(minutes, remainderSeconds);
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTimeDisplay.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}  : ${minutes}`
}

timer_data.forEach(timer => timer.addEventListener('click', function(e){
    //console.log(e.target.dataset.time);
    getSeconds = this.dataset.time
    run_timer(getSeconds);
}));
//const input_timer = document.querySelector('#custom'); == below
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    //console.log(mins);
    const munitesToSeconds = mins * 60;
    run_timer(munitesToSeconds);
    this.reset();
});


