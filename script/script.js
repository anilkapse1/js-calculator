





"use strict"

let calcArea = document.querySelector('input');
let numbers = document.querySelectorAll('.numbers span');
let action = document.querySelectorAll('.action span');

numbers.forEach((val,idx)=>{
    val.addEventListener('click',f=>{
        const {innerText} = f.target;
        console.log(innerText);
       if(calcArea.value==='0' || calcArea.value.length<0 || calcArea.value==='undefined'){
           calcArea.value="";
       }         
        calcArea.value+=innerText;
    })
})

action.forEach((val,idx)=>{
    val.addEventListener('click',f=>{
        const operation  = ['+','-','*','/','%'];
        const {innerText} = f.target;
        console.log(innerText);
        if(operation.includes(innerText)){
           addOp(innerText);
        }
        else if(innerText==='X'){
            subVal();
        }
        else if(innerText==='cl'){
            clearCalc();
        }
        else{
            calData()
        }
    })
})

//add operation call
const addOp=(op)=>{
    console.log('add operators');
    calcArea.value+=op;
}


//sub value call
const subVal=()=>{
    console.log('subtract step by step');
    const calcAreaLength = calcArea.value.length;
    calcArea.value= calcArea.value.substr(0,calcAreaLength-1);
}

//clear value call
const clearCalc=()=>{
    console.log('clear all');
    calcArea.value=" ";

}

//calc perform
const calData=()=>{
    console.log('call all');
    calcArea.value=eval(calcArea.value);

}



