const xss = [ [1,2,3]
            , [4,5,6]
            ];

function gridMap(fn,xss) {
    for(let i = 0; i < xss.length; i++){
        for(let j = 0; j < xss[i].length; j++){
            xss[i][j] = fn(xss[i][j])
            
        }
    }
    console.log(xss)
}

gridMap(addtwo, xss)

function addtwo(number){
    return number ** 2;
}

//console.log(xss[0].length)