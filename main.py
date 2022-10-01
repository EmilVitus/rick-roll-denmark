def on_bluetooth_connected():
    basic.show_leds("""
        # . . . .
                . . . . .
                . . . # .
                . . . . .
                . . . . .
    """)
    basic.pause(5000)
    keyboard.send_simultaneous_keys(keyboard.modifiers(keyboard._Modifier.WINDOWS), True)
    keyboard.send_string("r")
    keyboard.release_keys()
    basic.show_leds("""
        . . . # .
                . . . . .
                . . # . .
                . # . . .
                . . . . .
    """)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

keyboard.start_keyboard_service()

def on_forever():
    pass
basic.forever(on_forever)
