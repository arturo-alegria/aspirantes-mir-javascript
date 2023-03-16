function max(myarr){
    let ul = myarr.length
    maximum = myarr[ul-1]
    while (ul--){
        if(myarr[ul] > maximum){
            maximum = myarr[ul]
        }
    }
    return maximum
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined