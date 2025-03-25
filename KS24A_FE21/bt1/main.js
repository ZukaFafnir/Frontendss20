let a;
let totalOdd=0;
for(let i=0;i<=4;i++){
    a=parseInt(prompt(` Nhập 1 số nguyên`))
    if(!isNaN(a) && a%2!=0 ){
        totalOdd+=a;
    }
}
console.log(` Tổng của các số lẽ là ${totalOdd}`)