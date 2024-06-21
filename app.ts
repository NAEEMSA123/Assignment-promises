
// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.


async function fetchGreeting ():Promise <string> {
    return  new Promise((resolive) => {
        setTimeout(() =>{
           resolive("How are you Sir Hamza");
        },2000);
    })
    
}

fetchGreeting().then((message)=>{
    console.log(message)
})