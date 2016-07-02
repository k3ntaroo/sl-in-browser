
/* abstract class */
export default class SLRenderer {
  constructor (screen, options) {
    this.screen = screen;
  }

  clear () {
    this.screen.clear();
  }
}
