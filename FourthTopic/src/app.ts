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

function merge<T extends object, U extends object>(objA: T, objB:U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:'Piotr', hobbies: ['Sports']},{age:23});
console.log(mergedObj);

interface Lenghty{
    length: number;
}

function countAndDescribe<T extends Lenghty>(element: T) : [T, string]{
    let descriptionText = "Got no value";
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    }else if (element.length > 1){
        descriptionText = "Got " + element.length;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key: U){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Piotr'}, 'name');

class DataStorage<T>{
    private data: T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Piotr');
textStorage.addItem('Karol');
textStorage.removeItem('Karol');

