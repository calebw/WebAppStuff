module funcs {
	//Using Lambda funcs as shorthand. Returns number
	var squareSimple = (h: number, w: number) => h * w;
	console.log(squareSimple(5,4));

	//Optional parameter name. Returns void
	var helloWorld = (name?: string) => {
		console.log('Hello ' + (name || 'unknown'));
	}

	helloWorld();
	helloWorld('Caleb');
}