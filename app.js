var buttonTranslate=document.querySelector("#translate-btn")
var textInput=document.querySelector(".input-box")
var output=document.querySelector(".output-box")
var yodaUrl="https://api.funtranslations.com/translate/yoda.json";

function getTranslatedUrl(input){
    return yodaUrl+"?text="+input;
}
function errorHandler(){
    console.log("Something went wrong....Api is not working")
    alert("Something went wrong....Api is not working")
}
function clickHandler(){
var readInput=textInput.value;
fetch(getTranslatedUrl(readInput))
.then(response=>response.json())
.then(json =>{
    let translatedOutput=json.contents.translated;
    output.innerText=translatedOutput;
})
.catch(errorHandler);
}
buttonTranslate.addEventListener("click",clickHandler)