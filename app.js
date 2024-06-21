"use strict";
// Question # 1
Object.defineProperty(exports, "__esModule", { value: true });
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
async function fetchGreeting() {
    return new Promise((resolive) => {
        setTimeout(() => {
            resolive("How are you Sir Hamza");
        }, 2000);
    });
}
fetchGreeting().then((message) => {
    console.log(message);
});
