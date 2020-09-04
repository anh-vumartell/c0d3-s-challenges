const countTo98 = (i=0) =>{ //counter i to keep track of iteration
    if(i === 99){ //condition to stop
       return null
    }
    console.log(i)
    return countTo98(i+1) // next iteration
}
//Call the function to test
countTo98()