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
    
    //          recursive call
    return nmbr * factorial(nmbr - 1)
}

// factorial(5)
// 5 * 4 * 3 * 2 * 1

console.log(factorial(5))
console.log(factorial(10))







// We have a number of bunnies and each bunny has two big floppy ears. 
// We want to compute the total number of ears across all the bunnies
//  recursively (without loops or multiplication).

// bunnyEars(4)   ---> 8
// bunnyEars(5)   ---> 10

function bunnyEars(num_bunnies){
    if(num_bunnies === 1){
        return 2
    }
    return 2 + bunnyEars(num_bunnies - 1)
}

console.log(bunnyEars(4));

// 2 + 2 + 2 + 2 


// bunnyEars2(5) --> 12

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) 
// have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, 
// because they each have a raised foot. Recursively return the number
// of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).



// 5  --> 2
// 4  --> 3
// 3  --> 2
// 2  --> 3
// 1  --> 2



// function evenOrOdd(nmbr){
//     return nmbr % 2 === 0 ? "even":"odd"
// }

function bunnyEarsTwo(numb_bunnies){
    if(numb_bunnies === 1){
        return 2;
    }
    if(numb_bunnies % 2 === 1){
        return 3 + bunnyEarsTwo(numb_bunnies - 1)
    }else{
        return 2 + bunnyEarsTwo(numb_bunnies - 1)
    }
}




// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks,
//  the next row has 3 blocks, and so on. Compute recursively
//  (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.


// 3 rows : 6
// 4 rows : 10
// 5 rows : 15
// 6 rows : 21

// triangle(6)
// * * * * * *
// * * * * *
// * * * * 
// * * * 
// * * 
// *

function triangle(rows){
    if(rows === 1){
        return 1
    }
    return rows + triangle(rows - 1)
}

console.log(
    triangle(3)
);
console.log(
    triangle(4)
);
console.log(
    triangle(5)
);
console.log(
    triangle(6)
);




// "KAYAK"
// "racecar"
// "noon"

// isPalindrome("AYB")

function isPalindrome(str){
    if(str.length < 2){
        return true
    }
    if(str.charAt(0) !== str.charAt(str.length - 1)){
        return false
    }else{
        return isPalindrome(str.substring(1, str.length - 1))
    }
}

// "salah" ---> ""
// "h" + "a" + "l" + "a" + "s" 
// function reverseString(str){
//     if(str.length === 1){
//         return str
//     }

//     return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1))
// }

// console.log(reverseString("salah"));
// console.log(reverseString("adrijus"));
