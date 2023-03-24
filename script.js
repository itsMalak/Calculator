let runningTotal = 0;
let buffer = "0";
let previousoperator ;

const screen = document.querySelector('.screen');

function buttonClick(value){
if(isNaN(value)){
    handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}
    function handleSymbol(symbol){
        switch(symbol){
            case 'C':
                buffer = '0';
                runningTotal = 0;
                break ;
            case '=':
                if(previousoperator === null){
                    return
                }
                flushOperation(parseInt(buffer));
                previousoperator = null;
                buffer = runningTotal;
                runningTotal = 0;
                break;
            case '←' :
             if(buffer.length ===1){
                    buffer = '0';
                    }else{
                buffer = buffer.substring(0, buffer.length - 1);
                }
                break;
            case '+':
            case '−':
            case '×':
            case '÷':
                handleMath(symbol);
                break;
        }
}      

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;

    }else{
        flushOperation(intBuffer);
    }
    previousoperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousoperator === '+'){
        runningTotal += intBuffer;
        }else if (previousoperator === '−'){
            runningTotal -=  intBuffer;
        }else if(previousoperator === '×'){
            runningTotal *= intBuffer
        }else if(previousoperator === '÷'){
            runningTotal /= intBuffer;
        }
            }

function handleNumber(numbreString){
    if (buffer === "0"){
     buffer = numbreString;
    }else{ buffer  += numbreString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click' , function(event){
    buttonClick(event.target.innerText);
})
}

init();