function ajouterStagiaire() {
    const nomStagiaire = document.getElementById("nom").value.trim();

    if (!nomStagiaire) {
        alert("Veuillez entrer un nom de stagiaire.");
        return;
    }

    const tbody = document.getElementById("stagiaires");

    const nouvelleLigne = document.createElement("tr");

    // ajouter numero
    const numeroCellule = document.createElement("td");
    numeroCellule.textContent = tbody.rows.length + 1;
    nouvelleLigne.appendChild(numeroCellule);

    // table pour le nom
    const nomCellule = document.createElement("td");
    nomCellule.textContent = nomStagiaire;
    nouvelleLigne.appendChild(nomCellule);

    // tables chaque jour de la semaine
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    jours.forEach(() => {
        const jourCellule = document.createElement("td");
        jourCellule.textContent = ""; // Par défaut, la cellule est vide

        jourCellule.addEventListener("click", function () {
            if (jourCellule.textContent === "") {
                jourCellule.textContent = "✔";
                jourCellule.style.color = "green";
            } else if (jourCellule.textContent === "✔") {
                jourCellule.textContent = "✘";
                jourCellule.style.color = "red";
            } else {
                jourCellule.textContent = "";
                jourCellule.style.color = "black";
            }
            mettreAJourStatistiques();
        });

        nouvelleLigne.appendChild(jourCellule);
    });

    //  bouton de suppression
    const supprimerCellule = document.createElement("td");
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.classList.add("btn-supprimer");
    boutonSupprimer.addEventListener("click", function () {
        tbody.removeChild(nouvelleLigne);
        mettreAJourStatistiques();
        mettreAJourNumeros(); // Met à jour les numéros des stagiaires
    });
    supprimerCellule.appendChild(boutonSupprimer);
    nouvelleLigne.appendChild(supprimerCellule);

    tbody.appendChild(nouvelleLigne);

    document.getElementById("nom").value = ""; // Réinitialise le champ texte
    mettreAJourStatistiques();
}

// fonction  met à jour les numéros après suppression
function mettreAJourNumeros() {
    const tbody = document.getElementById("stagiaires");
    const rows = tbody.getElementsByTagName("tr");
    let numero = 1;

    for (const row of rows) {
        const cells = row.getElementsByTagName("td");
        cells[0].textContent = numero++; // Met à jour le numéro (1ère cellule de chaque ligne)
    }
}

// fonction pour mettre à jour les statistiques
function mettreAJourStatistiques() {
    const tbody = document.getElementById("stagiaires");
    const rows = tbody.getElementsByTagName("tr");

    let totalPresents = 0;
    let totalAbsents = 0;

    // parcourt toutes les lignes et compte les présences/absences
    for (const row of rows) {
        const cells = row.getElementsByTagName("td");

        // parcourt uniquement les cellules des jours (3e colonne et suivantes)
        for (let i = 2; i < cells.length - 1; i++) {
            if (cells[i].textContent === "✔") {
                totalPresents++;
            } else if (cells[i].textContent === "✘") {
                totalAbsents++;
            }
        }
    }

    document.getElementById("total-presents").textContent = totalPresents;
    document.getElementById("total-absents").textContent = totalAbsents;
}

    
