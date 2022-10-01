bluetooth.onBluetoothConnected(function () {
    basic.pause(5000)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.windows) + "r", false)
    led.plot(0, 0)
    basic.pause(1000)
    keyboard.sendString("https>&&www.youtube.com&watch_v)dQw4w9WgXcQ")
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
})
keyboard.startKeyboardService()
