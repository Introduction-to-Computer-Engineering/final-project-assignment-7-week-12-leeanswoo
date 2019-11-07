let index = 0
let Analog_input = 0
let avg_high = 0
let var4 = 0
let va_3 = 0
let avg_low = 0
let var_2 = 0
let var1 = 0
let high_value3 = 0
let low_value3 = 0
let high_value2 = 0
let low_value2 = 0
let High_Value1 = 0
let low_value1 = 0
pins.digitalWritePin(DigitalPin.P12, 1)
basic.showArrow(ArrowNames.South)
basic.pause(4000)
low_value1 += pins.analogReadPin(AnalogPin.P0)
basic.showNumber(low_value1)
basic.pause(1000)
basic.showArrow(ArrowNames.North)
basic.pause(4000)
High_Value1 += pins.analogReadPin(AnalogPin.P0)
basic.showNumber(High_Value1)
basic.pause(1000)
basic.showArrow(ArrowNames.South)
basic.pause(4000)
low_value2 += pins.analogReadPin(AnalogPin.P0)
basic.showNumber(low_value2)
basic.pause(1000)
basic.showArrow(ArrowNames.North)
basic.pause(4000)
high_value2 += pins.analogReadPin(AnalogPin.P0)
basic.showNumber(high_value2)
basic.pause(1000)
basic.showArrow(ArrowNames.South)
basic.pause(4000)
low_value3 += pins.analogReadPin(AnalogPin.P0)
basic.showNumber(low_value3)
basic.pause(1000)
basic.showArrow(ArrowNames.North)
basic.pause(4000)
high_value3 += pins.analogReadPin(AnalogPin.P0)
basic.showNumber(high_value3)
basic.pause(1000)
var1 += low_value1 + low_value2
var_2 += var1 + low_value3
avg_low += var_2 / 3
va_3 += High_Value1 + high_value2
var4 += va_3 + high_value3
avg_high += va_3 / 3
basic.showString("Calibration Complete")
basic.forever(function () {
    Analog_input = pins.analogReadPin(AnalogPin.P0)
    basic.pause(2000)
    index = pins.map(
    Analog_input,
    avg_low,
    avg_high,
    0,
    4
    )
    led.plot(0, index)
    basic.showNumber(Analog_input)
})

