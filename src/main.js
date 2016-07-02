import SL from './lib/sl';
import Screen from './lib/screen';
import D51Renderer from './lib/renderer/D51Renderer';

window.onload = () => {
  const slField = document.getElementById('sl-wrapper');
  const screen = new Screen(slField);

  const renderer = new D51Renderer(screen, "");

  const loop = () => {
    const sl = new SL(renderer);
    const fps = 20;
    sl.run(fps, loop);
  };

  loop();
}
