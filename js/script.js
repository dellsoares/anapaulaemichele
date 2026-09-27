
const quiz=[
{q:"Como a Mi e a Paulinha se conheceram?",o:["Trilha","Evento corporativo","Tinder","Amigos em comum"],c:2,img:"resposta 1.jpg",t:"Tinder. A gente começa a história num “match” online e traz o amor pra ser parte do que vivemos no mundo real."},
{q:"Em que ano Paulinha e Mi se conheceram?",o:["2022","2023","2024","2025"],c:1,img:"resposta 2.jpg",t:"2023. O que significa que essa é a terceira temporada dessa série que queremos construir até o fim da vida."},
{q:"Qual país a Mi sonha em conhecer?",o:["Londres","Estados Unidos","Suíça","Itália"],c:3,img:"resposta 3.jpg",t:"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel."},
{q:"Qual país a Paulinha sonha em conhecer?",o:["Chile","Argentina","Estados Unidos","Paraguai"],c:2,img:"resposta 4.jpg",t:"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!"},
{q:"Para onde será a nossa viagem de lua-de-mel?",o:["Disney","Fernando de Noronha","San Andreas","Contagem das Abóboras"],c:2,img:"resposta 5.jpg",t:"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar."},
{q:"Para onde foi a primeira viagem que fizemos juntas?",o:["Nova Lima","Macacos","Floripa","Catas Altas"],c:3,img:"resposta 6.jpg",t:"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor."},
{q:"Em qual praia foi feito o pedido de casamento?",o:["Pontal de Maracaípe","Canasvieiras","Copacabana","Búzios"],c:0,img:"resposta 7.jpg",t:"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar."}
];

let i=0,score=0;
function hearts(){return [...Array(7)].map((_,x)=>x<=i?"♥":"♡").join("")}
function type(el,text,btn){let n=0;let t=setInterval(()=>{el.textContent+=text[n++]||"";if(n>=text.length){clearInterval(t);btn.disabled=false}},35)}
function start(){question()}
function question(){
let q=quiz[i];
app.innerHTML=`<div class="screen question"><div class="hearts">${hearts()}</div><h2>${i+1}/7<br>${q.q}</h2>${q.o.map((x,n)=>`<button onclick="answer(${n})">${x}</button>`).join("")}</div>`
}
function answer(n){
let q=quiz[i]; if(n===q.c)score++;
app.innerHTML=`<div class="screen"><img class="bg" src="assets/images/${q.img}"><div class="hearts">${hearts()}</div><div id="txt" class="answerText"></div><button id="next" class="next" disabled>➜</button></div>`;
let b=document.getElementById("next");type(document.getElementById("txt"),q.t,b);b.onclick=()=>{i++;i<7?question():result()}
}
function result(){
let img=score===7?"resultado 7.jpg":score>=4?"resultado 4 a 6.jpg":"resultado 1 a 3.jpg";
app.innerHTML=`<div class="screen"><img class="bg" src="assets/images/${img}"></div>`
}
app.innerHTML=`<div class="screen"><img class="bg" src="assets/images/tela inicial.jpg"><div class="click" onclick="start()"></div></div>`;
