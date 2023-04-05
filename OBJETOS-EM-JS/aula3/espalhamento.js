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
];


function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

ligaParaCliente(...cliente.telefone);

const encomenda = { 
    destinatario: cliente.nome,
    ... cliente.enderecos
};

console.log(encomenda);



