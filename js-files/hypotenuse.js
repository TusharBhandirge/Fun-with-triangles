
sideA = document.querySelector("#id-sideA");
sideB = document.querySelector("#id-sideB");
submitButton = document.querySelector("#button-submit");
validationDiv = document.querySelector("#div-validationMsg");
resultDiv = document.querySelector("#div-result");

submitButton.addEventListener("click", function onSubmitClicked(){

    hideValidationMessage();
    if(sideA.value>0 && sideB.value>0){

        calculateHypotenuse(sideA, sideB);

    }else{

        setErrorMessage("Please enter valid sides of triangle");
    }

});

function calculateHypotenuse(sideA, sideB){

    var a = parseFloat(sideA.value);
    var b = parseFloat(sideB.value);

    var square = (a*a)+(b*b);
    var hypotenuse = Math.sqrt(square);

    setResult(hypotenuse); 

}

function setResult(hypotenuse){
    resultDiv.innerText = hypotenuse;
}


function setErrorMessage(msg){
    validationDiv.style = "display : block";
    validationDiv.innerText = msg;
}

function hideValidationMessage(){
    validationDiv.style = "display : none";
}
