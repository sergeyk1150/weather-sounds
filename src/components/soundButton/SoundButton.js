import { Dom } from "../../core/Dom";

export class SoundButton {
  constructor({ audioSrc, backgroundImage, icon, onClick }) {
    this.audioSrc = audioSrc;
    this.backgroundImage = backgroundImage;
    this.icon = icon;
    this.onClick = onClick;

    this.isActive = false;

    this.$root = this.createElement();
  }

  createElement() {
    const $button = Dom.create("button", {
      className: "sound-button",
      style: {
        backgroundImage: `url(${this.backgroundImage})`,
      },
      events: {
        click: () => this.onClick(this),
      },
      children: [
        this.icon
          ? Dom.create("img", {
              attr: { src: this.icon, alt: "" },
            })
          : null,
      ],
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
  }

  getElement() {
    return this.$root;
  }
}
