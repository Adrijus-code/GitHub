const name = "AdrijusSalah"

console.log(name.length);


console.log(name.charAt(0));
console.log(name.charAt(5));
console.log(name.charAt(name.length-1));

console.log(name.substring(0, 3));
console.log(name.substring(2));

console.log(name.indexOf("dri"));
console.log(name.indexOf("drri"));

function reverseString(str){
    if(str.length === 0){
        return ""
    }
    return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1))
}



console.log(reverseString("salah"));
console.log(reverseString("adrijus"));
