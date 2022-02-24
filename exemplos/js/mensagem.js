const mensagem = {
    nomeUser: "",
    emailUser: "",
    telUser: "",
    texto: "",
    atualizar: function(nome = "", email = "", tel = "", texto = "") {
        this.nomeUser = nome;
        this.emailUser = email;
        this.telUser = tel;
        this.texto = texto;
    },
    enviar: function() {
        var error = "";
        if (error != "") {
            return false;
        }
        return true;
    }
};