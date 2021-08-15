
var angels = document.querySelectorAll("#id-input-angel");
var submitButton = document.querySelector("#id-submit");
var outputDiv = document.querySelector("#output");

submitButton.addEventListener("click",function onSubmitClicked(){

    setErrorMsg("");

    if(angels[0].value >0 && angels[1].value >0 && angels[2].value >0){
        console.log("Angels are valid");
        checkAngles(angels);

    }else{
        console.log("Angels are not valid");
        setErrorMsg("Please enter valid angels");
        
    }
});


function checkAngles(angels){
    var a = parseInt(angels[0].value);
    var b = parseInt(angels[1].value);
    var c = parseInt(angels[2].value);

    if((a+b+c == 180)){
        setErrorMsg("Yuhu! these angles can make a triangle");
    }else{
        setErrorMsg("Oops! these angles cannot make a triangle");
    }
}

function setErrorMsg(message){

    outputDiv.innerText = message;
}