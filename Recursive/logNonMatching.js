const logNonMatching = (str, char, i = 0) =>{
    //base case
    if(i === str.length){
        return
    }
    if(str[i] !== char){
        console.log(str[i])
    }
    // recursive case
    return logNonMatching(str, char, i + 1)
}

const res = logNonMatching("I love my baby"," ")
console.log(res)