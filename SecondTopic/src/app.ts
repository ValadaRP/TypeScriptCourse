// type AddFn = (a:number,b:number) => number;
interface AddFn{
    (a:number,b:number):number;
}

let add: AddFn;

add = (n1:number,n2:number) =>{
    return n1+n2;
}

interface Named{
    readonly name?:string;
    outputName?:string;
}

interface Greetable extends Named {
    name?: string;

    greet(phrase: string): void;
}


class Person implements Greetable {
    name?: string;
    age: number;

    constructor( age: number,n?: string){
        this.name = n;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person( 23,'Piotr');

console.log(user1);