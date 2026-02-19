import { Dom } from "../../core/Dom";
import { AudioManager } from "../../audio/AudioManager";
import { AUDIO_DEFAULTS } from "../../constants/audio.config.default";

interface VolumeSliderProps {
  audioManager: AudioManager
}

type InputEvent = Event & {currentTarget: HTMLInputElement}

export class VolumeSlider implements VolumeSliderProps {
  audioManager: AudioManager
  $root: HTMLDivElement

  constructor({ audioManager }: VolumeSliderProps) {
    this.audioManager = audioManager;
    this.$root = this.createElement();
  }

  createElement(): HTMLDivElement {
    const $input = Dom.create("input", {
      attr: {
        type: "range",
        min: AUDIO_DEFAULTS.MIN,
        max: AUDIO_DEFAULTS.MAX,
        step: AUDIO_DEFAULTS.STEP,
        value: AUDIO_DEFAULTS.VALUE,
      },
      events: {
        input: (event: InputEvent): void  => {
          this.audioManager.setVolume(event.currentTarget.valueAsNumber);
        },
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

  getElement(): HTMLDivElement {
    return this.$root;
  }
}
