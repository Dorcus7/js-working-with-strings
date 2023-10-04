/***************************** Exercise 1 - Formatting Names ****************************/

let userName1 = 'John L James';
let userName2 = 'corina SMITH';
let userName3 = 'Miss Sunny sunshine';
let userName4 = 'Ms. Emily Dworetz';
let userName5 = 'micah caine';
let userName6 = 'WILLIAM Montgomery';
let userName7 = 'Dorothy Chou LLP';
let userName8 = '    Lisette Rivera';
let userName9 = 'Edward chistopher Olmos';
let userName10 = 'Dr. Violet Smith';

function formatName(name) {
    
    name = name.trim();
    
    const nameParts = name.split(' ');
    
    if (nameParts[0].toLowerCase() === 'mr.' || nameParts[0].toLowerCase() === 'ms.' || nameParts[0].toLowerCase() === 'miss' || nameParts[0].toLowerCase() === 'dr.') {
      nameParts.shift(); 
    }

    nameParts.forEach((part, index) => {
      nameParts[index] = part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });
    
    return nameParts.join(' ');
  }




let firstName1 = formatName(userName1).split(' ')[0]
let lastName1 = formatName(userName1).split(' ')[2]
let firstName2 = formatName(userName2).split(' ')[0]
let lastName2 = formatName(userName2).split(' ')[1]
let firstName3 = formatName(userName3).split(' ')[0]
let lastName3= formatName(userName3).split(' ')[1]
let firstName4 = formatName(userName4).split(' ')[0]
let lastName4 = formatName(userName4).split(' ')[1]
let firstName5 = formatName(userName5).split(' ')[0]
let lastName5 = formatName(userName5).split(' ')[1]
let firstName6= formatName(userName6).split(' ')[0]
let lastName6 = formatName(userName6).split(' ')[1]
let firstName7 = formatName(userName7).split(' ')[0]
let lastName7= formatName(userName7).split(' ')[2]
let firstName8 = formatName(userName8).split(' ')[0]
let lastName8 = formatName(userName8).split(' ')[1]
let firstName9 = formatName(userName9).split(' ')[0]
let lastName9 = formatName(userName9).split(' ')[2]
let firstName10 = formatName(userName10).split(' ')[0]
let lastName10 = formatName(userName10).split(' ')[1]

console.log(firstName1,lastName1);
console.log(firstName2,lastName2);
console.log(firstName3,lastName3);
console.log(firstName4,lastName4);
console.log(firstName5,lastName5);
console.log(firstName6,lastName6);
console.log(firstName7,lastName7);
console.log(firstName8,lastName8);
console.log(firstName9,lastName9);
console.log(firstName10,lastName10);





/**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
let todaysDate = new Date().toISOString();
console.log(todaysDate);

// Change the string above to only show the date.
let dateOnly = todaysDate.split('T')[0]
console.log(dateOnly);

// Change the string to be MM/DD/YYYY.
 
let parts = dateOnly.split('-');
let formattedDate = parts[1]+'/'+parts[2]+'/'+parts[0]
console.log(formattedDate);


// Run the following code in the browser.

let futureDate = '2025-10-31';
let futureDateFormatted = new Date(futureDate)
console.log(futureDateFormatted);


//Manipulate the above string to display it in the MM/DD/YEAR format.

let parts2 = futureDate.split('-');
let formattedDate2 = parts2[1]+'/'+parts2[2]+'/'+parts2[0]
console.log(formattedDate2);

/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = 'INFO@airbnb.com';
let email2 = 'lukeDanes@thediner.com';
let email3 = 'testingAccount@gmail.com';
let email4 = 'gracehopper@academy.COM';
let email5 = 'roslinaccounting  @gmail.com'

// Modify the strings here

// Format and store the emails in lowercase
let formattedEmail1 = email1.toLowerCase();
let formattedEmail2 = email2.toLowerCase();
let formattedEmail3 = email3.toLowerCase();
let formattedEmail4 = email4.toLowerCase();

// Remove spaces in the middle of email5 and convert to lowercase
let formattedEmail5 = email5.split(' ').join('').toLowerCase();

// Log the formatted emails
console.log(formattedEmail1);
console.log(formattedEmail2);
console.log(formattedEmail3);
console.log(formattedEmail4);
console.log(formattedEmail5);





/**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
let password = 'mypass';
if (password.length > 12) {
  } else {
   alert(`Password is ${password.length} characters long.`);
  }
  



// What is the following code doing? 
// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = 'Hello World!';
console.log(specialChars.test(string))

// How would you run the above test on the password given above?
if (specialChars.test(password)) {
} else {
 alert('Password is weak, special chars needed');
}


// How would you check to see if a string contains numbers?

//by using /\d/.test(string);

// Create a regular expression to match digits (numbers)

let containsNumbers = /\d/.test(password);

if (containsNumbers) {
  console.log(password,'The string contains numbers.');
} else {
  console.log(password,'The string does not contain numbers.');
}




/**************************** Exercise 5 - Concatenation  ****************************/


// Declare two variables and concatenate them to form a new string. Print the result to the console.

let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName);




// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.

let fName2= 'Simon';
let lName2= 'Lee';
let fullName2 = `${fName2} ${lName2}`;
console.log(fullName2); 


/**************************** Exercise 6 - Research  ****************************/

// Add your methods and examples of each method here.

//1. split(separator)
let sentence = 'This is a sample sentence.';
let words = sentence.split(' '); 
console.log(words);


//2. substring(startIndex, endIndex)
let text = 'Hello, World!';
let substring = text.substring(7, 12);
console.log(substring);
