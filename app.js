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
  "Qual área deseja seguir?\n 1 Front-end\n 2 Back-end.", ["1", "2"]);

// Escolha da linguagem + Escolha da carreira
let linguagem;
let carreira;
if (area === "1") {
  linguagem = perguntar("Front-end é uma boa escolha!\n O que você deseja aprender?\n 1 React\n 2 Vue.", ["1", "2"]);
  carreira = perguntar("Você pretende ser um especialista em Front-end ou um desenvolvedor fullstack?\n 1 Especialista\n 2 Fullstack\n 3 Quero saber a diferença.", ["1", "2", "3"]);
} else {
  linguagem = perguntar("Back-end é uma boa escolha!\n O que você deseja aprender?\n 1 C#\n 2 Java.", ["1", "2"]);
  carreira = perguntar("Você pretende ser um especialista em Back-end ou um desenvolvedor fullstack?\n 1 Especialista\n 2 Fullstack\n 3 Quero saber a diferença.", ["1", "2", "3"]);
}

// Explicação sobre Especialista e Fullstack
if (carreira === "3") {
  mostrarMensagem(
      "A diferença principal entre um especialista e um desenvolvedor fullstack está no escopo de atuação e profundidade do conhecimento.\n" +
      "Se quer versatilidade e atuar em várias partes do sistema, ser fullstack pode ser ideal.\n" +
      "Se deseja se tornar uma referência técnica e trabalhar em problemas mais complexos, seguir a especialização pode ser a melhor decisão.");
  
  carreira = perguntar("Agora que você sabe a diferença, o que pretende ser?\n 1 Especialista\n 2 Fullstack.", ["1", "2"]);
}

// Mensagem final de acordo com a escolha
const mensagensCarreira = {
  "1": "Excelente decisão!\n O especialista foca em uma área específica do desenvolvimento, adquirindo um conhecimento profundo.\n Pode ser especialista em Back-End, Front-End, Banco de Dados, Arquitetura de Software, Segurança da Informação, entre outras.\n Normalmente, é a referência técnica para problemas mais complexos e otimizações avançadas.",
  "2": "Excelente decisão!\n O desenvolvedor fullstack atua tanto no Back-End quanto no Front-End, podendo também ter conhecimentos em banco de dados, infraestrutura e DevOps.\n Possui um conhecimento amplo sobre várias tecnologias e ferramentas, conseguindo desenvolver um sistema completo de ponta a ponta."
}

mostrarMensagem(mensagensCarreira[carreira]);