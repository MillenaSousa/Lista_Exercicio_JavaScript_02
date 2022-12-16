function valor(){
    var tempo = parseInt(prompt("Digite o tempo gasto na viagem: "));
    var velocidade = parseInt(prompt("Digite a velocidade durante a viagem: "));
    
    var distancia = tempo * velocidade

    var litros = distancia / 12

    alert("Você percorreu " + distancia + "KM. E gastou " + litros + " L durante a viagem")
}