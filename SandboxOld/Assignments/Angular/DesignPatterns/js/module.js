( function(window) {

    // normally variables & functions start with a lowercase letter but with modules, that is not the case.
    // The general tradition is to start them with a capital letter instead.

    function MyModule() {

        var pri_a = 10;
        function square(){
            return pri_a * pri_a;
        }
        // `this` refers to the instance of `MyModule` when created
        this.myMethod = function myMethod() {
            console.log( 'my method' );
            console.log(pri_a);
        };



        this.myOtherMethod = function myOtherMethod() {
            console.log( 'my other method' );
            console.log(square());
        };

    }

    // expose access to the constructor
    window.MyModule = MyModule;

} )( window );

// example usage
var myModule = new MyModule();
myModule.myMethod(); // alerts "my method"
myModule.myOtherMethod(); // alerts "my other method"/**
