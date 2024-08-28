const readline = require('readline');

function fibonacci_sequence() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("How many times do you want to repeat the loop: ", (number) => {
        let a = 1;
        let b = 1;
        let i = 1;

        console.log("Fibonacci Sequence:");
        while (i <= number) {
            console.log(a);
            let temp = a;
            a = b;
            b = temp + b;
            i += 1;
        }

        rl.close(); 
    });
}

fibonacci_sequence();
