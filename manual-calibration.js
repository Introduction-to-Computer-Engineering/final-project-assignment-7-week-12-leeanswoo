let Analog_input = 0
let index = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    Analog_input = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(2000)
    index = pins.map(
    Analog_input,
    7,
    789,
    0,
    4
    )
    led.plot(0, index)
    basic.showNumber(Analog_input)
})
