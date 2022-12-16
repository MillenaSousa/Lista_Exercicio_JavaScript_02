function valor(){

    var fahre = parseFloat(prompt("Digite a F°: "));

    var convert = (fahre - 32) * (5/9);
    alert("A temperatura F°" + fahre + " em  C°" + convert);
}