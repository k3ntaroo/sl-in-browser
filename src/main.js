window.onload = () => {
  const SL = require('./lib/sl');
  const Screen = require('./lib/screen');

  const slField = document.getElementById('sl-wrapper');
  const screen = new Screen(slField);

  const D51Renderer = require('./lib/renderer/D51Renderer');;
  const renderer = new D51Renderer(screen, "");

  const loop = () => {
    const sl = new SL(renderer);
    const fps = 20;
    sl.run(fps, loop);
  };

  loop();
}
