//pega tudo com a tag "input" e armazena numa lista.
const buttons = document.querySelectorAll("input");

for (var i = 0; i < buttons.length; i++) {
    //adiciona a possibilidade de chamar funções pra cada botão.
    buttons[i].addEventListener("click", function() {
        var result = document.getElementById("result");

        if (this.value == "=") {
            //eval() devolve a expressão de uma string!
            result.value = eval(result.value);

        } else if (this.value == "c") {
            //zera o valor
            result.value = "";

        } else if (this.value == "×") {
            //Substitui o ultimo valor se for um caractere especial pelo caractere de operação do JS.
            result.value += "*";

        } else if (this.value == "÷") {
            result.value += "/";

        } else if (this.value == "–") {
            result.value += "-";

        } else {
            //append o valor do botão clicado na string
            result.value += this.value
        }
    });
}