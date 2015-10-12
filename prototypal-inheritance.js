var Dog = (function () {
    function Dog(){
        this.age = 5;
    }
    Dog.prototype.bark = function () {
        console.log('whoof!');
    };
    return Dog;
})();


var ShowDog = (function () {
    function ShowDog(){
        Dog.call(this);
        this.number = 37;
    }
    //ShowDog.prototype = new Dog();
    //ShowDog.prototype.constructor = ShowDog;
    ShowDog.prototype.__proto__ = Dog.prototype;
    ShowDog.prototype.run = function () {
        console.log('run');
    };
    return ShowDog;
})();


var showDog = new ShowDog();
console.log(showDog.number);
console.log(showDog.age);
showDog.run();
showDog.bark();
console.log(showDog.constructor);

console.log(showDog.hasOwnProperty('number'));
