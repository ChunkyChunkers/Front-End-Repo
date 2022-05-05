let supposedTime = parseInt(prompt("what is the alleged Volume time"));        
function takeIn()
{
    let NoOfNumbers =  prompt("How many Numbers are you writing");
    
    return NoOfNumbers;

}

 function StoreNumber(num1)
 {
     var times =  [];
     var sum = 0;
    
    for (let i = 0; i < num1; i++)
    {
        times[i] = parseInt(prompt("what is the time of the episode"));
        sum += times[i]
        document.write("<p> The Number of mins are: " + times[i] + "</p>");
    }
    document.write("<p> The total sum of mins equals = :" + sum +"</p>");
    console.log(sum);

return sum;
}
function compare(sum)
{
    document.write("<p>This is the supposed Volume length " + supposedTime + " mins</p>");
    if(sum === supposedTime) {
        document.write("<p>The teacher speaks the truth the volume is " + sum + " mins</p>");
    }
    else if(sum < supposedTime)
    {
        document.write("<p>The teacher speaks lies the volume is " + sum +" mins long</p>");
        document.write("<p>The volume was supposed to be   " + supposedTime - sum +" longer</p>");

    }
    else 
    {
        document.write("<p>The teacher is excellent he has done even more than expected the  Volume is " + sum +" mins long</p>");
        document.write("<p>The volume is " + (sum - supposedTime )+" longer</p>");
    }
}
 
 var NoOfNumbers = takeIn();
 document.write("<h1> Number of Courses are: "+ NoOfNumbers + "</h1>")
 console.log(NoOfNumbers)
var sum = StoreNumber(NoOfNumbers);
compare(sum);
