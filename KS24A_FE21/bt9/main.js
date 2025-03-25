function isPrimeNum(){
    let n=parseInt(prompt(` Mời bạn nhập số`))
    if(isNaN(n) || n<2){
        console.log(` invalid value`)
        return;
    }
    if (n===2) {
        console.log("Là số nguyên tố");
        return;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            console.log(` Không phải số nguyên tố`)
            return;
        }
    }
    console.log(` Là số nguyên tố`)
}