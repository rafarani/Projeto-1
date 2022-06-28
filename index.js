var array = [1, 2, 3, 4, 5]
var contador = 4;

while(contador > 0){
    var aux = array[0];
    for(let i=0; i<array.length-1; i++){
        array[i] = array[i+1];
    }
    array[array.length-1] = aux;
    console.log(array);
    contador--;
}