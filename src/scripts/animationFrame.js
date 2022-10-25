export default class AnimationFrame {
  constructor(cb) {
    this.requestId;
    this.cb = cb || (() => 1);
  }

  loop() {
    this.requestId = undefined;
    this.cb();
    this.start();
  }

  start() {
    if (!this.requestId) {
      this.requestId = window.requestAnimationFrame(this.loop.bind(this));
    }
  }

  stop() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
}