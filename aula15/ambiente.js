let num = [9,4,5]
let pos = 0
num[3] = 3     // (num[x] = x) voce escolhe em qual local quer adicionar o valor
num.push(7,1)  // (num.push(x)) adiciona o valor a ultima casa do vetor 
num.sort()     // (num.sort()) organiza o vetor do menor para o maior 
               // (num.length) conta quantos elementos tem o vetor 
               // (num.indexOf(x)) mostra em qual posicao do vetor o valor escolhido esta, caso o valor nao exista no vetor retorna o valor -1
console.log(num)
for(pos = 0; pos < num.length; pos++){
    console.log(`a posicao ${pos} tem o valor ${num[pos]}`)
}
console.log(`esse vetor tem ${num.length} elementos`)

console.log('-----OUTRA MANEIRA DE USAR FOR COM VETORES-----')

let valores = [1,2,7,4,9,8]
let procura = valores.indexOf(3)
for (let pos1 in valores){
    console.log(valores[pos1])
}
if(procura == -1) {
    console.log('Valor nao encontrado')
} else {
    console.log( ` o valor 8 esta na posicao : ${procura}`)
}