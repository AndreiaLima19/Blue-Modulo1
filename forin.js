//Laço for in

/*for (variavel) in objeto{
    código a ser executado
}
*/

let carro = {Modelo: 'A3 Sedan', Marca:'Audi', Ano: 2022}  //Dicionário

for (let caracteristicas in carro){
    console.log(caracteristicas+'->'+carro[caracteristicas]);
}