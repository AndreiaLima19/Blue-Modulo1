let filme = {Nome:'Vingadores', Ano: '2020', Gênero: 'Ação'}

// dados, recebe a chave       
for (let dados in filme){
    console.log(dados +'->'+ filme[dados]);
}