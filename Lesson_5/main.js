// #1
function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount(foodAmount) {
        return foodAmount + ' гр.'
    };

    this.feed = function () {
        return ('Насыпаем в миску ' + formatFoodAmount(foodAmount) + ' корма.');
    };
};

var syam = new Cat('Мурка');
console.log(syam.name);
syam.feed();


// #2
function Cat(name) {
    this.name = name;
    var foodAmount = 0;
    this.dailyNorm = function (amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50) {
            throw new Error('Слишком мало')
        } else if (amount > 100) {
            throw new Error('Слишком много')
        } foodAmount = amount;
    }

    this.feed = function () {
        return ('Насыпаем в миску ' + this.dailyNorm() + 'гр. корма.');
    };
};

var syam = new Cat('Мурка');
console.log(syam.name);
syam.dailyNorm(80);
syam.feed();



/*Написать единый геттер-сеттер dailyNorm для установки/получения количества корма (foodAmount).
Оно не должно быть меньше 50 и больше 100 грамм. В случае некорректного количества возвращать сообщение об ошибке.
Если функция вызывается как геттер - она должна возвращать уже отформатированное значение foodAmount.
Протестировать метод dailyNorm с разными значениями параметра и без него. Метод feed должен оперировать актуальной
информацией (использовать внутри себя вызов геттера).
*/
