
const answers=[
{image:"resposta 1.jpg",text:"Tinder. A gente começa a história num “match” online e traz o amor pra ser parte do que vivemos no mundo real."},
{image:"resposta 2.jpg",text:"2023. O que significa que essa é a terceira temporada dessa série que queremos construir até o fim da vida."},
{image:"resposta 3.jpg",text:"E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel."},
{image:"resposta 4.jpg",text:"No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!"},
{image:"resposta 5.jpg",text:"San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar."},
{image:"resposta 6.jpg",text:"Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor."},
{image:"resposta 7.jpg",text:"Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar."}
];
let i=0;
function typing(el,t,b){let n=0;let x=setInterval(()=>{el.textContent+=t[n++]||'';if(n>=t.length){clearInterval(x);b.disabled=false}},35)}
document.getElementById('app').innerHTML='<div class="screen"><img class="bg" src="assets/images/tela inicial.jpg"><div onclick="show()" style="position:absolute;inset:0"></div></div>';
function show(){
let a=answers[i];
document.getElementById('app').innerHTML='<div class="screen"><img class="bg" src="assets/images/'+a.image+'"><div class="hearts">♥♡♡♡♡♡♡</div><div class="text" id="t"></div><button id="b" class="next" disabled>➜</button></div>';
let b=document.getElementById('b');
typing(document.getElementById('t'),a.text,b);
b.onclick=()=>{i++;show()};
}
