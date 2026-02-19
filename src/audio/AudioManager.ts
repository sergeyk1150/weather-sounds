import { AUDIO_DEFAULTS } from "../constants/audio.config.default";

export class AudioManager {
  audio: HTMLAudioElement
  currentSrc: string | null

  constructor() {
    this.audio = new Audio();
    this.audio.volume = Number(AUDIO_DEFAULTS.VALUE);
    this.currentSrc = null;
  }

  play(src: string | null): void {
    if (this.currentSrc !== src) {
      this.stop();
      this.audio.src = src;
      this.currentSrc = src;
    }
    this.audio.play();
  }

  pause(): void {
    this.audio.pause();
  }

  isPaused(): boolean {
    return this.audio.paused;
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(value: number): void {
    this.audio.volume = value;
  }
}
