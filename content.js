function randNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

$('p').each(function(){
	const title = ["lubricated shit-stain", "douche-balloon", "babbling twat-waffle", "kaleidoscope of herepes sores", "torrent of rotting urine", "small, small piece of what is left of Hitler", "CHRISTIAN!!1!!1", "weak, defenseless pit viper", "bloody cum stain from Rudy Giuliani", "useless human being", "scourge on the Earth", "souless shell", "blanket answer for abortion", "parent's worst nightmare", "cause for someone's teardrop tattoo"];
	let r = randNum(title.length);
	$(this).contents().filter(function(){
		return this.nodeType == 3;
	}).each(function(){
		newText = this.nodeValue.replace(/(my )*(thoughts and prayers |thoughts )(go out to |are with)*/gi, "I am a " + title[r] + " and I only want you to think of me when a tragedy occurs. Oh, and by the way, ");
		this.nodeValue = newText;
	});
	
	
})