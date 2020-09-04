const fizzbuzz = (num, i=1) =>{ //num as input number, i as counter keeping track of iteration
    if(i > num){
        return null
    }
    let val = i
    if(i%3 === 0){
        val = "fizz"
    }
    if(i%5 === 0){
        val ="buzz"
    } 
    if(i%3 === 0 && i%5 === 0){
        val ="fizzbuzz"
    }
    console.log(val)
    return fizzbuzz(num, i+1)
    
}

fizzbuzz(30)