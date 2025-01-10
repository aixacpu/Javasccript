// Fonction pour ajouter un stagiaire au tableau
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
        const select = document.createElement("select");

        const options = [
            { value: "", label: "" },
            { value: "✔", label: "✔ (Présence)" },
            { value: "✘", label: "✘ (Absence)" },
        ];

        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.label;
            select.appendChild(opt);
        });

        select.addEventListener("change", mettreAJourStatistiques);
        jourCellule.appendChild(select);
        nouvelleLigne.appendChild(jourCellule);
    });

    tbody.appendChild(nouvelleLigne);

    document.getElementById("nom").value = "";
    mettreAJourStatistiques();
}

// Fonction pour mettre à jour les statistiques
function mettreAJourStatistiques() {
    const tbody = document.getElementById("stagiaires");
    const rows = tbody.getElementsByTagName("tr");

    let totalPresents = 0;
    let totalAbsents = 0;

    for (const row of rows) {
        const selects = row.getElementsByTagName("select");
        for (const select of selects) {
            if (select.value === "✔") {
                totalPresents++;
            } else if (select.value === "✘") {
                totalAbsents++;
            }
        }
    }

    // Met à jour les statistiques dans l'interface utilisateur
    document.getElementById("total-presents").textContent = totalPresents;
    document.getElementById("total-absents").textContent = totalAbsents;
}

