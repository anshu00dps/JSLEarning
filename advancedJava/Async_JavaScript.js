// async means execution of processes without following the order of processes
// async needed to have pause in between processes such as network calls, write/read files, time function, user-input etc ..

console.log("Hello world")

function greet(){
    console.log("Saying hello to coders");
}

// time function
setTimeout(() => {
    greet();
}, 2000 ) //2000 means 2 seconds
