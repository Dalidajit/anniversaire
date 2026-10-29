const button = document.getElementById("open-letter");
const letter = document.querySelector(".letter");
const card = document.querySelector(".birthday-card");
const confettiSection = document.getElementById("confetti-section")
const colors = ["#E8A5C8", "#CDB4DB", "#A2D2FF", "#FFE5A5"];
const buttoncake = document.getElementById("show-cake");
const cake = document.getElementById("cake-section");
const buttonflame = document.getElementById("stopflame");
const returnCard = document.getElementById("return-card");
const returnLetter = document.getElementById("return-letter")

// premiere fonctionnalité 	: bouton  click -> affiche lettre 
button.addEventListener("click", function(){
	letter.style.display = "block";
	card.style.display = "none";
});

// confetti
button.addEventListener("click",function(){
	for (let i = 0 ; i < 75; i++) {
	const confetti = document.createElement("div");
	
	confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	
	confetti.classList.add("confetti");
	confetti.style.left = Math.random() * 100 + "vw";
	confetti.style.top = Math.random() * 100 + "vh";
	
	confetti.addEventListener("animationend", function(){
	confetti.remove();
	
	});
	
	confettiSection.appendChild(confetti);

}
   

});

// Bouton  afficher le gateau

buttoncake.addEventListener("click", function(){
	confettiSection.style.display ="none";
	letter.style.display = "none";
	cake.style.display = "block";
	
});

// Bouton flame
buttonflame.addEventListener("click",function(){
	cake.style.display = "none";
	card.style.display="block";
});
 
 // Bouton return
returnCard.addEventListener("click",function(){
	card.style.display = "block";
	letter.style.display = "none";
});

returnLetter.addEventListener("click",function(){
	cake.style.display = "none";
	letter.style.display = "block";
});

