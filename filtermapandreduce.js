let numarray = [1,2,3,4,5,6]

let revisedArray = numarray.map(element => element+2)

console.log(revisedArray)

let employees = [
    {
        name:"Nilay",
        salary:8000,
        designation:"Manager"
    },
    {
        name:"Tom",
        salary:7000,
        designation:"Manager"
    },
    {
        name:"Ivor",
        salary:3000,
        designation:"Manager"
    },

]

let revisedData = employees.map(element => {
    element.salary = element.salary+1000
    return element
}
)
console.log(revisedData)

let sumevenArray = numarray.filter(element => element %2 === 0).reduce((total,element)=>total+element)
console.log(evenArray)

 let salaryFilter = employees.filter(element => {
   return  element.salary < 5000
})

let sumofNum = numarray.reduce((total,element)=> total+element,0)
console.log(sumofNum)