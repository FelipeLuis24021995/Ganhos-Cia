function imprimeArray() {
    var ganhos99 = parseFloat(document.getElementById('caixa1').value);
    var ganhosUber = parseFloat(document.getElementById('caixa2').value);
    var ganhosIndrav = parseFloat(document.getElementById('caixa3').value);
    var ganhosParti = document.getElementById('caixa4').value;
    var ganhosParticular = eval(ganhosParti);
    var kmRodados = parseFloat(document.getElementById('caixa5').value);
    var horasTrabalhadas = parseFloat(document.getElementById('caixa6').value);

    var ganhos = ganhos99 + ganhosUber + ganhosIndrav + ganhosParticular;  
    var ganhosPorKM = ganhos / kmRodados;
    var ganhosPorHora = ganhos / horasTrabalhadas;
  
    var result = 
      "Ganhos 99: " + ganhos99 + " Reais." + "<br>"+
      "Ganhos Uber: " + ganhosUber + " Reais." + "<br>"+
      "Ganhos Indrav: " + ganhosIndrav + " Reais." + "<br>"+   
      "Ganhos Particular: " + ganhosParticular + " Reais." + "<br>"+  
      kmRodados + " KM rodados." + "<br>"+
      horasTrabalhadas + " horas trabalhadas." + "<br>"+      
      "Ganhos por KM: " + ganhosPorKM + " Reais por KM." + "<br>"+
      "Ganhos por hora: " + ganhosPorHora + " Reais a hora." +
      "<br>" + "<br>" + "<br>"+
      "Total de ganhos do dia: " + ganhos + " Reais.";
  
    document.getElementById('resultado').innerHTML = result;
    
    document.getElementById('resu').classList.remove("hide") 
}

function voltar() {
  document.getElementById('resu').classList.add("hide")
}