let reverse = 0
let inner = 0
let outer = 0
led.enable(false)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
let speed = 20
basic.forever(function () {
    for (let outer2 = 0; outer2 <= 4; outer2++) {
        reverse = 4 - outer2
        for (let inner2 = 0; inner2 <= 4; inner2++) {
            led.unplot(outer2, reverse)
            basic.pause(speed)
            led.unplot(reverse, outer2)
            basic.pause(speed)
            led.unplot(reverse - inner2, reverse)
            basic.pause(speed)
            led.unplot(reverse, reverse - inner2)
            basic.pause(speed)
        }
    }
    for (let outer3 = 0; outer3 <= 4; outer3++) {
        reverse = 4 - outer3
        for (let inner3 = 0; inner3 <= 4; inner3++) {
            led.plot(outer3, reverse)
            basic.pause(speed)
            led.plot(reverse, outer3)
            basic.pause(speed)
            led.plot(reverse - inner3, reverse)
            basic.pause(speed)
            led.plot(reverse, reverse - inner3)
            basic.pause(speed)
        }
    }
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P8, index)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P12, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P12, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P16, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P16, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
        control.waitMicros(1000)
    }
})
