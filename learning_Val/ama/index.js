

function solution(d,s){
    if(!Number.isInteger(d) || d < 1 || d > 5){
        console.log("D must be an integer and between 1-5")
        return
    }else if(!(s === "one" || s === "two" || s === "three" || s === "four" || s === "five")){
        console.log("S must be between one and five")
        return
    }
    if(s === "two"){
        s = 2
    }else if(s === "three"){
        s = 3
    }else if(s === "four"){
        s = 4
    }else if(s === "one"){
        s = 1
    }else {
        s = 5
    }

    return d * s
}

console.log(solution(5,"five"))