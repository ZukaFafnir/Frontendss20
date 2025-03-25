let a;
let oddNumber=0;
let evenNumber=0;
for(let i=0;i<5;i++){
    a=parseInt(prompt(` Nhập 1 số nguyên`))
    if(!isNaN(a)){
        if(a%2!=0){
            oddNumber++;
        }else{
            evenNumber++;
        }
    }
}
console.log(` Có ${oddNumber} số lẻ trong chuỗi và ${evenNumber} số chẵn`)