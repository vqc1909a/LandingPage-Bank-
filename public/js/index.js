
const header = document.querySelector('.header');
const btnHamburguer = document.querySelector('#btnHamburguer');


btnHamburguer.addEventListener('click', function(){
  console.log("click hamburguer")
  if( header.classList.contains('open')){
    header.classList.remove('open');
    header.classList.add('close');
  }else{
    header.classList.remove('close');
    header.classList.add('open');
  }
})



