function valor(){
    var valor = parseFloat(prompt("Digite o valor da prestação: "));
    var tempo = parseInt(prompt("Digite o tempo de atraso: "));
    var taxa = parseFloat(prompt("Digite o valor da taxa de atraso: "));

    var aumento = (valor * taxa / 100) * tempo;

    var prestacao = valor + (valor * taxa / 100) * tempo;

    alert("A prestação em atraso tera um aumento de " + aumento + ". A prestação ficara R$ " + prestacao)
}