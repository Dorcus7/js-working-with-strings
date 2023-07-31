# Working with Strings

## Concatenating Strings

- There are times when you will want to have a sentence that has data that is both **static and dynamic**.
    - For example, a greeting on a home page after login might say ‘Hello, Annie Cannons, welcome to our website!”
    - In the sentence above, Annie would be passed in as a variable called `firstName`, and Cannons would be stored in a variable called `lastName`
    - The rest of the sentence will be the exact same for every user, so it does not need to be stored in a variable
    - When we combine both variables and text into a string, we call it concatenation.

## Manipulating Strings
- There are times when you need to change a string in order for it to be ready to be sent to, and stored in the database
    - For example, a user might enter their email address into a form using capital letters, but you need them to all be lowercase in the database. Or a user might enter their first and last name into one input in a form, but you need to separate them into two variables, one for firstName and one for lastName
    - For example:
    - `let firstName = "Annie"`
    - `let lastName = "Cannons"`
    - `let welcomeSentence = "hello " + firstName + " " + lastName + "!";` 
    - `// “hello Annie Cannons!”`

### Prep
    1. Connect your js file to your HTML file
    2. Open your code in the browser and open your console

### Exerise 1
    1. In the `js` file, there are some names that are stored in variables as string data types
    2. Your job is to prepare the data for the database.
    3. For each name, you create two variables, one called firstName1 and the other called lastName1. Repeat this for all of the names (firstName2, lastName2, firstName3, lastName4, etc) Use JavaScript string methods to make sure:
        a. The names should be capitalized
        b. They do not have any title or other information included, including middle names

### Exerise 2
    - Working with dates in JavaScript is really cool, and can also be challenging.
    - When we use what is called the JavaScript Date Object, we can often see a date and time stamp that looks like this:
        - “2020-02-02T12:32:00Z” 
    1. Remove the timestamps (everything after the T) and create a string that presents the date in human-readable form.

### Exerise 3
    - You will regularly need to modify data to make sure that it is ready for the storage in a database. Often times, for emails, you will need to make sure that the entire string is in lowercase so that it will be treated as the same value, regardless if the user types in info@anniecannons.com or Info@anniecannons.com 
    1. Take the strings listed and make sure that they are formatted property. 
    2. Log your variables in the console to check to make sure they are formatted properly. 

### Exerise 4
    - It is really important to be able to run processes on passwords to make sure they meet the security requirements of your site. 
    1. Follow the instructions in the `scripts.js` file for formatting and testing a password.

### Exerise 5
    1. Go to MDN and research two other string methods. Be prepared to share the methods with the class and to show a code example of each to the class. 
