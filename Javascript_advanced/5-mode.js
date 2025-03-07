function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    console.log("Le script s'est bien lancé !");
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let paragraph = document.createElement("p");
    let text = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let spookyButton = document.createElement("button");
    let spookyText = document.createTextNode("Spooky");
    spookyButton.appendChild(spookyText);
    document.body.appendChild(spookyButton);
    spookyButton.onclick = spooky;

    let darkButton = document.createElement("button");
    let darkText = document.createTextNode("Dark mode");
    darkButton.appendChild(darkText);
    document.body.appendChild(darkButton);
    darkButton.onclick = darkMode;

    let screamButton = document.createElement("button");
    let screamText = document.createTextNode("Scream mode");
    screamButton.appendChild(screamText);
    document.body.appendChild(screamButton);
    screamButton.onclick = screamMode;

}

main();