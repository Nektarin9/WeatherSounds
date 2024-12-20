import { config } from "../app";

export function playMusic(id) {
  const { isPause } = config;
  const audio = document.querySelectorAll("button > audio");

  isPause.forEach((item, index) => {
    audio[index].pause();
    if (id === item.title) {
      item.isPauseAudio ? audio[index].pause() : audio[index].play();
      item.isPauseAudio = !item.isPauseAudio;
    } else {
      item.isPauseAudio = false;
    }
  });
}
