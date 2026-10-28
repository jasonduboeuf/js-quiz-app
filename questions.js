// Question bank: `answer` is the index of the correct choice.
// eslint-disable-next-line no-unused-vars
const QUESTIONS = [
  { q: 'What does `typeof null` return?', choices: ['"null"', '"object"', '"undefined"', '"number"'], answer: 1, why: 'A historical quirk of the language: null is reported as "object".' },
  { q: 'Which method adds one or more elements to the end of an array?', choices: ['shift()', 'unshift()', 'push()', 'concat()'], answer: 2, why: 'push() appends in place and returns the new length.' },
  { q: 'What is the result of `0.1 + 0.2 === 0.3`?', choices: ['true', 'false', 'undefined', 'It throws'], answer: 1, why: 'Floating-point arithmetic: 0.1 + 0.2 is 0.30000000000000004.' },
  { q: 'Which keyword declares a block-scoped variable that cannot be reassigned?', choices: ['var', 'let', 'const', 'static'], answer: 2, why: 'const bindings cannot be reassigned (the value itself may still be mutable).' },
  { q: 'What does `[1, 2, 3].map(x => x * 2)` return?', choices: ['[2, 4, 6]', '[1, 2, 3, 2, 4, 6]', '6', 'undefined'], answer: 0, why: 'map returns a new array with the callback applied to each element.' },
  { q: 'How do you write a strict equality comparison?', choices: ['=', '==', '===', '=>'], answer: 2, why: '=== compares value and type without coercion.' },
  { q: 'What does `JSON.parse("[1,2]")` produce?', choices: ['A string', 'An array', 'An object with keys 0 and 1', 'A syntax error'], answer: 1, why: 'The JSON text is parsed into a real array.' },
  { q: 'Which of these is NOT a primitive type?', choices: ['symbol', 'bigint', 'boolean', 'array'], answer: 3, why: 'Arrays are objects. Primitives: string, number, bigint, boolean, undefined, symbol, null.' },
  { q: 'What does `Promise.all` do when one promise rejects?', choices: ['Waits for the others then resolves', 'Rejects immediately', 'Resolves with null', 'Retries the failed promise'], answer: 1, why: 'Promise.all is fail-fast; use Promise.allSettled to wait for every outcome.' },
  { q: 'What is the output of `console.log(1 + "2")`?', choices: ['3', '"12"', 'NaN', 'TypeError'], answer: 1, why: 'The + operator concatenates when one operand is a string.' },
  { q: 'Which array method removes the last element?', choices: ['pop()', 'shift()', 'slice()', 'splice()'], answer: 0, why: 'pop() removes and returns the last element.' },
  { q: 'What does `"abc".at(-1)` return?', choices: ['"a"', '"c"', 'undefined', '-1'], answer: 1, why: 'at() accepts negative indexes counting from the end.' },
  { q: 'What does the `??` operator do?', choices: ['Logical OR', 'Returns the right side when the left is null or undefined', 'Optional chaining', 'Bitwise XOR'], answer: 1, why: 'Nullish coalescing only falls back for null and undefined, unlike ||.' },
  { q: 'Which statement about arrow functions is true?', choices: ['They have their own `this`', 'They can be used as constructors', 'They inherit `this` from the enclosing scope', 'They always return undefined'], answer: 2, why: 'Arrow functions capture this lexically and cannot be used with new.' },
  { q: 'What does `Array.isArray([])` return?', choices: ['true', 'false', '"array"', 'undefined'], answer: 0, why: 'It is the reliable way to detect arrays.' },
  { q: 'What will `let a = [1,2]; let b = a; b.push(3); a.length` be?', choices: ['2', '3', 'undefined', 'It throws'], answer: 1, why: 'Arrays are reference types: a and b point to the same array.' },
  { q: 'Which function schedules a callback after a delay?', choices: ['setInterval', 'setTimeout', 'requestAnimationFrame', 'queueMicrotask'], answer: 1, why: 'setTimeout runs once after the delay; setInterval repeats.' },
  { q: 'What is `NaN === NaN`?', choices: ['true', 'false', 'NaN', 'TypeError'], answer: 1, why: 'NaN is the only value not equal to itself; use Number.isNaN.' },
  { q: 'What does `Object.freeze(obj)` do?', choices: ['Deletes all properties', 'Prevents adding, removing or changing top-level properties', 'Deep-clones the object', 'Converts it to JSON'], answer: 1, why: 'It is shallow: nested objects remain mutable.' },
  { q: 'Which loop iterates over the VALUES of an iterable?', choices: ['for...in', 'for...of', 'while', 'do...while'], answer: 1, why: 'for...of yields values; for...in yields enumerable property keys.' },
];
