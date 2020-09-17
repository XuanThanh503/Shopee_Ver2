let btnLeft = document.querySelector('.slider__left-btn--left');
let btnRight = document.querySelector('.slider__left-btn--right');
let slider = document.querySelector('.slider__main');

let tong = 0;

// event
btnLeft.addEventListener('click', btnLeftEvent);
btnRight.addEventListener('click',btnRightEvent);

//left - right 
function btnLeftEvent(event){
    if(tong < 5565){
        ifElse();
        clearInterval(id);
        tong += 795;
        slider.setAttribute('style',`left:-${tong}px`);
        id = setInterval(interval,4000);
    }else{
        return;
    }
}

function btnRightEvent(event){
    if(tong > 0){
        ifElse();
        clearInterval(id);
        tong -= 795;
        slider.setAttribute('style',`left:-${tong}px`);
        id = setInterval(interval,4000);
    }else{
        return;
    }
}

let id = setInterval(interval, 3000);
let i = 1;
// let item = document.querySelector('.slider__left-item:nth-child('+i+')');
let item1 = document.querySelector('.slider__left-item:nth-child(1)');
let item2 = document.querySelector('.slider__left-item:nth-child(2)');
let item3 = document.querySelector('.slider__left-item:nth-child(3)');
let item4 = document.querySelector('.slider__left-item:nth-child(4)');
let item5 = document.querySelector('.slider__left-item:nth-child(5)');
let item6 = document.querySelector('.slider__left-item:nth-child(6)');
let item7 = document.querySelector('.slider__left-item:nth-child(7)');
let item8 = document.querySelector('.slider__left-item:nth-child(8)');
item1.setAttribute('style','background:#fff');

function ifElse(){
    if(tong === 0){
        clear();
        item1.setAttribute('style','background:#fff');
    }else if(tong ===795){
        clear();
        item2.setAttribute('style','background:#fff');
    }else if(tong ===1590){
        clear();
        item3.setAttribute('style','background:#fff');
    }else if(tong ===2385){
        clear();
        item4.setAttribute('style','background:#fff');  
    }else if(tong ===3180){
        clear();
        item5.setAttribute('style','background:#fff');
    }else if(tong ===3975){
        clear();
        item6.setAttribute('style','background:#fff');
    }else if(tong ===4770){
        clear();
        item7.setAttribute('style','background:#fff');
    }else if(tong === 5565){
        clear();
        item8.setAttribute('style','background:#fff');
    }
}
function interval(){
         
    if(tong < 5565){
       ifElse();
        tong += 795;
        slider.setAttribute('style',`left:-${tong}px`);
        
    }else{
        tong = 0;
    
    }
}



item = document.querySelectorAll('.slider__left-item');
function clear(){
    for(let i of item){
        i.setAttribute('style','background:transparent');
    }
}
