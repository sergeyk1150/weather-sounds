import { Dom } from "../../core/Dom";

interface SoundButtonProps {
  audioSrc: string,
  backgroundImage: string,
  iconSrc: string,
  pausedIcon: string,
  onClick: (button: SoundButton) => void,
}

export class SoundButton implements SoundButtonProps {
  audioSrc: string
  backgroundImage: string;
  iconSrc: string;
  pausedIcon: string;
  onClick: (button: SoundButton) => void;
  isActive: boolean;
  $root: HTMLButtonElement;
  $icon: HTMLImageElement;
  
  constructor({
    audioSrc,
    backgroundImage,
    iconSrc,
    pausedIcon,
    onClick,
  }: SoundButtonProps) {
    this.audioSrc = audioSrc;
    this.backgroundImage = backgroundImage;
    this.iconSrc = iconSrc;
    this.pausedIcon = pausedIcon;
    this.onClick = onClick;
    this.isActive = false;
    this.$root = this.createElement();
  }

  createElement(): HTMLButtonElement {
    this.$icon = Dom.create("img", {
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
      children: [this.$icon],
    });
    return $button;
  }

  setActive(): void {
    this.isActive = true;
    this.$root.classList.add("active");
  }
  setInactive(): void {
    this.isActive = false;
    this.$root.classList.remove("active");
    this.showDefaultIcon();
  }

  showPausedIcon(): void {
    this.$icon.src = this.pausedIcon;
  }

  showDefaultIcon(): void {
    this.$icon.src = this.iconSrc;
  }

  getElement(): HTMLButtonElement {
    return this.$root;
  }
}
