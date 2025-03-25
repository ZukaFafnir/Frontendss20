function tinhLaiNh(){
    let tiengui = parseFloat(prompt("Mời nhập số tiền gửi"));
    let Month = parseInt(prompt("Mời nhập số tháng gửi"));
    if (isNaN(tiengui) || isNaN(Month) || tiengui < 0 || Month < 0){
        console.log(` invalid value`)
        return;
    }
    let tienlai=tiengui*(1/100*Month)
    let tienNhan=tienlai+tiengui;
    console.log(` Tiền lãi là ${tienlai}vnd,tổng tiền gửi và tiền lãi là ${tienNhan}vnd`)
}
tinhLaiNh();