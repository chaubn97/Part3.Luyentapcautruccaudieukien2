//bai 1 :
var c = parseFloat(prompt("nhap do c"));
var f = c*9/5 +32 ;

//bai 2
var ft = parseFloat(prompt("nhap feet"));
var m = ft/3.2808 ;
 // bai 3
var a = parseInt(prompt("Nhap do dai canh")) ;
var s = a*a ;
//bai4
var a = parseInt(prompt("Nhap do dai chieu dai")
var b = parseInt(prompt("Nhap do dai chieu rong")

    var s = a*b ;
// bai 5
var a = parseInt(prompt("Nhap do dai canh 1")
var b = parseInt(prompt("Nhap do dai canh 2")

var s = a*b/2 ;

// bai 8
var a = prompt("nhap 1 tuoi");

if(a >0&& a<120){
    console.log("Day co the la 1 tuoi nguoi") ;
}else {
    console.log("Day khong phai tuoi nguoi") ;
}

// Bai 10:
var eConsumtion = parseInt(prompt("Nhap so dien")) ;
var tongSoTien = 0 ;

if(eConsumtion>0 && eConsumtion<= 1000){
    tongSoTien = tongSoTien+ eConsumtion*2000 ;
}else if(eConsumtion>1000 && eConsumtion<= 2000){
    tongSoTien = tongSoTien+ eConsumtion*2500 ;
}else if(eConsumtion>2000 ){
    tongSoTien = tongSoTien+ eConsumtion*3000 ;
}else{console.log("Nhap 1 so duong")}

console.log("Tong so tien"+ tongSoTien) ;

// Bai 9 :
var flag = false ;
var a = parseInt(prompt("Nhap canh a")) ;
var b = parseInt(prompt("Nhap canh b"));
var c = parseInt(prompt("Nhap canh c"));
if(a>0&&b>0&&c>0){
    if((a+b)>c){
        if((a+c)>b){
            if((b+c)>a){
                flag= true ;
            }
        }
    }
}

if(flag){
    console.log("ABC la 1 tam giac") ;
}else{
    console.log("ABC khong phai tam giac") ;
}

// Bai 11

var income = parseFloat(prompt("Nhap mot muc luong hang nam")) ;

if(income< 72000000&&income>0){
    console.log("Ban khong phai dong thue thu nhap ca nhan");
}else if(income>=72000000&&income<90000){
    console.log("THue thu nhap ca nhan cua ban la "+income*0.15 + " VND");
}else if(income >=90000000 && income < 120000000){
    console.log("Thue thu nhap ca nhan cua ban la "+ income*0.2 +"VND") ;
}else{
    console.log("Thue thu nhap ca nhan cua ban la "+income*0.25+"VND")
}

//bai12

var a = parseFloat(prompt("Nhap so tien gui"));
var b = parseInt(prompt("Nhap so thang can gui")) ;

var c ;
if(b<=3){
    console.log("So tien ban nhan duoc la"+ a*Math.pow((1+0.08),b)) ;
}else if(b>3&&b<=12){
    console.log("So tien ban nhan duoc la"+ a*Math.pow((1+0.1),b)) ;
}else{
    console.log("So tien ban nhan duoc la"+ a*Math.pow((1+0.12),b)) ;
}


