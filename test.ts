type User = {name: string | number} | number;

type moje = string | number;

const piotrek: User = 24;

let u1: User = {name: 24}
console.log("Nazwa to: " + u1.name);

const dodaj = (p1: number | string, p2: moje) => {
    return +p1 + +p2;
}

console.log(dodaj(u1.name, piotrek));

