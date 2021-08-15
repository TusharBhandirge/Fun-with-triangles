

var base = document.querySelector("#base");
var height = document.querySelector("#height");
var submitButton = document.querySelector("#calculateArea");
var validationMsg = document.querySelector("#ValidationMessage");
var outputDiv = document.querySelector("#result");


submitButton.addEventListener("click", function submitClicked(){

    clearValidation();
    clearOutput();
    if(base.value >0 && height.value>0){

        var area = 0.5 * parseFloat(base.value) * parseFloat(height.value);

        setOutput("Area = "+area);
    }else{
        setErrorMsg("Base and height should be greater than 0");
    }

});

function setOutput(msg){
    outputDiv.innerText = msg;
}


function clearOutput(){
    outputDiv.innerText = "";
}

function setErrorMsg(msg){

    validationMsg.innerText = msg;
}

function clearValidation(){
    validationMsg.innerText = "";
}