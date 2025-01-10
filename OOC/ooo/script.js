function calculerStatistiques() {
    const lignes = document.querySelectorAll("tbody tr");
    let totalPresents = 0, totalAbsents = 0, totalRetards = 0, totalJustifications = 0;

    lignes.forEach((ligne) => {
        const colonnes = Array.from(ligne.querySelectorAll("td")).slice(2);
        colonnes.forEach((colonne) => {
            if (colonne.textContent === "✔") totalPresents++;
            if (colonne.textContent === "✘") totalAbsents++;
            if (colonne.textContent === "R") totalRetards++;
            if (colonne.textContent === "J") totalJustifications++;
        });
    });

    document.getElementById("total-presents").textContent = totalPresents;
    document.getElementById("total-absents").textContent = totalAbsents;
    document.getElementById("total-retards").textContent = totalRetards;
    document.getElementById("total-justifications").textContent = totalJustifications;
}

function ajouterStagiaire() {
    const nom = document.getElementById("nom").value;

    if (!nom) {
        alert("Veuillez entrer un nom !");
        return;
    }

    const tableau = document.getElementById("stagiaires");
    const numero = tableau.rows.length + 1;

    const nouvelleLigne = tableau.insertRow();
    const cellNumero = nouvelleLigne.insertCell(0);
    const cellNom = nouvelleLigne.insertCell(1);
    const cellLundi = nouvelleLigne.insertCell(2);
    const cellMardi = nouvelleLigne.insertCell(3);
    const cellMercredi = nouvelleLigne.insertCell(4);
    const cellJeudi = nouvelleLigne.insertCell(5);
    const cellVendredi = nouvelleLigne.insertCell(6);

    cellNumero.textContent = numero;
    cellNom.textContent = nom;
    cellLundi.textContent = "✔";
    cellMardi.textContent = "✔";
    cellMercredi.textContent = "✔";
    cellJeudi.textContent = "✔";
    cellVendredi.textContent = "✔";

    document.getElementById("nom").value = "";
    calculerStatistiques();
}

document.addEventListener("DOMContentLoaded", calculerStatistiques);