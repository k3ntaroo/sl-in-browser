
class Screen {
  constructor (dom) {
    this.dom = dom;

    const domStyle = getComputedStyle(dom, null);
    const fontSize = parseFloat(domStyle.fontSize);

    this.height = Math.floor(dom.clientHeight / fontSize);
    this.width = Math.floor(dom.clientWidth / (fontSize / 2));

    this.text = new Array(this.height);
    for (let j = 0; j < this.height; ++j) {
      this.text[j] = "";
    }
  }

  fillText (h, w, str) {
    if (h < 0 || h >= this.height) {
      return;
    }

    if (w < 0) {
      str = str.slice(-w, str.length);
    }

    if (w + str.length > this.width) {
      str = str.slice(0, Math.max(0, this.width - w));
    }

    if (str == "") {
      return;
    }
    
    const line = this.text[h];
    if (line.length < w) {
      this.text[h] = line + " ".repeat(w - line.length) + str;
    } else {
      const offset = Math.max(0, w);
      this.text[h] =
        line.slice(0, offset)
        + str
        + line.slice(offset + str.length, line.length);
    }
  }

  clear () {
    for (let h = 0; h < this.height; ++h) {
      this.text[h] = "";
    }
  }

  update () {
    let text = "";
    // Simply appending strings is usually faster than join
    for (let h = 0; h < this.height; ++h) { 
      text += this.text[h] + '\n';
    }

    this.dom.textContent = text;
  }
}

module.exports = Screen;
