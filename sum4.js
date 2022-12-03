// Description

            // You are given seven numbers, stored in the variable with the following names
            // a,b,c,d,e,f,g
            // You have to declare two variables,sum1 and sum2, such that sum1 = (a + b) * c and sum2 = (d + e + f + g)
            // Print the output of the following operation
            // sum1 > sum2

//Hint

            // In the sample test case, the value stored in the variables is as follows
            // a = 1,b = 2,c = 3,d = 4,e = 5,f = 6,g = 7 
            // The value of sum1, as explained in the problem statement will be,sum1 = (a + b) * c = (1 + 2) * 3 = (3) * 3 = 9
            // Similarly, the value of sum2, as explained in the problem statement will besum2 = (d + e + f + g) = (4 + 5 + 6 + 7) = 22
            // The operation sum1 > sum2 will print false, as the value of sum2 is greater than sum1, hence the output false
//output : false

function compareSevenNumbers(a,b,c,d,e,f,g) {
    // Write code here
    var sum1 = (a+b)*c;
    var sum2 = (d+e+f+g);
    if(sum1 > sum2){
        console.log(true);
    }
    else{
        console.log(false);
    }
   

}

var a =1;
var b =2;
var c= 3;
var d=4;
var e=5;
var f=6;
var g=7;
compareSevenNumbers(a,b,c,d,e,f,g)