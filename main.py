def on_received_number(receivedNumber):
    global clock
    if clock < noon:
        clock += 1
radio.on_received_number(on_received_number)

noon = 0
clock = 0
clock = 1
noon = 8
radio.set_group(1)

def on_forever():
    global clock
    if clock >= noon:
        game.add_score(1)
        radio.send_number(0)
        basic.pause(200)
        clock = 0
    else:
        basic.pause(100)
        clock += 1
basic.forever(on_forever)
