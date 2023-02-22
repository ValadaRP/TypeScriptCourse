// function Logger(logString: string){
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// function WithTemplate(template: string, hookId: string){
//     return function<T extend {new(...args: any[]) : {name: string} }>(originalConstructor: T){
        
//         return class extend originalConstructor {
//             constructor(..._: any[]) {
//                 super();
//                 console.log('Rendering template');
//                 const hookElement = document.getElementById(hookId);
//                 const p = new originalConstructor();
//                 if(hookElement){
//                     hookElement.innerHTML = template;
//                     hookElement.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     }
// }

// @Logger("Test")
// @WithTemplate('<h1>My person Object</h1>', 'app')
// class Person{
//     name = 'Max';

//     constructor(){
//         console.log('creating person object...');
//     }
// }

// const pers = new Person();
// console.log(pers);

function Log(target: any, propertyName: string | Symbol){
    console.log('Property dercorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accesor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val:number){
        if(val>0){
            this.price = val;
        }else{
            throw Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWtihTax(@Log4 tax:number){
        return this._price * (1 + tax);
    }
}

function Autobind(_: any, _2: string | Symbol, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);