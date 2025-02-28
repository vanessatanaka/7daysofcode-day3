// 7Daysofcode - Dia 3

// Função para exibir mensagens de alerta
function mostrarMensagem(mensagem) {
  alert(mensagem);
}

// Função para perguntar ao usuário e validar a resposta
function perguntar(mensagem, opcoesValidas) {
  let resposta;
  do {
      resposta = prompt(mensagem);
  } while (!opcoesValidas.includes(resposta));
  return resposta;
}

// Escolha da área
const area = perguntar(
  "Qual área deseja seguir?\n1 Front-end\n2 Back-end.", ["1", "2"]);

// Escolha da linguagem
let linguagem;
if (area === "1") {
  linguagem = perguntar("Front-end é uma boa escolha!\nO que você deseja aprender?\n1 React\n2 Vue.", ["1", "2"]);
} else {
  linguagem = perguntar("Back-end é uma boa escolha!\nO que você deseja aprender?\n1 C#\n2 Java.", ["1", "2"]);
}

// Escolha da carreira
let carreira = perguntar(
  "Você pretende ser um especialista na área escolhida ou um desenvolvedor fullstack?\n1 Especialista\n2 Fullstack\n3 Quero saber a diferença.", ["1", "2", "3"]);

// Explicação sobre Especialista e Fullstack
if (carreira === "3") {
  mostrarMensagem(
      "A diferença principal entre um especialista e um desenvolvedor fullstack está no escopo de atuação e profundidade do conhecimento.\n" +
      "Se quer versatilidade e atuar em várias partes do sistema, ser fullstack pode ser ideal.\n" +
      "Se deseja se tornar uma referência técnica e trabalhar em problemas mais complexos em uma área específica, seguir a especialização pode ser melhor.");
  
  carreira = perguntar("Agora que você sabe a diferença, o que pretende ser?\n1 Especialista\n2 Fullstack.", ["1", "2"]);
}

// Mensagem final de acordo com a escolha
const mensagensCarreira = {
  "1": "Excelente decisão!\nO especialista foca em uma área específica do desenvolvimento, adquirindo um conhecimento profundo.\nPode ser especialista em Back-End, Front-End, Banco de Dados, Arquitetura de Software, Segurança da Informação, entre outras.\nNormalmente, é a referência técnica para problemas mais complexos e otimizações avançadas.",
  "2": "Ótima escolha!\nO desenvolvedor fullstack atua tanto no Back-End quanto no Front-End, podendo também ter conhecimentos em banco de dados, infraestrutura e DevOps.\nPossui um conhecimento amplo sobre várias tecnologias e ferramentas, conseguindo desenvolver um sistema completo de ponta a ponta."
};

mostrarMensagem(mensagensCarreira[carreira]);