const accountID = 12321 //cann' t change further
let accountemail = "soumya@gmail.com" //Use let keyword for variable declaration
var accountpassword = "12345" // Can use var but prefered to use let
accountcity = "bbsr" // Can declare variable without a keyword but prefered with akeyword
let statename; // Gives undefiend as output

// accountID = 4 //not allowed due to const keyword

accountemail = "soumyaa@gmail.com"
accountpassword = "322332"
accountcity = "ctc"

console.log(accountID)

// Print multiple values in a table form

console.table([accountemail, accountpassword, accountcity, statename]) // Display multiple variable value in table form

/*
    Use 'let' while declaring a variable.
    Because of issues in block scope and functional scope. 
*/