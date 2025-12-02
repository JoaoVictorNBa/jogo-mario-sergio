const pkx = document.querySelector('.pkx');
const fogo = document.querySelector('.fogo');

const saltar = () => {
        pkx.classList.add('saltar');
        
        setTimeout(() => {
            pkx.classList.remove('saltar');
        }, 500);
}

const lacoloop = setInterval(()=>{
    const posicaofogo = fogo.offsetLeft; 
    const alturapkx = +window.getComputedStyle(pkx).bottom.replace('px', '');

    if (posicaofogo <= 100 && posicaofogo > 0 && alturapkx < 80) { 

        fogo.style.animation = 'none';
        fogo.style.left = `${posicaofogo}px`;

        pkx.style.animation = 'none';
        pkx.style.bottom = `${alturapkx}px`;
        
        pkx.src = 'img/a05n4ksi9dsq6aos99b35jatvd-86efe5c3de2bd88a300e6dc9cbbbc476.png';
        pkx.style.width ='90px';
        pkx.style.marginLeft = '30px';
        
        clearInterval(lacoloop);
    }
}, 15);

document.addEventListener('keydown', evento => {
    if (evento.code === 'Space') {
        saltar();
    }

});








