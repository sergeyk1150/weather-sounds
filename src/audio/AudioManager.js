export class AudioManager {
  constructor() {
    this.audio = new Audio();
    this.audio.volume = 0.5;
    this.currentSrc = null;
  }

  play(src) {
    if (this.currentSrc === src && !this.audio.paused) return;

    if (this.currentSrc !== src) {
      this.stop();
      this.audio.src = src;
      this.currentSrc = src;
    }
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(value) {
    this.audio.volume = value;
  }
}
