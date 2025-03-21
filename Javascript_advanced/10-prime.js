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

// Mesure du temps d'exécution pour 100 appels de la fonction
const start = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
