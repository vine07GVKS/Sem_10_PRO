// form loading animation 

const form = [...document.querySelector('.form').children];

form.forEach((items,i)=>{
    setTimeout(()=>{
        items.style.opacity =1;
    }, i*100);

})