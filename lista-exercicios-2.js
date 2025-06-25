const prompt = require('prompt-sync')();

// 1. Validação de Datas Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. 

// function ehBissexto(ano) {
//   return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
// }

// function ehDataValida(dia, mes, ano) {
//   if (mes < 1 || mes > 12 || dia < 1) return false;

//   const diasMes = [31, ehBissexto(ano) ? 29 : 28, 31, 30, 31, 30,
//                    31, 31, 30, 31, 30, 31];

//   return dia <= diasMes[mes - 1];
// }

// console.log(ehDataValida(29, 2, 2023))

// 2. Jogo de Adivinhação Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativas = 0;
// let palpite;

// while (palpite !== numeroSecreto) {
//   palpite = parseInt(prompt('Adivinhe o número entre 1 e 100: '));
//   tentativas++;

//   if (isNaN(palpite)) {
//     console.log('Digite um número válido!');
//     continue;
//   }

//   if (palpite < numeroSecreto) {
//     console.log('Mais alto!');
//   } else if (palpite > numeroSecreto) {
//     console.log('Mais baixo!');
//   } else {
//     console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
//   }
// }

// 3. Palavras Únicas Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array

// function palavrasUnicas(texto) {
//   const todas = texto.split(' ');
//   const unicas = [];
  
//   for (let i = 0; i < todas.length; i++) {
//     const palavra = todas[i];
    
//     if (unicas.indexOf(palavra) === -1) {
//       unicas.push(palavra);
//     }
//   }
//   return unicas;
// }

// const entrada = "Clube de Regatas Vasco da Gama, Clube de Regatas Flamengo";
// const resultado = palavrasUnicas(entrada);
// console.table(resultado); 

// 4. Fatorial Recursivo Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.
 
// function fatorial(n) {
//   if (n < 0) {
//     throw new Error("n deve ser maior ou igual a 0");
//   } else if (n === 0) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// }
// console.table(fatorial(0)); 
// console.table(fatorial(1)); 
// console.table(fatorial(5)); 
// console.table(fatorial(-2));

// 5. Debounce Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo

// function debounce(fn, delay) {
//   let timerId;

//   return function debounced(...args) {
   
//     const context = this;

//     clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// 6. Memoization Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. 

// function memoize(fn) {
//   const cache = new Map();

//   return function memoized(...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     const result = fn.apply(this, args);
//     cache.set(key, result);
//     return result;
//   };
// }

//  7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

// const produtos = [
//   { nome: "Camiseta",    preco: 49.9 },
//   { nome: "Calça Jeans", preco: 139.9 },
//   { nome: "Meias",       preco: 19.9 },
//   { nome: "Tênis",       preco: 299.9 }
// ];

// function nomesOrdenadosPorPreco(produtos) {
//   produtos.sort((a, b) => a.preco - b.preco);
//     return produtos.map(({ nome }) => nome);
// }
// console.log(nomesOrdenadosPorPreco(produtos));

//  8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total

// const vendas = [
//   { cliente: 'Alice',       total: 150 },
//   { cliente: 'Daniel',      total:  75 },
//   { cliente: 'Alice',       total: 200 },
//   { cliente: 'Carlos',      total: 100 },
//   { cliente: 'Daniel',     total: 125 },
// ];

// function agruparPorCliente(vendas) {
//   return vendas.reduce((acumulador, venda) => {
//     const { cliente, total } = venda;

//     if (!acumulador[cliente]) {
//       acumulador[cliente] = 0;
//     }
//     acumulador[cliente] += total;

//     return acumulador;
//   }, {});
// }
// const totaisPorCliente = agruparPorCliente(vendas);
// console.log(totaisPorCliente);

// 9. Conversão Entre Formatos Escreva duas funções: 
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array de pares. 
 
//função 1

// const listaDePares = [
//   ['nome',   'Daniel'],
//   ['idade',  34],
//   ['ativo',  true]
// ];

// function paresParaObjeto(pares) {
//   const resultado = {};
//   pares.forEach(([chave, valor]) => {
//     resultado[chave] = valor;
//   });
//   return resultado;
// }
// console.log(paresParaObjeto(listaDePares));

// // funçao 2 

// const usuario = { cidade: 'Rio', pais: 'Brasil' };

// function objetoParaPares(obj) {
//   const pares = [];
//   for (const chave in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, chave)) {
//       pares.push([chave, obj[chave]]);
//     }
//   }
//   return pares;
// }
// console.log(objetoParaPares(usuario));
