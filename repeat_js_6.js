// - Перепишите цепочку промисов из предыдущего задания, используя async/await


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


async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
	try {
		let firstResult = await cleanRoom(dirtyLevel_1);
		console.log(`Уборка первой комнаты проведена успешно за ${firstResult} секунд`);

		let secondResult = await cleanRoom(dirtyLevel_2);
		console.log(`Уборка второй комнаты проведена успешно за ${secondResult} секунд`);

		let thirdResult = await cleanRoom(dirtyLevel_3);
		console.log(`Уборка третьей комнаты проведена успешно за ${thirdResult} секунд`);

	} catch (err) {
		console.error(err); 
	};
}

cleanRooms(3, 2, 5);