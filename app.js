// 7Daysofcode - Dia 3
let area = "";
let linguagem = "";

area = prompt(`Qual área deseja seguir? Responda: 1 para Front-end; ou 2 para Back-end.`);

if(area === '1'){
  linguagem = prompt(`Front-end é uma boa escolha! Você deseja aprender React ou Vue? Responda: 1 para React; ou 2 para Vue.`);
} else{
    if(area === '2'){
      linguagem = prompt(`Back-end é uma boa escolha! Você deseja aprender C# ou Java? Responda: 1 para C#; ou 2 para Java.`);
    }
  }