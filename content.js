function randNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

let pTags = document.getElementsByTagName("p");

for (var i = 0 ; i < pTags.length; i++) {
	const title = ["lubricated shit-stain", "douche-balloon", "babbling twat-waffle", "kaleidoscope of herepes sores", "torrent of rotting urine", "small, small piece of what is left of Hitler", "CHRISTIAN!!1!!1", "weak, defenseless pit viper", "bloody cum stain from Rudy Giuliani", "useless human being", "scourge on the Earth", "souless shell", "blanket answer for abortion", "parent's worst nightmare", "cause for someone's teardrop tattoo"];
	let links = pTags[i].getElementsByTagName("a");

	if (links.length > 0){
		for (var j = 0; j < links.length; j++) {
			let r = randNum(title.length);
			links[j].innerText = links[j].innerText.replace(/(my )*(thoughts and prayers |thoughts )(go out to |are with)*/gi, "I am a " + title[r] + " and I only want you to think of me when a tragedy occurs. Oh, and by the way, ");
		}
		let test = $('p:nth-child('+i+1+')');

	} else{
		let r = randNum(title.length);
		pTags[i].innerText = pTags[i].innerText.replace(/(my )*(thoughts and prayers |thoughts )(go out to |are with)*/gi, "I am a " + title[r] + " and I only want you to think of me when a tragedy occurs. Oh, and by the way, ");
	}
}