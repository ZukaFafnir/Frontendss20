function inUocso(){
    let a=parseInt(prompt(`Nhap so can kiem tra`))
    if(isNaN(a)){
        console.log(`invalid value`)
        return;
    }
    for(let i=1;i<=Math.abs(a);i++){
        if(a%i==0){
            console.log(`${i}`)
        }
    }
}
inUocso()