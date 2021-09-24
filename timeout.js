function doSomething() {
    console.log(3333);
}
console.log(2222);
setTimeout(() =>console.log('Lazy and waiting'),2000);
console.log(4444);

setInterval(() => {
    console.log('Repeat');
}, 3000);