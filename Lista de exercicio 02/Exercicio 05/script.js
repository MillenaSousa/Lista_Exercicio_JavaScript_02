function fahre(){
    var celsius = parseInt(prompt("Digite a temperatura em C°: "));
    var convert = ( 9 * celsius + 160 ) / 5
    
    alert("A temperatura " + celsius + " em fahrenheit é " + convert)
}