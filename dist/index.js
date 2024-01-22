// Базові типи todo
// number
// string
// boolean
// undefined
// null
//
// const num: number = 5;
// const num1 = 5;
// const str: string = 'Hello';
// const str1 = 'World';
// const bool: boolean = false;
// const bool1 = true;
// const u: undefined = undefined;
// const n: null = null;
// function fn1(num: number,
//              str: string,
//              bool: boolean,
//              u: undefined,
//              n: number) {
//     // do something
// }
// function fn2(num = 1,
//              str = 'some str',
//              bool = false,
//              u = undefined,
//              n = null) {
//     // do something
// }
//
// Складні типи
// Object
// Array
// type interface
// const obj: object = {};
// const obj1: {} = {};
// const obj2 = {a: 1, b: 2};
// const obj3: { name: string, id: number } = {name: 'Vasyl', id: 1};
// type User = { name: string, id: number }
// const user1: User = {name: 'Vasyl', id: 1};
// interface IUser1 {
//     name: string,
//     id: number,
// }
// const user2: IUser1 = {name: 'Vasyl', id: 1};
//
// Array
// const arrayGenericNumbers: Array<number> = [1, 2, 3];
// const arrayString: string[] = ['Hello', 'World'];
// const arrayNumbers: number[] = [1, 2, 3];
// const arrayAny: any[] = ['Hello', 1, false, undefined, null];
// const arrayMatrix: number[][] = [[1, 2], [3, 4], [6, 5]];
// const arrayStrNum: (string | number)[] = ['hello', 1, 'world'];
// const arrayObj: { name: string, id: number }[] = [
//     {name: 'Vasyl', id: 1},
//     {name: 'Vasyl', id: 1},
//     {name: 'Vasyl', id: 1},
// ];
// type User = { name: string, id: number }
// const arrayObject1: User[] = [{name: 'Vasyl', id: 1}];
//
// Типи для змінних та аргументів // todo
// Any
// let notSure: any = 0;
// notSure = 'Hello'; // ok
// const strLength: number = notSure.length; // ok
// let num: number = notSure; // ok
// function fetchUserData(id: string, callback: (data: any) => void): void {
//     const responseData = {name: 'Tom'};
//     callback(responseData);
// }
// fetchUserData('123', (data) => {
//     console.log(data.name);
// });
//
// Unknown
// let notSure: unknown = 1; // ok
// notSure = 'Hello'; // ok
// const strLength: any = notSure.length; // error
// const str: string = notSure; // error
// let str: string = '';
// if (typeof notSure === 'string') str = notSure; // ok
// console.log(str); // Hello
//
// function fetchUserData() {
//     return 'Tom';
// }
// let userData: unknown = fetchUserData(); // ok
// // let userDataName: string = userData; // error
// let userDataName: string = '';
// if (typeof userData === 'string') userDataName = userData; // ok
//
// Tuple
// const tupleType: [string, number] = ['hello', 1]; // ok
// tupleType.push(1); // ok
// console.log(tupleType); // ['hello',1,1]
// tupleType1: [string, number] = ['hello']; // error
// const tupleType1: [string, number] = [1, 'hello']; // error
// const tupleType1: [string, number] = ['hello', 1, 1]; // error
//
// const tuple: [string, ...number[]] = ['hello', 1, 2, 3]; // ok
//
// Enum
// enum Role {ADMIN, USER}
// const person = {
//     role: Role.ADMIN,
// };
// if (person.role === Role.ADMIN) console.log('Role:', person.role); // Role: 0
//
// enum Role {ADMIN, USER}
// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // ADMIN
//
// enum UserStatus {
//     Active = 'ACTIVE',
//     Inactive = 'INACTIVE',
//     Banner = 'BANNER',
// }
// let user1: UserStatus = UserStatus.Active;
// console.log(user1); // ACTIVE
//
// enum HttpCodes {
//     Ok = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
// }
// function response(status: HttpCodes) {
//     // handle response
// }
// response(HttpCodes.Unauthorized);
//
// const enum
// const enum HttpCodes {
//     Ok = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
// }
// const statusCode: HttpCodes = HttpCodes.Ok;
//
// Union Type
// let mixedType: string | number | null;
// mixedType = 10;
// mixedType = 'Hello';
// const str: string = mixedType; // ok
// // let num: number = mixedType; // error
// const strLength = mixedType.length; // ok
// function fn1(param: string | number): void {
//     // const calc = param + 1; // error
//     console.log(param);
// }
// fn1('Hello'); // Hello
// fn1(1); // 1
// // fn1(); // error
//
// function fn(param1: string | number): void {
//     let result = 0;
//     if (typeof param1 === 'number') {
//         result += param1;
//         console.log(param1);
//     } else {
//         console.log(param1);
//     }
// }
// fn(10); // ok
// fn('Hello'); // ok
//
// Intersection Type
// type Employee = {
//     name: string,
//     id: number,
// }
// type Manager = {
//     employee: Employee[]
// }
// type CEO = Employee & Manager
// const ceo: CEO = {
//     name: 'Vasyl',
//     id: 1,
//     employee: [{name: 'Bob', id: 2}],
// };
//
// Literal Type
// type OneORTwo = 1 | 2
// let value: OneORTwo;
// value = 1; // ok
// value = 2; // ok
// value = 3; // error
//
// type YesOrNo = 'yes' | 'no'
// let answer: YesOrNo;
// answer = 'yes'; // ok
// answer = 'no'; // ok
// answer = 'maybe'; // error
//
// type ButtonSize = 'small' | 'medium' | 'large'
// function getButtonStyle(size: ButtonSize) {
//     switch (size) {
//         case 'small':
//             return {fontSize: '10px', padding: '5px'};
//         case 'medium':
//             return {fontSize: '14px', padding: '10px'};
//         case 'large':
//             return {fontSize: '18px', padding: '15px'};
//         default:
//             return {fontSize: '14px', padding: '10px'};
//     }
// }
// const smallBtn = getButtonStyle('small');
// console.log(smallBtn);
// const extraLarge = getButtonStyle('extra-large'); // error
// console.log(extraLarge); // {fontSize: '14px', padding: '10px'} return default
//
// Типи для методів та функцій todo
// Return Type
// function fn1(): string {
//     return 'Hello';
// }
// function fn2(): number {
//     return 1;
// }
// type User = { name: string, id: number }
// function fn3(): User {
//     return {name: 'Vasyl', id: 1};
// }
// function fn4(): void {
//     // do something
// }
// function fn5(): never {
//     // do something
// }
//
// type User = { name: string, id: number }
// function getUserNames(users: User[]): string[] {
//     return users.map(user => user.name);
// }
// const users: User[] = [
//     {name: 'Vasyl', id: 1},
//     {name: 'Mango', id: 2},
//     {name: 'Bob', id: 3},
// ];
// const usersName = getUserNames(users);
// console.log(usersName); // ['Vasyl', 'Mango', 'Bob']
//
// function fn1() {
//     return 'Hello';
// }
// const str: string = fn1(); // ok
//
// Void
// function logMessage(message: string): void {
//     console.log(message);
// }
// console.log('Hello');
//
// function doSomething(callback: () => void): void {
//     callback();
// }
// doSomething(() => {
//     console.log('Hello');
// });
//
// Never
// Функція, яка завжди викидає помилку
// function throwError(message: string): never {
//     throw new Error(message);
// }
// // Функція з нескінченним циклом
// function infiniteLoop(): never {
//     while (true) {
//     }
// }
//
// let value: never;
// value = 1; // error
// value = 'Hello'; // error
//
// Function Type
// let myFn: (firstArg: string, secondArg: number) => void;
// myFn = (first: string, second: number) => {
//     console.log('first: ', first);
//     console.log('second: ', second);
// };
// myFn('Vasyl', 1);
//
// Визначення типу функції, який приймає два числа та повертає число
// type Callback = (nam: number, num: number) => number
// function calc(a: number, b: number, callback: Callback): number {
//     return callback(a, b);
// }
// const result: number = calc(1, 2, (a, b) => a + b);
// console.log(result); // 3
//
// type CallbackType = (...params: number[]) => number
// const calc = (a: number, b: number, callback: CallbackType): void => {
//     console.log(callback(a, b));
//     console.log(callback(a, b, 10, 20));
// };
// const callback = (...params: number[]) => {
//     let res = 0;
//     for (const i of params) {
//         res += i;
//     }
//     return res;
// };
// calc(1, 2, callback);
//
// Custom Types todo
// type User = {
//     id: number;
//     name: string;
// }
// const user: User = {
//     id: 1,
//     name: 'Vasyl',
// };
//
// type Coordinate = [number, number]
// type User = {
//     id: number;
//     name: string;
//     coordinate: Coordinate;
// }
// const user: User = {
//     id: 1,
//     name: 'Vasyl',
//     coordinate: [10, 20],
// };
//
// enum AnimalsIds {
//     cat = 'cat',
//     dog = 'dog',
//     fish = 'fish',
// }
// type Animal = {
//     [AnimalsIds.cat]: {
//         meow: () => string
//     },
//     [AnimalsIds.dog]: {
//         bark: () => string
//     },
//     [AnimalsIds.fish]: {
//         swim: () => undefined
//     }
// }
// let cat: Animal[AnimalsIds.cat] = {
//     meow: () => 'Meow! I am a cat',
// };
// let dog: Animal[AnimalsIds.dog] = {
//     bark: () => 'Woof! I am a dog',
// };
// let fish: Animal[AnimalsIds.fish] = {
//     swim: () => undefined,
// };
//
// Опціональні параметри та властивості todo
// function fn1(name?: string): void {
//     if (name) console.log(`Hello ${name}`);
//     if (!name) console.log('Hello');
// }
// fn1('Vasyl'); // "Hello Vasyl"
// fn1(); // Hello
//
// type User = {
//     name: string;
//     id: number;
//     isMarried?: boolean;
// }
// const user: User = {
//     id: 1,
//     name: 'Vasyl',
//     isMarried: false,
// }; // ok
// const user1: User = {
//     id: 2,
//     name: 'Bob',
// }; // ok
//
// interface IUser {
//     name: string;
//     id: number;
//     isOnline?: boolean;
// }
// const user: IUser = {
//     name: 'Vasyl',
//     id: 1,
// }; // ok
//
// Різниця між Type та Interface todo
// interface IUser {
//     id: number;
// }
// interface IUser {
//     name: string;
// }
// const user: IUser = {
//     id: 1,
//     name: 'Vasyl',
// }; // ok
//
// interface IUserID {
//     id: number;
// }
// interface IUserName extends IUserID {
//     name: string;
// }
// const user: IUserName = {
//     id: 1,
//     name: 'Vasyl',
// }; // ok
// or type
// type UserId = {
//     id: number;
// }
// type UserName = {
//     name: string;
// }
// type User = UserId & UserName
// const user: User = {
//     id: 1,
//     name: 'Vasyl',
// };
//
// type UserID = {
//     id: number;
// }
// interface UserName {
//     name: string;
// }
// type User = UserID & UserName
// const user: User = {
//     id: 1,
//     name: 'Vasyl',
// };
//
// interface for class todo
// interface Animal {
//     name: string;
// }
// interface Dog extends Animal {
//     bark: string;
// }
// class MyDog implements Dog {
//     name: 'Fido';
//     bark: 'Woof!';
// }
// class OtherDog implements Dog {
//     bark: 'Woof!';
// } // Property 'name' is missing in type 'OtherDog' but required in type 'Dog'.
//
// interface IUserId {
//     id: number;
// }
// interface IUserName {
//     name: string;
// }
// class User implements IUserId, IUserName {
//     id: 1;
//     name: 'Vasyl';
// }
//
// interface IAddFn {
//     (a: number, b: number): number;
// }
// let add: IAddFn;
// add = (a: number, b: number) => a + b;
// console.log(add(1, 2)); // 3s
//
// Advanced Types todo
// typeof
// in
// instanceof
// User-Defined Type Guards
// typeof
// type ComplexType = number | string
// function combine(a: ComplexType, b: ComplexType): ComplexType {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + ' ' + b.toString();
//     }
//     return a + b;
// }
// console.log(combine(1, 2)); // 3
// console.log(combine('Hello', 'World')); // Hello World
// in
// import {Data} from 'ws';
// type Admin = {
//     name: string;
//     privileges: [];
// }
// type Employee = {
//     name: string;
//     startData: Data;
// }
// type AdminOrEmployee = Admin | Employee
// function printDetails(obj: AdminOrEmployee) {
//     console.log(`Name: ${obj.name}`);
//     if ('privileges' in obj) {
//         console.log(`Privileges: ${obj.privileges.join(' ')}`);
//     }
//     if ('startData' in obj) {
//         console.log(`Start data: ${obj.startData}`);
//     }
// }
//
// instanceof
// class Car {
//     drive() {
//         console.log('Driving a car...');
//     }
// }
// class Truck {
//     drive() {
//         console.log('Driving a truck');
//     }
//     loadCargo(amount: number) {
//         console.log(`Loading cargo: ${amount}`);
//     }
// }
// // Define your type
// type Vehicle = Car | Truck;
// // Create your instances
// const carInstance = new Car();
// const truckInstance = new Truck();
// // Function to use vehicle
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(carInstance);
// useVehicle(truckInstance);
//
// User-Defined
// type Dog = {
//     bark: () => void
// }
// type Cat = {
//     meow: () => void
// }
// function isDog(animal: Dog | Cat): animal is Dog {
//     return 'bark' in animal;
// }
// function letAnimalTalk(animal: Cat | Dog) {
//     if (isDog(animal)) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }
//
// Type Casting
// let someValue: unknown = 'Hello';
// let strLength: number = (<string>someValue).length; // ok
// console.log(strLength); // 5
// // or
// strLength = (someValue as string).length; // ok
// console.log(strLength); // 5
// // strLength = someValue // error
// // strLength = someValue.length; // error
//
// Index Properties
// type IndexType = {
//     [prop: string]: string
// }
//
// type User = {
//     name: string;
//     [x: string]: string;
// }
// const user: User = {
//     name: 'Vasyl',
//     gender: 'Man',
//     country: 'Ukraine',
// }; // ok
//
// type User = {
//     id: string;
//     name: string;
// }
// type Users = {
//     [id: string]: string
// }
// let users: Users = {}; // ok
// let user: User = {
//     id: '1',
//     name: 'Vasyl',
// }; // ok
// users[user.id] = user.id;
// console.log(users[user.id]);
//
// Перевантаження операторів (function overloads)
// function combine(input1: number, input2: number): number;
// function combine(input1: string, input2: string): string;
// function combine(input1: string, input2: number): string;
// function combine(input1: number, input2: string): string;
// function combine(input1: any, input2: any) {
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         return input1 + input2;
//     } else if (typeof input1 === 'string' && typeof input2 === 'string') {
//         return input1 + input2;
//     } else if (typeof input1 === 'string' && typeof input2 === 'number') {
//         return input1 + input2;
//     } else if (typeof input1 === 'number' && typeof input2 === 'string') {
//         return input1 + input2;
//     }
// }
// console.log(combine(1, 2)); // Outputs: 3
// console.log(combine('Hello', 'World')); // Outputs: HelloWorld
// console.log(combine('Hello', 2)); // Outputs: Hello2
// console.log(combine(1, 'World')); // Outputs: 1World
//
// Generics todo
// let array: Array<string | number> = [];
// array = [1, 2, 3]; // ok
// array = ['hello', 'world']; // ok
// array = [1, 'a']; // ok
//
// const promise: Promise<string> = new Promise((resolve) => {
//     setInterval(() => {
//         resolve('Done!');
//     }, 1000);
// });
// promise.then((data) => {
//     console.log(data);
// });
//
// Generic function/method
// function fn<T>(a: T): T {
//     return a;
// }
// console.log(fn(1)); // ok
// console.log(fn('Hello')); // ok
// // console.log(fn<string>(1)); // error
// console.log(fn<number>(1)); // ok
//
// function firstEl<T>(arr: T[]): T {
//     return arr[0];
// }
// const numbers: number[] = [1, 2, 3];
// const strings: string[] = ['a', 'b', 'c'];
// const firstNum: number = firstEl(numbers);
// console.log(firstNum); // 1
// const firstStr: string = firstEl(strings);
// console.log(firstStr); // a
//
// Extends
// type Person = {
//     name: string;
// };
// type AdditionFields = {
//     age: number;
// };
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
// const merged = merge<Person, AdditionFields>({name: 'Alisa'}, {age: 28});
//
// keyof
// type User = {
//     name: string;
//     id: number;
// }
// type UserKey = keyof User
// function getUserInfo(user: User, key: UserKey) {
//     return user[key];
// }
// const user: User = {
//     id: 1,
//     name: 'Vasyl',
// };
// console.log(getUserInfo(user, 'id')); // 1
// console.log(getUserInfo(user, 'name')); // Vasyl
//
// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//     return obj[key];
// }
// extractValue({name: 'John'}, 'name');
//
// Generic Classes
// class DataStorage<T> {
//     private data: T[] = [];
//     addItem(item: T) {
//         this.data.push(item);
//     }
//     getItems() {
//         return [...this.data];
//     }
// }
// const textStorage = new DataStorage<string>();
// textStorage.addItem('Hello');
// textStorage.addItem('world');
// console.log(textStorage.getItems()); // ['Hello', 'world']
// const numbersStorage = new DataStorage<number>();
// numbersStorage.addItem(1);
// numbersStorage.addItem(2);
// numbersStorage.addItem(3);
// console.log(numbersStorage.getItems()); // [1,2,3]
//
// class KeyValuePair<TKey, TValue> {
//     constructor(private key: TKey, private value: TValue) {
//     }
//     getKey() {
//         return this.key;
//     }
//     getValue() {
//         return this.value;
//     }
// }
// const pair1 = new KeyValuePair('name', 'Vasyl');
// console.log(pair1.getKey()); // 'name
// console.log(pair1.getValue()); // Vasyl
// const pair2 = new KeyValuePair('id', 1);
// console.log(pair2.getValue());
//
// Utility Types todo
// Partial<T>
// type User = {
//     id: string;
//     name: string;
// }
// function createUser(data: Partial<User>) {
//     const defaultUser: User = {
//         id: 'generate id',
//         name: '',
//     };
//     return {...defaultUser, ...data};
// }
// console.log(createUser({name: 'Vasyl'})); // {id: 'generate id', name: 'Vasyl'}
//
// type  User = {
//     id: number;
//     name: string;
//     isMarried: boolean;
// }
// const user: Partial<User> = {
//     id: 1,
//     name: 'Vasyl',
// }; // ok
// const user1: Partial<User> = {
//     id: 2,
//     name: 'Bob',
//     isMarried: false,
// }; // ok
// console.log(user); // {id: 1, name: 'Vasyl'}
// console.log(user1); // {id: 2, name: 'Bob', isMarried: false}
//
// type User = {
//     id: 1;
//     name: string;
// }
// const user: Readonly<User> = {
//     id: 1,
//     name: 'Vasyl',
// };
// user.name = 'Bob'; // Cannot assign to 'name' because it is a read-only property.
//
// Pick<T, K>
// type User = {
//     name: string;
//     id: number;
//     surname: string;
// }
// const user: Pick<User, 'id' | 'name'> = {
//     id: 1,
//     name: 'Vasyl',
//     // surname: 'AAA', // error
// };
//
// Record<K, T>
// type Key = 'id' | 'name'
// type User = Record<Key, string>
// const user: User = {
//     id: '1',
//     name: 'Vasyl',
// }; // ok
//
// Omit<T, K>
// type User = {
//     id: number;
//     name: string;
// }
// const user: Omit<User, 'id'> = {
//     name: 'Vasyl',
// }; // ok
//
// function greeting() {
//     return 'Hello, world!';
// }
// type Greeting = ReturnType<typeof greeting>; // 'string'
// function multiply(a: number, b: number) {
//     return a * b;
// }
// type MultiplyResult = ReturnType<typeof multiply>; // 'number'
//# sourceMappingURL=index.js.map