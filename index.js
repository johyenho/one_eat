//require : calc.js화일을 연결하여 가져오는 명령어

const calc = require("./calc.js");
//require  요구하라는 자바스크립트 명령어
console.log(("1 + 2 = "), calc.add(1, 2));
console.log(("4 + 5 = "), calc.add(4, 5));
console.log(("10 + 2 = "), calc.sub(10, 2));

//모듈 시스템이란? module.exports로 내보내고
//require("./calc.js") 경로를 찾아 화일을 연결하는 명령어