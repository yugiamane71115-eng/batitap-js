const year = 2027;
if ((year %4 == 0 && year %100 !=0) || year %400 == 0){
    console.log("nam nhuan");
}else{
    console.log("Khong phai nam nhuan");
}