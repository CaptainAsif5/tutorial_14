// Logical Operater / Conditional Operater
// (And operator) &&, (OR operator) ||, 

var default_username = "captain";
var default_phone = "03121026040";
var default_password = "captain";

var username = prompt("Enter Username OR Phone Number: ");
var password = prompt("Enter Password: ");

var result1 = (username == default_username || username == default_phone)
    && password == default_password ? "You are logged In!" : "Your username or password is incorrect";
document.write(result1 + "<br><br>");
