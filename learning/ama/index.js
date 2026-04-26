

function solution(d,s){
    if(s === "two"){
        s = 2
    }else if(s === "three"){
        s = 3
    }else if(s === "four"){
        s = 4
    }else{
        s = 5
    }
    return d * s
}

console.log(solution(6,"three"))