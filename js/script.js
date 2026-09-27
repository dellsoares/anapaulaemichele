
const questions=[
["Como a Mi e a Paulinha se conheceram?",["Trilha","Evento corporativo","Tinder","Amigos em comum"],2,"Tinder. A gente começa a história num “match” online e traz o amor para ser parte do que vivemos no mundo real.","resposta 1.jpg"],
["Em que ano Paulinha e Mi se conheceram?",["2022","2023","2024","2025"],1,"2023. O que significa que essa é a terceira temporada dessa série que queremos construir até o fim da vida.","resposta 2.jpg"],
["Qual país a Mi sonha em conhecer?",["Londres","Estados Unidos","Suíça","Itália"],3,"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel.","resposta 3.jpg"],
["Qual país a Paulinha sonha em conhecer?",["Chile","Argentina","Estados Unidos","Paraguai"],2,"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!","resposta 4.jpg"],
["Para onde será a nossa viagem de lua-de-mel?",["Disney","Fernando de Noronha","San Andreas","Contagem das Abóboras"],2,"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar.","resposta 5.jpg"],
["Para onde foi a primeira viagem que fizemos juntas?",["Nova Lima","Macacos","Floripa","Catas Altas"],3,"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor.","resposta 6.jpg"],
["Em qual praia foi feito o pedido de casamento?",["Pontal de Maracaípe","Canasvieiras","Copacabana","Búzios"],0,"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar.","resposta 7.jpg"]
];

let current=0,score=0;

function heartBar(){
 let h="";
 for(let i=0;i<7;i++) h+= i<=current ? "♥":"♡";
 return h;
}

function typeText(el,text,callback){
 let i=0;
 const timer=setInterval(()=>{
  el.textContent+=text[i]||"";
  i++;
  if(i>=text.length){clearInterval(timer);callback();}
 },35);
}

function home(){
 app.innerHTML=`<div class="screen"><img class="full-bg" src="assets/images/tela inicial.jpg"><div class="click-layer" onclick="showQuestion()"></div></div>`;
}

function showQuestion(){
 const q=questions[current];
 app.innerHTML=`<div class="screen question"><div class="hearts">${heartBar()}</div><h2>${current+1}/7<br>${q[0]}</h2><div class="options">${q[1].map((o,i)=>`<button onclick="showAnswer(${i})">${o}</button>`).join("")}</div></div>`;
}

function showAnswer(choice){
 const q=questions[current];
 if(choice===q[2]) score++;
 app.innerHTML=`<div class="screen"><img class="full-bg" src="assets/images/${q[5]}"><div class="hearts">${heartBar()}</div><div class="answer-content"><div class="answer-text" id="answerText"></div><button class="next" id="next" disabled>➜</button></div></div>`;
 const btn=document.getElementById("next");
 typeText(document.getElementById("answerText"),q[3],()=>btn.disabled=false);
 btn.onclick=()=>{current++; current<questions.length?showQuestion():showResult();}
}

function showResult(){
 const img=score===7?"resultado 7.jpg":score>=4?"resultado 4 a 6.jpg":"resultado 1 a 3.jpg";
 app.innerHTML=`<div class="screen"><img class="full-bg" src="assets/images/${img}"></div>`;
}
home();
