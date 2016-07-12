import SLRenderer from './SLRenderer';
import D51Model from '../resources/D51';
import SmokeModel from '../resources/smoke';
import Smoke from './Smoke';

export default class D51Renderer extends SLRenderer {
  constructor (screen, options) {
    super(screen, options);

    this.fly = options.indexOf('F') != -1;
    this.help = options.indexOf('a') != -1;

    this.train = D51Model.train;
    this.coal = D51Model.coal;

    this.smokes = [];
  }

  render (frame) {
    if (frame - this.screen.width > this.train.length + this.coal.length + 1) {
      return false;
    }

    const trainOffsetH = Math.floor((this.screen.height - this.train.height + SmokeModel.height) / 2);
    const coalOffsetH = trainOffsetH + (this.fly ? 1 : 0);
    const funnelPositionH = trainOffsetH - 1;

    const trainOffsetW = this.screen.width - frame - 1;
    const coalOffsetW = trainOffsetW + this.train.length;
    const funnelPositionW = trainOffsetW + this.train.funnelOffset;

    if (frame % 4 == 0) {
      this.smokes[(frame / 4) % SmokeModel.stuffs] = new Smoke(this.screen, frame / 4 % 2, funnelPositionH, funnelPositionW);

      this.smokes.forEach((x) => x.proceed());
    }

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
