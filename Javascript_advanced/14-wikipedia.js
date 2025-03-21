function createElement(data) {
    let element = document.createElement('p');
    element.textContent = data;
    document.body.appendChild(element);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    
    xhr.open("GET", url, true);  // Initialise la requête GET

    xhr.onload = function() {
        if (xhr.status === 200) {  // Si la requête est réussie
            let response = JSON.parse(xhr.responseText);  // Parse la réponse JSON
            let pages = response.query.pages;
            let pageId = Object.keys(pages)[0];  // Obtient l'ID de la page
            let extract = pages[pageId].extract;  // Extrait le texte de l'article
            
            callback(extract);  // Appelle la fonction de callback avec l'extrait
        }
    };

    xhr.send();  // Envoie la requête
}


queryWikipedia(createElement);
