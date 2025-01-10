//1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;

let soma = 0;
for (let i = 1; i <= 13; i++) {
  soma += i;
}
console.log(soma);

//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
// pertence ou não a sequência.

function pertenceFibonacci(num) {
  let a = 0,
    b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num;
}

const numero = 27;
console.log(pertenceFibonacci(numero));

//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const dadosFaturamento = [
  [
    {
      dia: 1,
      valor: 22174.1664,
    },
    {
      dia: 2,
      valor: 24537.6698,
    },
    {
      dia: 3,
      valor: 26139.6134,
    },
    {
      dia: 4,
      valor: 0.0,
    },
    {
      dia: 5,
      valor: 0.0,
    },
    {
      dia: 6,
      valor: 26742.6612,
    },
    {
      dia: 7,
      valor: 0.0,
    },
    {
      dia: 8,
      valor: 42889.2258,
    },
    {
      dia: 9,
      valor: 46251.174,
    },
    {
      dia: 10,
      valor: 11191.4722,
    },
    {
      dia: 11,
      valor: 0.0,
    },
    {
      dia: 12,
      valor: 0.0,
    },
    {
      dia: 13,
      valor: 3847.4823,
    },
    {
      dia: 14,
      valor: 373.7838,
    },
    {
      dia: 15,
      valor: 2659.7563,
    },
    {
      dia: 16,
      valor: 48924.2448,
    },
    {
      dia: 17,
      valor: 18419.2614,
    },
    {
      dia: 18,
      valor: 0.0,
    },
    {
      dia: 19,
      valor: 0.0,
    },
    {
      dia: 20,
      valor: 35240.1826,
    },
    {
      dia: 21,
      valor: 43829.1667,
    },
    {
      dia: 22,
      valor: 18235.6852,
    },
    {
      dia: 23,
      valor: 4355.0662,
    },
    {
      dia: 24,
      valor: 13327.1025,
    },
    {
      dia: 25,
      valor: 0.0,
    },
    {
      dia: 26,
      valor: 0.0,
    },
    {
      dia: 27,
      valor: 25681.8318,
    },
    {
      dia: 28,
      valor: 1718.1221,
    },
    {
      dia: 29,
      valor: 13220.495,
    },
    {
      dia: 30,
      valor: 8414.61,
    },
  ],
];

function analisarFaturamento(dados) {
  if (!Array.isArray(dados) || dados.length === 0) {
    return { mensagem: "Dados de entrada inválidos." };
  }

  const diasComVenda = dados.filter((dia) => dia.valor > 0);

  if (diasComVenda.length === 0) {
    return { mensagem: "Não há dados de faturamento válidos." };
  }

  const media =
    diasComVenda.reduce((total, dia) => total + dia.valor, 0) /
    diasComVenda.length;

  const menorValor = Math.min(...diasComVenda.map((dia) => dia.valor));
  const maiorValor = Math.max(...diasComVenda.map((dia) => dia.valor));

  const diasAcimaMedia = diasComVenda.filter((dia) => dia.valor > media).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaMedia,
    mediaFaturamento,
  };
}

const resultado = analisarFaturamento(dadosFaturamento);
console.log(resultado);

//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(dados) {
  const total = Object.values(dados).reduce((acc, valor) => acc + valor, 0);
  const percentuais = Object.fromEntries(
    Object.entries(dados).map(([estado, valor]) => [
      estado,
      ((valor / total) * 100).toFixed(2),
    ])
  );
  return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);
console.log(percentuais);

//5) Escreva um programa que inverta os caracteres de um string.
function inverterString(str) {
  let novaString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }
  return novaString;
}

// Exemplo de uso:
const minhaString = "Hello, world!";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
