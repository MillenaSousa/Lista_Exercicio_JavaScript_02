function votos() {
    var eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
    var voto_branco = parseInt(prompt("Digite a quantidade de voto em brancos : "));
    var voto_nulo = parseInt(prompt("Digite a quantidade de votos nulos: "));
    var voto_valido = parseInt(prompt("Digite a quantidade de votos validos: "));

    total_branco = 100 * voto_branco / eleitores;
    total_nulo = 100 * voto_nulo / eleitores;
    total_valido = 100 * voto_valido / eleitores;

    document.write("A PORCENTAGEM DOS VOTOS BRANCOS SÃO: " + total_branco + "%" + "<br>");
    document.write("A PORCENTAGEM DOS VOTOS NULOS SÃO: " +  total_nulo + " %" + "<br>");
    document.write("A PORCENTAGEM DOS VOTOS VALIDOS SÃO: " + total_valido + "%");

    // alert("Porcentagem de votos brancos: " + total_branco)
    // alert("Porcentagem de votos nulos: " + total_nulo);
    // alert("Porcentagem de votos valido: " + total_valido);

}