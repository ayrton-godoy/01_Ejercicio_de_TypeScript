var points = {
    handball: { A: 0, B: 0 },
    resistencia: { A: 0, B: 0 },
    ajedrez: { A: 0, B: 0 }
};
document.getElementById('register').addEventListener('click', function () {
    var discipline = document.getElementById('discipline').value;
    var team = document.getElementById('team').value;
    var pointsInput = parseInt(document.getElementById('points').value);
    if (!isNaN(pointsInput) && pointsInput >= 0) {
        points[discipline][team] += pointsInput;
        document.getElementById("".concat(discipline).concat(team)).innerText = points[discipline][team].toString();
        updateResults();
    }
    else {
        alert("Por favor, introduce un número de puntos válido.");
    }
});
function updateResults() {
    var totalA = 0;
    var totalB = 0;
    var highestPoints = 0;
    var highestDiscipline = '';
    for (var discipline in points) {
        totalA += points[discipline].A;
        totalB += points[discipline].B;
        if (points[discipline].A > highestPoints) {
            highestPoints = points[discipline].A;
            highestDiscipline = "Equipo A en ".concat(discipline);
        }
        if (points[discipline].B > highestPoints) {
            highestPoints = points[discipline].B;
            highestDiscipline = "Equipo B en ".concat(discipline);
        }
    }
    document.getElementById('totalPoints').innerText = "Total Equipo A: ".concat(totalA, " - Total Equipo B: ").concat(totalB);
    document.getElementById('highestDiscipline').innerText = "Mayor puntuaci\u00F3n individual: ".concat(highestDiscipline, " con ").concat(highestPoints, " puntos.");
}
