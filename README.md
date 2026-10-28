# JavaScript Quiz

A quiz game about JavaScript fundamentals in plain HTML, CSS and JavaScript. No framework, no build step.

## How it plays

- 10 questions drawn at random from a bank of 20, with shuffled answers
- 20 seconds per question, with a visual countdown
- Immediate feedback and a one-line explanation after each answer
- Final score, verdict and a full review of your answers
- Personal best saved in `localStorage`
- Keyboard: `1`–`4` to answer, `Enter` for the next question

## Run

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Add questions

Edit `questions.js`. Each entry has the question text, four choices, the index of the right choice and a short explanation:

```js
{ q: 'What does `Array.isArray([])` return?', choices: ['true', 'false', '"array"', 'undefined'], answer: 0, why: 'It is the reliable way to detect arrays.' }
```

## Files

```
index.html    three screens: start, quiz, results
style.css     styles
questions.js  question bank
app.js        game logic, timer, scoring, persistence
```

## License

MIT
