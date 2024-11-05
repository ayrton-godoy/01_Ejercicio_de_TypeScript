interface Points {
    A: number;
    B: number;
}

const points: Record<string, Points> = {
    handball: { A: 0, B: 0 },
    resistencia: { A: 0, B: 0 },
    ajedrez: { A: 0, B: 0 }
};

document.getElementById('register')?.addEventListener('click', function () {
    const discipline = (document.getElementById('discipline') as HTMLSelectElement).value;
    const team = (document.getElementById('team') as HTMLSelectElement).value;
    const pointsInput = parseInt((document.getElementById('points') as HTMLInputElement).value);

    if (!isNaN(pointsInput) && pointsInput >= 0) {
        points[discipline][team] += pointsInput;
        
        const teamPointsElement = document.getElementById(`${discipline}${team}`);
        if (teamPointsElement) {
            teamPointsElement.innerText = points[discipline][team].toString();
        }
        
        updateResults();
    } else {
        alert("Por favor, introduce un número de puntos válido.");
    }
});

function updateResults() {
    let totalA = 0;
    let totalB = 0;
    let highestPoints = 0;
    let highestDiscipline = '';

    for (const discipline in points) {
        totalA += points[discipline].A;
        totalB += points[discipline].B;

        if (points[discipline].A > highestPoints) {
            highestPoints = points[discipline].A;
            highestDiscipline = `Equipo A en ${discipline}`;
        }
        
        if (points[discipline].B > highestPoints) {
            highestPoints = points[discipline].B;
            highestDiscipline = `Equipo B en ${discipline}`;
        }
    }

    const totalPointsElement = document.getElementById('totalPoints');
    const highestDisciplineElement = document.getElementById('highestDiscipline');
    
    if (totalPointsElement) {
        totalPointsElement.innerText = `Total Equipo A: ${totalA} - Total Equipo B: ${totalB}`;
    }
    
    if (highestDisciplineElement) {
        highestDisciplineElement.innerText = `Mayor puntuación individual: ${highestDiscipline} con ${highestPoints} puntos.`;
    }
}
