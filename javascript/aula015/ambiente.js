let num = [5, 8, 2, 9, 3]

console.log(num) // imprime o vetor
console.log(`O vetor tem ${num.length} posições`) // verifica o tamanho
console.log(`O primeiro elemento é o ${num[0]}`) // verifica o índice 0
num.push(1) // adiciona o elemento no fim do array

//Busca a posição do valor(8) no array. Se não encontrar mostraria somente -1. If criado para mostrar mensagem de erro caso não encontre o valor:
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

num.sort() // ordena
console.log(num)
