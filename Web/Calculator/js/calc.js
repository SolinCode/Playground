function func() {
    const valueA = document.getElementById("calcA").value
    const valueB = document.getElementById("calcB").value

    const a = Number(valueA)
    const b = Number(valueB)

    const what = document.getElementById("calcWhat").value

    array = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '*': function(a, b) { return a * b },
        '/': function(a, b) { return a / b },
    }

    if (what === '+' || what === '-' && a < 0 || b < 0) {
        document.querySelector('.calcRes').innerHTML = ("Error")
    }
    else if (what === '+' || what === '-' && a > b) {
        document.querySelector('.calcRes').innerHTML = ("Result: " + a + " " + what + " " + b + " = " + array[what](a, b))
    }
    else if (what === '+' || what === '-' && a < b) {
        document.querySelector('.calcRes').innerHTML = ("Result: " + b + " " + what + " " + a + " = " + array[what](b, a))
    }
    else {
        document.querySelector('.calcRes').innerHTML = ("Result: " + a + " " + what + " " + b + " = " + array[what](a, b))

    }
}