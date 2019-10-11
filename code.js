// // helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }

// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
};

const sayHello = function (x) {
    return "Hello, " + x + "!";
};

const isFive = function (x) {
    return x == 5;
};

const isEven = function (x) {
    return parseFloat(x) % 2 === 0;

};

const isVowel = function(x){
    if (x === 'A' || x === 'a'){
        return true;
    }
    else if (x === 'E' || x === 'e'){
        return true;
    }
    else if (x === 'I' || x === 'i'){
        return true;
    }
    else if (x === 'o' || x === 'o'){
        return true;
    }
    else return x === 'U' || x === 'u';
};
