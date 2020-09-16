var zindex = 0;
//
// document.onmousedown = function (e) {			//событие нажатия на кнопку мыши
//
//   var elem = e.target; 							//элемент, на который нажали
//
//
//   if (!elem.classList.contains('image')) return; // если элемент не содержит
//   // класс 'draggable'  -  проходим мимо
//   if (e.button === 2) {      		// отмена нажатия правой клавиши и контекста на элементе
//     elem.oncontextmenu = function (e) {
//       return false
//     };
//     return;
//   }
//   elem.ondragstart = function () {   				// отменяем Drag’n’Drop браузера
//     return false
//   };
//   var coor = elem.getBoundingClientRect();		//получаем координыты елемента относительно окна браузера
//   var osx = e.clientX - coor.left; 				//получаем смещение по Х указателя мыши относительно начала координат эелемента
//   var osy = e.clientY - coor.top;					// тоже по У
//   elem.style.position = 'fixed';					//фиксируем элемент относительно окна
//   elem.style.top = coor.top + 'px';				//задаем начальные координаты У
//   elem.style.left = coor.left + 'px'; 			//тоже по X
//
//   document.onmousemove = function (ev) {			//событие перемещения мыши
//     x = ev.clientX - osx; 						//координата Х с учетом смещения
//     y = ev.clientY - osy;						//тоже по У
//     var winX = document.documentElement.clientWidth;  //ширина окна браузера
//     var winY = document.documentElement.clientHeight; //высота окна браузера
//
//     if (x + coor.width > winX) {
//       x = winX - coor.width
//     }
//     ;										//не выдвигать элемент за правый край
//
//     if (x < 0) {
//       x = 0
//     }
//     ;										// не выдвигать элемент за левый край
//
//     if (y <= 0) {							//если елемент уперся в верх окна
//       scrollBy(0, -10);					//прокрутить страницу вверх на 10рх
//       y = 0; 								//не выдвигать элемент за верхний край
//     }
//     ;
//
//     if (y >= (winY - coor.height)) {		//если елемент уперся в низ окна
//       scrollBy(0, 10);					//прокрутить страницу вниз на 10рх
//       y = winY - coor.hieght;				//не выдвигать элемент за нижний край
//     }
//     ;
//     elem.style.left = x + 'px';				//задаем координату Х без смещения для движения элемента
//     elem.style.top = y + 'px';				// тоже по У
//     removeSelect();							//запретить стандартное выделение
//   }
//   document.onmouseup = function (e) { //событие отпускания кнопки мыши
//
//     elem.style.position = 'absolute'; // переводим в абсолютные координаты, чтобы при перемещении страницы объекты перемещались со страницей
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     //определяем количество прокрученных пикселей
//     elem.style.top = y + scrollTop + 'px'; // задаем Y коорд с учетом прокрутки
//
//
//     // проверяем попадание по поля нашего персонажа или мяча
//     // if (x < fieldCoords.left - elem.offsetWidth 		// слева от поля
//     //   || x > fieldCoords.left + field.offsetWidth 	// справа от поля
//     //   || y < fieldCoords.top - elem.offsetHeight 		// сверху от поля
//     //   || y > fieldCoords.top + field.offsetHeight) {  // снизу от поля
//     //
//     //   var team = document.getElementById('team');  // получаем элемент "команда" , стартовая площадка для наших игроков
//     //   team.appendChild(elem); // переносим игрока или мяч назад в команду
//     //   elem.style.position = ''; // переводим позиционирование в начальный вид
//     // }
//
//     document.onmousemove = null;//отменяем перемещение элемента
//   }
//   elem.style.zIndex = zindex + 1;
//   ++zindex;
// }
//
// function removeSelect() { 		//функция - убрать стандартное выделение
//   var b = document.body;		//по всему документу
//   b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none';//добавляем свойство CSS - запретить выделение
// }
//
