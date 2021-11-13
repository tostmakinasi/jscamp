
let isPrime = (number)=>{
    if (number == 2) {

        return true

    } else if (number < 2) {

        return false

    } else {

        let s = 0

        for (let i = 3; i < number; i++) {

            if (number % i == 0) {
                s++
            }
        }

        if (s == 0) {

            return true

        } else {

            return false

        }
    }
}
let isPrimeCheck = (...numbers)=> {

    numbers.forEach(p => {

            if (isPrime(p)) {

                console.log(p + "  >> asal")

            } else {

                console.log(p + " >> asal değil")

            }
        
    })


}


//
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

let isFriendNumbers = (number1, number2) => {
    if (getSumOfdivisors(number1) == number2 &&
        getSumOfdivisors(number2) == number1) {
        console.log("Sayilar Arkadas Sayidir.")
    } else {
        console.log("Arkadas sayi degiller.")
    }
}


let perfectNumbers = ()=>{

    for(let i = 6; i<= 1000; i++){

        if(getSumOfdivisors(i,false) == i*2){
            console.log(i)
        }
    }

}

let primeNumbers = ()=> {

    for(let i = 2; i<=1000;i++){

        if(isPrime(i)){
            console.log(i)
        }

    }
}