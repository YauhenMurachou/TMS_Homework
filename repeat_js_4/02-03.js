// - Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
//  	  В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению 
// 	  dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
// 	  Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент
// 	  resolve.


function cleanRoom(dirtyLevel) {

	if (typeof (dirtyLevel) !== 'number' || dirtyLevel < 0 || isNaN(dirtyLevel)) {
		alert('Нужно писать положительное число!');
	} else {

		return new Promise(function (resolve, reject) {
			setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
		});
	}
};

cleanRoom(4).then(
	result => console.log(`Уборка проведена успешно за ${result} секунд`),
	error => console.log(`Всё плохо`)
);




// - Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
// 	  с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
// 	  Текст ошибки придумайте сами.


function cleanRoom(dirtyLevel) {

	if (typeof (dirtyLevel) !== 'number' || dirtyLevel < 0 || isNaN(dirtyLevel)) {
		alert('Нужно писать положительное число!');
	} else {

		return new Promise(function (resolve, reject) {
			if (dirtyLevel <= 10) {
				setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
			} else {
				setTimeout(() => reject('Shit happens'), dirtyLevel * 1000);
			}
		});
	}
};

cleanRoom().then(
	result => console.log(`Уборка проведена успешно за ${result} секунд`),
	err => console.log(err)
);