const logNonMatching = (str, char, i = 0) =>{
    //base case
    if(i === str.length){
        return
    }
    if(str[i] !== char){
        console.log(str[i])
    }
    return logNonMatching(str, char, i + 1)
}

const res = logNonMatching("banana","a")
console.log(res)