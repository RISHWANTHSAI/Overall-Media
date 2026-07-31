/* =====================================================
   CURSOR GLOW
===================================================== */

const cursor = document.getElementById("cursor");
const spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

spotlight.style.left = e.clientX + "px";
spotlight.style.top = e.clientY + "px";

});

/* =====================================================
   PARTICLE BACKGROUND
===================================================== */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles=[];

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

for(let i=0;i<90;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+1,

dx:(Math.random()-.5)*0.4,

dy:(Math.random()-.5)*0.4

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="rgba(212,175,55,.8)";

ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

document.querySelectorAll(".card,.glass,.hero").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="1s ease";

observer.observe(el);

});

/* =====================================================
   MAGNETIC BUTTON
===================================================== */

document.querySelectorAll(".button").forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*0.15}px,${y*0.15}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});

/* =====================================================
   RIPPLE EFFECT
===================================================== */

document.querySelectorAll(".button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";
circle.style.height=d+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.4)";
circle.style.left=e.offsetX-d/2+"px";
circle.style.top=e.offsetY-d/2+"px";
circle.style.pointerEvents="none";
circle.style.transform="scale(0)";
circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});

/* =====================================================
   RIPPLE KEYFRAME
===================================================== */

const style=document.createElement("style");

style.innerHTML=`

.button{

position:relative;

overflow:hidden;

}

@keyframes ripple{

to{

transform:scale(5);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* =====================================================
   FLOATING CARDS
===================================================== */

document.querySelectorAll(".card").forEach((card,index)=>{

setInterval(()=>{

card.animate([

{transform:'translateY(0px)'},

{transform:'translateY(-8px)'},

{transform:'translateY(0px)'}

],{

duration:3500+index*300,

iterations:1,

easing:'ease-in-out'

});

},3600);

});

/* =====================================================
   GLASS TILT
===================================================== */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* =====================================================
   NAVBAR SHADOW
===================================================== */

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(7,20,38,.85)";
nav.style.boxShadow="0 20px 60px rgba(0,0,0,.45)";

}else{

nav.style.background="rgba(255,255,255,.06)";
nav.style.boxShadow="0 15px 45px rgba(0,0,0,.30)";

}

});

/* =====================================================
   SMOOTH PARALLAX
===================================================== */

document.addEventListener("mousemove",(e)=>{

const cards=document.querySelectorAll(".glass");

cards.forEach((card,i)=>{

const x=(e.clientX-window.innerWidth/2)/250*(i+1)/8;
const y=(e.clientY-window.innerHeight/2)/250*(i+1)/8;

card.style.transform=`translate(${x}px,${y}px)`;

});

});
console.log("Premium Executive Leadership Website Loaded.");
