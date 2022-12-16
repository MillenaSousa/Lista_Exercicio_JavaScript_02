function salario() {

    var salario = parseFloat(prompt("Digite o valor do seu salario mensal: "));
    var reajuste = parseFloat(prompt("Digite o valor da porcentagem do reajuste: "));

    var novo_salario = salario + (salario * reajuste / 100)
    alert("O novo salario é de R$ " + novo_salario)
}
