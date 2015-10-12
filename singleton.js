/**
 * Created by vz on 10/12/15.
 */

let instance = null;

class MyClass {
    constructor() {
        if(instance != null) {
            return instance;
        }
        instance = this;
        this.timestamp = new Date();
    }
}

console.log((new MyClass()).timestamp);
console.log((new MyClass()).timestamp);