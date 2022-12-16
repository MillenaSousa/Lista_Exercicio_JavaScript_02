function valor(){
    var valor_a = parseFloat(prompt("Digite um valor A: ")) 
    var valor_b = parseFloat(prompt("Digite outro valor B: "))
   
   
    var valor_c = valor_a
    var valor_a = valor_b
    var valor_b = valor_c

    alert("O valor A virou " + valor_a )

    alert("O valor B virou " + valor_c)
}