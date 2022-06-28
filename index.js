var qtdElementosDoArray = 5;
var array = [1, 2, 3, 4, 5]
var contador = 53;
var indiceX = 3;

while(contador > 0){
    var aux = array[0];
    for(let i=0; i<array.length-1; i++){
        array[i] = array[i+1];
    }
    array[array.length-1] = aux;
    console.log(array);
    contador--;
}

console.log(`próximo elemento: ${array[0]}`)
var contador2 = 0;
for(i=0; i<array.length; i++){
    if(array[i] != indiceX){
        contador2++;
    }else{
        break;
    }
}
console.log(`faltam ${contador2} para chegar no indice ${indiceX}`)
//adicionando comentário no final