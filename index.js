const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let interval;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    
    let hour = Math.floor(seconds / 60 / 60)
    let minutes = Math.floor((seconds - (hour * 60 *60) )/ 60)
    let second = seconds - ((hour * 60 * 60)+ (minutes * 60))

 interval = setInterval(() =>{
    console.log("[+] часы" +  ' ' + hour,"[+] минуты" +  ' ' + minutes, "[+] секунды" +  ' ' + second);
    timerEl.textContent = hour + ':\n' + minutes + ':\n' + second
    if(second === 0)
    {
      if(minutes === 0)
      {
        minutes = 60
        hour = hour -1;
      }
      second = 60
      minutes = minutes -1;
    }
    console.log(second);
    seconds = seconds - 1
    second--
    
  }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  clearInterval(interval)
  animateTimer(seconds)

  inputEl.value = '';
});
