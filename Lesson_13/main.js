var buttonMain = document.createElement('button');
var mainContainer = document.createElement('div');
var divError = document.createElement('div');

buttonMain.innerHTML = 'Get Users List';
divError.innerHTML = 'Произошла ошибка загрузки';

document.body.appendChild(buttonMain);
document.body.appendChild(mainContainer);


buttonMain.classList.add('main_button');
divError.classList.add('error');

var xhr = new XMLHttpRequest();
buttonMain.onclick = function () {
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function () {
        var statusType = Math.round(this.status / 100);
        if (statusType == 2) {
            var users = JSON.parse(this.response).data;
            createUsers(users);
            setItemStorage(users);
        } else {
            this.status;
            document.body.append(divError);
        }
    };
    xhr.onerror = function () {
        console.error(this.status);
        document.body.append(divError);
    };
    xhr.onloadend = function () {
        console.log('Запрос завершен');
        buttonMain.disabled = true;
    };

};

function createUsers(arr) {
    var num = 1;
    mainContainer.innerHTML += '<button class="not_active active" onclick = "onClick(' + arr[0].id + ')" id = "' + arr[0].id + '">' + 'User ' + num + '</button>' +
        '<div class = "inform visibility">' +
        '<img src="' + arr[0].avatar + ' ">' +
        '<p>' +
        'First Name: ' + arr[0].first_name + '<br>' +
        'Last Name: ' + arr[0].last_name +
        '</p>' +
        '</div>';

    for (var i = 1; i < arr.length; i++) {
        var userInfo = arr[i];
        var num = i + 1;
        mainContainer.innerHTML += '<button class="not_active"  onclick = "onClick(' + userInfo.id + ')" id = "' + userInfo.id + '">' + 'User ' + num + '</button>' +
            '<div class = "inform">' +
            '<img src=" ' + userInfo.avatar + ' ">' +
            '<p>' +
            'First Name: ' + userInfo.first_name + '<br>' +
            'Last Name: ' + userInfo.last_name +
            '</p>' +
            '</div>';
    };
};


function onClick(a) {

    var allButtons = mainContainer.getElementsByClassName('not_active');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
    };
    var allUsers = mainContainer.getElementsByClassName('inform');
    for (var i = 0; i < allUsers.length; i++) {
        allUsers[i].classList.remove('visibility');
    };
    document.getElementById(a).classList.toggle('active');
    document.getElementById(a).nextElementSibling.classList.toggle('visibility');
};


function setItemStorage(arr) {
    for (var i = 0; i < arr.length; i++) {
        var userInfo = arr[i];
        var num = i + 1;
        localStorage.setItem('avatar' + num, userInfo.avatar);
        localStorage.setItem('first_name' + num, userInfo.first_name);
        localStorage.setItem('last_name' + num, userInfo.last_name);
    };
};

/*

Задание 1:
--- Добавить на страницу кнопку "Загрузить список пользователей".
---   По клику на нее осуществляется AJAX (GET) запрос на https://reqres.in (List Users).
В случае успешного получения данных:
--- ДИНАМИЧЕСКИ добавить на страницу вкладки "Пользователь 1", "Пользователь 2" и т.д.
(в соотв. с количеством пользователей)
-- - сделать первую вкладку активной и показать под ней блок с информацией о пользователе
-- - вкладки должны иметь возможность переключаться и отображать соответствующие данные
--- полученные данные должны записываться в LocalStorage *
--- В случае ошибки получения данных (протестировать можно, изменив url запроса как в примере с урока):
--- отрисовать на странице сообщение о том, что данные не получены, в произвольном виде     

не сделано:
- по клику на кнопку должна происходить проверка, если данные есть в LocalStorage, не отправлять AJAX запрос, а
        сразу отрисовывать их *

Перед отправкой ОБЯЗАТЕЛЬНО (!!!) порефакторить код и протестировать ваше приложение на работоспособность и
    максимально на отсутствие багов.
*/