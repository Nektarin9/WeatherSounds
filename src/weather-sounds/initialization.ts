import { handlerAudio } from "./index";
import { ConfigType } from "./interface";

export function initialization(config: ConfigType) {
  const audio = document.querySelectorAll("button > audio") as NodeListOf<HTMLAudioElement>
  const btn = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>
  const inputRangeVolume = document.getElementById("input") as HTMLInputElement
  inputRangeVolume.addEventListener("input", (event: Event) => {
    const target = event.target as HTMLInputElement;
    audio.forEach((item) => (item.volume = Number(target.value)));
  });
  for (let i = 0; i < audio.length; i++) {
    handlerAudio(btn[i], config.IMAGE_URL[i], config.isPause[i].title);
  }
}
