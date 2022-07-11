document.getElementById("submitButton").onclick = function () {
    var urName = window.document.getElementById("nameInput").value;
    console.log ("ee", urName)
    if (urName === "Alice"|| "Bob") {
        alert("Hello " + urName)
    }
}
