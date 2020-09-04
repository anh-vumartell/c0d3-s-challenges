const sumEvens = (num, sum = 0) =>{
    //condition to stop
    if(num <= 1){
        return sum
    }
    
    if(num % 2 === 0){
        sum = sum + num
    }
    return sumEvens(num-1, sum)
    
}

const res = sumEvens(10)
console.log(res)
