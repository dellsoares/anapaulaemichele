
const q=[
["Como a Mi e a Paulinha se conheceram?",["Trilha","Evento corporativo","Tinder","Amigos em comum"],2,"Tinder. A gente começa a história num “match” online e traz o amor para ser parte do que vivemos no mundo real.","resposta-1.jpg"],
["Em que ano Paulinha e Mi se conheceram?",["2022","2023","2024","2025"],1,"2023. O que significa que essa é a terceira temporada dessa série que queremos construir até o fim da vida.","resposta-2.jpg"],
["Qual país a Mi sonha em conhecer?",["Londres","Estados Unidos","Suíça","Itália"],3,"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel.","resposta-3.jpg"],
["Qual país a Paulinha sonha em conhecer?",["Chile","Argentina","Estados Unidos","Paraguai"],2,"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!","resposta-4.jpg"],
["Para onde será a lua-de-mel?",["Disney","Fernando de Noronha","San Andreas","Contagem das Abóboras"],2,"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar.","resposta-5.jpg"],
["Para onde foi a primeira viagem juntas?",["Nova Lima","Macacos","Floripa","Catas Altas"],3,"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor.","resposta-6.jpg"],
["Em qual praia foi feito o pedido?",["Pontal de Maracaípe","Canasvieiras","Copacabana","Búzios"],0,"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história.","resposta-7.jpg"]
];
let i=0,s=0;
function type(el,t,cb){let n=0;let x=setInterval(()=>{el.innerHTML+=t[n++]||'';if(n>=t.length){clearInterval(x);cb()}},25)}
function home(){app.innerHTML='<div class="screen cover"><img src="assets/images/tela-inicial.jpg"><div onclick="showQ()"></div></div>'}
function showQ(){let h="";for(let x=0;x<7;x++)h+=x<=i?"♥":"♡";let a=q[i];app.innerHTML=`<div class="screen question"><div class="hearts">${h}</div><h2>${a[0]}</h2><div class="options">${a[1].map((v,k)=>`<button onclick="ans(${k})">${v}</button>`).join("")}</div></div>`}
function ans(v){let a=q[i];if(v==a[2])s++;app.innerHTML=`<div class="screen"><img class="answer-bg" src="assets/images/${a[5]}"><div id="t" class="text"></div><button id="b" class="confirm" disabled>Continuar</button></div>`;type(document.getElementById('t'),a[3],()=>{b.disabled=false});b.onclick=()=>{i++;i<q.length?showQ():end()}}
function end(){let im=s==7?'resultado-7.jpg':s>=4?'resultado-4-6.jpg':'resultado-1-3.jpg';app.innerHTML=`<div class="screen"><img class="result-bg" src="assets/images/${im}"></div>`}
home()
