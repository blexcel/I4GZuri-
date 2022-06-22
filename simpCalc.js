const num1 = window.prompt("Enter First Number: ");
const num2 = window.prompt("Enter Second Number");
const opOperator = window.prompt("Enter operator");

if (opOperator == "*"){
    console.log(num1 * num2);
}
else if (opOperator == "+"){
    console.log(num1 + num2);
}
else if (opOperator == "-"){
    console.log(num1 - num2);
}
else if (opOperator == "/"){
    console.log(num1 / num2)
}
else{
    console.log("Invalid Operator")
}