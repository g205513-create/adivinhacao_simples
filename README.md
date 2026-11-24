#  Jogo de Adivinhação

Oi! Este é um joguinho simples que fiz para praticar HTML, CSS e JavaScript.

A ideia é bem direta: o computador "pensa" em um número entre **1 e 100** e você tenta descobrir qual é. A cada chute, ele dá uma dica dizendo se o número secreto é maior ou menor. Quando você acerta, ele conta em quantas tentativas você conseguiu.

## Como jogar

1. Abra o arquivo `index.html` no seu navegador (é só dar dois cliques nele).
2. Digite um número entre 1 e 100.
3. Clique em **CHUTAR** (ou aperte **Enter**).
4. Siga as dicas: *muito baixo* ou *muito alto*.
5. Acertou? Clique em **JOGAR NOVAMENTE** para sortear outro número.

Não precisa instalar nada nem ter internet. É só abrir e jogar.

## O que tem na pasta

```
jogo-adivinhacao/
├── index.html   → a estrutura da página
├── style.css    → o visual (cores, degradê, botões)
├── script.js    → a lógica do jogo
└── README.md    → este arquivo
```

Separei cada coisa em um arquivo para ficar organizado:

- **HTML** monta o esqueleto: título, campo de texto e botão.
- **CSS** deixa tudo bonito: o fundo em degradê roxo, o cartão branco no meio e o botão com efeito ao passar o mouse.
- **JavaScript** faz o jogo funcionar: sorteia o número, compara com o seu palpite, conta as tentativas e mostra as mensagens.

## O que aprendi fazendo

- Como o HTML, o CSS e o JavaScript se conectam (com `<link>` e `<script src>`).
- Sortear números com `Math.random()`.
- Reagir a eventos, como clique no botão e tecla Enter, usando `addEventListener`.
- Mudar o texto e a cor de elementos da página direto pelo JavaScript.

## Ideias para melhorar

Se eu quiser continuar mexendo nesse projeto, algumas ideias são:

- [ ] Limitar o número de tentativas
- [ ] Mostrar o histórico dos chutes
- [ ] Escolher a dificuldade (1 a 50, 1 a 100, 1 a 1000)
- [ ] Guardar o recorde de menos tentativas
- [ ] Deixar o visual ainda mais caprichado

## Feito com

HTML, CSS e JavaScript puro, sem frameworks e sem bibliotecas.

---

Feito com carinho e algumas boas tentativas de acerto. Se achou um bug ou tem uma sugestão, fique à vontade para mexer no código. 😄
