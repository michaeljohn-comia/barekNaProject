


// Names Array
let playerNames = [];

// pangkuha ng value sa input ng name
var inputName = document.querySelector("#inputplayer");
var BtnAddPlayer = document.querySelector("#BtnAddPlayer");
var playerList = document.querySelector(".player-names");

BtnAddPlayer.addEventListener("click", function () {
    var addName = inputName.value;
    if (addName.trim() !== "") {
        playerNames.push(addName.trim());
        console.log(playerNames);
        inputName.value = "";
        playerList.innerHTML = "";

        var ulList = document.createElement("ul");

        playerNames.forEach(function (item) {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            playerList.appendChild(listItem);
        })
        playerList.appendChild(ulList);


    } else {
        alert("Must add players!");
    }
})

// Custom Dare/Questions


var dareQuestion = [];
var defaultDareQuestion = [
    "dashjdfbjahsd",
    "lamaw lamaw lamaw lamaw",
    "kalabaw labaw kalabaw",
    "lorem30 hahahah",
]
var allQuestion = defaultDareQuestion.concat(dareQuestion)
console.log(allQuestion);
// getting the input
var inputDareQuestion = document.querySelector("#input-darequestion");
var addDareBtn = document.querySelector("#BtnDareQuestion");
var dareQuestionList = document.querySelector(".dare-question");

addDareBtn.addEventListener("click", function () {
    var addDareQuestion = inputDareQuestion.value;
    if (addDareQuestion.trim() !== "") {
        dareQuestion.push(addDareQuestion.trim());
        console.log(dareQuestion);
        inputDareQuestion.value = "";
        dareQuestionList.innerHTML = "";

        var ulListDare = document.createElement("ul");

        dareQuestion.forEach(function (dare) {
            const listDareQuestion = document.createElement("li");
            listDareQuestion.textContent = dare;
            dareQuestionList.appendChild(listDareQuestion);
        })
        dareQuestionList.appendChild(ulListDare);

        allQuestion = defaultDareQuestion.concat(dareQuestion);

    } else {
        alert("Input Additional Dare/Question")
    }
})

// defaultDareQuestion
function randomQuestion(allQuestion) {
    var randomInputDare = Math.floor(Math.random() * allQuestion.length);
    return allQuestion[randomInputDare];
};

// Name Cycle

var displayPlayer = document.querySelector("#player-taya");
var currentIndex = 0;

function displayName(){
    displayPlayer.innerHTML = playerNames[currentIndex]
    currentIndex = (currentIndex + 1) % playerNames.length;
}

// buttons sa main4 / mismong game
var bumarekBtn = document.querySelector("#bumarek");
var displayRandomDare = document.querySelector(".random-questionDare");
var mahinaBtn = document.querySelector("#mahina");

bumarekBtn.addEventListener("click", function () {
    var randomOye = randomQuestion(allQuestion);
    displayRandomDare.innerHTML = randomOye;
    displayName();
}); 

mahinaBtn.addEventListener("click", function(){
    var randomOye = randomQuestion(allQuestion);
    displayRandomDare.innerHTML = randomOye;
    displayName();
})