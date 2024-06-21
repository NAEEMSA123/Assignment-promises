// Question no 3

// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

function fetchData(){
    return new Promise((resolves)=>{
        setTimeout(()=>{
            resolves("Data fetched successfully!")
        },1000);
    })
}

fetchData().then((message)=>{
     console.log(message)
})