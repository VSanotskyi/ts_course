// Класи в TypeScript todo
// class House {
//     street: string;
//     constructor(n: string) {
//         this.street = n;
//     }
//     showAddress(this: House) {
//         console.log(`Address: ${this.street}`);
//     }
// }
// const house = new House('Middle-earth');
// house.showAddress();
// const houseCopy = {street: 'Dummy', showAddress: house.showAddress};
// houseCopy.showAddress();
//
// Модифікатори доступу todo
// public private protected
// class A {
//     private someProperty = 'str';
// }
// class B extends A {
//     showProperty() {
//         console.log(this.someProperty); // Property 'property' does not exist on type 'B'.
//     }
// }
//
// class A {
//     protected someProperty = 'str';
// }
// class B extends A {
//     showProperty() {
//         console.log(this.someProperty);
//     }
// }
// const b = new B();
// b.showProperty(); // 'str'
//
// class House {
//     private street: string;
//     private tenants: string[] = [];
//     constructor(n: string) {
//         this.street = n;
//     }
//     public showAddress(this: House) {
//         console.log(`Address: ${this.street}`);
//     }
//     addTenant(tenant: string) {
//         this.tenants.push(tenant);
//     }
//     public showTenant() {
//         console.log(this.tenants);
//     }
// }
// const house = new House('Middle-earth');
// house.addTenant('Nikita');
// house.addTenant('Anton');
// house.showTenant();
// house.showAddress();
//
// Скорочення ініціалізації todo
// class House {
//     constructor(private type: string, private street: string) {
//     }
// }
//
// Readonly todo
// class House {
//     constructor(private readonly type: string) {
//     }
//     changeType() {
//         this.type = 'new type'; // error
//     }
// }
//
// class A {
//     constructor(public readonly array: number[]) {
//     }
//     add(num: number) {
//         this.array.push(num); // ok
//     }
// }
// const a = new A([]);
// a.add(1);
// console.log(a.array); // [1]
//
// class User {
//     constructor(public readonly user: { name: string, id: number }) {
//     }
// }
// const user = new User({name: 'Vasyl', id: 1});
// // user.user = {name: 'Vasyl', id: '2'}; // error
// user.user.id = 100; // ok
//
// Наслідування todo
// class House {
//     constructor(private readonly type: string, private street: string) {
//     }
// }
// class StoneHouse extends House {
//     constructor(street: string) {
//         super('stone', street);
//     }
// }
// const stoneHouse = new StoneHouse('Stone-world');
//
// class House {
//     private tenants: string[] = [];
//     constructor(private readonly type: string, private street: string) {
//     }
//     public showAddress(this: House) {
//         console.log(`Address: ${this.street}`);
//     }
//     public showType(this: House) {
//         console.log(`House type: ${this.type}`);
//     }
//     public addTenant(tenant: string) {
//         this.tenants.push(tenant);
//     }
//     public showTenant(this: House) {
//         console.log(this.tenants);
//     }
// }
// class StoneHouse extends House {
//     private chargeOfTheHouse: string;
//     constructor(street: string, generalTenant: string) {
//         super('stone', street);
//         this.chargeOfTheHouse = generalTenant;
//
//         this.addTenant(generalTenant);
//     }
//     public showTenant() {
//         console.log(`General: ${this.chargeOfTheHouse}`);
//         super.showTenant();
//     }
// }
// const stoneHouse = new StoneHouse('Stone-world', 'Max');
// stoneHouse.addTenant('Vasyl');
// stoneHouse.showTenant();
// stoneHouse.showType();
// stoneHouse.showAddress();
//
// Getter/Setter todo
// type PersonInformation = {
//     firstName?: string;
//     lastName?: string;
// }
// class Person {
//     private personInformation: PersonInformation = {};
//     set firstName(value: string) {
//         console.log('firstName added');
//         this.personInformation.firstName = value;
//     }
//     set lastName(value: string) {
//         console.log('lastName added');
//         this.personInformation.lastName = value;
//     }
//     get info() {
//         const {personInformation} = this;
//         return `${personInformation.firstName} ${personInformation.lastName}`;
//     }
// }
// const person = new Person();
// person.firstName = 'Vasyl';
// person.lastName = 'Vasyl';
// console.log(person.info);
//
// Статичні методи та властивості
// class UseStatic {
//     private static count = 0;
//     constructor() {
//         UseStatic.count += 1;
//     }
//     public static itStaticMethod() {
//         console.log('run static method');
//     }
//     public showCount() {
//         console.log(UseStatic.count);
//     }
// }
// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();
// obj1.showCount(); // 3
// obj2.showCount(); // 3
// obj3.showCount(); // 3
// obj1.showCount(); // 3
// obj2.showCount(); // 3
// obj3.showCount(); // 3
// UseStatic.itStaticMethod(); // Run static method
//
// Abstract classes todo
// abstract class Plane {
//     protected pilotInCabin = false;
//     public setInPlane() {
//         this.pilotInCabin = true;
//     };
//     public abstract startEngine(): boolean
// }
// class Maize extends Plane {
//     public startEngine(): boolean {
//         return true;
//     }
// }
// class BrokenPlane extends Plane {
// } // error
//
