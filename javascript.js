const clearBtn = document.getElementById('clearBtn');
const sumBtn = document.getElementById('sumBtn');
const subBtn = document.getElementById('subBtn');
const mulBtn = document.getElementById('mulBtn');
const divBtn = document.getElementById('divBtn');
const oneBtn = document.getElementById('oneBtn');
const twoBtn = document.getElementById('twoBtn');
const threeBtn = document.getElementById('threeBtn');
const fourBtn = document.getElementById('fourBtn');
const fiveBtn = document.getElementById('fiveBtn');
const sixBtn = document.getElementById('sixBtn');
const sevenBtn = document.getElementById('sevenBtn');
const eightBtn = document.getElementById('eightBtn');
const nineBtn = document.getElementById('nineBtn');
const zeroBtn = document.getElementById('zeroBtn');
const dotBtn = document.getElementById('dotBtn');
const deleteBtn = document.getElementById('deleteBtn');
const equalsBtn = document.getElementById('equalsBtn');
const activeNum = document.getElementById('activeNum');
const savedNum = document.getElementById('savedNum');
var changeNum = false;
var operator = null;
var dotBool = true;

clearBtn.addEventListener('click', function(){
    
    activeNum.textContent= '0';
    savedNum.textContent= '';
    changeNum = false;
    operator = null;

});


oneBtn.addEventListener('click', function(){

    if((activeNum.textContent === "0" || changeNum === true)){

        changeNum=false;
        activeNum.textContent = 1;

    }

    else{

    activeNum.textContent += 1;

    }

});

twoBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true){

        changeNum=false;
        activeNum.textContent = 2;

    }

    else{

    activeNum.textContent += 2;

    }

});

threeBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0"  || changeNum === true){

        changeNum=false;
        activeNum.textContent = 3;

    }

    else{

    activeNum.textContent += 3;

    }

});

fourBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true){
        
        activeNum.textContent = 4;
        changeNum=false;

    }

    else{

    activeNum.textContent += 4;

    }

});


fiveBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true){

        activeNum.textContent = 5;
        changeNum=false;

    }

    else{

    activeNum.textContent += 5;

    }

});

sixBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true){
        
        activeNum.textContent = 6;
        changeNum=false;

    }

    else{

    activeNum.textContent += 6;
    
    }

});

sevenBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true){

        activeNum.textContent = 7;
        changeNum=false;

    }

    else{

    activeNum.textContent += 7;

    }

});


eightBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true ){

        activeNum.textContent = 8;
        changeNum=false;

    }

    else{

    activeNum.textContent += 8;

    }

});


nineBtn.addEventListener('click', function(){
   
    if(activeNum.textContent === "0" || changeNum === true){

        changeNum=false;
        activeNum.textContent = 9;
        
    }

    else{

    activeNum.textContent += 9;

    }

});


zeroBtn.addEventListener('click', function(){
   
    if(activeNum.textContent !== "0"){

        activeNum.textContent += 0;

    }
    if(changeNum === true){

        changeNum=false;
        activeNum.textContent = 0;

    }

});


dotBtn.addEventListener('click', function(){

    if(dotBool === true && changeNum === false){
   
        activeNum.textContent += ".";
        dotBool = false;

    }
    if(changeNum === true){

        activeNum.textContent = "0.";
        changeNum = false;
        dotBool = false;

    }

    if(activeNum.textContent === "0"){

        activeNum.textContent = "0.";
        dotBool = false;

    }

});

sumBtn.addEventListener('click', function(){

    if(operator !== null){

    calculateEquation();

    }

    savedNum.textContent= activeNum.textContent + ' + ';
    dotBool = true
    changeNum=true;
    operator = '+'
    

});

subBtn.addEventListener('click', function(){
   
    if(operator !== null){

        calculateEquation();

    }

    savedNum.textContent= activeNum.textContent + ' - ';
    dotBool = true
    changeNum=true;
    operator = '-'

});

mulBtn.addEventListener('click', function(){

    if(operator !== null){

        calculateEquation();

    }
   
    savedNum.textContent= activeNum.textContent + ' x ';
    dotBool = true
    changeNum=true;
    operator = 'x'

});

divBtn.addEventListener('click', function(){

    if(operator !== null){

        calculateEquation();

    }
   
    savedNum.textContent= activeNum.textContent + ' / ';
    dotBool = true
    changeNum=true;
    operator = '/'

});


equalsBtn.addEventListener('click', function(){

    calculateEquation();
  
});

deleteBtn.addEventListener('click', function(){

    let lastCharacter = activeNum.textContent.slice(-1);

    if(activeNum.textContent.length > 1){

    activeNum.textContent = activeNum.textContent.slice(0, -1);

    }

    else{

        activeNum.textContent = 0;

    }

    if(lastCharacter === "."){

        dotBool = true;

    }

});


function calculateEquation(){

    if (changeNum === false && savedNum.textContent.trim() !== '' && operator != null){
        
        savedNum.textContent = savedNum.textContent + activeNum.textContent + ' =';
        
        if(operator === '+'){

            activeNum.textContent = parseFloat(savedNum.textContent.split(" ")[0]) + parseFloat(activeNum.textContent);
            operator = null;
            
        }

        if(operator === '-'){

            activeNum.textContent = parseFloat(savedNum.textContent.split(" ")[0]) - parseFloat(activeNum.textContent);
            operator = null;
            
        }

        if(operator === 'x'){

            activeNum.textContent = parseFloat(savedNum.textContent.split(" ")[0]) * parseFloat(activeNum.textContent);
            operator = null;
            
        }

        if(operator === '/'){

            activeNum.textContent = parseFloat(savedNum.textContent.split(" ")[0]) / parseFloat(activeNum.textContent);
            operator = null;

        }
    }

}



