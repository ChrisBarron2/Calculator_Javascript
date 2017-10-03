function cleanDisplay() {
    document.getElementById('display').value = ' ';
}

function values(i) {
    document.getElementById('display').value += i;
}

function cal(){
    var result = 0;
    result = document.getElementById('display').value;   
    document.getElementById('display').value = '';
    document.getElementById('display').value = eval(result);
    
}

function squareRoot() {
    var result = 0;
    result = document.getElementById('display').value;
    document.getElementById('display').value = '';
    document.getElementById('display').value = eval(Math.sqrt(result));
}

function pi(){
    var result = 0;
    result = document.getElementById('display').value;
    document.getElementById('display').value = '';
    document.getElementById('display').value = eval(result * 3.1416);
}

function clearChar() {
    var char = "";
    char = document.getElementById('display').value;
    document.getElementById('display').value = char.substring(0,(char.length - 1));
    ;
}