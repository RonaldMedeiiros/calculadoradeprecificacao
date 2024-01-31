function toggleTooltip() {
    var tooltip = document.getElementById("tooltipMessage");
    if (tooltip.style.display === "none") {
      tooltip.style.display = "block";
      tooltip.style.opacity = 1;
    } else {
      tooltip.style.opacity = 0;
      setTimeout(function () { tooltip.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }
  function toggleTooltip2() {
    var tooltip2 = document.getElementById("tooltipMessage2");
    if (tooltip2.style.display === "none") {
      tooltip2.style.display = "block";
      tooltip2.style.opacity = 1;
    } else {
      tooltip2.style.opacity = 0;
      setTimeout(function () { tooltip2.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }
  function toggleTooltip3() {
    var tooltip3 = document.getElementById("tooltipMessage3");
    if (tooltip3.style.display === "none") {
      tooltip3.style.display = "block";
      tooltip3.style.opacity = 1;
    } else {
      tooltip3.style.opacity = 0;
      setTimeout(function () { tooltip3.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }

  // Variáveis globais
  var custoDeAquisicao = 0;
  var percentualCusto = 0;
  var despesaFixa = 0;
  var receitaMensal = 0;
  var porcentagemLucro = 0;

  // Eventos input
  document.getElementById('custoAquisicaoInput').addEventListener('input', function () {
    custoDeAquisicao = parseFloat(this.value) || 0;
    document.getElementById('cenarioCustoAquisicao').textContent = custoDeAquisicao.toFixed(2);
    calcularPrecoVenda();
  });

  document.getElementById('percentualCustoInput').addEventListener('input', function () {
    percentualCusto = parseFloat(this.value) || 0;
    document.getElementById('cenarioPercentualCusto').textContent = percentualCusto.toFixed(2);
    calcularPrecoVenda();
  });

  document.getElementById('despesaFixaInput').addEventListener('input', function () {
    despesaFixa = parseFloat(this.value) || 0;
    document.getElementById('cenarioDespesaFixa').textContent = despesaFixa.toFixed(2);
    calcularPrecoVenda();
  });

  document.getElementById('receitaMensalInput').addEventListener('input', function () {
    receitaMensal = parseFloat(this.value) || 0;
    document.getElementById('cenarioReceitaMensal').textContent = receitaMensal.toFixed(2);
    calcularPrecoVenda();
  });

  document.getElementById('porcentagemLucroInput').addEventListener('input', function () {
    porcentagemLucro = parseFloat(this.value) || 0;
    document.getElementById('cenarioPorcentagemLucro').textContent = porcentagemLucro.toFixed(2);
    calcularPrecoVenda();
  });

  // Função para calcular e exibir o preço de venda
  function calcularPrecoVenda() {
    // Verifique se os valores estão definidos
    if (!custoDeAquisicao || !percentualCusto || !despesaFixa || !receitaMensal || !porcentagemLucro) {
      // Não calcule se algum valor estiver faltando
      return;
    }

    // Converta as percentagens para a forma decimal
    var CV = percentualCusto / 100;
    var ML = porcentagemLucro / 100;
    var DF = (despesaFixa / receitaMensal);

    // Evite divisão por zero ou percentagem inválida
    if (receitaMensal === 0 || 1 - (CV + DF + ML) <= 0) {
      document.getElementById('precoVenda').textContent = "Valor fora do cálculo ou negativo";
      return;
    }

    // Cálculo do preço de venda
    var precoVenda = (custoDeAquisicao / (1 - (CV + DF + ML)));
    document.getElementById('precoVenda').textContent = `R$ ${precoVenda.toFixed(2)}`;
  }