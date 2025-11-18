sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.none, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (info.score() > 3) {
        tempo = 500
    } else {
        if (info.score() > 6) {
            tempo = 200
        } else {
            if (info.score() > 8) {
                tempo = 50
            }
        }
    }
})
let bee: Sprite = null
let clover: Sprite = null
let tempo = 0
scene.setBackgroundImage(assets.image`background`)
music.play(music.stringPlayable("C E B G F C5 D F ", 200), music.PlaybackMode.LoopingInBackground)
music.play(music.stringPlayable("C E B G F C5 D F ", 200), music.PlaybackMode.LoopingInBackground)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
game.onUpdateInterval(200, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . 6 . . . . 6 . . . . . 
        . . . . . . 6 . . 6 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . e 3 f 3 3 f 3 e . . . . 
        . . . e e 3 3 3 3 3 3 e e . . . 
        . . e e e 3 3 3 3 3 3 e e e . . 
        . . . e e 3 3 3 3 3 3 e e . . . 
        . . . . e 3 3 3 3 3 3 e . . . . 
        . . . e e 3 3 3 3 3 3 e e . . . 
        . . . . e 3 3 3 3 3 3 e . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-4, 37), randint(-15, 28))
    clover.setKind(SpriteKind.Food)
    bee = sprites.createProjectileFromSide(img`
        . . . . b . . . . . . b . . . . 
        . . . . . b . . . . b . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . f d d d d d d d d f . . . 
        . . f f d d d d d d d d f f . . 
        . f f f d d d d d d d d f f f . 
        . . f f d d d d d d d d f f . . 
        . . . f d d d d d d d d f . . . 
        . . f f d d d d d d d d f f . . 
        . . . f d d d d d d d d f . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-28, 20), randint(-2, 40))
    bee.setKind(SpriteKind.Enemy)
})
