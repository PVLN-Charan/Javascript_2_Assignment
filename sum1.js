
// Description

            // You are given two numbers, stored in variables with the names num1 and num2
            // Print the output of the following operation
            // num1 > num2, this prints true if num1 is greater than num2, else it prints false
            // After this operation is performed, another number, stored in a variable with name num3 
            //is added to num1. After this, print the result of the following operation again
            // num1 > num2, this prints true if num1 is greater than num2, else it prints false
// Hint

            // In the sample test case, the value stored innum1 = 4, while the value stored innum2 = 8. The result of the operation
            
            //  num1 > num2, such that 4 is not greater than 8, so the output is false
            // After this step, the value stored innum3 = 5, is added to num1, so the value stored in num1 becomesnum1 = num1 + num3 = 4 + 5 = 9
            
            // Therefore, the result of the operation
            
            // num1 > num2, such that 9 is greater than 8, is true, so the output is true the second time

//output : flase
//         true




function updateAndCompare(num1, num2, num3) {
    // Write code here  
    console.log(num1,num2,num3);
    if(num1>num2){
        console.log(true);
    }
    else{
        console.log(false);
    }
    num1+=num3;
    if(num1>num2){
        console.log(true);
    }
    else{
        console.log(false);
    }

    
}

var num1=4;
var num2=8;
var num3=5;

updateAndCompare(num1, num2, num3);
            