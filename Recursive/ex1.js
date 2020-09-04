const love = (i=0) =>{
    if(i === 99){
        return null
    }
    console.log("The things I do for love")
    return love(i + 1)

}
love()