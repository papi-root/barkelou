
const burger = document.querySelector('.burger'); 
const menu = document.querySelector('.burger-menu'); 
const ul = document.querySelectorAll('.burger-menu li');


burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active'); 
}); 

/*
const body = document.querySelector('*:not(.burger)'); 
*/  

ul.forEach(u => {
    
    u.addEventListener('click', () => {

        if(menu.classList.contains('menu-active')) {
            burger.click()
        }

    })
})

body.addEventListener('click', () => {
    if(menu.classList.contains('menu-active'))
    {
       burger.click()
    }
})




