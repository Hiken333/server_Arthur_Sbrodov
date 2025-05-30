function operationPlus(){
    const numbrOne=parseFloat(document.getElementById('numberOne').value);
    const numbrTwo=parseFloat(document.getElementById('numberTwo').value);
    let result=numbrOne+numbrTwo;
    console.log(result);
    document.getElementById('result').textContent='Результат: ' + result;
}
function operationMinus(){
    const numbrOne=parseFloat(document.getElementById('numberOne').value);
    const numbrTwo=parseFloat(document.getElementById('numberTwo').value);
    let result=numbrOne-numbrTwo;
    console.log(result);
    document.getElementById('result').textContent='Результат: ' + result;
}
function operationMultiplication(){
    const numbrOne=parseFloat(document.getElementById('numberOne').value);
    const numbrTwo=parseFloat(document.getElementById('numberTwo').value);
    let result=numbrOne*numbrTwo;
    console.log(result);
    document.getElementById('result').textContent='Результат: ' + result;
}
function operationDivide(){
    const numbrOne=parseFloat(document.getElementById('numberOne').value);
    const numbrTwo=parseFloat(document.getElementById('numberTwo').value);
    let result;
    if(numbrTwo!==0){
    result=numbrOne/numbrTwo;
    }else{
        alert('деление на 0 запрещенно');
    }
    console.log(result);
    document.getElementById('result').textContent='Результат: ' + result;
}
function clearNumbers(){
    console.log('удаление');
    document.getElementById('numberOne').value='';
    document.getElementById('numberTwo').value='';
    document.getElementById('result').textContent='';
}
console.log('res')

const plus = document.getElementById('plus').addEventListener('click', ()=>{
    operationPlus();
});
const minus = document.getElementById('minus').addEventListener('click', ()=>{
    operationMinus();
});
const multiplication = document.getElementById('multiplication').addEventListener('click', ()=>{
    operationMultiplication();
});
const divide = document.getElementById('divide').addEventListener('click', ()=>{
    operationDivide();
});