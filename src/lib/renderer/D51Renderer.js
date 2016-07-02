
const SLRenderer = require('./SLRenderer.js');

class D51Renderer extends SLRenderer {
  constructor (screen, options) {
    super(screen, options);

    this.fly = options.indexOf('F') != -1;
    this.help = options.indexOf('a') != -1;

    const D51Model = require('../resources/D51');
    this.train = D51Model.train;
    this.coal = D51Model.coal;
  }

  render (frame) {
    if (frame - this.screen.width > this.train.length + this.coal.length + 1) {
      return false;
    }

    const trainOffsetH = Math.floor((this.screen.height - this.train.height) / 2);
    const coalOffsetH = trainOffsetH + (this.fly ? 1 : 0);

    const trainOffsetW = this.screen.width - frame - 1;
    const coalOffsetW = trainOffsetW + this.train.length;

    for (let h = 0; h < this.train.height; ++h) {
      this.screen.fillText(
          trainOffsetH + h,
          trainOffsetW,
          this.train.body[frame % this.train.bodyPatterns][h]);
    }

    for (let h = 0; h < this.coal.height; ++h) {
      this.screen.fillText(
          coalOffsetH + h,
          coalOffsetW,
          this.coal.body[frame % this.coal.bodyPatterns][h]);
    }

    this.screen.update();
    return true;
  }
}

module.exports = D51Renderer;
