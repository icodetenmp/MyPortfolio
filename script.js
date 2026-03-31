
const text = document.querySelector(".word");
const hamburger = document.querySelector(".fa-solid");
const navbar = document.getElementById("navBar")

const words = " A Junior full stack developer || virtual-assistant I build web applications and help businesses run smoothly.\nWhether its coding a feature or managin task, I bring dedication and problem solving to every thing i do.\n Let walk through my projects.";

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
