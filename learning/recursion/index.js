function sayHi(nbr){
    // base case
    if(nbr == 0){
        return
    }
    console.log('Hi')

    //recursive call
    sayHi(nbr - 1)
}

sayHi(5)


// 5 
// 5 * 4 * 3 * 2 * 1 == 120



function factorial(nmbr){
    // base case
    if(nmbr == 1){
        return 1
    }
    
    return nmbr * factorial(nmbr - 1)
}


// 5 * 4 * 3 * 2 * 1 == 120

console.log(factorial(5))
console.log(factorial(10))