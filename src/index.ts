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
// Інтерфейси в TypeScript todo
// interface Person {
//     firstName: string,
//     lastName: string,
//     age?: number,
// }
// function greet(person: Person): void {
//     console.log(`Hello ${person.firstName} ${person.lastName}`);
// }
// const user: Person = {
//     firstName: 'Bob',
//     lastName: 'Long',
//     age: 30,
// };
// greet(user);
//
// Інтерфейси об'єктів todo
// interface IPerson {
//     name: string,
//     age: number,
//     greet(phrase: string): void
// }
// const user: IPerson = {
//     name: 'Vasyl',
//     age: 31,
//     greet(phrase: string) {
//         console.log(phrase + ' I am ' + this.name);
//     },
// };
// user.greet('Hello');
//
// Інтерфейси класів todo
// interface IPerson {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
// interface IPilot {
//     flyMessage(): void;
// }
// class Pilot implements IPilot, IPerson {
//     constructor(public name: string, public age: number) {
//     }
//     greet(phrase: string) {
//         console.log(phrase);
//     }
//     flyMessage() {
//         console.log('Літак набрав висоту, всім приємного польоту!');
//     }
//     setAutopilot(): void {
//         console.log('Автопілот увімкнено.');
//     }
// }
// abstract class Plane {
//     protected pilot?: IPilot;
//     public sitInPlane(pilot: Pilot): void {
//         this.pilot = pilot;
//     }
//     public abstract startEngine(): boolean
// }
//
// class Boeing extends Plane {
//     public startEngine(): boolean {
//         if (!this.pilot) {
//             throw new Error('No pilot in cabin');
//         }
//         console.log('Start engine');
//
//         this.pilot.flyMessage();
//         return true;
//     }
// }
// const boeing = new Boeing();
// const pilot = new Pilot('Vasyl', 31);
// pilot.greet('Welcome, blablabla');
// boeing.sitInPlane(pilot);
// boeing.startEngine();
//
// Readonly
// interface ITest {
//     readonly name: string;
// }
// const person: ITest = {
//     name: 'person name',
// };
// // person.name = 'Another name'; // Cannot assign to 'name' because it is a read-only property.
//
// Extending Interfaces todo
// interface IUser {
//     name: string;
//     age: number;
// }
// interface IUserId extends IUser {
//     id: number;
// }
// const user: IUserId = {
//     name: 'Vasyl',
//     age: 31,
//     id: 1,
// };
//
// Інтерфейси як тип функції todo
// interface IAddFn {
//     (n1: number, n2: number): number;
// }
// let fn1: IAddFn = (n1: number, n2: number): number => {
//     return n1 + n2;
// };
// ------------------------------------------------------------------
