var funcs;
(function (funcs) {
    //Using Lambda funcs as shorthand. Returns number
    var squareSimple = (h, w) => h * w;
    console.log(squareSimple(5, 4));
    //Optional parameter name. Returns void
    var helloWorld = (name) => {
        console.log('Hello ' + (name || 'unknown'));
    };
    helloWorld();
    helloWorld('Caleb');
})(funcs || (funcs = {}));
