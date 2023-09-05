


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
    "Testing na tanong 1",
    "Basta tanong to 2",
    "Ikatlong tanong hahah barek na aba",
    "ewan ahhahahahahah",
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

// page actions
var page1StartBtn = document.querySelector(".wrapper-startBtn");
var page2StartBtn = document.querySelector("#BtnGoName");
var page3StartBtn = document.querySelector("#BtnGoDare");

var page1Screen = document.querySelector(".container-mainpage1");
var page2Screen = document.querySelector(".container-mainpage2");
var page3Screen = document.querySelector(".container-mainpage3");
var page4Screen = document.querySelector(".container-mainpage4");

page1StartBtn.addEventListener("click", function(){
    page1Screen.style.display = "none";
    page2Screen.style.display = "block";
})
page2StartBtn.addEventListener("click", function(){
    page2Screen.style.display = "none";
    page3Screen.style.display = "block";
})
page3StartBtn.addEventListener("click", function(){
    page3Screen.style.display = "none";
    page4Screen.style.display = "flex";
})
