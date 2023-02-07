let add = function(a,b){
    return a+b;
};

let sub = function(a,b){
    return a-b;
};

let multiply = (a,b)=>{
    return a*b;
};

let divide = (a,b)=>{
    return a/b;
};

let mod = (a,b)=>{
    return a%b;
}



let operate = (a,b,o)=>{
    if(o == 'add'){
        return add(a,b);
    }
    else if(o === 'sub'){
        return sub(a,b);
    }
    else if(o === 'multiply'){
        return multiply(a,b);
    }
    else if(o === 'divide'){
        return divide(a,b);
    }
    else if(o === 'mod'){
        return mod(a,b);
    }
}