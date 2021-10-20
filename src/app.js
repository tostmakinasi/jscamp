// console.log("Merhaba Kodlama.io")

import { Customer } from "./oop"

// let dolarDun= 9.20
// let dolarBugun = 9.30

// let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konnut Kredisi"]

// console.log("<ul>")
// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log("<il>"+konutKredileri[i]+"</il>")
// }
// console.log("</ul>")

// console.log(konutKredileri);

// let student = {id:1,name:"Kubilay", puan : null}

//console.log(student)

// function save(deger, puan) {
    // console.log(deger.name +" : "+ puan )
// }

//save(student,40)

// let students = ["Kubilay","Halit","Cem"]

//console.log(students)

// let students2 = [student,{id:2,name:"Halit", puan : null},"Ankara",{city :"Istanbul"}]

//console.log(students2)
//rest
//params
// let showProducts = function (id,...products){
    // console.log(id)
    // console.log(products)
// }

// console.log(typeof showProducts)
// showProducts(5,"bir","iki","üç")
//SPREAD
let points = [5,6,77,8899,6]

console.log(Math.max(...points))
console.log(...points)

console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000]

let [small,medium,high] = populations

// console.log(small)
// console.log(medium)
// console.log(high)

let category = {id: 1, name: "Ýçecek"}

let {id,name} = category

console.log(name)
console.log(id)

//