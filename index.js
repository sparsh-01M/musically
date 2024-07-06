console.log("welcome to music");
let songIndex = 0;
let audioelement  = new Audio('./songs/1.mp3');
let audioelement1 = new Audio('./songs/2.mp3');
let audioelement2 = new Audio('./songs/3.mp3');
let audioelement3 = new Audio('./songs/4.mp3');
let audioelement4 = new Audio('./songs/5.mp3');
let audioelement5 = new Audio('./songs/6.mp3');
let audioelement6 = new Audio('./songs/7.mp3');
let audioelement7 = new Audio('./songs/8.mp3');
let audioelement8 = new Audio('./songs/9.mp3');
let masterplay = document.getElementById('masterplay');
let coverplay1 = document.getElementById('coverplay1');

let coverplay2 = document.getElementById('coverplay2');

let coverplay3 = document.getElementById('coverplay3');

let coverplay4 = document.getElementById('coverplay4');

let coverplay5 = document.getElementById('coverplay5');

let coverplay6 = document.getElementById('coverplay6');

let coverplay7= document.getElementById('coverplay7');

let coverplay8= document.getElementById('coverplay8');
let coverplay9= document.getElementById('coverplay9');
let progressbar = document.getElementById('progressbar');
let songitem=document.querySelectorAll('.songitem');

let songs= [
    {songname:"letmeloveyou", filepath:"./songs/1.mp3", coverPath: "cover/1.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/2.mp3", coverPath: "cover/2.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/3.mp3", coverPath: "cover/3.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/4.mp3", coverPath: "cover/4.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/5.mp3", coverPath: "cover/5.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/6.mp3", coverPath: "cover/6.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/7.mp3", coverPath: "cover/7.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/8.mp3", coverPath: "cover/8.jpg"},
    {songname:"letmeloveyou", filepath:"./songs/9.mp3", coverPath: "cover/9.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})


coverplay1.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        coverplay1.classList.remove('fa-play-circle');
        coverplay1.classList.add('fa-pause-circle');
    }
    else{
        audioelement.pause();
        coverplay1.classList.remove('fa-pause-circle');
        coverplay1.classList.add('fa-play-circle');
    }
})


coverplay2.addEventListener('click',()=>{
    if(audioelement1.paused || audioelement1.currentTime<=0){
        audioelement1.play();
        coverplay2.classList.remove('fa-play-circle');
        coverplay2.classList.add('fa-pause-circle');
    }
    else{
        audioelement1.pause();
        coverplay2.classList.remove('fa-pause-circle');
        coverplay2.classList.add('fa-play-circle');
    }
})


coverplay3.addEventListener('click',()=>{
    if(audioelement2.paused || audioelement2.currentTime<=0){
        audioelement2.play();
        coverplay3.classList.remove('fa-play-circle');
        coverplay3.classList.add('fa-pause-circle');
    }
    else{
        audioelement2.pause();
        coverplay3.classList.remove('fa-pause-circle');
        coverplay3.classList.add('fa-play-circle');
    }
})


coverplay4.addEventListener('click',()=>{
    if(audioelement3.paused || audioelement3.currentTime<=0){
        audioelement3.play();
        coverplay4.classList.remove('fa-play-circle');
        coverplay4.classList.add('fa-pause-circle');
    }
    else{
        audioelement3.pause();
        coverplay4.classList.remove('fa-pause-circle');
        coverplay4.classList.add('fa-play-circle');
    }
})


coverplay5.addEventListener('click',()=>{
    if(audioelement4.paused || audioelement4.currentTime<=0){
        audioelement4.play();
        coverplay5.classList.remove('fa-play-circle');
        coverplay5.classList.add('fa-pause-circle');
    }
    else{
        audioelement4.pause();
        coverplay5.classList.remove('fa-pause-circle');
        coverplay5.classList.add('fa-play-circle');
    }
})


coverplay6.addEventListener('click',()=>{
    if(audioelement5.paused || audioelement5.currentTime<=0){
        audioelement5.play();
        coverplay6.classList.remove('fa-play-circle');
        coverplay6.classList.add('fa-pause-circle');
    }
    else{
        audioelement5.pause();
        coverplay6.classList.remove('fa-pause-circle');
        coverplay6.classList.add('fa-play-circle');
    }
})


coverplay7.addEventListener('click',()=>{
    if(audioelement6.paused || audioelement6.currentTime<=0){
        audioelement6.play();
        coverplay7.classList.remove('fa-play-circle');
        coverplay7.classList.add('fa-pause-circle');
    }
    else{
        audioelement6.pause();
        coverplay7.classList.remove('fa-pause-circle');
        coverplay7.classList.add('fa-play-circle');
    }
})


coverplay8.addEventListener('click',()=>{
    if(audioelement7.paused || audioelement7.currentTime<=0){
        audioelement7.play();
        coverplay8.classList.remove('fa-play-circle');
        coverplay8.classList.add('fa-pause-circle');
    }
    else{
        audioelement7.pause();
        coverplay8.classList.remove('fa-pause-circle');
        coverplay8.classList.add('fa-play-circle');
    }
})

coverplay9.addEventListener('click',()=>{
    if(audioelement8.paused || audioelement8.currentTime<=0){
        audioelement8.play();
        coverplay9.classList.remove('fa-play-circle');
        coverplay9.classList.add('fa-pause-circle');
    }
    else{
        audioelement8.pause();
        coverplay9.classList.remove('fa-pause-circle');
        coverplay9.classList.add('fa-play-circle');
    }
})
audioelement.addEventListener('timeupdate', ()=>{
   progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
   progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime = progressbar.value * audioelement.duration/100;
})
