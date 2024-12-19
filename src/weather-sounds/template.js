
import "../app.scss";

export function template({urlAudio1, urlIconSun1, urlAudio2, urlIconSun2, urlAudio3, urlIconSun3}) {
    const root = document.getElementById("root");
    root.innerHTML =`
        <section>
          <h1>Weather sounds</h1>
          <div class="container">
            <button class="music-block-summer-bg">
              <audio id="audioSummer" src="${urlAudio1}" type="audio/mpeg"></audio>
              <img class="icon" src="${urlIconSun1}" alt="icon">
            </button>
    
            <button class="music-block-rainy-bg">
              <audio id="audioRain" src="${urlAudio2}" type="audio/mpeg"></audio>
              <img class="icon" src="${urlIconSun2}" alt="icon">
            </button>
    
            <button class="music-block-winter-bg">
              <audio id="audioWinter" src="${urlAudio3}" type="audio/mpeg"></audio>
              <img class="icon" src="${urlIconSun3}" alt="icon">
            </button>
          </div>
        </section>
        <input id="input" type="range" min="0" max="1" step="0.01" value="0.5">
    `;
}