let num = 153;  

// Sum of Digits
let temp = num;
let sum = 0;

while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
}

// Armstrong Check
temp = num;
let digits = num.toString().length;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}

let isArmstrong = (armstrongSum === num);

// Prime Check
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Factors
let factors = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors.push(i);
    }
}

//Output
console.log(`Number: ${num}`);
console.log(`Sum of digits: ${sum}`);
console.log(`Armstrong: ${isArmstrong ? "Yes" : "No"}`);
console.log(`Prime: ${isPrime ? "Yes" : "No"}`);
console.log(`Factors: ${factors.join(", ")}`);