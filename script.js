// //  33 ----------  LES FONCTIONS ----------------
// //     ------------------ DECLARATIONS ----------------


// function logger() {
//     console.log('My names is Jonas');
// }
// logger(); //=> appel de la fonction "logger"
// logger(); //=> appel de la fonction "logger"
// logger(); //=> appel de la fonction "logger"

// // les fonctions peuvent recevoir et traiter des données puis renvoyer un résultat

// function fruitProcessor(apples, oranges) {        // () = parametres    qui seront définis au moment de l'appel de la fonction
//    // console.log(apples, oranges); // on utilise les parametres "apples" et "oranges" comme s'ils étaient des valeurs normales pour la fonction colsole.log
//     const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice; // "return renverra la valeur issue du traitement des parametres de la fonction "fruitProcessor" pour la stocker. Il est possible d'enregistrer le résultat de juice, il faudrat creer une nouvelle variable à l'exterieur de la fonction ou bien de directement l'afficher sans la svg dans une nouvelle variable
// }

// const appleJuice = fruitProcessor (5, 0); // 5 et 0 sont appelé "arguments" ... Il est possible d'enregistrer le résultat de juice, il faudrat creer une nouvelle variable à l'exterieur de la fonction...
// console.log(appleJuice);


// console.log(fruitProcessor (5, 0)); // directement l'afficher sans la svg dans une nouvelle variable

// const appleOrangeJuice = fruitProcessor (2, 4);
// console.log(appleOrangeJuice);

// //  34 ----------  LES FONCTIONS ----------------
// //     ------------------ DECLARATIONS VS EXPRESSIONS ----------------

// function calcAge0(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }

// // OU 

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age0 = calcAge0(1975);
// console.log(age0);

// const age1 = calcAge1(1991);
// console.log(age1);

// //  4'19" dans video ------- EXPRESSION  = Values -------

// // --- function (birthYear) --- // on écris encore le mot function sans nom mais tjrs avec le paramètre 'birthYear'. Puis definis tjrs le corps de la fonction { return 2037 - birthYear;} puis on intègre la déclaration de fonction avc=ec son corps dans un varialble. on integre donc l'expression de la fonction, qui pour rappel est une valeur, dans la déclaration d'une variable.

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear; // calcAge2 seraz la nouvelle fonction
// }
// const age2 = calcAge2(1991); // Ensuite nous appelons cette fonction avec l'argument 1991 dont le resultat sera retourné et stocké dans une autre variable ici "age2".

// console.log(age1, age2); // ici on affiche le résultat des deux fonction calcAge1 et calcAge2.

// // !!! RAPPEL LES EXPRESSIONS PRODUISENT DES VALEURS !!!

// // il possible d'appeler les déclarations de fonction AVANT qu'elles ne soient déclarées dans le code:

// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// console.log(age1);


// // Et au contraire, l'expression ne peut pas etre appelée avant sa déclaration.

// const age2 = calcAge2(1991); // appelée avant d'etre déclarée

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear; // Déclarée après avoir été appelée/
// }

// //  35 ----------  LES FONCTIONS ----------------
// //     ------------------ ARROW FUNCTIONS ----------------


// // function expression:
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear; // 
// }

// // Arrow function: 37" dans video 35
// const calcAge3 = birthYear => 2037 - birthYear; // pour pouvoire utiliser la fonction birthYear => 2037 - birthYear il faut la stocker dans une variable, ici calAge3.
// const age3 = calcAge3(1991);
// console.log(age3);

// Calcul des années restant avant la retraite
        /*  Age de la retraite (65) moins l'age actuel
            Déterminer l'age actuel,
            Soustraire l'âge actuel à l'age de la retraite, 65ans,
            Afficher les années restant avant la retraite.
        */
// Cas d'une variable (birthYear avec plusieurs lignes de codes)
// const yearUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearUntilRetirement(1991));

// Cas avec plusieurs variable (birthYear et firstname):

// const yearUntilRetirement = (birthYear, firstname) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstname} il vous reste ${retirement} années avant la retraite`

// }
// console.log(yearUntilRetirement(1991, 'Jonas'));
// console.log(yearUntilRetirement(1975, 'Marc'));

/* Autre différence fondementale entre les déclarations de fonction et les expression de fonction:
        les Arrow function n'ont pas de mot-clé
*/

// 36 ---- FONCTION APPELANT D'AUTRES FONCTIONS ----

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const juice =`Juice with ${cutFruitPieces(apples)} apples and ${cutFruitPieces(oranges)} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// / EXERCICES FONCTIONS
 
// // Functions
 
// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} million people and it's capital is ${capitalCity}.`
// }
// const country1 = describeCountry('France', 65, 'Paris');
// const country2 = describeCountry('England', 70, 'London');
// const country3 = describeCountry('Spain', 40, 'Madrid');
 
// console.log(country1, country2, country3);
 
 
// // Pourcentage de la population mondiale
 
// function percentageOfWorld1(populationWorld1) {
//     return populationWorld1*100/7900;
// }
// const pop1World1 = percentageOfWorld1(65);
// const pop2World1 = percentageOfWorld1(100);
// const pop3World1 = percentageOfWorld1(1400);
 
// console.log(pop1World1);
// console.log(pop2World1);
// console.log(pop3World1);
 
// function percentageOfWorl2(populationWorld2) {
//     return populationWorld2*100/7900;
// }
// console.log(percentageOfWorl2(350));
// console.log(percentageOfWorl2(350));
// console.log(percentageOfWorl2(350));
 
// percentageOfWorld3 = populationWorld3 => populationWorld3*100/7900
 
// percentageOfWorld3(500);
 



// 38 ---- CODING CHALLENGE FUNCTIONS ----

// 1/ Creation d'une fonction fléchée 'calcAverage' pour le calcul de la moyenne de 3 scores.

// // Déclaration de fonction:
// function calcAverage (score1, score2, score3){
//     return ((score1 + score2 + score3)/3);
// }


// Expression de Fonction:

// console.log("------ DATA 1 ------")
// // const calcAverage = function (score1, score2, score3){
// //     return ((score1 + score2 + score3)/3);
// // }

// // Fonction Flèche:
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
// console.log(calcAverage(3,4,5));

// // 2/Utiliser la fonction pour calculer la moyenne des deux équipes:

// let scoreK = calcAverage(65,54,49);
// let scoreD = calcAverage(44,23,71);
// console.log(scoreD, scoreK);

// // Création de la fonction checkWinner afin de determiner le gagnant dans les deux cas DATA 1 et DATA 2:

// // DATA 1:
// // function checkWinner(scoreD, scoreK){
// //     if (scoreD>=2*scoreK) {return console.log(`Dolphins win ({scoreD} vs {scoreK})`)}
// //     if (scoreK>=2*scoreD) {return console.log(`Koalas win ({scoreK} vs {scoreD})`)}
// //     else {return console.log(`Nobody win`)}
// // } 

// const checkWinner = function(avgDolphins,avgKoalas){
//     if (avgDolphins >= 2*avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2*avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//     console.log(`Nobody win`);
//     }
// }
// checkWinner(scoreD, scoreK);
// // checkWinner(600, 100);
// // checkWinner(145, 656);

// //test data 2
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("----- DATA 2 -----");

// scoreK = calcAverage(23,34,27);
// scoreD = calcAverage(85,54,41);
// checkWinner(scoreD, scoreK);

// ------------------------------
//----------- 39 ----------------
// ------------------------------

console.log("39 ---- INTRODUCTION AUX TABLEAUX (ARRAY) ----"); 

console.log("----- Creation de tableau de 2 façon différentes -----");
console.log("")


console.log("     ___ 1ère façon. La plus utilisé: ___")
console.log("")

const f = ['Michael', 'Steven', 'Peter'];
console.log(f);


console.log("")
console.log("     *** 2eme façon: ***")
console.log("")

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log("")
console.log("")

console.log("'console.log(f[0]);' Indique la valeur de la position '0' ou '2' du tableau:")
console.log(f[0]);
console.log(f[2]);

console.log("")
console.log("")

console.log( "-- Affiche le nombre de valeurs dans le tableau 'f' ici '3' --")

console.log(f.length);

console.log("");
console.log( "-- Affiche la dernière valeur du tableau ici 'peter' --")

console.log(f[f.length -1]);

console.log("");
console.log('modifie la 2eme position du tableau');
f[2]='Jay' 

console.log(f);

console.log("");

console.log("Un tableau peu contenir des variables de différents types");
const firstName = 'Jonas';
const j = [firstName, 'Schmedtmann', 2037-1991, 'teacher', f];
console.log(j);
console.log("");
console.log("");

console.log("----------------- EXERCICE -----------------")

const calcAge= function(birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 =calcAge(years[0]);
const age2 =calcAge(years[1]);
const age3 =calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];

console.log(ages)


// ------------------------------
//----------- 40 ----------------
// ------------------------------

console.log("")
console.log(" 40 ---- Operations sur les tableaux (Methodes) ----");

console.log("")
console.log("")

console.log("La methode 'PUSH' permet de rajouter un nouvel element en fin de tableau")
const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('jay');
const newlength= friends.push('jay');
console.log(friends);
console.log(newlength);

console.log("Ici, 'const newlength= friends.push('jay');' => permet d'afficher la taille du tableau 'friends'. 'friends.push('jay') est une fonction qui retourne une valeur. Cette valeur est la taille du tableau 'friends', que l'on stock dans la constante newLengh et que l'on affiche ensuite")
console.log("")

console.log("La methode 'UNSHIFT' permet de rajouter un nouvel element en début de tableau")
console.log("")
friends.unshift('John');
console.log(friends);
console.log("")

console.log("La methode 'POP' permet de d'enlever un element en fin de tableau")
console.log("")
friends.pop();
console.log(friends);
console.log(" La fonction pop() retourne la valeur du dernier element de tableau")
const popped = friends.pop();
console.log(popped);
console.log(friends);

console.log("");
console.log("");
console.log("La methode 'SHIFT' permet de d'effacer le 1er élément du tableau ici 'John'")
friends.shift();
console.log(friends);

console.log("");
console.log("");

console.log("La methode '.indeOf('Steven') ' permet de connaitre la position d'un element dans le tableau. Ici Steven est a la position 1 du tableau (Michael est la position zéro!!)")

console.log(friends.indexOf('Steven'));
console.log("Si on demande un élément qui n'existe pas alors nous avons le retour '-1)")
console.log(friends.indexOf('Jean'));

console.log("Il existe une méthode plus 'moderne' que .indexOf et plus pratique (ES6) '.includes'. Cette methode reourne une valeur vrai ou fausse")

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Jean'));
console.log(friends.includes('23'));
console.log(friends.includes(23));
console.log("Attention, '.includes' ne converti pas les nombre sous forme de STRING en ENTIER!")

if (friends.includes('Steven')) {
    console.log("Steven fait bien parti du tableau")
} else console.log("Bah non il ne fait pas partis du tableau")
console.log(friends)

console.log("")
console.log("")

if (friends.includes('Jean')) {
    console.log("Steven fait bien parti du tableau")
} else console.log("Bah non, jean, ne fait pas partis du tableau")
console.log(friends)

console.log("")
console.log("")


// *****************************************************************
// *****************************************************************
// ---------- exercices du document assignments - tableau ---------- 
// *****************************************************************
// *****************************************************************

console.log("*****************************************************************")
console.log("*****************************************************************")
console.log("")
console.log("------ exercices du document assignments - tableau ------")
console.log("")
console.log("--------------------- Intro to Arrays ---------------------- ")
console.log("*****************************************************************")
console.log("*****************************************************************")

console.log("")
console.log("")


// Intro to Arrays:
// 1-
console.log("        1- CREATE AN ARRAY 'population'")
console.log("")
const population = new Array(65,55,15,300)
console.log(population)
console.log("")

// 2-
console.log("        2- LOG TO THE CONSOLE")
console.log("")
console.log(population.length === 4);
console.log("")

// 3-
console.log("        3- CREATE AN ARRAY 'percentageOfWorld'")
console.log("")


// function percentageOfWorld(population) {
//     return population*100/6000
// }

const percentageOfWorld = (population) => population * 100 / 6000;


// percentage = new Array((population[0]*100/6000), (population[1]*100/6000), (population[2]*100/6000), (population[3]*100/6000));
// console.log(percentage)

percentage = new Array(
    percentageOfWorld(population[0]),
    percentageOfWorld(population[1]),
    percentageOfWorld(population[2]),
    percentageOfWorld(population[3])
    );
console.log(percentage);

console.log("")
console.log("")

console.log("-------------------------------");
console.log("----------- 41 ----------------");
console.log("-------------------------------");

console.log("")
console.log("")

console.log("- 41 ------ CODING CHALLENGE #2 ARRAYS ------")

console.log("1 - Creer une fonction 'calcTip' permetttant le calcul d'un pourboire selon ces règles: 15% si la valeur de l'addition est entre 50 et 300. Sinon 20%");

function calcTip(note) {
    if (note>=50 && note<=300) { 
        return note*0.15;
    }else return note*0.2;
};
console.log("")
console.log (calcTip(100));
console.log("")


console.log(" 2 - Creation d'un tableau nomé 'bills' contenant les données test suivante: 125,555,44");

const bills=[125,555,44];
console.log("")
console.log (bills);
console.log("")
console.log("")
console.log(" 3 - Creation d'un tableau nomé 'tips' contenant la valeur du pourboire pour chaque note, calculé grace à la fonction 'tip'.");

const tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("")
console.log(tips);

console.log("4 - Création d'un tableau 'total' regroupant les valeurs de bill+tip")
console.log("")
const total=[bills[0]+tips[0], bills[1]+tips[1],bills[2]+tips[2]];

console.log(total);


console.log("")
console.log("")

console.log("-------------------------------");
console.log("----------- 43 ----------------");
console.log("-------------------------------");

console.log("")
console.log("")

console.log("- 43 ------ Réccuperation des données d'un objet avec Dot vs Bracket notation ------")

/*
console.log("")

const jonas = {
    firstName: 'Jonas',
    lastName:'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log("");
console.log(jonas.lastName);
console.log(jonas['lastName']);

console.log ("// Il est possible de combiner les termes des clés de l'object.");

const nameKey = 'Name';  console.log ("// on defini une constante qui a pour valeur 'Name'    const nameKey = 'Name'");
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);

const interestedIn = prompt('What do u want to know about Jonas? Choose between firsName, lastName, age, job, and friends');

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firsName, lastName, age, job, and friends");
}

console.log("Rajouter des propriétées a un objet ave Dot ou Brackets")
jonas.location ='Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);*/

// Challenge
//"Jonas has 3 friends and his best friend is called Michael"
// console.log("")

// const jo = {
//     firstName: 'Jonas',
//     lastName:'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// const J = jo.firstName;
// const xFriends = friends.length;
// const bestFriend = friends[0];
// console.log(J, xFriends, bestFriend);

// console.log(`${jo.firstName} has ${jo.friends.length} friends and his fucking best friend is the mod'fucker ${jo.friends[0]}`);

// // console.log(`${J} has ${xFriends} friends and his best friend is called ${bestFriend}`);

// console.log("")
// console.log("")

// console.log("-------------------------------");
// console.log("----------- 44 ----------------");
// console.log("-------------------------------");

// console.log("")
// console.log("")

// console.log("- 44 ------ Object method ------")


// /* Commenté pour tester le 'THIS'
// const jonas = {
//     firstName: 'Jonas',
//     lastName:'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;

//     calcAge: function(birthYear) {
//         return 2037 - birthYear;
//     }
// };
// */

// console.log("L'expression d'une fonction peut etre la valeur d'une propriétée d'un objet")
// console.log("Toutes fonction intégrée a un object est appelée une 'methode'. ")
// console.log("Tout type de données peut être intégrer dans un object")

// console.log("Il est possible d'accéeder aux propriétées des fonctions comme pour la méthode calcAge")


// // console.log(jonas.calcAge(1991)); // ici jonas.calage deviendra la valeur de la fonction. Avec les parenteses () on appel la fonction avec le parametre 1991.
// // console.log(jonas[calcAge(1991)]); // Attention mauvaise syntaxe!
// // console.log(jonas['calcAge'](1991)); // attention a ne pas oublier les string 'calcAge'. ici jonas['calcAge'] deviendra la valeur de la fonction. Avec les parenteses () on appel la fonction avec le parametre 1991.

// // THIS keyword

// const jonas = {
//     firstName: 'Jonas',
//     lastName:'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function() {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;

//     calcAge: function() {
//         return 2037 - this.birthYear;

//     }
// };
// console.log(jonas.calcAge());

// // console.log(jonas['calcAge'](1991))
// //Challenge
// //"Jonas is a 46 years old teacher. + toutes les donnes de l'objet. abd he has a driver's License (ou pas)"

// const marc = {
//     firstName: 'Marc',
//     lastName:'DEVI',
//     birthYear: 1975,
//     job: 'Developper',
//     friends: ['Jack', 'Bernard', 'Benoit'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// const vincent = {
//     firstName: 'Vincent',
//     lastName:'DEVI',
//     birthYear: 1980,
//     job:'owner company',
//     friends: ['Seb', 'Michael', 'Gertrude',],
//     hasDriversLicense: false,

//     calcAge: function(){
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// }

// console.log(marc.getSummary());
// console.log(vincent.getSummary());



// console.log("")
// console.log("")

// console.log("-------------------------------");
// console.log("----------- 45 ----------------");
// console.log("-------------------------------");

// console.log("")
// console.log("")

// console.log("- 45 ------ CODING CHALLENGE #3 ------")

// console.log("1- Céation des objets pour Mark Miller et John Smith");

// const mark = {
//     fullName : 'MarK Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.BMI = this.mass/(this.height*this.height);
//         return this.BMI
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 90,
//     height: 1.71,

//     calcBMI: function() {
//         this.BMI = this.mass/(this.height*this.height);
//         return this.BMI
//     }
// }
// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// mark.calcBMI();
// john.calcBMI();

// if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)    
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is lower than ${john.fullName}'s (${john.calcBMI()})`)
// }


// console.log("")
// console.log("")

// console.log("-----------------------------------------------------------");
// console.log("----------- EXERCICES Feuille ASSIGNMENTS  ----------------");
// console.log("-----------------------------------------------------------");

// console.log("")
// console.log("")

// console.log("----------- EXERCICE Intro to objects  ----------------");

// // Creer un object appelé "myCountry" avec un pays de votre choix contenant 'country', 'capital', 'language,' population and 'neighbours' (un tableau comme vu précédement).
// /*
// const myCountry = {
//     country: 'France',
//     capital: 'Paris',
//     language: 'French',
//     population: 65,
//     neighbourgs: ['Belgique', 'Luxembourg', 'Allemagne','Suisse','Italie', 'Espagne']
// }
// console.log(myCountry);

// console.log("----------- EXERCICE Dot vs Bracket notation ----------------");


// //1 log a stringthe country and all caracteristics

// console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbourgs.length} neighbouring countries and a capital called ${myCountry.capital}`);

// //2 increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

// myCountry.population += 2;
// console.log(myCountry.population);
// console.log(myCountry);

// myCountry['population'] -= 2;
// console.log(myCountry);
// */
// console.log("----------- EXERCICE Object Methods ----------------");
// /*
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.
// */

// //1.

// const myCountry = {
//     country: 'France',
//     capital: 'Paris',
//     language: 'French',
//     population: 65,
//     neighbourgs: ['Belgique', 'Luxembourg', 'Allemagne','Suisse','Italie', 'Espagne'],

//     describe: function () {
//         console.log(
//             `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbourgs.length} neighbouring countries and a capital called ${this.capital}`)
//     },

//     checkIsland: function(isIsland) {
//         if (this.neighbourgs.length = 0) {
//             console.log(`${this.country} is not an Island!`)
//         } else {
//             console.log(`${this.country} is an Island!`)
//         }
// },

// console.log(myCountry.checkIsland())


// console.log("")
// console.log("")
console.log("-----------------------------------------------------------")
console.log("-----------------------------------------------------------")
console.log(" -------------- ITERATIONS: THE 'FOR' LOOP ----------------")
console.log("-----------------------------------------------------------")
console.log("-----------------------------------------------------------")

//  'for' loop keeps running while consition is TRUE
for(let rep=1; rep<=50; rep++){ // rep++ équivaut à rep=rep+1
    console.log(`Lever poid répétition ${rep}`)
};


console.log("")
console.log("")

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
