function isPrime(n) {
    n = Number(n);
    if (isNaN(n) || !Number.isInteger(n) || n < 2) {
        console.log("Không phải là số nguyên tố");
        return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`${n} Không phải là số nguyên tố`);
            return;
        }
    }
    console.log(`${n} Là số nguyên tố`);
}
let num = prompt("Nhập số cần kiểm tra");
isPrime(num);
