const countToMe = (num,i = 8) =>{//a counter to keep track of iteration
    if(i > num){
        return null
    }
    console.log(i)
    return countToMe(num, i+1)
}
countToMe(16)