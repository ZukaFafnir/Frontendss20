function checkIntegerString(numberString){
    if (!numberString) {
        console.log("Chuỗi không hợp lệ");
        return;
    }
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] < '0' || numberString[i] > '9') {
            console.log("Không phải chuỗi số nguyên");
            return;
        }
    }
    let reversedNumberString="";
    for(let i=numberString.length-1;i>=0;i--){
        reversedNumberString+=numberString[i];
    }
    if(numberString===reversedNumberString){
        console.log(` Là số đối xứng`);
    }else{
        console.log(` Không phải số đối xứng`);
    }



}
let numberString=prompt("Nhập một chuỗi số nguyên");
checkIntegerString(numberString);