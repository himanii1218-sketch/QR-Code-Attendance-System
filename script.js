let attendance = [];

function markAttendance() {
    let roll = document.getElementById("roll").value;

    let now = new Date();

    attendance.push(
        roll + " - " + now.toLocaleString()
    );

    document.getElementById("result").innerHTML =
        attendance.join("<br>");

    document.getElementById("roll").value = "";
}