// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// add(1, 1);

// let total: number = 100;
// let firstName: string = "Alex";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// let age = 10;

// age = "12";

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 3];
// numbers.push("12");

const user: { name: string; age: number } = {
  name: "Alex",
  age: 36,
};

// user.age = '37';
// user.name = 1;

type User = {
  name: string;
  age: number; // | string;
};

const user1: User = {
  name: "Alex",
  age: 36,
};

// user1.age = '37';
// user1.name = 1;

// type EventType = 'lesson' | 'deadline';
// const newEvent: EventType = 'deadline'

type Size = "small" | "medium" | "large";
