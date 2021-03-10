var films = [{
        name: "Deadpool",
        years: 2016,
        authors: "Tim Miller"
    },
    {
        name: "Spiderman",
        years: 2002,
        authors: "Sam Raimi"
    },
    {
        name: "Scream",
        years: 1996,
        authors: "Wes Craven"
    },
    {
        name: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti"
    }
];

/* Affichage du tableau */
function start() {
    var mybody = document.getElementById("main");
    mybody.innerHTML = "";
    mytable = document.createElement("table");
    mytablebody = document.createElement("tbody");
    var section = ["Titre", "Année", "Réalisateur"];

    for (j = 0; j < 1; j++) {
        mycurrent_row = document.createElement("tr");
        for (i = 0; i < section.length; i++) {
            mycurrent_cell = document.createElement("th");
            currenttext = document.createTextNode(section[i]);
            mycurrent_cell.appendChild(currenttext);
            mycurrent_row.appendChild(mycurrent_cell);
        }
        mytablebody.appendChild(mycurrent_row);
    }

    for (j = 0; j < films.length; j++) {
        mycurrent_row = document.createElement("tr");
        //let property = films[j].name + films[j].years + films[j].authors;
        //console.log(property);
        mycurrent_cell = document.createElement("td");
        currenttext = document.createTextNode(films[j].name);

        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);

        mycurrent_cell = document.createElement("td");
        currenttext = document.createTextNode(films[j].years);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);

        mycurrent_cell = document.createElement("td");
        currenttext = document.createTextNode(films[j].authors);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
        mytablebody.appendChild(mycurrent_row);

        mycurrent_cell = document.createElement("td");
        buttonSupp = document.createElement('button');
        buttonSupp.innerText = "Supprimer";
        buttonSupp.value = j;
        buttonSupp.addEventListener('click', suppFilm);
        mycurrent_cell.appendChild(buttonSupp);
        mycurrent_row.appendChild(mycurrent_cell);
        mytablebody.appendChild(mycurrent_row);
    }

    mytable.appendChild(mytablebody);
    mybody.appendChild(mytable);
}

/* Formulaire sur bouton Ajouter */
var ajouterbtn = document.querySelector(".ajouter");
ajouterbtn.addEventListener("click", formAjouter);

function formAjouter() {
        var main = document.getElementById("main");
        var divInput = document.createElement("div");
        divInput.className = "form input";
        divInput.id = "form";

        var inputTitle = document.createElement("input");
        inputTitle.type = "text";
        inputTitle.id = "addTitle";
        inputTitle.placeholder = "Entrer un titre";
        inputTitle.className = "form input";

        var inputYear = document.createElement("input");
        inputYear.type = "number";
        inputYear.id = "addYear";
        inputYear.placeholder = "Entrer une année";
        inputYear.className = "form input";

        var inputAuthor = document.createElement("input");
        inputAuthor.type = "text";
        inputAuthor.id = "addAuthor";
        inputAuthor.placeholder = "Entrer un réalisateur";
        inputAuthor.className = "form input";

        var btnAdd = document.createElement("button");
        btnAdd.className = "valider";
        btnAdd.innerText = "Ajouter";

        var btnAnnuler = document.createElement("button");
        btnAnnuler.className = "supprimer";
        btnAnnuler.innerText = "Annuler";

        btnAnnuler.addEventListener('click', supFormAjouter);

        /* Test Formulaire */
        btnAdd.addEventListener('click', function () {

            if (inputTitle.value.length > 2) {
                alert("Film ajouté avec succès");
                // Ajouter le film dans le tableau `films`
                // Afficher le tableau avec le nouveau film
                supFormAjouter();
            } else {
                alert("Le titre doit comporter au moins 2 lettres");
            }
        });

        divInput.appendChild(inputTitle);
        divInput.appendChild(inputYear);
        divInput.appendChild(inputAuthor);
        divInput.appendChild(btnAdd);
        divInput.appendChild(btnAnnuler);

        main.appendChild(divInput);

}

function supFormAjouter() {
    document.getElementById("form").remove();
}

/* Filtrer par annee */
function trie() {
    console.log("trie");
    if(this.selectedIndex === 0){
        films.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
    } else if(this.selectedIndex === 1 ) {
        films.sort(function (a, b) {
            return b.years - a.years;
          });
    }
    start();
}

document.getElementById("filter").addEventListener('change', trie);

/* Bouton Supprimer Film */
function suppFilm() {
    console.log(this.value);
    var repUtilisateur = confirm("Voulez vous vraiment supprimer ce film ?");
    if (repUtilisateur) {
        films.splice(this.value, 1);
        start();
    } 
}