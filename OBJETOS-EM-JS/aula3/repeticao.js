const cliente =  {
    nome: "Cleber",
    idade: 43,
    email: "cleber@cleber.com",
    telefone: ["31353135435435", "1313546465"],

};

cliente.enderecos = [
    {
        rua: "R. Lourenço Cioli",
        numero: 63,
        apartamento: true,
        complemento: "ap 123",
    },
]




for (let chave in cliente) { 
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log( `A chave ${chave} tem valor ${cliente[chave]}`);
           
    }

    
}