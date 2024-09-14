let name = "Nilay"
let height = 5.7

console.log("Name is "+name)

let person = {
    name : "Nilay",
    height : 5.6
}
console.log("Name is "+ person.name+" Height is "+person.height)
console.log(`Name is ${person.name} height is ${person.height}`)
let userChoice = 'height'
console.log("Height is" + person[userChoice])