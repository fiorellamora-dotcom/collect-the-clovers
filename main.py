def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    otherSprite.destroy(effects.spray, 100)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap)

bee: Sprite = None
clover: Sprite = None
scene.set_background_image(assets.image("""
    background
    """))
music.play(music.string_playable("C E B G F C5 D F ", 200),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
hero = sprites.create(assets.image("""
    hero
    """), SpriteKind.player)
controller.move_sprite(hero)
hero.set_stay_in_screen(True)

def on_update_interval():
    global clover, bee
    clover = sprites.create_projectile_from_side(img("""
        2
        """), 100, 100)
    bee = sprites.create_projectile_from_side(img("""
        5
        """), 50, 50)
    bee.set_kind(SpriteKind.enemy)
game.on_update_interval(5000, on_update_interval)
