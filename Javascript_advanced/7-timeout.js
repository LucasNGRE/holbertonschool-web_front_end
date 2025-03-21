console.log('Start of the Execution queue');

setTimeout(() => {
    console.log('Final code block to be executed');
}, 0);

for (let i = 1; i <= 100; i++) {
    console.log(`Iteration number: ${i}`);
}

console.log('End of the loop printing');
