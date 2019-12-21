function* fibonacci() {
    var a = 0;
    var b = 1;
    while (true) {
        const forward = yield a;
        if (!forward) {
            var c = a + b;
            a = b;
            b = c;
        }
        else {
            var c = b - a;
            b = a;
            a = c;
        }
    }
}
const gen = fibonacci();
function getNumbers() {
    var fw = document.getElementById("forward").checked ? true : false;
    var n = parseInt(document.getElementById("number").value);
    if (isNaN(n))
        alert("Incorrect input");
    for (var i = 0; i < n; i++) {
        document.getElementById("output").innerHTML += gen.next(fw).value + " | ";
    };
}