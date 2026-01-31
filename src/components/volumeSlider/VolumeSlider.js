import { Dom } from "../../core/Dom";

export class VolumeSlider {
  constructor() {
    this.$root = this.createElement();
  }

  createElement() {
    const $input = Dom.create("input", {
      attr: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
        value: 0.5,
      },
      events: {
        input: () => {},
      },
    });
    const $label = Dom.create("label", {
      children: [Dom.text("Громкость")],
    });
    const $slider = Dom.create("div", {
      className: "volume",
      children: [$input, $label],
    });
    return $slider;
  }

  getElement() {
    return this.$root;
  }
}
