var helloWorld = function (lang) {
	if (lang == "es") {
		return "Hola, Mundo!";
	} else if (lang == "fr") {
		return "Bonjour tout le monde";
	} else {
		return "Hello, World";
	}
}

console.log(helloWorld("es"));
console.log(helloWorld("fr"));
console.log(helloWorld("en"));