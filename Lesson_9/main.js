// #1 Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
arr = ['ann', 'kate', 'mari', 'pit',]
function createObj(arr) {
  var newArr = [];
  arr.map(function (i) {
    arr[i] = { name: i };
    newArr.push(arr[i]);
  });
  return newArr;
};
createObj(arr);

/* #2 Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
Для решения использовать перебирающий метод массивов (не метод join).
*/
var arr = ['00', '13', '24'];
function makeTime(arr) {
  var time;
  arr.reduce(function (index, num) {
    time += ':' + num;
  }); return '"Текущее время :' + time;
}
alert(makeTime(arr));


/*Задание 3:
Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
должно быть "топорным".
*/
var str = 'напрямую свяжут газовые месторождения';
function getVowels(str) {
  newArr = str.toLowerCase().split('').filter (function (i) {
    return 'аоуыэеёиюя'.includes(i)}).length;
    return 'Количество гласных = ' + newArr;
};
console.log(getVowels(str));


/*#4 Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
вопросительным знакам - убрав их).
Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
в методе split.

Функция должна работать следущим образом (потестировать на данном тексте):
  countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
  // Привет, студент: Letters quantity is: 13
  // Студент: Letters quantity is: 7
  // Как дела, студент: Letters quantity is: 14
*/

var str = 'Привет, студент! Студент... Как дела, студент?';
function countSentencesLetters(str) {
  var newStr = str.split(/[.!?]/);
  for (let i = 0; i <= newStr.length
    - 1; i++) {
    var string = newStr[i]; // это разбивает по сторокам Н: Привет, студент

    var lengthStr = newStr[i].split(/[' ', ',']/);// это должно разбить на слова Н: [Привет, студент,]

    var result = lengthStr.reduce(function (sum, elem, i, arr) { // это должно посчитать буквы в словах
      return sum + lengthStr[i].length;
    }, 0);

  }; return console.log(string + ': Letters quantity is:' + result);
};
countSentencesLetters(str);
