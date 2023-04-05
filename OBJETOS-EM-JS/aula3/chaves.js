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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.log("Erro. É necessário ter um endereço cadastrado.");
}

