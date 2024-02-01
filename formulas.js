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
  
  function toggleTooltip4() {
    var tooltip4 = document.getElementById("tooltipMessage4");
    if (tooltip4.style.display === "none") {
      tooltip4.style.display = "block";
      tooltip4.style.opacity = 1;
    } else {
      tooltip4.style.opacity = 0;
      setTimeout(function () { tooltip4.style.display = "none"; }, 300); // Espera a transição terminar
    }
  }

  function toggleTooltip5() {
    var tooltip5 = document.getElementById("tooltipMessage5");
    if (tooltip5.style.display === "none") {
      tooltip5.style.display = "block";
      tooltip5.style.opacity = 1;
    } else {
      tooltip5.style.opacity = 0;
      setTimeout(function () { tooltip5.style.display = "none"; }, 300); // Espera a transição terminar
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
    calculaPontoEquilibrio();
  });

  document.getElementById('percentualCustoInput').addEventListener('input', function () {
    percentualCusto = parseFloat(this.value) || 0;
    document.getElementById('cenarioPercentualCusto').textContent = percentualCusto.toFixed(2);
    calcularPrecoVenda();
    calculaPontoEquilibrio();
  });

  document.getElementById('despesaFixaInput').addEventListener('input', function () {
    despesaFixa = parseFloat(this.value) || 0;
    document.getElementById('cenarioDespesaFixa').textContent = despesaFixa.toFixed(2);
    calcularPrecoVenda();
    calculaPontoEquilibrio();
  });

  document.getElementById('receitaMensalInput').addEventListener('input', function () {
    receitaMensal = parseFloat(this.value) || 0;
    document.getElementById('cenarioReceitaMensal').textContent = receitaMensal.toFixed(2);
    calcularPrecoVenda();
    calculaPontoEquilibrio();
  });

  document.getElementById('porcentagemLucroInput').addEventListener('input', function () {
    porcentagemLucro = parseFloat(this.value) || 0;
    document.getElementById('cenarioPorcentagemLucro').textContent = porcentagemLucro.toFixed(2);
    calcularPrecoVenda();
    calculaPontoEquilibrio();
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
    return {
      precoVenda: precoVenda,
      CV: CV
    };
  }

  function calculaPontoEquilibrio() {
    var resultado = calcularPrecoVenda();
    if (!resultado) return; 
  
    var custoVariavelUnidade = resultado.CV * resultado.precoVenda; 
    var margemContribuicao = resultado.precoVenda - custoDeAquisicao - custoVariavelUnidade;
    var porcentagemMargemContribruicao = margemContribuicao/resultado.precoVenda;
    var pontoEquilibrioReal = despesaFixa / porcentagemMargemContribruicao;
    var pontoEquilibrioUnidade = pontoEquilibrioReal / resultado.precoVenda; 
  
    document.getElementById('pontoEquilibrioReal').textContent = `${pontoEquilibrioReal.toFixed(2)}`;
    document.getElementById('pontoEquilibrioUnidade').textContent = `${pontoEquilibrioUnidade.toFixed(2)}`;
    return {
      margemContribuicao: margemContribuicao,
      pontoEquilibrioReal: pontoEquilibrioReal,
      pontoEquilibrioUnidade: pontoEquilibrioUnidade,
      custoVariavelUnidade: custoVariavelUnidade,
      porcentagemMargemContribruicao: porcentagemMargemContribruicao
    };
  }
  document.getElementById('logValoresBtn').addEventListener('click', function() {
    console.log("Custo de Aquisição: ", custoDeAquisicao);
    console.log("Percentual de Custo: ", percentualCusto);
    console.log("Despesa Fixa: ", despesaFixa);
    console.log("Receita Mensal: ", receitaMensal);
    console.log("Porcentagem de Lucro: ", porcentagemLucro);
  
    // Logar os valores calculados pela função calcularPrecoVenda
    var resultado = calcularPrecoVenda();
    var resultadoPE = calculaPontoEquilibrio();
    if (resultado) {
      console.log("Preço de Venda: R$ " + resultado.precoVenda.toFixed(2));
      console.log("CV (Custo Variável como percentual): ", resultado.CV);
  
      // Supondo que você queria também logar os resultados do cálculo do ponto de equilíbrio
      console.log("Custo Variável por Unidade: ", resultadoPE.custoVariavelUnidade);
      console.log("Custo da margem de contribuição: ", resultadoPE.margemContribuicao);
      console.log("Percentual da margem de contruibuicao: ", resultadoPE.porcentagemMargemContribruicao);
      console.log("Custo do ponto do ponto de equilibrio real: ", resultadoPE.pontoEquilibrioReal);
      console.log("Custo do ponto do ponto de equilibrio unidade: ", resultadoPE.pontoEquilibrioUnidade);
      // Estes valores dependem dos cálculos feitos na função calculaPontoEquilibrio, então, 
      // caso esses cálculos sejam feitos fora da função, seria necessário adaptar.
    } else {
      console.log("Não foi possível calcular o preço de venda ou os valores estão incompletos.");
    }
  });
  