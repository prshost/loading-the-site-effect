const into = document.querySelector('.into');
const text = document.querySelectorAll('.text');

window.addEventListener('load', ()=> {
    

    text.forEach( (item, i) => {
        
        setTimeout( () => {
            item.classList.add('active');
            
        }, (i+1)*400);
        setTimeout( () => {
            item.classList.remove('active'); 
            item.classList.add('fead'); 
        }, parseInt((i+'99'))+2000)
        
    });

    setTimeout(()=> {
        into.style.top = '-100%'
        into.style.opacity = '0'
    },2500)
})

