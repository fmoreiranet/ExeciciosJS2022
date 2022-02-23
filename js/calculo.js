const calculo = {
    valor1: 0,
    valor2: 0,
    opcao: "",
    resultado: 0,
    fazerOperacao: function() {
        if (this.opcao == "1") {
            this.resultado = this.valor1 + this.valor2
        } else if (this.opcao == "2") {
            this.resultado = this.valor1 - this.valor2
        } else if (this.opcao == "3") {
            this.resultado = this.valor1 / this.valor2
        } else {
            this.resultado = this.valor1 * this.valor2
        }
    },
    alterarValores: function(valor1 = 0, valor2 = 0, opcao = "") {
        this.valor1 = parseFloat(valor1);
        this.valor2 = parseFloat(valor2);
        this.opcao = opcao;
    }
}

// const mainController = {
//     calularValor: function () {
//         calculo.alterarValores(
//             document.querySelector('#v1').value,
//             document.querySelector('#v2').value,
//             document.querySelector('#opc').value
//         );
//         calculo.fazerOperacao();
//         //document.querySelector('#saida').innerHTML = 'Resultado: ' + calculo.resultado
//         this.mostrarResultado();
//     },
//     mostrarResultado: function () {
//         document.querySelector('#saida').innerHTML = 'Resultado: ' + calculo.resultado
//     }
// }