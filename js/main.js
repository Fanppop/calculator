let block = document.querySelectorAll(".block");
let result = document.querySelector(".result");

let a = 0;
let b = 0;
let c = null;
let content;
let count = 0;
for (let i = 0; i < block.length; i++) {
  let blocks = block[i];
  blocks.onclick = () => {
    content = blocks.textContent;
    switch (content) {
      case "+":
        count++;
        c = content;
        result.innerHTML = null;
        break;
      case "-":
        count++;
        c = content;
        result.innerHTML = null;
        break;
      case "*":
        count++;
        c = content;
        result.innerHTML = null;
        break;
      case "/":
        count++;
        c = content;
        result.innerHTML = null;
        break;

      case "del":
        result.innerHTML = null;
        a = 0;
        b = 0;
        c = null;
        count = 0;
        break;
      case "c":
        result.innerHTML = null;
        a = 0;
        b = 0;
        c = null;
        count = 0;
        break;

      case "=":
        switch (c) {
          case "+":
            result.innerHTML = null;
            result.innerHTML = a + b;
            break;
          case "-":
            result.innerHTML = null;
            result.innerHTML = a - b;
            break;
          case "*":
            result.innerHTML = null;
            result.innerHTML = a * b;
            break;
          case "/":
            result.innerHTML = null;
            result.innerHTML = a / b;
            break;
        }
        break;

      default:
        if (count == 1) {
          b += content;
          b = Number(b);
          result.innerHTML += content;
        } else if (count == 0) {
          a += content;
          a = Number(a);
          result.innerHTML += content;
        } else {
          alert(
            "Пожалуйста вводите только одну операцию с числами!\n\nPlease use only one operation with numbers!"
          );
          result.innerHTML = null;
          a = 0;
          b = 0;
          c = null;
          count = 0;
        }
    }
  };
}


// Фрагмент аналогичного укороченного кода!
 


// let block = document.querySelectorAll('.block');
// let result = document.querySelector('.result');

// let a = 0;
// let b = 0;
// let c = null;
// let content;
// let count = 0;
// for (let i = 0; i < block.length; i++){
//     let blocks = block[i]
//     blocks.onclick = () => {content = blocks.textContent;
//         switch(content){
//             case '+': count++; c = content; result.innerHTML = null;
//                 break;
//             case '-': count++; c = content; result.innerHTML = null;
//                 break;
//             case '*': count++; c = content; result.innerHTML = null;
//                 break;
//             case '/': count++; c = content; result.innerHTML = null; 
//                 break;

//             case 'del': result.innerHTML = null; a = 0; b = 0; c = null; count = 0;
//                 break;
//             case 'c': result.innerHTML = null; a = 0; b = 0; c = null; count = 0;
//                 break;

//             case '=': 
//                 switch(c){
//                     case '+': result.innerHTML =null; result.innerHTML = a + b;
//                         break
//                     case '-': result.innerHTML = null; result.innerHTML = a - b;
//                         break
//                     case '*': result.innerHTML = null; result.innerHTML = a * b;
//                         break;
//                     case '/': result.innerHTML = null; result.innerHTML = a / b;
//                         break;
//                 }
//             break;
                
//             default: if(count == 1){
//                 b += content;
//                 b = Number(b);
//                 result.innerHTML += content;
//             } else if(count == 0) {
//                 a += content;
//                 a = Number(a);
//                 result.innerHTML += content;
//             } else {
//                 alert("Пожалуйста вводите только одну операцию!\n Please use only one operations with numbers!"); result.innerHTML = null; a = 0; b = 0; c = null; count = 0;
//             }
//         }
//     }
// }   
