//  ajouter un stagiaire au tableau
function ajouterStagiaire() {
    const nomStagiaire = document.getElementById("nom").value.trim();

    if (!nomStagiaire) {
        alert("Veuillez entrer un nom de stagiaire.");
        return;
    }

    const tbody = document.getElementById("stagiaires");

    const nouvelleLigne = document.createElement("tr");

    // Ajoute la cellule pour le numéro
    const numeroCellule = document.createElement("td");
    numeroCellule.textContent = tbody.rows.length + 1;
    nouvelleLigne.appendChild(numeroCellule);

    // Ajoute la cellule pour le nom
    const nomCellule = document.createElement("td");
    nomCellule.textContent = nomStagiaire;
    nouvelleLigne.appendChild(nomCellule);

    // Ajoute les cellules pour chaque jour de la semaine
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    jours.forEach(() => {
        const jourCellule = document.createElement("td");
        jourCellule.textContent = ""; // Par défaut, la cellule est vide

        // ajoute un écouteur d'événement pour gérer les clics
        jourCellule.addEventListener("click", function () {
            if (jourCellule.textContent === "") {
                jourCellule.textContent = "✔"; // Marque comme présent
                jourCellule.style.color = "green";
            } else if (jourCellule.textContent === "✔") {
                jourCellule.textContent = "✘"; // Marque comme absent
                jourCellule.style.color = "red";
            } else {
                jourCellule.textContent = ""; // Vide la cellule
                jourCellule.style.color = "black";
            }

            // met a jour les statistiques après chaque clic
            mettreAJourStatistiques();
        });

        nouvelleLigne.appendChild(jourCellule);
    });

    tbody.appendChild(nouvelleLigne);

    document.getElementById("nom").value = ""; // Réinitialise le champ texte
    mettreAJourStatistiques();
}

// Fonction pour mettre à jour les statistiques
function mettreAJourStatistiques() {
    const tbody = document.getElementById("stagiaires");
    const rows = tbody.getElementsByTagName("tr");

    let totalPresents = 0;
    let totalAbsents = 0;

    // parcourt toutes les lignes et compte les présences/absences
    for (const row of rows) {
        const cells = row.getElementsByTagName("td");

        // parcourt uniquement les cellules des jours (3e colonne et suivantes)
        for (let i = 2; i < cells.length; i++) {
            if (cells[i].textContent === "✔") {
                totalPresents++;
            } else if (cells[i].textContent === "✘") {
                totalAbsents++;
            }
        }
    }

    // met à jour les statistiques affichées
    document.getElementById("total-presents").textContent = totalPresents;
    document.getElementById("total-absents").textContent = totalAbsents;
}
