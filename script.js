let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let jogoFinalizado = false;

const input = document.getElementById('palpite');
const msg = document.getElementById('mensagem');
const btn = document.getElementById('btnAcao');

// Liga o clique do botão à função jogar (no lugar do onclick no HTML)
btn.addEventListener('click', jogar);

// Permite apertar Enter para chutar
input.addEventListener('keydown', function (evento) {
  if (evento.key === 'Enter') {
    jogar();
  }
});

function jogar() {
  if (jogoFinalizado) {
    reiniciarJogo();
    return;
  }

  const palpite = parseInt(input.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    msg.textContent = "⚠️ Digite um número válido entre 1 e 100!";
    msg.style.color = "#e53e3e";
    return;
  }

  tentativas++;

  if (palpite < numeroSecreto) {
    msg.textContent = "📉 MUITO BAIXO! Tente um maior.";
    msg.style.color = "#dd6b20";
  } else if (palpite > numeroSecreto) {
    msg.textContent = "📈 MUITO ALTO! Tente um menor.";
    msg.style.color = "#dd6b20";
  } else {
    msg.textContent = `🎉 ACERTOU em ${tentativas} tentativa(s)!`;
    msg.style.color = "#38a169";
    btn.textContent = "JOGAR NOVAMENTE";
    jogoFinalizado = true;
  }

  input.value = '';
  input.focus();
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  jogoFinalizado = false;
  msg.textContent = '';
  btn.textContent = 'CHUTAR';
}
