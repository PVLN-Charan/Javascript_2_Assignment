//Description

        // You are given five numbers, stored in the variables with the following names one, two, three, four, five
        // You have to declare another variablesum1, such thatsum1 = one + two + three
        // Also, you have to declare another variable sum2, such that sum2 = four + five
        // Finally, you have to print the output of the following operation
        //  sum1 > sum2 (This operation prints true, if sum1 is greater than sum2, else it prints false)

//Hint
        // In the sample test case, the values stored in the variables isone = 1, two = 2, three = 3, four = 4, five = 5
        
        // Therefore, the value ofsum1becomessum1 = one + two + three = 1 + 2 + 3 = 6
        
        // Similarly, the value ofsum2becomessum2 = four + five = 4 + 5 = 9
        
        // Now, the result of the operationsum1 > sum2will be false, assum1 = 4is not greater thansum2 = 5. Hence, the output false

//output : false

function sumAndCompare(one, two, three, four, five) {
    // Write code here
    var sum1 = one+two+three;
    var sum2 = four+five;
    if(sum1>sum2){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
var one = 1;
var two = 2;
var three = 3;
var four =4;
var five = 5;
sumAndCompare(one,two,three,four,five)