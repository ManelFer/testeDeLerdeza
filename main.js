'use strict';
let votoSim = window.document.getElementById('sim')
let votoNao = window.document.getElementById('nao')

let parceiro = prompt('seu nome?');
document.querySelector('.conteudo_titulo').innerHTML ;

const alertas = () => {
    alert(`Sabia que tu era lerdo  ${parceiro} 💞`);
    location.href = "https://youtu.be/9UjRJrfuvSY";
};

const zoeira = () =>{
    votoNao.style.position = `absolute`;
    votoNao.style.top = (Math.random() * window.innerHeight) + `px`;
    votoNao.style.left = (Math.random() * window.innerWidth) + `px`;
};

votoSim.addEventListener(`click`, alertas);
votoNao.addEventListener(`mouseleave`, zoeira)