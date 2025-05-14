const emojis = [
    "😺",
    "😺",
    "🐵",
    "🐵",
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🦒",
    "🦒",
    "🐸",
    "🐸"
]

let openCards = []

let  shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement
    ("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function soltarEmoji(x, y) {
  let emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerHTML = "🎉";
  document.querySelector("body").appendChild(emoji);
  
  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;


  setTimeout(() => {
    emoji.remove();
  }, 1500);
}

    

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMath, 500);
    } 
}

function checkMath(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

        const rect = openCards[0].getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top;
        soltarEmoji(x, y);
        openCards = [];
    } else {
        openCards[0].classList.add("boxError");
        openCards[1].classList.add("boxError");
        
         setTimeout(() => {
            openCards[0].classList.remove("boxOpen", "boxError");
            openCards[1].classList.remove("boxOpen", "boxError");
            openCards = [];
        }, 500);
    }

    

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu!")
    }
}
