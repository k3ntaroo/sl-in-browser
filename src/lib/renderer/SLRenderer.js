
/* abstract class */
class SLRenderer {
  constructor (screen, options) {
    this.screen = screen;
  }

  clear () {
    this.screen.clear();
  }
}

module.exports = SLRenderer;
