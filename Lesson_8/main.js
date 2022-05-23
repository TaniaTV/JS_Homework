/* #1 Переписать задачу с использованием перебирающего метода массивов:
function filterNumbersArr(numbers) {
    var newArr = [];
    for (var i = 0; i < numbers.length; i++) {
        var el = numbers[i];
        if (el > 0) {
            newArr[newArr.length] = el;
        }
    }
    return newArr;
}
filterNumbersArr([-1, 0, 2, 34, -2]);
*/

var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(arr) {
    var newArr = arr.filter(function (v) {
        return v > 0;
    }); return newArr;
};
filterNumbersArr(arr);

// #2 Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.

var arr = [-1, 0, 2, 34, -2];
arr.forEach(function (item, i, arr) {
    var tr = arr.some(arr[i] > 0);
    if (tr == true) {
        return console.log(arr[i]);
    });


function firstPositiveNum(arr) {
    function isNumber(value) {
        return value >= 0;
    }

    if (arr.some(isNumber) == true) {
        return value
    };
};
firstPositiveNum([-1, 0, 2, 34, -2]);


var arr = [-1, 0, 2, 34, -2];
function filterNumbersArr(v) {
    return v >= 0;
}
var firstPositiveNum = alert(arr.filter(filterNumbersArr)[0]);


[-1, 0, 2, 34, -2].forEach(function (item, index, arr) {
    if (item > 0) {
        return item;
    }
});


/* #3 Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).
*/

function wordPalindrome(word) {
    var newWord = word.toLowerCase().split("").reverse().join("");
    word = word.toLowerCase();
    return newWord == word;
};

wordPalindrome('Шалаш');
wordPalindrome('кувшин');

/* #4 Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
Регистр в словах учитываться не должен.
Функция должна работать следущим образом:
  areAnagrams('кот', 'Отк'); // true
  areAnagrams('кот', 'атк'); // false
  areAnagrams('кот', 'отко'); // false
*/

function areAnagrams(word1, word2) {
    var word1New = word1.toLowerCase().split("").sort().join("");
    var word2New = word2.toLowerCase().split("").sort().join("");
    return word1New == word2New;
};
areAnagrams('кот', 'Отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

/* #5 Написать функцию, которая будет разбивать массив на под-массивы определенной длины.
Функция должна работать следующим образом:
  divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
  divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
*/

function divideArr(arr, step) {
    var newArray = [];
    for (var i = 0; i < arr.length; i += step) {
        newArray.push(arr.slice(i, i + step));
    } return newArray;
};

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);

// #6 Написать функцию, определяющую, является ли переданное в нее число степенью двойки.

function powerTwo(num) {
    while (num > 1) {
        num = num / 2;
    };
    return num == 1;
};

powerTwo(6);
powerTwo(8);