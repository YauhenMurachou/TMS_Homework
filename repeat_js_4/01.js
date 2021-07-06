// - Есть функция: function cleanRoom() {
// 	setTimeout(() => console.log("Команата убрана"), 5000);
// }

// Данная функция отвечает за уборку комнаты, для этого ей надо время 5 секунд, после этого происхожит оповещение что комната убрана.
// Перепешите используя промисы. 

function cleanRoom() {

	return new Promise(resolve => {
		setTimeout(() => resolve(), 5000);
	});
}

cleanRoom().then(() => console.log("Комната убрана"))