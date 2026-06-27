const clank = new Audio('https://www.soundjay.com/mechanical/sounds/ratchet-1.mp3')

export const playClank = () => {
    clank.currentTime = 0
    clank.play()
}