var Dog = (function () {
    function Dog(){
        this.age = 5;
    }
    Dog.prototype.printAge = function(){
        console.log(this.age);
    };
    Dog.prototype.bark = function () {
        console.log('whoof!');
    };
    return Dog;
})();


var ShowDog = (function () {
    function ShowDog(){
        Dog.call(this);
    }
    ShowDog.prototype.__proto__ = Dog.prototype;
    ShowDog.prototype.constructor = Dog.constructor;
    ShowDog.prototype.run = function () {
        console.log('run');
    };
    return ShowDog;
})();

var showDog = new ShowDog();
showDog.run();
showDog.printAge();
showDog.bark();

console.log(showDog.constructor == Dog);