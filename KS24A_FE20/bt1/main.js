function sumToN(){
    let a= prompt("Nhập 1 số nguyên dương:");
    let N=parseInt(a);
    if(isNaN(N) || N<=0){
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let sum=0;
    for(let i=1;i<=N;i++){
        sum+=i;
    }
    console.log(` Tổng các số từ 1 đến ${N} là: ${sum}`);
}
sumToN();