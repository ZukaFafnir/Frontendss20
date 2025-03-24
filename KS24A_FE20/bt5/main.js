function calculateExponentiation(a,b){
    let result=1;
    if(isNaN(a)||isNaN(b)|| b<0){
        console.log(` Không hợp lệ`);
        return;
    }
    if(b==0){
        result=1;
        console.log(` ${a} lũy thừa bậc ${b} là ${result}`)
        return;
    }
    for(let i=0;i<b;i++){
        result*=a;  
    }

    console.log(` ${a} lũy thừa bậc ${b} là ${result}`);

}
let a=parseInt(prompt(` Nhập số để tính`));
let b=parseInt(prompt(` Nhập lũy thừa bậc mấy của a để tính`));
calculateExponentiation(a,b);
