// const person: {
//     name: string;
//     age: number;
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Piotr",
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('Admin');
// person.role[1] = '10';
// person.role = [0,'admin','user'];
var favoriteActivites;
favoriteActivites = ['Sports'];
if (person.role === Role.AUTHOR) {
    console.log("This user is Author");
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies.toUpperCase());
}
console.log(person.name);
