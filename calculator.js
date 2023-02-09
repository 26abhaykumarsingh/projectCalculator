let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded',function(){
    let numbers = document.querySelectorAll('.digit');
    let operators = document.querySelectorAll('.operator');

    let allClear = document.querySelector('#allClear');
    let clear = document.querySelector('#clear');

    let decimal = document.querySelector('#decimal');
    let equals = document.querySelector('#equals');

    let previousScreen = document.querySelector('#previousScreen');
    let currentScreen = document.querySelector('#currentScreen');
    
    numbers.forEach((number) => number.addEventListener('click',function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener('click',function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    allClear.addEventListener('click',function(){
        currentValue='';
        previousValue='';
        operator='';
        previousScreen.textContent=previousValue;
        currentScreen.textContent=currentValue;
    })

    equals.addEventListener('click',function(){
        calculate();
        previousScreen.textContent = '';
        currentScreen.textContent = currentValue;
    })

    decimal.addEventListener('click',function(){
        addDecimal();
        currentScreen.textContent = currentValue;
    })

    clear.addEventListener('click',function(){
        lastClear();
    })


});

function handleNumber(num){
    if(currentValue.length<=10){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue ='';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+'){
        previousValue += currentValue;
    }
    else if(operator === '-'){
        previousValue -= currentValue;
    }
    else if(operator === 'x'){
        previousValue *= currentValue;
    }
    else if(operator === '/'){
        previousValue /= currentValue;
    }
    else if(operator === '%'){
        previousValue %= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue+='.';
    }
}

function lastClear(){
    if(currentScreen.textContent!=''){
        currentValue = currentValue.substring(0,currentValue.length-1);
        currentScreen.textContent = currentValue;
    }
    else if(currentScreen.textContent==='' && previousScreen.textContent!=''){
        currentScreen.textContent = previousValue;
        previousScreen.textContent='';
        currentValue = previousValue;
    }

}
