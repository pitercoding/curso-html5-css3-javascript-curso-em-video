let valores = [10, 15, 3, 6, 7, 2, 3, 1, 0, 33]

// console.log(valores)
//console.log(valores.push[50])

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//console.log(`O array organizado de forma crescente fica assim: ${valores.sort()}`)
console.log(`O vetor tem ${valores.length} posições.`)

let pos = valores.indexOf(33)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 33 está na posição ${pos} do array.`)
}
