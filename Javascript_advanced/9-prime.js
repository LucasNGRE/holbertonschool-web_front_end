function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }
    return count;
}

// Mesure du temps d'exécution
const start = performance.now();
const numberOfPrimes = countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);