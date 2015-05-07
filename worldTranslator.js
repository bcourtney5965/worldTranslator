var helloWorld = function(lang) {
	if (lang == "es") {
		return "Hola, Mundo!";
	} else if (lang == "de") {
		return "Bonjour tout le monde";
	} else {
		return "Hello, World";
	}
}

console.log(helloWorld("es"));
console.log(helloWorld("fr"));
console.log(helloWorld("en"));