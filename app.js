// 7Daysofcode - Dia 3
let area = "";
let linguagem = "";
let carreira = "";

area = prompt(`Qual área deseja seguir?
  Responda:
    1 para Front-end;
    2 para Back-end.`);

if(area === '1'){
  linguagem = prompt(`Front-end é uma boa escolha!
Você deseja aprender React ou Vue?
    Responda:
      1 para React;
      2 para Vue.`);
  carreira = prompt(`Você pretende ser um especialista na área de Front-end ou um desenvolvedor fullstack?
Responda:
 1 para especialista;
 2 para fullstack;
 3 para saber a diferença entre ser especialista ou desenvolvedor fullstack.`);
} else{
    if(area === '2'){
      linguagem = prompt(`Back-end é uma boa escolha!
Você deseja aprender C# ou Java?
Responda:
 1 para C#;
 2 para Java.`);
      carreira = prompt(`Você pretende ser um especialista na área de Back-end ou um desenvolvedor fullstack?
Responda:
 1 para especialista;
 2 para fullstack;
 3 para saber a diferença entre ser especialista ou desenvolvedor fullstack.`);
    }
  }

if(carreira === '1'){
  alert(`Excelente decisão!
O especialista foca em uma área específica do desenvolvimento, adquirindo um conhecimento profundo sobre ela.
Pode ser um especialista em Back-End, Front-End, Banco de Dados, Arquitetura de Software, Segurança da Informação, entre outras áreas.
Normalmente, é a referência técnica dentro de um time para problemas mais complexos e otimizações avançadas.`);
} else{
    if(carreira === '2'){
      alert(`Excelente decisão!
O desenvolvedor fullstack atua tanto no Back-End quanto no Front-End, podendo também ter conhecimentos em banco de dados, infraestrutura e DevOps.
Possui um conhecimento amplo sobre várias tecnologias, frameworks e ferramentas, conseguindo desenvolver um sistema completo de ponta a ponta.
Geralmente, sua profundidade de conhecimento em cada área pode ser menor do que a de um especialista, mas ele tem capacidade para lidar com todo o ciclo de desenvolvimento de uma aplicação.`);
    } else{
        if(carreira === '3'){
          alert(`A diferença principal entre um especialista e um desenvolvedor fullstack está no escopo de atuação e profundidade do conhecimento em determinadas áreas do desenvolvimento de software.
Se você quer versatilidade e atuar em várias partes do sistema, ser fullstack pode ser ideal.
Se deseja se tornar uma referência técnica e trabalhar em problemas mais complexos em uma área específica, seguir a especialização pode ser melhor.`);
          carreira = prompt(`Agora que você sabe a diferença entre ser especialista e ser desenvolvedor fullstack?
O que você pretende ser? Especialista ou fullstack?
Responda:
 1 para especialista;
 2 para fullstack.`);
        }
      }
  }

if(carreira === '1'){
  alert(`Excelente decisão!
O especialista foca em uma área específica do desenvolvimento, adquirindo um conhecimento profundo sobre ela.
Pode ser um especialista em Back-End, Front-End, Banco de Dados, Arquitetura de Software, Segurança da Informação, entre outras áreas.
Normalmente, é a referência técnica dentro de um time para problemas mais complexos e otimizações avançadas.`);
} else{
    if(carreira === '2'){
      alert(`Excelente decisão!
O desenvolvedor fullstack atua tanto no Back-End quanto no Front-End, podendo também ter conhecimentos em banco de dados, infraestrutura e DevOps.
Possui um conhecimento amplo sobre várias tecnologias, frameworks e ferramentas, conseguindo desenvolver um sistema completo de ponta a ponta.
Geralmente, sua profundidade de conhecimento em cada área pode ser menor do que a de um especialista, mas ele tem capacidade para lidar com todo o ciclo de desenvolvimento de uma aplicação.`);
    }
  }

