// Description

        // You are given two numbers n and m, you need to check if cube of n is greater than square of m.

//Output : false

        

function cubeAndSquare(n,m) {
    //write code here
    console.log("n =",n,"\tm =",m);
    n=n**3;
    m=m**2;
    console.log("n =",n,"\tm =",m);
    console.log(n>m);
  
}

var n =2;
var m =3;
cubeAndSquare(n,m)
