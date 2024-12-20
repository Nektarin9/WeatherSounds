import { handlerAudio } from "./index";

export function initialization(config) {
  const audio = document.querySelectorAll("button > audio");
  const btn = document.querySelectorAll("button")
  const inputRangeVolume = document.getElementById("input");
  inputRangeVolume.addEventListener("input", ({ target }) => {
    audio.forEach((item) => (item.volume = target.value));
  });
  for (let i = 0; i < audio.length; i++) {
    handlerAudio(btn[i], config.IMAGE_URL[i], config.isPause[i].title);
  }
}
