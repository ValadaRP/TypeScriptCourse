import { Product } from "./product.model";
import 'reflect-metadata';
import { plainToInstance} from 'class-transformer';
import {validate} from 'class-validator'

const products = [{title: 'A carpet', price: 29.99},{title: 'A book', price: 23.99}];

// const p1 = new Product("Book", 14);

const loadedProducts = plainToInstance(Product, products);

for(const prod of loadedProducts){
    console.log(prod.getInformation());
}

const newProd = new Product('', -244);
validate(newProd).then(errors => {
    if(errors.length > 0){
        console.log(errors);
    }else{
        console.log(newProd.getInformation());
    }
});
// console.log(p1.getInformation());