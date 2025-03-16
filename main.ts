basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 28) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColors(0xffff00, 0xffff00, 0xffff00)
        basic.pause(5000)
    }
    basic.turnRgbLedOff()
})
