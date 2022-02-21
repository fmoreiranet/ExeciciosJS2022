const triangulo = {
    ladoA: 0,
    ladoB: 0,
    ladoC: 0,
    tipo: "",
    pegarValores: function() { //carregar
        this.ladoA = parseFloat(document.querySelector("#LA").value);
        this.ladoB = parseFloat(document.querySelector("#LB").value);
        this.ladoC = parseFloat(document.querySelector("#LC").value);
    },
    tipoTriangulo: function() {
        var a = this.ladoA;
        if (this.ladoA == this.ladoB && this.ladoB == this.ladoC) {
            this.tipo = "Equilátero";
            return "Equilátero"; // possui os 3 lados iguais
        } else if (this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoC != this.ladoA) {
            this.tipo = "Escaleno";
            return "Escaleno" //possui 3 lados diferentes
        }
        this.tipo = "Isósceles";
        return "Isósceles" //possui 2 lados iguais.
    }
}

function saida(texto = "") {
    document.querySelector("#saida").innerHTML = texto
}