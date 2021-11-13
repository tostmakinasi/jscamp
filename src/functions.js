

function addToCart(productName = "Elma",quantity){
    console.log(`Sepete Eklendi : ${productName}adet : ${quantity}`)

}

function removeFromCart(productName){
    console.log("Sepetten Çıkarıldı : " + productName)
}

function clearCart(){
    console.log("Sepet Temizlendi.")
}

let sayHello = ()=> {
    console.log("hi earth")
}

let addToCart1 = (product)=>{
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Tane Fiyatı : " + product.unitPrice)
    console.log("Eklenen Ürün Fiyatı : " +
    product.unitPrice * product.quantity)
}

let product1 = { 
    productName :"Elma", 
    unitPrice : 10,
    quantity : 5
}

//addToCart1(product1)

let product2 = { 
    productName :"Elma", 
    unitPrice : 10,
    quantity : 5
}

let product3 = { 
    productName :"Elma", 
    unitPrice : 10,
    quantity : 5
}

product2 = product3

product2.productName = "KARPUZ"

//console.log(product3.productName)


function addToCart2(products) {
    console.log(products)
}

let products = [
    { 
        productName :"Elma", 
        unitPrice : 10,
        quantity : 5
    },
    { 
        productName :"Armut", 
        unitPrice : 10,
        quantity : 7
    },
    { 
        productName :"Karpuz", 
        unitPrice : 10,
        quantity : 10
    }

]

//addToCart2(products)

function add(...numbers) {//rest 
    let total= 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    console.log(total)
}

let numbers = [30,40,50,60,70,65,600]

// console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"iç anadolu", population:30},
    {name: "marmara", population:50},
    {name:"karadeniz", population:100},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

// console.log(icAnadoluSehirleri)
let {productName:newProductName, unitPrice:newUnitPrice, quantity: newQuantity}={ 
    productName :"Elma", 
    unitPrice : 10,
    quantity : 5
}

 //console.log(newQuantity)


// isPrime(2, 5, 1027, 79, 57, 67)


 //isFriendNumbers(220,2845) 

 let getSumOfdivisors = (number,isFriendNumber = true) => {
    let result = 0
    let limit = isFriendNumber ? number/2 : number
    for (let i = 1; i <= limit; i++) {

        if (number % i == 0) {
            result += i
        }
    }
    return result
}

 let perfectNumbers = ()=>{

    for(let i = 6; i<= 1000; i++){

        if(getSumOfdivisors(i,false) == i*2){
            console.log(i)
        }
    }

}

let isFriendNumbers = (number1, number2) => {
    if (getSumOfdivisors(number1) == number2 &&
        getSumOfdivisors(number2) == number1) {
        console.log("Sayilar Arkadas Sayidir.")
    } else {
        console.log("Arkadas sayi degiller.")
    }
}

perfectNumbers()

isFriendNumbers(220,284) 