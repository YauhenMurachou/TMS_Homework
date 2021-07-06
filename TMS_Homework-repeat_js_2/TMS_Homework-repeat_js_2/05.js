//  - Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов 
// 	  (сколько раз ее вызызвали до этого плюс этот вызов) Используйте замыкание;



function func() {
	let count = 1;
	return function () { return count++ };
}

let funcCount = func();
console.log(funcCount());