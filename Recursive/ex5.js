const numberedHello = (num, result = "") =>{
    if(num < 1){
        return result
    }
    return numberedHello(num-1, result + "hello")
}

console.log(numberedHello(5))