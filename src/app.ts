// const userName = "Piotr";
// let age = 30;
// let result;

// function add (a: number,b:number){
//     result =a +b;
//     return result;
// }

// if(age > 20){
//     let isOld = true;
// }

// console.log(result);
// console.log(isOld);

// const add = (a:number, b:number = 4) => a+b;

// const printOutpt = (output: string | number) => console.log(output);

// console.log(add(5,5));

// const hobbies = ["sport", "cooking"];
// const activeHobbies = ["hiking", ...hobbies];

// activeHobbies.push(...hobbies);

// const person = {
//     name: "piotr",
//     age: 30
// }

// const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add(5,4,3,2,1.5);
console.log(addedNumbers);
