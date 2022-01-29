function calc(operation, a, b){
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return console.log("Error");
    } else if (operation == "sum") {
        let result = a + b;
        return console.log(result);
    } else if (operation == "multi") {
        let result = a * b;
        return console.log(result);
    } else if (operation == "div") {
        let result = a / b;
        return console.log(result);
    } else if (operation == "sub") {
        let result = a - b;
        return console.log(result);
    } else if (operation == "pow") {
        if (b < 0) {
            return console.log("Отрицательная степень не поддерживается!");
        }
        let result = a ** b;
        return console.log(result);
    } else if (operation == "mod") {
        let result = a % b;
        return console.log(result);
    } else if (operation !== "sum" || "multi" || "div" || "sub" || "pow" || "mod" && operation == undefined || null) {
        return console.log("Unknown operation");
    }
} 