// function Logger(logString: string){
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// function WithTemplate(template: string, hookId: string){
//     return function(constructor: any){
//         console.log('Rendering template');
//         const hookElement = document.getElementById(hookId);
//         const p = new constructor();
//         if(hookElement){
//             hookElement.innerHTML = template;
//             hookElement.querySelector('h1')!.textContent = p.name;
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

class Product {
    @Log
    title: string;
    private _price: number;

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
    getPriceWtihTax(tax:number){
        return this._price * (1 + tax);
    }
}