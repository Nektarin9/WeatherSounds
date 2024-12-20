import "./app.scss";

import { template, initialization } from "./weather-sounds";

import IMG_SUMMER from "../public/assets/summer-bg.jpg";
import IMG_RAINT from "../public/assets/rainy-bg.jpg";
import IMG_WINTER from "../public/assets/winter-bg.jpg";

import iconSun from "../public/assets/icons/sun.svg";
import iconRain from "../public/assets/icons/cloud-rain.svg";
import iconSnow from "../public/assets/icons/cloud-snow.svg";

import audioSun from "../public/sounds/summer.mp3";
import audioRain from "../public/sounds/rain.mp3";
import audioSnow from "../public/sounds/winter.mp3";

const configTempalte = [
  {
    audio: audioSun,
    icon: iconSun,
    title: "SUMMER",
    className: "music-block-summer-bg",
  },
  {
    audio: audioRain,
    icon: iconRain,
    title: "RAINT",
    className: "music-block-rainy-bg",
  },
  {
    audio: audioSnow,
    icon: iconSnow,
    title: "WINTER",
    className: "music-block-winter-bg",
  },
];

template(configTempalte);

export const config = {
  IMAGE_URL: [IMG_SUMMER, IMG_RAINT, IMG_WINTER],
  isPause: [
    {
      isPauseAudio: false,
      title: "PAUSE_SUMMER",
    },
    {
      isPauseAudio: false,
      title: "PAUSE_RAINT",
    },
    {
      isPauseAudio: false,
      title: "PAUSE_WINTER",
    },
  ],
};

initialization(config);
