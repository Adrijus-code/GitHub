//synchronous code example immediately inserted into the event loop
//from eventloop they moved to the call stack and executed one by one

//macrotask queue
setTimeout(() => {
  console.log("Inside setTimeout 1"); //5->3
}, 0);

new Promise((resolve) => {
  resolve([1, 2, 3]);
}).then((res) => {
  console.log("Inside promise then", res); //
});

function a() {
  console.log("Inside a"); //2
  setTimeout(() => {
    console.log("Inside setTimeout 2"); //4
  }, 1000);
}

function b() {
  console.log("Inside b"); //1
  setTimeout(() => {
    console.log("Inside setTimeout 3"); //3->5
  }, 1000);
}
b();
a();
