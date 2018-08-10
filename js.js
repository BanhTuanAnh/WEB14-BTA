
function functionName(age){
    console.log(age);
}
// const function functionName(age){
//     consolce.log("age")
// } goi sau khi khai bao

// const functionName = (age) =>{
//     console.log age;
// } goi sau khi khai bao
// functionName(5);
// var a=6;

// function print(){
//     var b=10;
//     console.log(a);
//     console.log(b);
// }
// print();
// var num 

// const function print ( i){
   
// }
// let // ton tai trong 1 block {}
// var // ton tai trong 1 funtion
// for(let i=num;i>=0;i--){
//     setTimeout(function(){
//         console.log(i);
//     },1000*(num-i));//miligiay
// }


function aRose(){
    console.log("sfdsdf");
}
function printB(call){
    call();
    console.log("B");
  
}
function printc(){
    console.log("C");
}
printB (printc)