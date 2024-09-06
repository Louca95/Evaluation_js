
//Déclaration de la varible button en allant le chercher avec le queryselector dans le html;
let button = document.querySelector("#addTaskButton");

// console.log pour voir ce que le button permet de faire;
console.log(button);

//Déclaration de la varible list en allant le chercher avec le queryselector dans le html;
let list = document.querySelector("#taskList");

// console.log pour voir ce que la tasklist permet de faire; 
console.log(list);

// Déclaration du tableau vide pour y ajouté des objets a l'interieur;
const tab = [];

// console.log pour voir ce que le tableau permet de faire; 
console.log(tab);


// Déclaration de la de la fonction Eval avec un event;
function Eval(e) {

    // // on évite a la page de se recharger;
    e.preventDefault();

    // Remis au debut du contenu actuel;
    list.innerHTML = "";

    // Déclaration de la de la Variable task qu'on est aller chercher dans le html grace a l'id taskInput grace a la valeur = .value;
    const task = document.querySelector("#taskInput").value;

    // console.log pour voir ce que le task fais;
         console.log(task);

            // push de la variable task dans le tableau ;
             tab.push(task)

        // autre moyen de faire un button ;
        // const btn = document.createElement("BUTTON");        
        // const Delete = document.createText("Supprimer");       
        // btn.appendChild(t);                               
        // document.body.appendChild(btn);   

    // Début de la boucle for avec le tableau ;
    for (let i = 0; i < tab.length ; ++i) {

         // Déclaration de la de la Variable newListe qu'on a  crée pour faire une liste  grace a la valeur li;
        const newListe = document.createElement("li");

        // reprise de la variable list pour l ajouté en temp qu enfants a la variable newListe;
        list.appendChild(newListe);

        // ajoute de la classList.add;
        newListe.classList.add("newList")

            // reprise de la variable newListe pour l écrire en inner.html puis a l'intérieur on mets de backtite pour ecrire ce qui il y a dans le tableau en le raplants et ajoutants dans des cracher la variable i puis y mettre le buttons supprimer avec un id ;
             newListe.innerHTML = `${tab[i]} <button id="deleteButton">suprimer</button>`;
        
    };  //fin de boucle 

/**************************************************Supressions de l objet dans le tableau qui ne fonctionne pas (a Débugé ) **********************************************************/

    // // Début d'une nouvelle fonction pour supprimer les objets a l intérieur du tableau grace au button supprimer et son id ;
    //   function removeObject(id) {

    //     // console.log pour voir ce que la fonction removeObject permet de faire;
    //     console.log(removeObject);

    //     // reprise du tableau puis suppimer son object grace a splice, sont id et le 1;
    //     tab.splice(id, 1); 
    // };    
    // // rappelle de la fonction removeObject pour qu'il s'active
    // removeObject()

    // // Déclaration de la de la Variable Delette  qu'on a  crée pour delette l objet d'un tableau grace a l'id deleteButton
    //   const Delete = document.querySelector("deleteButton")

    // // reprise de la varible Delete avec un addEventListener mais il ne prend pas l information donc le button de ne permets pas de supprimer 
	//     Delete.addEventListener("click", Eval)

    // // reprise de la varible nawliste pour faire en sorte que son enfants sois la lavraible Delete
    //     newListe.appendChild(Delete);

}; // Fin de la Fonction Eval

//  declaration du button avec un addEventsListener qui a mis au click avec la fonction Eval qu'on doit rappeller
button.addEventListener("click", Eval);
 
