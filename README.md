<div align="center">

# 🎓 TypeScript Training

**Hands-on TypeScript exercises that check themselves at compile time** —
designed to be worked through with [Claude Code](https://claude.com/claude-code) acting as your personal tutor and reviewer.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Exercises](https://img.shields.io/badge/Exercises-12-blueviolet)](#-curriculum)
[![Tutor](https://img.shields.io/badge/Tutor-Claude%20Code-D97757?logo=claude&logoColor=white)](https://claude.com/claude-code)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

*No test runner, no build step: every exercise ends in type-level assertions.*
*When `tsc` reports **zero errors**, you've solved it.* ✅

</div>

---

## ⚙️ How it works

1. 📝 Each file in `exercises/` is a self-contained lesson with tasks marked `// TODO: your code here`.
2. 🔴 A fresh exercise **fails to compile** — the errors literally list what you still need to build (`Cannot find name 'username'` means: task not done yet).
3. 🟢 You write code, re-run the check, and watch the error count shrink to zero.
4. 🤖 Claude reviews your work: not just "does it compile", but whether it's idiomatic and whether you followed the exercise rules.

```bash
# check a single exercise (do this constantly while working)
npm run check -- exercises/stage1/01_basics.ts

# check everything (only clean once ALL exercises are solved)
npm run check:all
```

> [!NOTE]
> While an exercise is incomplete you may occasionally see
> `Unused '@ts-expect-error' directive` among the errors. That's normal —
> it resolves itself once the exercise is fully solved.

## 🚀 Setup

Requires [Node.js](https://nodejs.org) 18+.

```bash
git clone <this-repo>
cd typescript-training
npm install
```

## 🤖 Training with Claude Code

This repo ships with a [`CLAUDE.md`](./CLAUDE.md) that turns Claude Code into a TypeScript tutor. Start a session in the repo root:

```bash
claude
```

Then drive the training conversationally:

| 💬 You say | 🤖 Claude does |
|---|---|
| *"Where should I start?" / "What's next?"* | Checks your progress across all exercises and points you at the right one |
| *"Explain task 4.4, I don't get it"* | Teaches the concept with **fresh** examples — without handing you the answer |
| *"I'm stuck on task 7.3"* | Gives escalating hints, smallest first |
| *"Review exercise 3"* | Runs the compiler, reads your code, checks the exercise rules, gives feedback |
| *"Show me the solution for task 5.2"* | Only then reveals the reference solution |

Claude is instructed to **never solve exercises for you** unless you explicitly ask.

You can of course also do the training without Claude — solve the TODOs, run the check, and compare against `solutions/` yourself.

## 📚 Curriculum

The three stages mirror how TypeScript proficiency develops: first you **annotate** values, then you **design** types, then you **compute with** types. Each stage builds on the previous one.

### 🌱 Stage 1 — Foundations: describing values you already have

Telling the compiler what you already know from JavaScript — and learning to read what it says back. Ends with a preview of the course's big idea: types can be *derived* from values (`as const`), not just written by hand.

| Exercise | Topics |
|---|---|
| [01_basics](exercises/stage1/01_basics.ts) | Primitives, arrays, object types, typed functions |
| [02_functions](exercises/stage1/02_functions.ts) | Function type expressions, optional/default/rest params, `void`, `never` |
| [03_unions_narrowing](exercises/stage1/03_unions_narrowing.ts) | Union types, literal types, narrowing with `typeof`/`switch` |
| [04_tuples_enums_const](exercises/stage1/04_tuples_enums_const.ts) | Tuples, `readonly` arrays, enums, `as const`, deriving types from values |

### 🧩 Stage 2 — Modeling data: designing types for a domain

The direction reverses: design the shapes first, let them constrain the code. Interfaces come before classes because `implements` needs contracts to exist; generics before discriminated unions because the stage's capstone — a generic `Result<T>` — combines both.

| Exercise | Topics |
|---|---|
| [05_interfaces](exercises/stage2/05_interfaces.ts) | Interfaces, optional & `readonly` members, extension, index signatures |
| [06_classes](exercises/stage2/06_classes.ts) | Access modifiers, getters, parameter properties, `implements`, abstract classes |
| [07_generics](exercises/stage2/07_generics.ts) | Type parameters, constraints, `keyof`, indexed access `T[K]` |
| [08_discriminated_unions](exercises/stage2/08_discriminated_unions.ts) | Tagged unions, exhaustive switches, `assertNever`, a generic `Result<T>` |

### 🔮 Stage 3 — Type transformation & safety: computing with types

Types become inputs and outputs themselves: first *use* the built-in utility types, then build your own with mapped and conditional types. The stage also covers the two places well-typed apps still go wrong — data crossing a boundary (10) and async code (12).

| Exercise | Topics |
|---|---|
| [09_utility_types](exercises/stage3/09_utility_types.ts) | `Partial`, `Pick`, `Omit`, `Record`, building your own `Partial` |
| [10_type_guards](exercises/stage3/10_type_guards.ts) | `unknown` vs `any`, type predicates (`x is T`), assertion functions |
| [11_mapped_conditional](exercises/stage3/11_mapped_conditional.ts) | Mapped types, modifier `+/-`, conditional types, `infer`, template literals |
| [12_async](exercises/stage3/12_async.ts) | `Promise<T>`, `async`/`await`, `Promise.all`, `Awaited`, async `Result` |

> [!TIP]
> Work through the exercises **in order** — concepts are deliberately reused: `never` (02) powers exhaustiveness checks (08), narrowing (03) becomes custom type guards (10), `keyof`/`T[K]` (07) returns in mapped types (09, 11), and `Result<T>` (08) comes back in async form (12).

## 📏 Ground rules

Unless a task says otherwise:

- 🚫 **No `any`.** Ever. The compiler is your friend; `any` fires the friend.
- 🚫 **No `as` casts** (`as const` is fine — it's not a cast) and **no `!` non-null assertions.** If you need one, the types are wrong — fix the types.
- 🔒 **Don't touch the assertions** below the `do not modify` line. They're the test suite.

## 🙈 Solutions

Reference solutions live in [`solutions/`](./solutions), mirroring the exercise structure. **Spoilers!** Try the exercise, ask Claude for hints, and only then compare.

## 🗂️ Project layout

```
exercises/    ← your workspace: 12 exercises across 3 stages
solutions/    ← reference solutions (same file names)
CLAUDE.md     ← tutor instructions for Claude Code
tsconfig.json ← strict compiler settings shared by all files
```

---

<div align="center">

Made for learning. **Fork it, train with it, share it.** 🚀

</div>
