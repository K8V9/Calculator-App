const result = document.getElementById("resultscreen");

function addToResultScreen(input){
    result.value += input;
}
function calculate(){
    try {
        result.value = eval(result.value);
        easterEgg(result.value);
    } catch (error) {
        result.value = "SYNTAX ERROR";
        setTimeout(() => {
            clearScreen();
        }, 1000);
    }

}
function clearScreen(){
    result.value = "";
}
function easterEgg(input){
    if(input == 74713.14){
        window.alert("You found her! https://ibb.co/xsSkfG1"); 
    }
}

