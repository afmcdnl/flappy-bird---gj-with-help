input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
basic.showString("Up=A Down=B")
basic.showString("3, 2, 1 GO!")
let index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
game.setLife(3)
game.setScore(0)
let hole: number[] = []
/**
 * random 3
 * 
 * 1
 * 
 * 1
 * 
 * 1
 * 
 * 0
 * 
 * 1
 */
/**
 * By coming through the hole
 * 
 * If bird sprite X is equal ot the emptyOb
 */
basic.forever(function () {
    // remove the pipe from tehe screeen
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
        if (hole.length == 2) {
            hole.shift()
        }
    }
    // The pipe's movement in the left direction
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        // Define this as a lnumber
        // 
        emptyObstacleY = randint(0, 4)
        hole.push(emptyObstacleY)
        // Fills the pipe with srpites and the 'hole' 
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    // if the bird runs into the pipe lose life
    // 
    // Checking every part of the pipe to see if bird is hitting
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.removeLife(1)
        }
        if (bird.get(LedSpriteProperty.X) == obstacle3.get(LedSpriteProperty.X)) {
            if (hole[0] == bird.get(LedSpriteProperty.Y)) {
                game.addScore(0.25)
            }
        }
    }
    ticks += 1
    basic.pause(1000)
})
