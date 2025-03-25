function giaiPhuongTrinhBac2(){
    let a=parseFloat(prompt(` Nhập số a `))
    let b=parseFloat(prompt(` Nhập số b `))
    let c=parseFloat(prompt(` Nhập số c `))
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        console.log(`Vui lòng nhập 3 số hợp lệ`)
        return;
    }
    if(a===0){
        if(b===0){
           console.log(c===0 ? ` Phương trình vô số nghiệm`:` Phương trình vô nghiệm`)
        }else{
            let x=-c/b
            console.log(`pt có 1 nghiệm x là ${x}`)
        }
        return;
        
    }else{
        let delta=b*b-4*a*c
        if(delta>0){
            let x1=(-b+Math.sqrt(delta))/(2*a)
            let x2=(-b-Math.sqrt(delta))/(2*a)
            console.log(` Pt có 2 nghiệm phân biệt x1 và x2 lần lượt là ${x1},${x2}`)
        }else if(delta===0){
            let x=-b/(2*a)
            console.log(`pt có nghiệm kép x là ${x}`)
        }else{
            console.log(`pt vô nghiệm`)
        }
    }

}
giaiPhuongTrinhBac2();