radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    serial.writeValue("TempCelsius", receivedNumber)
    if (receivedNumber > 25) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showString("AC!")
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showString("AC!")
    }
})
radio.setGroup(99)
