function join(myArray){

   let Str = myArray + ""

   while (true){
        let result = Str.replace(","," ")
        if (result === Str){
            break;
        }
        Str = result
   }
        
   return Str
}

console.log(join(['Hola','soy', 'Arturo'])) // Hola soy Arturo
console.log(join([5, 3, 8])) // 5 3 8




