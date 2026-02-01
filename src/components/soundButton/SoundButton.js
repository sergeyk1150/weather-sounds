import { Dom } from "../../core/Dom";

export class SoundButton {
  constructor({
    audioSrc,
    backgroundImage,
    icon,
    pauseIcon: pausedIcon,
    onClick,
  }) {
    this.audioSrc = audioSrc;
    this.backgroundImage = backgroundImage;
    this.iconSrc = icon;
    this.pausedIcon = pausedIcon;
    this.onClick = onClick;

    this.isActive = false;

    this.$root = this.createElement();
  }

  createElement() {
    this.iconEl = Dom.create("img", {
      attr: {
        src: this.iconSrc,
        alt: "",
      },
    });
    const $button = Dom.create("button", {
      className: "sound-button",
      style: {
        backgroundImage: `url(${this.backgroundImage})`,
      },
      events: {
        click: () => this.onClick(this),
      },
      children: [this.iconEl],
    });
    return $button;
  }

  setActive() {
    this.isActive = true;
    this.$root.classList.add("active");
  }
  setInactive() {
    this.isActive = false;
    this.$root.classList.remove("active");
    this.showDefaultIcon();
  }

  showPausedIcon() {
    this.iconEl.src = this.pausedIcon;
  }

  showDefaultIcon() {
    this.iconEl.src = this.iconSrc;
  }

  getElement() {
    return this.$root;
  }
}
