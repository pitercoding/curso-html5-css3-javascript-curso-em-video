let valores = [8, 1, 7, 4, 2, 9]

//Mostra todo o vetor com []
console.log(valores)

/* 
Forma não otmizada:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


Forma otimizada:
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Forma recente e moderna:
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Organizando e imprimindo
console.log(`O array organizado de forma crescente fica assim: ${valores.sort()}`)