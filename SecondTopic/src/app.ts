interface Greetable {
    name: string;

    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    age: number;

    constructor(n: string, age: number){
        this.name = n;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Piotr', 23);

console.log(user1);