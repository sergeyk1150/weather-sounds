export class WeatherSounds {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
    this.createLayout();
  }
  createLayout() {
    const app = document.createElement("div");
    app.classList.add("app");
    const child = `<div class="app__background" style="background-image: url(../assets/rainy-bg.jpg);"></div>
    <div class="control-panel">
      <div class="buttons">
        <button
          class="sound-button"
          style="background-image: url(../assets/rainy-bg.jpg);"
        >
          <img src="../assets/icons/cloud-rain.svg" alt="">
        </button>
        <button
          class="sound-button"
          style="background-image: url(../assets/summer-bg.jpg);"
        >
          <img src="../assets/icons/sun.svg" alt="">
        </button>
        <button
          class="sound-button"
          style="background-image: url(../assets/winter-bg.jpg);"
        >
          <img src="../assets/icons/cloud-snow.svg" alt="">
        </button>
      </div>
      <div class="volume">
        <label>Громкость</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value="0.5"
        >
      </div>
    </div>`;
    app.innerHTML = child;
    this.root.append(app);
  }
}
