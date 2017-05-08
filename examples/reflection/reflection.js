
var action;

const fire = () => {
	console.log("it's a fire!")
}
const earth = () => {
	console.log("it's the earth...")
}
const wind = () => {
	console.log("whooooooooooo OOO ooooo etc")
}

switch(action) {
	case 'fire': fire(); break;
	case 'earth': earth(); break;
	case 'wind': wind(); break;
	default: throw "whoops";
}


// some more code

var status = '';
switch(action) {
	case 'fire': status = 'veryhot'; break;
	case 'earth': status = 'moldy'; break;
	case 'wind': status = 'upsidedown'; break;
	default: throw "daisy??";
}

// etc some more code
