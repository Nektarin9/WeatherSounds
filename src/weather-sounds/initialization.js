
import { SONG_TITLE, IMAGE_URL, handlerAudio} from "./index"

export function initialization() {
    const audioSummer = document.getElementById("audioSummer")
    const audioRain = document.getElementById("audioRain")
    const audioWinter = document.getElementById("audioWinter")

    const btnAudioSummer = document.querySelector(".music-block-summer-bg")
    const btnAudioRain = document.querySelector(".music-block-rainy-bg")
    const btnAudioWinter = document.querySelector(".music-block-winter-bg")

    const inpuеRangeVolume = document.getElementById("input")


    inpuеRangeVolume.addEventListener("input", ({target}) => {
        audioSummer.volume = target.value
        audioRain.volume  = target.value
        audioWinter.volume  = target.value
    })
    handlerAudio(btnAudioSummer, SONG_TITLE.AUDIO_SUMMER, IMAGE_URL.IMG_SUMMER)
    handlerAudio(btnAudioRain, SONG_TITLE.AUDIO_RAINT, IMAGE_URL.IMG_RAINT)
    handlerAudio(btnAudioWinter, SONG_TITLE.AUDIO_WINTER, IMAGE_URL.IMG_WINTER)
}