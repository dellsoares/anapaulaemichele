const app = document.getElementById("app");

const questions = [
  ["Como a Mi e a Paulinha se conheceram?", ["Trilha", "Evento corporativo", "Tinder", "Amigos em comum"], 2, "Tinder. A gente começa a história num “match” online e traz o amor para ser parte do que vivemos no mundo real.", "resposta-1.jpg"],
  ["Em que ano Paulinha e Mi se conheceram?", ["2022", "2023", "2024", "2025"], 1, "2023. Mas pra gente, 3 anos se tornou uma vida. Que agora ganha um novo episódio pra termos mais uma temporada incrível.", "resposta-2.jpg"],
  ["Qual país a Mi sonha em conhecer?", ["Londres", "Estados Unidos", "Suíça", "Itália"], 3, "E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel.", "resposta-3.jpg"],
  ["Qual país a Paulinha sonha em conhecer?", ["Chile", "Argentina", "Estados Unidos", "Paraguai"], 2, "No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!", "resposta-4.jpg"],
  ["Para onde será a nossa viagem de lua-de-mel?", ["Disney", "Fernando de Noronha", "San Andreas", "Contagem das Abóboras"], 2, "San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar.", "resposta-5.jpg"],
  ["Para onde foi a primeira viagem que fizemos juntas?", ["Nova Lima", "Macacos", "Floripa", "Catas Altas"], 3, "Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor.", "resposta-6.jpg"],
  ["Em qual praia foi feito o pedido de casamento?", ["Pontal de Maracaípe", "Canasvieiras", "Copacabana", "Búzios"], 0, "Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar.", "resposta-7.jpg"]
];

let index = 0, score = 0;

function typeText(el, text, onComplete) {
  el.textContent = "";
  let i = 0;
  let t = setInterval(() => {
    el.textContent += text[i++] || "";
    if (i >= text.length) {
      clearInterval(t);
      if (onComplete) onComplete();
    }
  }, 25);
}

function home() {
  app.innerHTML = `<div class="screen cover"><img src="assets/images/tela-inicial.jpg"><button onclick="question()">