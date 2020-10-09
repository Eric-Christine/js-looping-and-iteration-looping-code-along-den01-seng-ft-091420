// Code your solutions in this file



let array = ["Lisa", "Kaitlin", "Jan"]
function writeCards(array, event_name) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${event_name} gift!`);
    }
    return new_array
}

function countDown(int) {
    while (int > -1) {
        console.log(int)
        int = int - 1
    }
}