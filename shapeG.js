function isNum(value) {
      return !isNaN(value) && value.trim() !== '';
    }

    let input;
    do {
      input = prompt("Enter a number:");
    } while (!isNum(input));

    let num = parseInt(input);
    document.write("<h4>Number inputted: " + num + "</h4>");

    let result = "";
    if (num % 2 === 1) {
      for (let i = num; i >= 1; i--) {
        for (let j = 0; j < num; j++) {
          result += i + " ";
        }
        result += "<br>";
      }
    } else {
      for (let i = num; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
          result += i + " ";
        }
        result += "<br>";
      }
    }

    document.write(result);