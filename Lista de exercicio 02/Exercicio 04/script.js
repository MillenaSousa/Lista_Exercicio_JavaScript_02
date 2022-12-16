function carro() {

    var fabricante = parseFloat(prompt("Digite o valor de fabrica do carro: "));

    var distribuidora = fabricante * 28 / 100;
    var imposto = fabricante * 45 / 100;
    var custo_final = distribuidora + imposto + fabricante;

    alert("O valor final do carro com a porcentagem dos impostos e distribuidora é R$ " + custo_final);

}