const text =
"Dear Brother, thank you for always being my support system. Life is more fun with you. Happy Birthday! 🎉";

let index = 0;

function startSurprise(){

    document.getElementById("welcome").style.display="none";
    document.getElementById("main").classList.remove("hidden");

    document.getElementById("music").play();

    typeText();
}

/* Typing Effect */
function typeText(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText,40);
    }
}

/* Gift Click */
function openGift(){
    document.getElementById("giftMessage").classList.remove("hidden");
    confetti();
}

/* Confetti Animation */
function confetti(){
    for(let i=0;i<60;i++){

        let c=document.createElement("div");
        c.innerHTML="🎉";
        c.style.position="fixed";
        c.style.left=Math.random()*100+"%";
        c.style.top="-10px";
        c.style.fontSize="24px";

        document.body.appendChild(c);

        let fall=setInterval(()=>{
            c.style.top=parseInt(c.style.top)+5+"px";

            if(parseInt(c.style.top)>window.innerHeight){
                clearInterval(fall);
                c.remove();
            }
        },30);
    }
}