// Description

            // You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.
            // You need print if area of rectangle 1 is greater than rectangle 2.
            // You need print if perimeter of rectangle 1 is greater than rectangle 2.

//output :   false
        //   false


function areaAndPerimeter(L1,B1,L2,B2) {
    //write code here
    var ra1 = L1*B1;
    var ra2 = L2*B2;
    var rp1 = 2*(L1+B1);
    var rp2 = 2*(L2+B2);
    //Area of a rectangle
    console.log("Area of rectangle = ",ra1>ra2);
    console.log("Perimeter of rectangle = ",rp1>rp2)
   
}

var L1 = 1;
var B1 = 2;
var L2 = 2;
var B2 = 3;

areaAndPerimeter(L1, B1, L2, B2)