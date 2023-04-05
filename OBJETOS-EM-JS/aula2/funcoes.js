const cliente = {
    nome: "Cleber",
    idade: 43,
    email: "cleber@js.com",
    telefone: ["04335121166", "043999999999"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) { 
            console.log( "Saldo insuficiente")
        } else { 
            this.saldo -= valor;
            console.log (`Pagamento efetuado com sucesso. Novo saldo:  ${this.saldo}`)
        }
        
    },
};

cliente.efetuaPagamento(25);

