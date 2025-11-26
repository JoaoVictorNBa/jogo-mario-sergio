const mario = document.querySelector('.mario');
const fogo = document.querySelector('.fogo');

const saltar = () => {
        mario.classList.add('saltar');
        
        setTimeout(() => {
            mario.classList.remove('saltar');
        }, 500);
}

const lacoloop = setInterval(()=>{
    const posicaofogo = fogo.offsetLeft; 
    const alturamario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (posicaofogo <= 100 && posicaofogo > 0 && alturamario < 80) { 

        fogo.style.animation = 'none';
        fogo.style.left = `${posicaofogo}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${alturamario}px`;
        
        mario.src = 'img/game-over.png';
        mario.style.width ='90px';
        mario.style.marginLeft = '30px';
        
        clearInterval(lacoloop);
    }
}, 15);

document.addEventListener('keydown', evento => {
    if (evento.code === 'Space') {
        saltar();
    }

});

