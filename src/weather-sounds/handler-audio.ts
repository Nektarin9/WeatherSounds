import { playMusic } from './index';

export function handlerAudio(btn: HTMLButtonElement, imageUrl: string, title: string) {
    const body = document.body;
    btn.addEventListener('click', () => {
        playMusic(title);
        body.style.backgroundImage = `url(${imageUrl})`;
    });
}
