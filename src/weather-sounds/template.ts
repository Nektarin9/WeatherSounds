import { ConfigTempalteType } from "./interface";

export function template(configTempalte: ConfigTempalteType[]) {
    const root = document.getElementById("root") as HTMLDivElement;
    let musicBlock = ""

    configTempalte.forEach(({audio, icon, className, title}) => {
      musicBlock = musicBlock + `<button class="${className}">
                    <audio id="${title}" src="${audio}" type="audio/mpeg"></audio>
                    <img class="icon" src="${icon}" alt="icon">
                  </button>`
    });
    root.innerHTML =`
        <section>
          <h1>Weather sounds</h1>
          <div class="container">
            ${musicBlock}
          </div>
        </section>
        <input id="input" type="range" min="0" max="1" step="0.01" value="0.5">
    `;
}