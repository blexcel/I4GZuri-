const num1 = parseInt(window.prompt("Enter First Number: "));
const num2 = parseInt(window.prompt("Enter Second Number: "));
const opOperator = window.prompt("Enter operator: ");

if (opOperator == "*"){
    const product = num1 * num2;
    alert("The product of " + num1 + " and " + num2 + " is: " + product);
}
else if (opOperator == "+"){
    const sumOf = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sumOf);
}
else if (opOperator == "-"){
    const difference = num1 - num2;
    alert("The difference of " + num1 + " and " + num2 + " is: " + difference);
}
else if (opOperator == "/"){
    const quotient = num1 / num2;
    alert("The quotient of " + num1 + " and " + num2 + " is: " + quotient);
}
else{
    alert("Invalid Operator")
}
