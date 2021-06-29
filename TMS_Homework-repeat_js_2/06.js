// - Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
// 	  С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте
// 	  сами. 


function User(first_name, second_name, age, city) {
	this.first_name = first_name;
	this.second_name = second_name;
	this.age = age;
	this.city = city;
}

let belarusian = new User('Андрей', 'Станкевич', 22, 'Минск');

let ukrainian = new User('Дмитро', 'Гордон', 52, 'Киев');


// - Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
// 	  Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта. 


function info() {

	let belObject = {
		__proto__: belarusian,
	}

	console.log(this.first_name, this.second_name, this.age, this.city)
	console.log(belObject.first_name, belObject.second_name, belObject.age, belObject.city)
}

let infoNation = info.bind(ukrainian);

infoNation()