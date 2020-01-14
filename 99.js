
let friends = [
    "John", "Chris", "Carly", "Matt", "Sarah"
]

function linesCount() {
    for (i = 0; i < friends.length; i++) {
        for (counter = 99; counter >= 1; counter--) {
            if (counter == 1) {
                console.log(friends[i] + " has " + counter + " line of code on the wall.")
            } else {
                console.log(friends[i] + " has " + counter + " lines of code on the wall.")
            }
        }
    }
}

linesCount()