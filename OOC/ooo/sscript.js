class Personne {
    constructor(nom, surnom) {
        this.nom = nom;
        this.surnom = surnom;
    }

    goodbye(nom) {
        return ("au revoir " + this.nom + " " + this.surnom);
    }
}

function hello(nom, surnom) {
    if (typeof surnom === "string") {
        return ("salut " + nom + " tu es " + surnom);
    } else {
        return ("salut je suis " + nom);
    }
}

let person = new Personne("mike", "miky");

alert(hello(person.nom, person.surnom));
alert(person.goodbye());
