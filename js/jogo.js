const jogo = {
    time1: "",
    time2: "",
    gols1: 0,
    gols2: 0,
    resultado: "",
    atualizaPlacar: function(g1 = 0, g2 = 0) {
        this.gols1 = parseInt(g1);
        this.gols2 = parseInt(g2);
    },
    atualizaResultado: function() {
        if (this.gols1 > this.gols2) {
            this.resultado = this.time1;
        } else if (this.gols1 == this.gols2) {
            this.resultado = "Empate";
        } else {
            this.resultado = this.time2;
        }
    },
    atualizaTimes: function(t1 = "", t2 = "") {
        this.time1 = t1;
        this.time2 = t2;
    },
}