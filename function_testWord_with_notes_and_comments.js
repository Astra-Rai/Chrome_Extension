/*
If/else if, else conditional statement used to check if online document contains the string "homosexuals" or "Homosexuals"


The if/else statement executes a block of code if a specified condition is true. 
If the condition is false, another block of code can be executed.
The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

*/

function testWord(word){
    if(word === "homosexuals"){//if words is strictly equal to the string'homosexuals'
        
        return "individuals who self-identify as LGBTQ+"; //return the following string: "individuals who self-identify as LGBTQ+"
      
    } else if (word ==="Homosexuals") {
        return "Individuals who self-identify as LGBTQ+"; //else if return the following string: return "Individuals who self-identify as LGBTQ+ 
    } else { 
        return "String 'Homosexuals' or 'homosexuals' not found in online document"; //default return if word isn't strictly equivalent to the string "Homosexuals" or "homosexfuals"
    }
}

/*
Code Testing as of 1.9.2018
Note: we should write official test using Jasmine
Course to learn Javascript testing | Link: https://www.udacity.com/course/javascript-testing--ud549

console.log(testWord("homosexuals"))//--> Returns: "individuals who self-identify as LGBTQ+"
console.log(testWord("Homosexuals"));//--> Resturns: "Individuals who self-identify as LGBTQ+"
console.log(testWord("inclusive"))://-->Returns: "string 'Homosexuals' or 'homosexuals' not found in online document"
*/

