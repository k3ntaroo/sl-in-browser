import SmokeModel from '../resources/smoke';

export default class Smoke {
  constructor (screen, pattern, funnelH, funnelW) {
    this.screen = screen;

    this.pattern = pattern;

    this.startH = funnelH;
    this.startW = funnelW;

    this.frame = 0;
  }

  setFrame (frame) {
    this.frame = frame;
  }

  proceed () {
    if (this.frame >= SmokeModel.stuffs) {
      return false;
    }

    const offsetH = this.startH + SmokeModel.offsetH[this.frame];
    const offsetW = this.startW + SmokeModel.offsetW[this.frame];

    if (this.frame > 0) {
      const prevOffsetH = this.startH + SmokeModel.offsetH[this.frame - 1];
      const prevOffsetW = this.startW + SmokeModel.offsetW[this.frame - 1];

      this.screen.fillText(
          prevOffsetH,
          prevOffsetW,
          SmokeModel.eraser[this.frame - 1]);
    }

    this.screen.fillText(
        offsetH,
        offsetW,
        SmokeModel.body[this.pattern][this.frame]);

    ++this.frame;
  }
}
