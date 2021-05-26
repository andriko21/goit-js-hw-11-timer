const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date('May 30, 2021');
    setInterval(() => {
      const cuurentTime = Date.now();
      const deltaTIme = (targetDate - cuurentTime);
      const { days, hours, mins, secs } = getTimerComponents(deltaTIme);
      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.mins.textContent = `${mins}`;
      refs.secs.textContent = `${secs}`;
    },1000)  
  }
}
timer.start()

function pad(value) {
  return String(value).padStart(2,'0')
}

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });

function getTimerComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
   return {days, hours, mins, secs};
}
