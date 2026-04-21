export {}; // make this file a module so its identifiers don't leak globally

// ============================================================
// Stage 1 — Exercise 2: Union & Literal Types + Narrowing
// ============================================================
//
// GOAL: Use union types, literal-string unions, and learn how
//       TypeScript narrows a union inside an `if`/`switch`.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - The file must compile with `tsc --noEmit` and pass the
//     assertions at the bottom (every `@ts-expect-error` should
//     end up unused).
// ============================================================


// --- Task 2.1 ---------------------------------------------------
// Declare a variable `id` whose type is "either a number OR a string".
// Assign a string to it initially.

let id: string | number = "This is a string";

// --- Task 2.2 ---------------------------------------------------
// Define a type alias `Status` that allows EXACTLY one of these
// three string values: "idle", "loading", "success".
// Then declare a variable `currentStatus: Status` and set it to "idle".
//
// Hint: literal-string union — `type Foo = "a" | "b";`

type Status = "idle" | "loading" | "success";
let currentStatus: Status = "idle";


// --- Task 2.3 ---------------------------------------------------
// Write a function `formatId(id: number | string): string` that:
//   - if id is a number, returns `"#" + id.toFixed(0)`
//   - if id is a string, returns `id.trim().toUpperCase()`
//
// IMPORTANT: inside the function body you MUST narrow the union with
// `typeof`. Do NOT use `as`. TypeScript must KNOW which branch you're
// in — you should be able to call `.toFixed(0)` and `.trim()` without
// any type errors.

function formatId(id: number | string) {
  if (typeof id === "number") {
    return "#" + id.toFixed(0);
  } else {
    return id.trim().toUpperCase();
  }
};


// --- Task 2.4 ---------------------------------------------------
// Define a type alias `Direction` = "up" | "down" | "left" | "right".
// Then write a function `move(dir: Direction): { x: number; y: number }`
// that returns:
//   "up"    -> { x: 0,  y: 1  }
//   "down"  -> { x: 0,  y: -1 }
//   "left"  -> { x: -1, y: 0  }
//   "right" -> { x: 1,  y: 0  }
//
// Use a `switch` statement. If you handle all four cases, TS will
// be satisfied that the function always returns a value.

type Direction = "up" | "down" | "left" | "right";
function move(dir: Direction): { x: number, y: number } {
  switch (dir) {
    case "up": return { x: 0, y: 1 }
    case "down" : return { x: 0, y: -1 }
    case "left" : return { x: -1, y: 0 }
    case "right" : return { x: 1, y: 0 }
  }
}


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// Assignability checks for `id` — `typeof id` can't be used here because
// CFA narrows it to `string` after the literal assignment on line 22.
id = 42;              // must accept a number
id = "another string"; // must accept a string
// @ts-expect-error — must reject anything else
id = true;

// @ts-expect-error
type _t2 = Expect<Equal<Status, 'idle' | 'loading' | 'success'>>;
// Assignability check: currentStatus must accept every Status value.
// (We can't use `Equal<typeof currentStatus, Status>` here because TS's
// Control Flow Analysis narrows `typeof currentStatus` to the literal
// "idle" after `let currentStatus: Status = "idle"`.)
const _t3a: Status = currentStatus; // currentStatus must be a Status
// @ts-expect-error — Status must reject values outside the union
const _t3b: Status = "not-a-status";

// @ts-expect-error
type _t4 = Expect<Equal<Parameters<typeof formatId>, [id: number | string]>>;
// @ts-expect-error
type _t5 = Expect<Equal<ReturnType<typeof formatId>, string>>;

// @ts-expect-error
type _t6 = Expect<Equal<Direction, 'up' | 'down' | 'left' | 'right'>>;
// @ts-expect-error
type _t7 = Expect<Equal<Parameters<typeof move>, [dir: Direction]>>;
// @ts-expect-error
type _t8 = Expect<Equal<ReturnType<typeof move>, { x: number; y: number }>>;
