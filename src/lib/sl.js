
class SL {
  constructor (renderer) {
    this.renderer = renderer;
  }

  run (fps, afterComplete = null) {
    if (fps <= 0) {
      return;
    }
    this.afterComplete = afterComplete;
    this.renderer.clear();

    this.fps = fps;
    this.frame = 0;
    this.setIntervalID = setInterval(this.proceed.bind(this), 1000 / fps);
  }

  stop () {
    clearInterval(this.setIntervalID);
  }

  resume () {
    this.setIntervalID = setInterval(this.proceed.bind(this), 1000 / this.fps);
  }

  proceed () {
    const result = this.renderer.render(this.frame++);

    if (!result) {
      this.stop();
      if (this.afterComplete != null) {
        return this.afterComplete();
      }
    }
  }
}

module.exports = SL;
