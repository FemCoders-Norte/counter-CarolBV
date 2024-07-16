function add(){
    //Escribir tu código que aumenta
    const numberElement = document.getElementById('number');
    let number = parseInt(numberElement.textContent, 10);
    numberElement.textContent = number + 1;
}

function reset(){
    //Escribir tu código que hace un reset a 0
    const numberElement = document.getElementById('number');
    numberElement.textContent = 0;
}

function decrease(){
    //Escribir tu código que resta
    const numberElement = document.getElementById('number');
    parseInt(numberElement.textContent,10);
    numberElement.textContent = 0;
}

export {add, reset, decrease}