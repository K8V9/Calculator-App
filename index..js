const result = document.getElementById("resultscreen");
function addToResultScreen(input){
    result.value += input;
}
function calculate(){
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "SYNTAX ERROR"
    }

}
function clearScreen(){
    result.value = "";
}