// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// 
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")
a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var mySound = document.getElementById('you-win');
// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/lemon_slot.PNG";
		
	} else if (el.src.match("images/lemon_slot.PNG")){
		
		el.src = "images/orange_slot.PNG";
		
	} else if (el.src.match("images/orange_slot.PNG")){
		
	el.src = "images/cherry_slot.PNG";
	
	} else {
		el.src = "images/cherry_slot.PNG";
	}
}

// LEMON --> BAR --> CHERRY
// function nextImage(el){}
function nextImage2(el){
	if (el.src.match("images/lemon_slot.PNG")){
		
		el.src = "images/bar_slot.PNG";
		
	} else if (el.src.match("images/bar_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
	el.src = "images/lemon_slot.PNG";
	
	} else {
		el.src = "images/lemon_slot.PNG";
	}
}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}
function nextImage3(el){
	if (el.src.match("images/orange_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/orange_slot.PNG";
	
	} else {
		el.src = "images/orange_slot.PNG";
	}
}

function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}

function checkSlot(el){
	if (a.src.match("cherry_slot") && b.src.match("cherry_slot") && c.src.match("cherry_slot")){
		mySound.play();
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		console.log("YOU WIN");

	} else{
	}
}
