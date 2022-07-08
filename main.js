// // Création du XMLHttpRequest object
// let xhr = new XMLHttpRequest();

// //Initialiser et Parametret notre requete
// xhr.open('GET', 'https://randomuser.me/api/', true);
// // Gestion de la réponse
// xhr.onload = function() {
//     if (xhr.readyState === 4 && xhr.status ==  200) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// //On send la requête
// xhr.send();



// Variable initialitation
let button = document.getElementsByTagName('button')[0];
let img = document.getElementsByTagName("img")[0];
let dogRace = document.getElementById('dog_selector');
let choose = dogRace[0];
let xhr = new XMLHttpRequest();


// Functions creation
function callImage() {
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            let dogImage = JSON.parse(xhr.responseText);
            img.src = dogImage.message;
        }
    };

    xhr.send();
};

function raceSelector() {
    let link = 'https://dog.ceo/api/breed/' + dogRace.value + '/images/random'
    xhr.open('GET', link, true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            dogImage = JSON.parse(xhr.responseText);
            img.src = dogImage.message;
        }
    };
    
    xhr.send();
};



function raceMenu() {
    xhr.open('GET', 'https://dog.ceo/api/breeds/list/all', true);
    xhr.onload = function () {
        let route = JSON.parse(xhr.responseText).message;
        if (xhr.readyState === 4 && xhr.status == 200) {
            for (const races in route) {
                let options = document.createElement("option");
                options.value = races
                options.textContent = races;
                dogRace.add(options);
            }
            
        }
    };
    
    xhr.send();
};

// Event Listeners

button.addEventListener("click", () => {
    if (!dogRace.value == '') {
        raceSelector()

    } else {
        callImage()
        
    }
});

dogRace.addEventListener("change", raceSelector);


// Funtions calls
callImage();
raceMenu();