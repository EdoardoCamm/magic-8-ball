let Number2 = 0
input.onGesture(Gesture.Shake, function () {
    Number2 = randint(0, 2)
    if (Number2 == 1) {
        basic.showString("No")
    } else if (Number2 == 2) {
        basic.showString("Yes")
    } else {
        basic.showString("Maybe")
    }
})
