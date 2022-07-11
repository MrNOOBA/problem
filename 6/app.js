document.getElementById("submitButton").onclick = function () {
    var n = window.document.getElementById("numberInput").value;
    let sum = 0;
    if (summary === true) {
        for (i = 0; i <= n; i++) {
            sum += i
        }
        parseInt(sum)
        alert(sum)
    }
    else {
        for (i = 0; i <= n; i++) {
            sum *= i
        }
        parseInt(sum)
        alert(sum)
    }
}
let summary = true
document.getElementById("sumButton").onclick = function () {
    summary = true
}
document.getElementById("productButton").onclick = function () {
    summary = false
}