window.addEventListener('scroll',()=> {
document.querySelector('header').style.background =
window.scrollY>80 ? '#425B4B' : '#425B4BCC';
});