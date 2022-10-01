bluetooth.onBluetoothConnected(function () {
    basic.pause(2000)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.windows) + "r", true)
    basic.pause(1000)
    keyboard.sendSimultaneousKeys("https>//www.youtube.com/watch?v=dQw4w9WgXcQ", false)
})
keyboard.startKeyboardService()
