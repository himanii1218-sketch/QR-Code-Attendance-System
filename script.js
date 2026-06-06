let attendance = [];

function markAttendance() {
    let roll = document.getElementById("roll").value;

    if (roll === "") {
        alert("Enter Roll Number");
        return;
    }

    attendance.push(
        roll + " - " + new Date().toLocaleString()
    );

    document.getElementById("result").innerHTML =
        attendance.join("<br>");

    document.getElementById("roll").value = "";
}

function generateQR() {
    let roll = document.getElementById("roll").value;

    if (roll === "") {
        alert("Enter Roll Number");
        return;
    }

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: roll,
        width: 200,
        height: 200
    });
}