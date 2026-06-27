let soundEnabled = true

export const toggleSound = () => {
    soundEnabled = !soundEnabled
    return soundEnabled
}

export const isSoundEnabled = () => soundEnabled

export const playClank = () => {
    if (!soundEnabled) return
    const audio = new Audio('/clank.mp3')
    audio.play()
}

export const playHorn = () => {
    if (!soundEnabled) return
    const audio = new Audio('/horn.mp3')
    audio.play()
}