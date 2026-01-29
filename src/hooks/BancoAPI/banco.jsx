import users from "../../utils/users";

// Definições
class Definitions {
    constructor(name, money) {
        this.name = name;
        this.money = money;

        this.users = users;
        this.transacoes = [];
    }

    // para ganho de dinheiro
    work() {
        this.money += 50;
        console.log("Trabalhou.");
    }

    // fazer transação
    fazerTransacao(user, quantity) {
        if (!user) return {response: "Usuário inválido."}
        if (quantity > this.money) return {response: "Saldo insuficiente."}
        console.log("called")
        let usr = this.pegarUsuario(user)
        usr.money += quantity;

        this.money -= quantity;

        this.transacoes.push({
            de: this.name,
            para: user,
            money: quantity,
            data: Date.now()
        })
    }

    pegarUsuario(user) {
        let usrCharacter = user.charAt(0).toLowerCase(); // pega primeira letra
        if (!usrCharacter) return

        return this.users[0][usrCharacter].find(usr => usr.name === user);
    }

    pegarUsuarios() {
        console.log(this.users);
    }

    gerarRelatorio() {
        return this.transacoes;
    }
}

export default Definitions;