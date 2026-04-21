export {}; // make this file a module so its identifiers don't leak globally

// ============================================================
// Stage 1 — Exercise 1: Basic Types
// ============================================================
//
// GOAL: Practice annotating primitives, arrays, and simple objects.
//
// Rules:
//   - Do NOT use `any`.
//   - Replace each `TODO` with a proper type annotation OR value.
//   - The file must compile with `tsc --noEmit` and pass the
//     assertions at the bottom.
//
// When you're done, tell me and I'll review + run the compiler.
// ============================================================


// --- Task 1.1 ---------------------------------------------------
// Declare a variable `username` that holds your name as a string.
// Add an explicit type annotation.

const username: string = 'Michael';


// --- Task 1.2 ---------------------------------------------------
// Declare a constant `birthYear` that is a number.
// Then declare `ageIn2026` as a number computed from birthYear.

const birthYear: number = 1989;
const ageIn2026 = new Date().getFullYear() - birthYear;


// --- Task 1.3 ---------------------------------------------------
// Declare an array `hobbies` of strings with at least 3 entries.
// Use the array-of-string type (your choice of syntax).

const hobbies = [ 'Football', 'Games', 'TV' ];


// --- Task 1.4 ---------------------------------------------------
// Declare an object `user` with EXACTLY these fields and types:
//   - id:        number
//   - name:      string
//   - isActive:  boolean
// Annotate the variable with an inline object type.

let user: { id: number, name: string, isActive: boolean } = {
  id: 1,
  name: 'Michael',
  isActive: true
};


// --- Task 1.5 ---------------------------------------------------
// Write a function `greet` that takes a string `name` and returns
// a string like "Hello, Alice!". Annotate BOTH the parameter and
// the return type.

function greet(name: string): string {
  return 'Hello, ' + name;
}


// ============================================================
// Assertions — do not modify below this line.
// These use TypeScript's type system to check your work.
// If the file compiles, you passed.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// @ts-expect-error — will stop erroring once `username` exists with type string
type _t1 = Expect<Equal<typeof username, string>>;
// @ts-expect-error
type _t2 = Expect<Equal<typeof birthYear, number>>;
// @ts-expect-error
type _t3 = Expect<Equal<typeof ageIn2026, number>>;
// @ts-expect-error
type _t4 = Expect<Equal<typeof hobbies, string[]>>;
// @ts-expect-error
type _t5 = Expect<Equal<typeof user, { id: number; name: string; isActive: boolean }>>;
// @ts-expect-error
type _t6 = Expect<Equal<ReturnType<typeof greet>, string>>;
// @ts-expect-error
type _t7 = Expect<Equal<Parameters<typeof greet>, [name: string]>>;
