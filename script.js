
const text = document.querySelector(".word");
const hamburger = document.querySelector(".fa-solid");
const navbar = document.getElementById("navBar")

const words = " A Junior full stack developer || virtual-assistant I build web applications and help businesses run smoothly.\n Whether it's coding a feature or managing tasks, I bring dedication and problem solving to everything I do.\n Let's walk through my projects.";

let index = 0;

let switchy = 0;

function typeWriter( ){
    if (index < words.length){
        text.innerHTML += words.charAt(index);
        index++;
        setTimeout(typeWriter, 50)
    }
}
typeWriter();



hamburger.addEventListener("click", ()=>{
    if(switchy === 0){
        navbar.style.visibility = "visible";
        switchy++;
    }else{
        navbar.style.visibility = "hidden";
        switchy = 0;
    }

    



})
