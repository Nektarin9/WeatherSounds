import { playMusic } from "./index";

export function handlerAudio(btnAudio, titleAudio, imageUrl) {
  const body = document.body;
  btnAudio.addEventListener("click", () => {
    playMusic(titleAudio);
    body.style.backgroundImage = `url(${imageUrl})`;
  });
}
