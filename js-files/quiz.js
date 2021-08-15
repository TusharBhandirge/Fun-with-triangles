
var submitButton = document.querySelector("#button-submit");
var quizForm = document.querySelector(".quizForm");
var outputDiv = document.querySelector("#div-result");

var ans = ["yes","No", "yes","yes","yes"];

submitButton.addEventListener("click", function submitClicked(){

    var score = 0;
    var index = 0;

    var formResults = new FormData(quizForm);

    for(let value of formResults.values()){
        console.log(value);
        if(ans[index] === value){
            score++;
        }
        index++;
    }

    outputDiv.innerText = "score : "+score;

});