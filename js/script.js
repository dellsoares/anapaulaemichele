
const questions=[
{img:"resposta 1.jpg",text:"Tinder. A gente começa a história num “match” online e traz o amor pra ser parte do que vivemos no mundo real."},
{img:"resposta 2.jpg",text:"2023. O que significa que essa é a terceira temporada dessa série que queremos construir até o fim da vida."},
{img:"resposta 3.jpg",text:"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel."},
{img:"resposta 4.jpg",text:"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!"},
{img:"resposta 5.jpg",text:"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar."},
{img:"resposta 6.jpg",text:"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor."},
{img:"resposta 7.jpg",text:"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar."}
];

let current=0;

function hearts(){
 return Array.from({length:7},(_,i)=>i<=current?"♥":"♡").join("");
}

function typeText(element,text,button){
 let i=0;
 element.textContent="";
 const timer=setInterval(()=>{
  element.textContent += text[i] || "";
  i++;
  if(i>=text.length){
   clearInterval(timer);
   button.disabled=false;
  }
 },35);
}

function home(){
 document.getElementById("app").innerHTML='<div class="screen"><img class="bg" src="assets/images/tela inicial.jpg"><div class="click" onclick="question()"></div></div>';
}

function question(){
 document.getElementById("app").innerHTML=`<div class="screen question"><div class="hearts">${hearts()}</div><h2>${current+1}/7</h2><div class="options"><button onclick="answer()">Escolher resposta</button></div></div>`;
}

function answer(){
 const item=questions[current];
 document.getElementById("app").innerHTML=`<div class="screen"><img class="bg" src="assets/images/${item.img}"><div class="hearts">${hearts()}</div><div id="text" class="answerText"></div><button id="next" class="next" disabled>➜</button></div>`;
 const btn=document.getElementById("next");
 typeText(document.getElementById("text"),item.text,btn);
 btn.onclick=()=>{current++;current<questions.length?question():home()};
}

home();
