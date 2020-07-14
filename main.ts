input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(2000)
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
