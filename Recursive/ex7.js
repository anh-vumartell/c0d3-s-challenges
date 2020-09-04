const tryNumRange = (num, func, i = 1) =>{
    //condition to stop
    if(i >= num){
        return false
    }
    if(func(num)){
        return true
    }
    //next iteration
    return tryNumRange(num - 1, func, i+1)
}

let res = tryNumRange(10, (e) => { return e > 12})
console.log(res)