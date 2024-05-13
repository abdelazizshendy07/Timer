class timer {
  constructor(durationInput, startButton, pauseButton, callBack) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callBack) {
      this.onStart = callBack.onStart;
      this.onTick = callBack.onTick;
      this.onComplet = callBack.onComplet;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timerRolling);
    }
    this.invertal = setInterval(this.tick, 50);
  };

  pause = () => {
    clearInterval(this.invertal);
    if (this.onComplet) {
      this.onComplet();
    }
  };

  tick = () => {
    if (this.timerRolling <= 0) {
      this.pause;
      if (this.onComplet) {
        this.onComplet();
      }
    } else {
      this.timerRolling = this.timerRolling - 0.05;
      if (this.onTick) {
        this.onTick(this.timerRolling);
      }
    }
  };

  get timerRolling() {
    return this.durationInput.value;
  }

  set timerRolling(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
