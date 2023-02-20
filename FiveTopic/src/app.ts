function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Logger("Test")
class Person{
    name = 'Max';

    constructor(){
        console.log('creating person object...');
    }
}

const pers = new Person();
console.log(pers);