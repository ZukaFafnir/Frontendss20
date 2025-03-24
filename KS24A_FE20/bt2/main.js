function findMultiplesOf5(){
    let a=prompt(` Nhập một số nguyên dương:`);
    let N=parseInt(a);
    if(isNaN(N)|| N<=0){
        console(` Dữ liệu không hợp lệ!!!`);
        return;
    }
    let output=(` Các số chia hết cho 5 từ 1 đến ${N} là: `);
    let frist=true;
    for(let i=5;i<=N;i+=5){
        if(frist){
            output+=`${i}`;
            frist=false;
        }else{
            output+=`, ${i}`;
        }
    }
    console.log(`${output}`);
}
findMultiplesOf5();