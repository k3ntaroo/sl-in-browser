
/* abstract class */
class SLRenderer {
  constructor (screen, options) {
    this.screen = screen;
    this.options = options;
  }

  clear () {
    this.screen.clear();
  }
}

module.exports = SLRenderer;
