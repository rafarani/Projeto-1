var array = [2, 5, 7, 8, 9]

//rodar 4 vezes
var aux = array[0];
for(let i=0; i<array.length-1; i++){
    array[i] = array[i+1]
}
array[array.length-1] = aux
console.log(array)