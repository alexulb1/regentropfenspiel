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
    wasser = game.createSprite(randint(0, 4), 0)
    eimer = game.createSprite(2, 4)
    wasser.turn(Direction.Right, 90)
    status = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    eimer.move(1)
})
let wasser: game.LedSprite = null
let eimer: game.LedSprite = null
let status = 0
let counter = 0
counter = 3
status = 0
basic.clearScreen()
game.setLife(5)
game.setScore(0)
basic.forever(function () {
    if (status == 1) {
        if (game.score() < 5) {
            basic.pause(500)
        } else if (game.score() < 10) {
            basic.pause(400)
        } else if (game.score() < 15) {
            basic.pause(300)
        } else if (game.score() < 20) {
            basic.pause(200)
        } else {
            basic.pause(100)
        }
        if (wasser.get(LedSpriteProperty.Y) < 4) {
            wasser.move(1)
        } else {
            if (wasser.isTouching(eimer)) {
                game.addScore(1)
            } else {
                game.removeLife(1)
            }
            wasser.set(LedSpriteProperty.X, randint(0, 4))
            wasser.set(LedSpriteProperty.Y, 0)
        }
    }
})
