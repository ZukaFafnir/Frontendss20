function isNPrimeNum(){
    let n=parseInt(prompt(` Mời bạn nhập số`))
    if(isNaN(n) || n<2){
        console.log(` invalid value`)
        return;
    }
    let inKetQua=(` Các số nguyên tố từ 2 đến ${n} là 2`)
    for(let i=3;i<=n;i++){
        let isPrime=true
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=false
                break
            } 
            }
            if(isPrime){
                inKetQua+=`,${i}`
            }

    }
    console.log(inKetQua)
    }
