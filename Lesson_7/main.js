//задание 1
function Animal(name) {
    this.name = name;
    var self = this;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.'
    };


    self.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 30) {
            throw new Error('Слишком мало')
        } else if (amount > 100) {
            throw new Error('Слишком много')
        } foodAmount = amount;
        foodAmount = amount;
    };

    this.feed = function () {
        return alert('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function () {
        animalFeed();
        this.moodCat();
        return this;
    };

    this.moodCat = function () {
        alert('Кот доволен ^_^');
        return this;
    };

    this.stroke = function () {
        alert('Гладим кота ^_^');
        return this;
    };
}

var barsik = new Cat('Барсик');
barsik.stroke().moodCat().stroke();
console.log(barsik.dailyNorm(80));
barsik.feed();




//Задание 2

function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
};

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.' ;
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 30) {
        throw new Error('Слишком мало')
    } else if (amount > 100) {
        throw new Error('Слишком много')
    } 
    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    return alert('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};


function Cat(name) {
    this._name = name;
    Animal.apply(this, arguments);
};
Cat.prototype = Object.create (Animal.prototype);
Cat.prototype.constructor = Cat;

var animalFeed = this.feed;
Cat.prototype.feed = function () {
    animalFeed();
    this.moodCat();
    return this;
};

Cat.prototype.moodCat = function () {
    alert('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke  = function () {
    alert('Гладим кота ^_^');
    return this;
};

var barsik = new Cat('Барсик');
barsik.stroke().moodCat().stroke();
console.log(barsik.dailyNorm(80));
barsik.feed();