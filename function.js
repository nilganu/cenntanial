function printName(name,a){
    console.log("Name is "+ name)

}
//printName("Tom");

//Function as expression
// let  sum = function(){
//     console.log(`Sum is`)
// }

//sum(10,20)

setTimeout(function(){
    console.log(`Sum is`)
},3000)


function sumOfTwoNumbers(a,b)
{
    return a+b;
}

let sum = sumOfTwoNumbers(10,20)