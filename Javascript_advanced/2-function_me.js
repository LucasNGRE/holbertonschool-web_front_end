function welcomeMessage(fullName) {
    // Retourne une fonction qui affiche un message d'alerte
    return function() {
        alert("Welcome " + fullName);
    };
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

guillaume();
alex();
fred();
