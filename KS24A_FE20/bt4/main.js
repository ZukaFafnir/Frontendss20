function search(str){
    if(!str){
        console.log(` Chưa có thông tin chuỗi`);
        return;
    }
    let a=prompt(` Nhập kí tự cần kiểm tra trong chuỗi`);
    if(!a){
        console.log(` Bạn chưa nhập từ cần tìm`);
        return;
    }
    if(str.includes(a)){
        console.log(` Có tồn tại từ cần tìm`);
    }else{
        console.log(` Không tồn tại từ cần tìm`);
    }
}
let str=prompt(` Nhập 1 chuỗi bất kì`);
search(str);