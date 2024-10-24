interface Points {
    [discipline: string]: {
        A: number;
        B: number;
    };
}

const Points: Points = {
    handball: { A: 0, B: 0 },
    resistencia: { A: 0, B: 0 },
    ajedrez: { A: 0, B: 0 }
};

document.getElementById('register')!.addEventListener('click', () => {
    const discipline = ((document.getElementById('discipline') as HTMLSelectElement).value, 10);
    const team = (document.getElementById('team') as HTMLSelectElement).value;
    const pointsInput = parseInt((document.getElementById('points') as HTMLInputElement).value, 10);

    if (!isNaN(pointsInput) && pointsInput >= 0) {
        Points[discipline][team] += pointsInput;
        (document.getElementById(`${discipline}${team}`) as HTMLElement).innerText = Points[discipline][team].toString();

        subiresultados();
    } else {
        alert("Por favor, introduce un número de puntos válido.");
    }
});

function subiresultados() {
    let totalA = 0;
    let totalB = 0;
    let highestPoints = 0;
    let highestDiscipline = '';

    for (const discipline in Points) {
        totalA += Points[discipline].A;
        totalB += Points[discipline].B;

        if (Points[discipline].A > highestPoints) {
            highestPoints = Points[discipline].A;
            highestDiscipline = `Equipo A en ${discipline}`;
        }
        if (Points[discipline].B > highestPoints) {
            highestPoints = Points[discipline].B;
            highestDiscipline = `Equipo B en ${discipline}`;
        }
    }

    
    console.log(`Total puntos Equipo A: ${totalA}`);
    console.log(`Total puntos Equipo B: ${totalB}`);



}
