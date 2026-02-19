import { Dom } from "../../core/Dom";
import { buttonsConfig } from "./buttonsConfig";
import { SoundButton } from "../soundButton/SoundButton";
import { VolumeSlider } from "../volumeSlider/VolumeSlider";
import { AudioManager } from "../../audio/AudioManager";

export class WeatherSounds {
  $root: HTMLDivElement
  audioManager: AudioManager
  background: HTMLDivElement
  buttonsWrapper: HTMLDivElement
  panel: HTMLDivElement
  app: HTMLDivElement
  currentButton: SoundButton | null

  constructor(rootSelector: string) {
    this.$root = document.querySelector(rootSelector)!;
    this.audioManager = new AudioManager();
    this.currentButton = null
    this.createLayout();
    this.createButtons();
    this.createVolume();
  }

  createLayout(): void {
    this.background = Dom.create("div", {
      className: "app__background",
    });

    this.buttonsWrapper = Dom.create("div", {
      className: "buttons",
    });

    this.panel = Dom.create("div", {
      className: "control-panel",
      children: [this.buttonsWrapper],
    });

    this.app = Dom.create("div", {
      className: "app",
      children: [this.background, this.panel],
    });

    Dom.mount(this.$root, this.app);
  }

  createButtons(): void {
    buttonsConfig.forEach((data, index) => {
      const button = new SoundButton({
        ...data,
        onClick: this.handlerButtonClick.bind(this),
      });
      Dom.mount(this.buttonsWrapper, button.getElement());
      if (index === 0) {
        this.setBackground(button.backgroundImage);
      }
    });
  }

  createVolume(): void {
    const volume = new VolumeSlider({ audioManager: this.audioManager });

    Dom.mount(this.panel, volume.getElement());
  }

  setBackground(image: string): void {
    this.background.style.backgroundImage = `url(${image})`;
  }

  handlerButtonClick(button: SoundButton): void {
    if (this.currentButton === button) {
      if (this.audioManager.isPaused()) {
        this.audioManager.play(button.audioSrc);
        button.showDefaultIcon();
      } else {
        this.audioManager.pause();
        button.showPausedIcon();
      }
      return;
    }

    if (this.currentButton) {
      this.currentButton.setInactive();
      this.audioManager.stop();
    }

    this.currentButton = button;
    button.setActive();
    button.showDefaultIcon();

    this.audioManager.play(button.audioSrc);
    this.setBackground(button.backgroundImage);
  }
}
