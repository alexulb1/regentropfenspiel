function countdown () {
    game.setLife(3)
    game.setScore(0)
    for (let Index = 0; Index <= 2; Index++) {
        basic.pause(200)
        music.playTone(587, music.beat(BeatFraction.Eighth))
        basic.showNumber(counter - Index)
    }
    basic.showNumber(0)
    music.playTone(659, music.beat(BeatFraction.Half))
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    eimer.move(-1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    countdown()
    basic.pause(500)
    wasser.turn(Direction.Right, 90)
    status = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    eimer.move(1)
})
let eimer: game.LedSprite = null
let wasser: game.LedSprite = null
let status = 0
let counter = 0
counter = 3
status = 0
basic.clearScreen()
game.setLife(5)
game.setScore(0)
wasser = game.createSprite(0, 0)
eimer = game.createSprite(2, 4)
basic.forever(function () {
    if (status == 1) {
        basic.pause(200)
        if (wasser.get(LedSpriteProperty.Y) < 4) {
            wasser.move(1)
        } else {
            if (wasser.isTouching(eimer)) {
                basic.setLedColor(0xff0000)
            } else {
                game.removeLife(1)
            }
            wasser.set(LedSpriteProperty.X, randint(0, 4))
            wasser.set(LedSpriteProperty.Y, 0)
        }
    }
})
