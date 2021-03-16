// Picks a random number between 0 and 2 to answer. Will show string "Ask another question" again after 2 seconds.
input.onGesture(Gesture.Shake, function () {
    Number2 = randint(0, 2)
    if (Number2 == 1) {
        basic.showString("No")
    } else if (Number2 == 2) {
        basic.showString("Yes")
    } else {
        basic.showString("Maybe")
    }
    basic.clearScreen()
    basic.pause(2000)
    basic.showString("Ask a question")
})
let Number2 = 0
basic.showString("Ask a question")
