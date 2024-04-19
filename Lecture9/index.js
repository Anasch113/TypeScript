// Default and Optional Parameters in functions
// Default Parameter
var greet2 = function (name, id) {
    var message = "Hello ".concat(name, ", your ID is ").concat(id);
    return message;
};
var funGreet = greet2("anas", 1);
// optional Parameter
var greet3 = function (name, id) {
    if (!id) {
        var message = "Hello ".concat(name, " , your id is not assigned yet");
        return message;
    }
    else {
        var message = "Hello ".concat(name, ", your ID is ").concat(id);
        return message;
    }
};
var funGreet2 = greet3("anas");
console.log(funGreet2);
