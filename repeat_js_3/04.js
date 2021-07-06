
// - Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
// 	  Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип
// 		 данных, значения придумайте сами). 


function HouseBuilder(houseWidth, houseHeight, countFloor) {

	for (let i of arguments) {
		if (typeof (i) !== 'number' || isNaN(i) || i < 0) {
			alert(`Введённое значение '${i}' некорректно!`);
		} else {

			this.houseWidth = houseWidth;
			this.houseHeight = houseHeight;
			this.countFloor = countFloor;
		}
	}
}

let firstHouse = new HouseBuilder(12, 3, 2);

let secondHouse = new HouseBuilder(15, 4, 3);


// - Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. Вызвать
// 	  данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.

HouseBuilder.prototype.calcArea = function() {
	return this.totalArea = this.houseWidth * this.houseHeight * this.countFloor;
};

firstHouse.totalArea = firstHouse.calcArea();

secondHouse.totalArea = secondHouse.calcArea();