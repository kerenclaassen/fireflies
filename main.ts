radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (clock < noon) {
        clock += 1
    }
    
})
let noon = 0
let clock = 0
clock = 1
noon = 8
radio.setGroup(1)
basic.forever(function on_forever() {
    
    if (clock >= noon) {
        game.addScore(1)
        radio.sendNumber(0)
        basic.pause(200)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
    
})
