document.getElementById("submitButton").onclick = function () {
    var n = window.document.getElementById("numberInput").value;
    let sum = 0;
    for (i = 0; i <= n; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i
        }
    }
    parseInt(sum)
    alert(sum)
}

