// const person: {
//     name: string;
//     age: number;
// } = {



enum Role {
    ADMIN = 0, READ_ONLY, AUTHOR
};

const person = {
    name: "Piotr",
    age:23,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN,
};

// person.role.push('Admin');
// person.role[1] = '10';
// person.role = [0,'admin','user'];

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

if(person.role === Role.AUTHOR){
    console.log("This user is Author");
}

for (const hobbies of person.hobbies) {
    console.log(hobbies.toUpperCase());
}

console.log(person.name);