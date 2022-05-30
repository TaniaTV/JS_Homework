var buttonAddRow = document.getElementById('addRowButton');
var table = document.getElementById('theTable');

buttonAddRow.addEventListener("click", addRow);

function addRow() {
  var newRow = table.insertRow(0);
  newRow.insertCell(0);
  newRow.insertCell(1);
  newRow.insertCell(2);
};


table.onclick = function (event) {
  var target = event.target;
  if (target.tagName != 'TD' || target == buttonAddRow) return;
  inputFocus(target);
};

function inputFocus(node) {
  var textTr = node.innerHTML;
  var cellInput = node.appendChild(document.createElement('input'));

  cellInput.onblur = function () {
    var textInput = cellInput.value;
    node.removeChild(cellInput);
    node.innerHTML = textInput;
  };
  if (textTr != '') {

    cellInput.value = textTr;
    node.textContent = '';
    node.appendChild(cellInput);
  }

  cellInput.focus();
}


/*
#1:
---Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
"Добавить".
---По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
---По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.
---При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.
---При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).
--В одно время в таблице может находиться только один инпут.
При реализации использовать делегирование событий.

Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. Событие должно работать точно
так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст. *



*/
