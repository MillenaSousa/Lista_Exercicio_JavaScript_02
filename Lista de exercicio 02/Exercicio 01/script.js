function idade(){
    var ano = parseInt(prompt("Digite a sua idade em anos: "));
    var mes = parseInt(prompt("Digite quantos meses se passou do seu ultimo aniversario:  "));
    var dia = parseInt(prompt("Digite quatos dias se passous desde o seu ultimo mesversario: "));
    idade = (ano * 365) + (mes * 30) + dia
    alert("Você esta vivo a " + idade + " dias")
}