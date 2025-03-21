class studentHogwarts {
    // Déclaration des variables privées
    #privateScore = 0; // Variable privée pour le score
    #name = null; // Variable privée pour le nom

    // Constructeur pour initialiser les variables privées
    constructor() {
    }

    // Méthode privée pour changer le score
    #changeScoreBy(points) {
        this.#privateScore += points;
    }

    // Méthode publique pour définir le nom de l'étudiant
    setName(newName) {
        this.#name = newName;
    }

    // Méthode publique pour récompenser l'étudiant (ajoute 1 au score)
    rewardStudent() {
        this.#changeScoreBy(1);
    }

    // Méthode publique pour pénaliser l'étudiant (soustrait 1 au score)
    penalizeStudent() {
        this.#changeScoreBy(-1);
    }

    // Méthode publique pour obtenir le score sous la forme "nom: score"
    getScore() {
        return `${this.#name}: ${this.#privateScore}`;
    }
}

// Création de l'objet Harry
let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Affichera "Harry: 4"

// Création de l'objet Draco
let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Affichera "Draco: -2"
