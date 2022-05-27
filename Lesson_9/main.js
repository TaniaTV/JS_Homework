// #1 Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
var arr = ['ann', 'kate', 'mari', 'pit',]
function createObj(arr) {
    var newArr = arr.map(function (i) {
        return arr[i] = { name: i };
    });
    return newArr;
};
console.log(createObj(arr))

/* #2 Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
Для решения использовать перебирающий метод массивов (не метод join).
*/
var arr = ['00', '13', '24'];
function makeTime(arr) {
    var time = arr[0];
    arr.reduce(function (index, num) {
        time += ':' + num;
    }); return '"Текущее время :' + time + '"';
};
alert(makeTime(arr));

/*Задание 3:
Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
должно быть "топорным".
*/

var str = 'напрямую свяжут газовые месторождения';
function getVowels(str) {
    var letters = 'аоуыэеёиюя';
    newArr = str.toLowerCase().split('');
    var lengthVolves = 0;

    for (var i = 0; i < newArr.length; i++) {
        if (letters.indexOf(newArr[i]) !== -1) {
            lengthVolves++;
        };
    }; return 'Количество гласных = ' + lengthVolves;
};
getVowels(str);
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
    var arr = str.split(/[.!?]/);
    for (var i = 0; i <= arr.length - 1; i++) {
        var sentence = arr[i];
        if (sentence != '') {
            var words = sentence.split(/['',','' ']/);
            var letters = 0;
            for (var j = 0; j <= words.length - 1; j++) {
                word = words[j];
                letters += word.length
            };
            console.log(sentence + ': Количество букв:' + letters);
        };
    };
};
countSentencesLetters(str);

