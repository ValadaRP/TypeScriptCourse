// const names: Array<string> = [];
// names[0].split(" ");

// const promise:Promise<string> = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('This is done');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

function merge<T, U>(objA: T, objB:U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:'Piotr'},{age:23});