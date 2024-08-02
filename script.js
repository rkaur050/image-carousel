const img=document.querySelectorAll("img");
const images=[];
img.forEach(img=>images.push(img));

const left=document.querySelector(".left");
const right=document.querySelector(".right");

const nav=document.querySelectorAll(".circle");
const circles=[];
nav.forEach(circle=>circles.push(circle));

let show=0;
let len=images.length;
circles[show].style.backgroundColor='rgb(162, 109, 109)';

let interval = setInterval(moveCarousel, 2000); 

for(let i=1;i<len;i++)
    images[i].style.display='none';

function moveCarousel() {
    images[show].style.display = 'none';
    circles[show].style.backgroundColor = 'black';
    show = (show + 1) % len;
    images[show].style.display = 'block';
    circles[show].style.backgroundColor = 'rgb(162, 109, 109)';
}

function handleArrowClick(direction){
    clearInterval(interval);
    images[show].style.display='none';
    circles[show].style.backgroundColor='black';
    if(direction==='left'){
        show=(show===0)?len-1:show-1;
    }else{
        show=(show===len-1)?0:show+1;
    }
    images[show].style.display='block';
    circles[show].style.backgroundColor='rgb(162, 109, 109)';
    interval=setInterval(moveCarousel, 2000); 
};

left.addEventListener("click",()=>handleArrowClick('left'));

right.addEventListener("click",()=>handleArrowClick('right'));

circles.forEach((circle,index)=>circle.addEventListener("click",()=>{
    clearInterval(interval);
    images[show].style.display='none';
    circles[show].style.backgroundColor='black';
    images[index].style.display='block';
    circles[index].style.backgroundColor='rgb(162, 109, 109)';
    show=index;
    interval=setInterval(moveCarousel, 2000); 
}));

