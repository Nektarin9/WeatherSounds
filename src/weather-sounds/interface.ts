export interface ConfigTempalteType {
    audio: string
    icon: string
    title: string
    className: string
} 

interface IsPauseType {
    isPauseAudio: boolean
    title: string
}

export interface ConfigType {
    IMAGE_URL: string[]
    isPause: IsPauseType[]
}