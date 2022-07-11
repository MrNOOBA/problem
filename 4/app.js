document.getElementById("submitButton").onclick = function () {
    var n = window.document.getElementById("numberInput").value;
    let sum = 0;
    for (i=0;i<=n;1++) {
        sum += i
    }

    parseInt(sum)
    alert(sum)
}

