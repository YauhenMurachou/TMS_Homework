/ - Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который будет 
// 	представлять собой массив arr но без дублирующихся по своим значениям элементам. Использовать методы reduce и indexOf.

// я сразу написал первый вариант и начал радоваться, что с ходу всё получилось. 
// Но потом увидел дописку про reduce, и с ним пришлось помучаться

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let arrUnique = [];

for (let i = 0; i < arr.length; i++) {
	if (!arrUnique.includes(arr[i])) {
		arrUnique.push(arr[i]);
	} else {
		continue
	}
}


// второй вариант


let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = [];
arrUnique = arr.reduce((total, amount) => {
	if (!arrUnique.includes(amount)) {
		arrUnique.push(amount);
	}
	return arrUnique;
}, []);
