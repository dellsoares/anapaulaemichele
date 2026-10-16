const app = document.getElementById("app");
const IMG = "assets/images/";

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
  const t = setInterval(() => {
    el.textContent += text[i++] || "";
    if (i >= text.length) {
      clearInterval(t);
      if (onComplete) onComplete();
    }
  }, 25);
}

function home() {
  index = 0;
  score = 0;
  app.innerHTML = `
    <div class="screen cover">
      <img src="${IMG}tela-inicial.jpg" alt="Match com o casal">
      <button id="start">INICIAR</button>
    </div>`;
  document.getElementById("start").onclick = question;
}

function question() {
  const [q, opts, correct] = questions[index];
  app.innerHTML = `
    <div class="screen question">
      <h2>${q}</h2>
      <div class="options"></div>
    </div>`;
  const box = app.querySelector(".options");
  opts.forEach((o, i) => {
    const b = document.createElement("button");
    b.textContent = o;
    b.onclick = () => choose(i, b, box);
    box.appendChild(b);
  });
}

function choose(i, btn, box) {
  const correct = questions[index][2];
  const buttons = box.querySelectorAll("button");
  buttons.forEach(b => (b.disabled = true));
  if (i === correct) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    buttons[correct].classList.add("correct");
  }
  setTimeout(answer, 1000);
}

function answer() {
  const [, , , text, img] = questions[index];
  app.innerHTML = `
    <div class="screen answer" style="background-image:url('${IMG}${img}')">
      <div class="top-content">
        <p class="text"></p>
        <button class="confirm" style="visibility:hidden">${index === questions.length - 1 ? "VER RESULTADO" : "PRÓXIMA"}</button>
      </div>
    </div>`;
  const p = app.querySelector(".text");
  const btn = app.querySelector(".confirm");
  typeText(p, text, () => (btn.style.visibility = "visible"));
  btn.onclick = () => {
    index++;
    index < questions.length ? question() : result();
  };
}

function result() {
  let img = "resultado-1-3.jpg";
  if (score >= 7) img = "resultado-7.jpg";
  else if (score >= 4) img = "resultado-4-6.jpg";
  app.innerHTML = `
    <div class="screen result">
      <img src="${IMG}${img}" alt="Resultado">
      <p class="text">Você acertou ${score} de ${questions.length}!</p>
      <button class="confirm" id="again">JOGAR NOVAMENTE</button>
    </div>`;
  document.getElementById("again").onclick = home;
}

home();