var container = document.getElementById('container');

var firstPar = document.createElement('p'),
  secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com" target = "blank">Link 1</a> and <a href="https://twitter.com" target = "blank">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);


var button1 = document.getElementsByTagName('button')[0];

var firstLincks = firstPar.children;

var secondLincks = secondPar.children;

button1.onclick = function () {
  for (var i = 0; i < firstLincks.length; i++) {
    firstLincks[i].classList.toggle('changed');
  }
};

secondPar.addEventListener('click', changeColor2)
function changeColor2(event) {
  if (event.target.tagName == 'A') return;
  for (var i = 0; i < secondLincks.length; i++) {
    secondLincks[i].classList.toggle('changed');
  }
};

secondPar.onclick = function (event) {
  if (event.target.tagName !== 'A') return;
  event.preventDefault();
  var hrefText = event.target.getAttribute('href');
  alert(hrefText);
};

/*
  Практическое задание (продолжение предыдущего задания):
-- По клику на имеющуюся кнопку (получать ее по тегу) 
--найти все дочерние ссылки у первого абзаца с помощью возможностей DOM-навигации 
--и произвести соответствующие действия с ссылками (задание стилей лучше использовать через добавление
  css-класса). 
--Установить событие клика на второй абзац (!!!) другим способом. 
--Если пользователь нажимает на ссылки 2-го абзаца, необходимо отменить им поведение по-умолчанию и вывести alert 
со значением атрибута href ссылки.

    */