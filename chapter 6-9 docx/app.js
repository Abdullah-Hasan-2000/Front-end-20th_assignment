// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.

// document.write('<p>---------------------------------------------------Q1------------------------------------------------</p>');

var x;
x += 1;
++x;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?

document.write('<p>---------------------------------------------------Q2------------------------------------------------</p>');

var x = 100;
document.write(--x);

// 3. var x = 50; var y = x++;
// What is the value of y?

document.write('<p>---------------------------------------------------Q3------------------------------------------------</p>');

var x = 50;
var y = x++;

document.write("The value of y is: ",y); // y will be 50

// 4. var y = 50; var z = --y;
// What is the value of z?

document.write('<p>---------------------------------------------------Q4------------------------------------------------</p>');

var y = 50;
var z = --y;

document.write("The value of y is: ",z); // z will be 49

// 5. In a single statement, decrement num and assign its original value
// to newNum.

document.write('<p>---------------------------------------------------Q5------------------------------------------------</p>');

var num = 50;
var newNum = --num;

document.write("The value of newNum is: ",newNum); //it wiil be 49

