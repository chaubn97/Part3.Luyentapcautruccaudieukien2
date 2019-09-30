    var a = parseFloat(prompt("Nhap a"));
    var b = parseFloat(prompt("nhap b"));
    var c = parseFloat(prompt("nhap c"));

    switch (a) {
        case 0 :
            console.log("Phuong trinh co 1 nghiem la x ="+ (-c)/b) ;
        default :
            var delta = Math.pow(b,2)- 4*a*c

            if(delta<0){
                console.log("phuong trinh vo nghiem");
            }else if(delta ==0){
                console.log("Phuong trinh co 1 nghiem la x ="+(-c )/(b));
            }else{
                console.log("Phuong trinh co 2 nghiem , x1 ="+(-b+Math.sqrt(delta))/(2*a) + "va x2 = "+(-b-Math.sqrt(delta))/2*a)
            }
       }
