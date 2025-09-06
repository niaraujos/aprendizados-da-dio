const descontos = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  SEM_DESCONTO: 0.0,
};

// Entrada do usuário
const preco = parseFloat(100);
const cupom = 'DESCONTO10';

let desconto = descontos[cupom];
let calculo = preco * desconto;
let resultado = preco - calculo;
console.log(resultado.toFixed(2));
