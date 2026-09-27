const questions=[
["Como a Mi e a Paulinha se conheceram?",["Trilha","Evento corporativo","Tinder","Amigos em comum"],2,"Tinder. A gente começa a história num “match” online e traz o amor para ser parte do que vivemos no mundo real.","resposta 1.mp4"],
["Em que ano Paulinha e Mi se conheceram?",["2022","2023","2024","2025"],1,"2023. Mas pra gente, 3 anos se tornou uma vida. Que agora ganha um novo episódio pra termos mais uma temporada incrível.","resposta 2.mp4"],
["Qual país a Mi sonha em conhecer?",["Londres","Estados Unidos","Suíça","Itália"],3,"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel.","resposta 3.mp4"],
["Qual país a Paulinha sonha em conhecer?",["Chile","Argentina","Estados Unidos","Paraguai"],2,"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!","resposta 4.mp4"],
["Para onde será a nossa viagem de lua-de-mel?",["Disney","Fernando de Noronha","San Andreas","Contagem das Abóboras"],2,"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar.","resposta 5.mp4"],
["Para onde foi a primeira viagem que fizemos juntas?",["Nova Lima","Macacos","Floripa","Catas Altas"],3,"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor.","resposta 6.mp4"],
["Em qual praia foi feito o pedido de casamento?",["Pontal de Maracaípe","Canasvieiras","Copacabana","Búzios"],0,"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar.","resposta 7.mp4"]
];

let index=0, score=0;

function typeText(el,text){
if(!el)return;
el.textContent="";
let i=0;
let t=setInterval(()=>{el.textContent+=text[i++]||"";if(i>=text.length)clearInterval(t)},25)
}

function playVideoScreen(videoName,nextAction){
app.innerHTML=`<div class="screen video-screen"><video id="quizVideo" autoplay playsinline><source src="assets/images/${videoName}" type="video/mp4"></video></div>`;
const video=document.getElementById("quizVideo");
video.addEventListener("ended",()=>{
video.currentTime=Math.max(0,video.duration-0.01);
video.pause();
});
app.onclick=null;
video.addEventListener("ended",()=>{
  app.onclick=()=>nextAction();
});
}

function home(){
app.innerHTML=`<div class="screen cover"><img src="assets/images/tela-inicial.jpg"><button onclick="question()">INICIAR</button></div>`;
}

function question(){
app.onclick=null;
let q=questions[index];
app.innerHTML=`<div class="screen question"><h2>${index+1}/7<br>${q[0]}</h2><div class="options">${q[1].map((x,i)=>`<button onclick="answer(${i})">${x}</button>`).join("")}</div></div>`;
}

function answer(i){
let q=questions[index];
if(i===q[2])score++;
playVideoScreen(q[5],next);
}

function next(){
app.onclick=null;
index++;
index<questions.length?question():result();
}

function result(){
let video=score===7?"resultado-7.mp4":score>=4?"resultado-4-6.mp4":"resultado-1-3.mp4";
playVideoScreen(video,finalVideo);
}

function finalVideo(){
app.onclick=null;
app.innerHTML=`<div class="screen video-screen"><video id="finalVideo" autoplay playsinline><source src="assets/images/tela-final.mp4" type="video/mp4"></video></div>`;
const video=document.getElementById("finalVideo");
video.addEventListener("ended",()=>{
video.currentTime=Math.max(0,video.duration-0.01);
video.pause();
});
app.onclick=null;
video.addEventListener("ended",()=>{
  app.onclick=()=>{
    window.open("https://site.lejour.com.br/ana-e-michele#confirmacao-de-presenca","_blank");
  };
});
}

home();
