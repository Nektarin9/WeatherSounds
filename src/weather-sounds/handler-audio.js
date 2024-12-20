import { playMusic } from './index';

export function handlerAudio(btn, imageUrl, title) {
    const body = document.body;
    btn.addEventListener('click', () => {
        playMusic(title);
        body.style.backgroundImage = `url(${imageUrl})`;
    });
}
