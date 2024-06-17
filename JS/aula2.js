let timeCasa, timeVisitante;
timeCasa = parseFloat(prompt("Digite o time da Casa"));
timeVisitante = parseFloat(prompt("Digite o time visitante"));

let pontosCasa, pontosVisitante;
pontosCasa = prompt("Qual o placar do time da casa?");
pontosVisitante = prompt("Qual o placar do time visitante?");

if(pontosCasa > pontosVisitante){
alert(' time vencedor é o ${timeCasa}');
}else if(pontosCasa === pontosVisitante){
alert(' time vencedor é o ${timeVisitante}');
} else{
alert("Empatou")
}

   
