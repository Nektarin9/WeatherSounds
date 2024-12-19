import { IS_PAUSE } from "./index";

export function playMusic(type) {
  if (type === "AUDIO_SUMMER") {
    audioRain.pause();
    audioWinter.pause();

    if (IS_PAUSE.IS_PAUSE_SUMMER) {
      audioSummer.pause();
    } else {
      audioSummer.play();
    }
    (IS_PAUSE.IS_PAUSE_SUMMER = !IS_PAUSE.IS_PAUSE_SUMMER),
      (IS_PAUSE.IS_PAUSE_RAINT = false),
      (IS_PAUSE.IS_PAUSE_WINTER = false);
  } else if (type === "AUDIO_RAINT") {
    audioSummer.pause();
    audioWinter.pause();

    if (IS_PAUSE.IS_PAUSE_RAINT) {
      audioRain.pause();
    } else {
      audioRain.play();
    }
    (IS_PAUSE.IS_PAUSE_SUMMER = false),
      (IS_PAUSE.IS_PAUSE_RAINT = !IS_PAUSE.IS_PAUSE_RAINT),
      (IS_PAUSE.IS_PAUSE_WINTER = false);
  } else if (type === "AUDIO_WINTER") {
    audioRain.pause();
    audioSummer.pause();
    if (IS_PAUSE.IS_PAUSE_WINTER) {
      audioWinter.pause();
    } else {
      audioWinter.play();
    }
    (IS_PAUSE.IS_PAUSE_SUMMER = false),
      (IS_PAUSE.IS_PAUSE_RAINT = false),
      (IS_PAUSE.IS_PAUSE_WINTER = !IS_PAUSE.IS_PAUSE_WINTER);
  }
}
