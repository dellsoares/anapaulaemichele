
const questions=[
["Como a Mi e a Paulinha se conheceram?",["Trilha","Evento corporativo","Tinder","Amigos em comum"],2,"Tinder. A gente começa a história num “match” online e traz o amor para ser parte do que vivemos no mundo real.","resposta-1.jpg"],
["Em que ano Paulinha e Mi se conheceram?",["2022","2023","2024","2025"],1,"2023. Mas pra gente, 3 anos se tornou uma vida. Que agora ganha um novo episódio pra termos mais uma temporada incrível.","resposta-2.jpg"],
["Qual país a Mi sonha em conhecer?",["Londres","Estados Unidos","Suíça","Itália"],3,"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel.","resposta-3.jpg"],
["Qual país a Paulinha sonha em conhecer?",["Chile","Argentina","Estados Unidos","Paraguai"],2,"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!","resposta-4.jpg"],
["Para onde será a nossa viagem de lua-de-mel?",["Disney","Fernando de Noronha","San Andreas","Contagem das Abóboras"],2,"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar.","resposta-5.jpg"],
["Para onde foi a primeira viagem que fizemos juntas?",["Nova Lima","Macacos","Floripa","Catas Altas"],3,"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor.","resposta-6.jpg"],
["Em qual praia foi feito o pedido de casamento?",["Pontal de Maracaípe","Canasvieiras","Copacabana","Búzios"],0,"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar.","resposta-7.jpg"]
];

let index=0, score=0;

function typeText(el,text){
el.textContent="";
let i=0;
let t=setInterval(()=>{el.textContent+=text[i++]||"";if(i>=text.length)clearInterval(t)},25)
}

function home(){
app.innerHTML=`<div class="screen cover"><img src="assets/images/tela-inicial.jpg"><button onclick="question()">INICIAR</button></div>`;
}
function question(){
let q=questions[index];
app.innerHTML=`<div class="screen question"><h2>${index+1}/7<br>${q[0]}</h2><div class="options">${q[1].map((x,i)=>`<button onclick="answer(${i})">${x}</button>`).join("")}</div></div>`;
}
function answer(i){
let q=questions[index];
if(i===q[2])score++;
app.innerHTML=`<div class="screen answer"><div class="text" id="txt"></div><img src="assets/images/${q[5]}"><button class="confirm" onclick="next()">Continuar</button></div>`;
typeText(document.getElementById("txt"),q[3]);
}
function next(){
index++;
index<questions.length?question():result();
}
function result(){
let img=score===7?"resultado-7.jpg":score>=4?"resultado-4-6.jpg":"resultado-1-3.jpg";
let txt=score===7?"Ora, ora, temos um especialista amoroso que tem vivido ao nosso lado cada capítulo dessa incrível temporada da série da nossa vida.":score>=4?"Temos alguém diferenciado aqui, porque não apenas é nosso querido convidado como ainda faz parte da história que nós duas estamos construindo.":"Não teve match mas tem nosso carinho por você ter tirado um tempo pra conhecer nossa história.";
app.innerHTML=`<div class="screen result"><div class="text" id="txt"></div><img src="assets/images/${img}"><div class="text">É uma honra dividir com você um momento tão importante pra nós.</div><button class="confirm">Confirmar presença</button><button class="confirm">Lista de presentes</button></div>`;
typeText(document.getElementById("txt"),txt);
}
home();
