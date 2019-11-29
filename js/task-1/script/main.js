function* fibonacci() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        var c = a + b;
        a = b;
        b = c;
    }
}
const gen = fibonacci();
function getNumbers() {
    var n = parseInt(document.getElementById("number").value);
    if (isNaN(n))
        alert("Incorrect input");
    for (var i = 0; i < n; i++) {
        document.getElementById("output").innerHTML += gen.next().value + " | ";
    };
}