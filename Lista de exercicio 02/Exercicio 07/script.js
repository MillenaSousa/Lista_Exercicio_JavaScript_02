function valor() {
    var raio = parseFloat(prompt("Digite o valor do raio: "));
    var altura = parseFloat(prompt("Digite o valor da altura: "));

    var area = Math.PI * raio ** 2 * altura;

    alert("O volume da lata de oleo é " + area);
}