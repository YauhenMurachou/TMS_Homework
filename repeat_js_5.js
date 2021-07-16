// Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
// Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
// Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
//  cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргумента, каждый из которых описывает 
// уровень загрязнения каждой комнаты.

function cleanRoom(dirtyLevel) {

	if (typeof (dirtyLevel) !== 'number' || dirtyLevel < 0 || isNaN(dirtyLevel)) {
		alert('Нужно писать положительное число!');
	} else {

		return new Promise(function (resolve, reject) {
			if (dirtyLevel <= 10) {
				setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
			} else {
				setTimeout(() => reject('Слишком грязно'), dirtyLevel * 1000);
			}
		});
	}
};


function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
	cleanRoom(dirtyLevel_1).then(
		result => {
			console.log(`Уборка комнаты №1 проведена успешно за ${result} секунд`)
			return cleanRoom(dirtyLevel_2)
		})
		.then(
			result => {
				console.log(`Уборка комнаты №2 проведена успешно за ${result} секунд`)
				return cleanRoom(dirtyLevel_3)
			})
		.then(
			result => console.log(`Уборка комнаты №3 проведена успешно за ${result} секунд`))
		.catch((err) => console.error(err));
}

cleanRooms(3, 4, 3);



// - На основанни задачи из прошлого дамашнего задания сделайте так, чтобы можно было осуществить параллельную уборку трех комнат. 
// 	  Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. 
// 	  Если одна из комнат оказалась слишком грязной(условие при котором такое происхожит описано в предыдущем ДЗ), 
// 	  то пекращаем уборку полностью. Для этого функция cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } 
// 	  должна принимать три аргумента, каждый из кторых описывает уровень загрязнения каждой комнаты. 



function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
	let i = 1;

	let args = [cleanRoom(dirtyLevel_1), cleanRoom(dirtyLevel_2), cleanRoom(dirtyLevel_3)]
	return Promise.all(args).then(args => args.map(
		result => console.log(`Уборка комнаты №${i++} проведена успешно за ${result} секунд`))).catch((err) => console.error(err))
}

cleanRooms(3, 4, 3);


// function cleanRoom(...rest) {
// 	return rest.map((dirtyLevel, index) => {
// 		return new Promise((resolve, reject) => {
// 			if (dirtyLevel > 10) {
// 				reject(new Error(`Cлишком грязно!`));
// 			} else {
// 				setTimeout(() => {
// 					resolve(`Комната №${index + 1} убрана!`);
// 				}, dirtyLevel * 1000);
// 			}
// 		}
// 		)
// 	}
// 	)
// }

// let rest = cleanRoom(3, 4, 2);

// Promise.all(rest)
// 	.then(rest => {
// 		rest.map(dirtyLevel => console.log(dirtyLevel))
// 	}).catch(alert);









// function cleanRoom(...rest) {
// 	return new Promise(function (resolve, reject) {
// 		resolve(rest)
// 	});
// };

// cleanRoom(3, 2, 4).then((result) => {

// 	return new Promise(function (resolve, reject) {
// 		if (typeof (result[0]) !== 'number' || result[0] < 0 || isNaN(result[0])) {
// 			alert('Нужно писать положительное число!');
// 		} else if (result[0] <= 10) {
// 			setTimeout(() => {
// 				console.log(`Комната №1 убрана за ${result[0]} секунд. `);
// 				resolve(result)
// 			}, result[0] * 1000);
// 		} else {
// 			setTimeout(() => reject('Слишком грязно'), result[0] * 1000);
// 		}
// 	})

// }).then((result) => {

// 	return new Promise(function (resolve, reject) {
// 		if (typeof (result[1]) !== 'number' || result[1] < 0 || isNaN(result[1])) {
// 			alert('Нужно писать положительное число!');
// 		} else if (result[1] <= 10) {
// 			setTimeout(() => {
// 				console.log(`Комната №2 убрана за ${result[1]} секунд. `);
// 				resolve(result)
// 			}, result[1] * 1000);
// 		} else {
// 			setTimeout(() => reject('Слишком грязно'), result[1] * 1000);
// 		}
// 	})

// }).then((result) => {

// 	return new Promise(function (resolve, reject) {
// 		if (typeof (result[2]) !== 'number' || result[2] < 0 || isNaN(result[2])) {
// 			alert('Нужно писать положительное число!');
// 		} else if (result[2] <= 10) {
// 			setTimeout(() => {
// 				console.log(`Комната №3 убрана за ${result[2]} секунд. Уборка закончена. `);
// 				resolve(result)
// 			}, result[2] * 1000);
// 		} else {
// 			setTimeout(() => reject('Слишком грязно'), result[2] * 1000);
// 		};
// 	})
// })
