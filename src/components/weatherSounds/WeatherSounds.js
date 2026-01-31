import { Dom } from "../../core/Dom";
import { buttonsConfig } from "./buttonsConfig";
import { SoundButton } from "../soundButton/SoundButton";
import { VolumeSlider } from "../volumeSlider/VolumeSlider";

export class WeatherSounds {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    this.createLayout();
    this.createButtons();
    this.createVolume();
  }

  createLayout() {
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

    Dom.mount(this.root, this.app);
  }

  createButtons() {
    buttonsConfig.forEach((data, index) => {
      const button = new SoundButton({
        ...data,
      });
      Dom.mount(this.buttonsWrapper, button.getElement());
      if (index === 0) {
        this.setBackground(button.backgroundImage);
      }
    });
  }

  createVolume() {
    const volume = new VolumeSlider();

    Dom.mount(this.panel, volume.getElement());
  }

  setBackground(image) {
    this.background.style.backgroundImage = `url(${image})`;
  }
}
