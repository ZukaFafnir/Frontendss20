let matkhau=`minhtri`;
while(true){
    let input=prompt(` Mời bạn nhập mật khẩu: `);
    if(input===matkhau){
        console.log(` Nhập mật khẩu chính xác^^`);
        break;
    }else{
        console.log(`Sai mk vui lòng nhập lại: `);
    }
}