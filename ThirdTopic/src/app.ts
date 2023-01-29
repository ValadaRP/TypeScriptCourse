type Admin = {
    name: string;
    privilages:string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Piotr",
    privilages: ['created-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable,b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);

    if('privilages' in emp){
        console.log('Privilages: ' + emp.privilages);
    }
    if('startDate' in emp){
        console.log('Privilages: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car{
    drive(){
        console.log("Driving...");
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...')
    }

    loadCargo(amount: number){
        console.log("Loading cargo... " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);