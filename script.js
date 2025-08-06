const perguntas = [
    {
      texto: "É o primeiro dia de seletiva para o time da escola. Você acorda se sentindo cansado e sem vontade. O que faz?",
      alternativas: [
        { texto: "Vai mesmo assim e dá o seu melhor", consequencia: "Você chama a atenção do técnico pela dedicação." },
        { texto: "Fica em casa para descansar", consequencia: "Você perde pontos por não comparecer ao primeiro dia." }
      ]
    },
    {
      texto: "Durante o treino, um colega erra muito e o time começa a perder. O que você faz?",
      alternativas: [
        { texto: "Incentiva ele a continuar tentando", consequencia: "A união do time melhora e vocês viram o jogo." },
        { texto: "Reclama com ele na frente de todos", consequencia: "O clima do time piora e o rendimento cai." }
      ]
    },
    {
      texto: "O técnico te chama para conversar em particular. Ele te oferece a posição de titular, mas você terá que treinar no sábado. Aceita?",
      alternativas: [
        { texto: "Sim, aceito e me comprometo com o time", consequencia: "Você conquista respeito dos colegas e do técnico." },
        { texto: "Não, preciso descansar e sair com amigos", consequencia: "Você continua no time, mas como reserva." }
      ]
    },
    {
      texto: "Chega o dia do jogo final. Um olheiro de um time profissional está assistindo. Você sente a pressão. O que faz?",
      alternativas: [
        { texto: "Respira fundo e foca no jogo", consequencia: "Você faz uma partida incrível e chama atenção." },
        { texto: "Fica nervoso e joga mal", consequencia: "O olheiro perde o interesse, mas você aprende com a experiência." }
      ]
    },
    {
      texto: "Após o jogo, o olheiro vem falar com você. Ele elogia sua atitude e te oferece um teste. Como responde?",
      alternativas: [
        { texto: "Aceita o desafio com humildade", consequencia: "Você inicia sua trajetória rumo ao basquete profissional!" },
        { texto: "Recusa por medo de falhar", consequencia: "Você perde a chance, mas promete se preparar para a próxima." }
      ]
    }
  ];
  
  let indiceAtual = 0;
  
  function exibirPergunta() {
    const pergunta = perguntas[indiceAtual];
    document.getElementById("pergunta-atual").textContent = pergunta.texto;
  
    const opcoes = document.getElementById("opcoes-resposta");
    opcoes.innerHTML = "";
  
    pergunta.alternativas.forEach((alt, index) => {
      const botao = document.createElement("button");
      botao.textContent = alt.texto;
      botao.classList.add("botao-alternativa");
      botao.onclick = () => escolherAlternativa(index);
      opcoes.appendChild(botao);
    });
  }
  
  function escolherAlternativa(index) {
    const alternativa = perguntas[indiceAtual].alternativas[index];
    document.getElementById("consequencia").textContent = alternativa.consequencia;
  
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
      setTimeout(() => {
        document.getElementById("consequencia").textContent = "";
        exibirPergunta();
      }, 2000);
    } else {
      document.getElementById("pergunta-atual").textContent = "Fim da sua jornada!";
      document.getElementById("opcoes-resposta").innerHTML = "";
      document.getElementById("botao-recomecar").style.display = "inline-block";
    }
  }
  
  document.getElementById("botao-recomecar").onclick = () => {
    indiceAtual = 0;
    document.getElementById("consequencia").textContent = "";
    document.getElementById("botao-recomecar").style.display = "none";
    exibirPergunta();
  };
  
  exibirPergunta();