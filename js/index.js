class CountdownTimer {
  static description = "Логіка лічильника";
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    this.getRefs();
  }

  start() {
    const dataID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const finalTime = this.getTimerComponents(deltaTime);
      this.updateInterface(finalTime);
      this.stop(finalTime, dataID);
    }, 1000);
  }

  stop({ days, hours, mins, secs }, id) {
    if (days === `00` && hours === `00` && mins === `00` && secs === `00`) {
      clearInterval(id);
      alert('happy birthday');
    }
  }

  getRefs() {
    const elementRef = document.querySelector(this.selector);
    return {
      days: elementRef.querySelector('[data-value="days"]'),
      hours: elementRef.querySelector('[data-value="hours"]'),
      mins: elementRef.querySelector('[data-value="mins"]'),
      secs: elementRef.querySelector('[data-value="secs"]'),
    };
  }

  updateInterface({ days, hours, mins, secs }) {
    this.getRefs().days.textContent = `${days}`;
    this.getRefs().hours.textContent = `${hours}`;
    this.getRefs().mins.textContent = `${mins}`;
    this.getRefs().secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimerComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 30, 2021"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jun 1, 2021"),
});

new CountdownTimer({
  selector: "#timer-3",
  targetDate: new Date("Jun 30, 2021"),
});
