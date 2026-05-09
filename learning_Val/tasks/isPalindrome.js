
function isPalindrome(string){
    if(typeof string !== 'string'){
        console.log('must be a string')
        return
    }
    
    let result = ''
    let cleanStr = string.toLowerCase().replaceAll(' ','')
    
    for(let i = cleanStr.length - 1; i >= 0; i--){
        result += cleanStr[i].toLowerCase()
    }

    console.log(result)
    return result === string.toLowerCase().replaceAll(' ','')
}

console.log(isPalindrome('  Racecar'))

//solve isPalindrome but without using data type array