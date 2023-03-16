function maxIndex(myarr){
    let ul = myarr.length
    maximum = myarr[ul-1]
    while (ul--){
        if(myarr[ul] > maximum){
            maximum = myarr[ul]
        }
    }
    return myarr.indexOf(maximum)
}
console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1