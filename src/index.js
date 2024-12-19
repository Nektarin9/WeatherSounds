import { template, initialization } from "./weather-sounds/index";

import urlIconSun from "../public/assets/icons/sun.svg";
import urlIconRain from "../public/assets/icons/cloud-rain.svg";
import urlIconSnow from "../public/assets/icons/cloud-snow.svg";
import urlAudioSun from "../public/sounds/summer.mp3";
import urlAudioRain from "../public/sounds/rain.mp3";
import urlAudioSnow from "../public/sounds/winter.mp3";

const configTempalte = {
  urlAudio1: urlAudioSun,
  urlIconSun1: urlIconSun,
  urlAudio2: urlAudioRain,
  urlIconSun2: urlIconRain,
  urlAudio3: urlAudioSnow,
  urlIconSun3: urlIconSnow,
};

template(configTempalte);

initialization();
