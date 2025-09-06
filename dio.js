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

function main() {
  // Entrada de dados do usuário
  const hasPermission = true;
  const age = 18; // Lê a idade como inteiro

  // TODO: Verificação das condições de acesso
  if (!hasPermission) {
    console.log('Acesso negado');
  } else if (age < 18) {
    console.log('Idade insuficiente');
  } else {
    console.log('Acesso permitido');
  }
}
main();
