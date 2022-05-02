/*console.log("hello")
//Variables
var b = "Java script"
console.log(b)

var AnyNumber = 45.6
console.log(AnyNumber)

// Getting an imput from user and Using it
document.getElementById("sometext").innerHTML = "This dude cant teach for shit"

var Name = prompt("What is Your Name")
document.getElementById("sometext").innerHTML = Name

// using variables to perform arithmethic operations
var num1 = 5.7
num1++
num1 += 0.3
console.log(num1)
console.log(num1 * 10)
console.log(num1 % 6)

// function

 function greeting(name, name2) {
	var greetName = "Hello: " + name
	var greetName2 = "Hello: " + name2
	console.log(greetName)
	document.getElementById("Name").innerHTML = greetName
	document.getElementById("FriendsName").innerHTML = greetName2
}
Name = prompt("What is Your Name")
Name2 = prompt("What is Your friend's name")
greeting(Name, Name2)
*/
var j = 1
while (j <= 10) {
	console.log(j * 5)
	var test = j * 5
	document.write("<h1>While Loop<h1>" + "<h1>The Number is : " + test + "</h1>" + "<br>")
    j++
}
for (let i = 1; i < 10; i++)
{
    console.log(i * 5)
	var test = i * 5
	document.write("<h1 style =>For Loop</h1>" + "<h1>The Number is : " + test + "</h1>" + "<br>")
}
//39:16