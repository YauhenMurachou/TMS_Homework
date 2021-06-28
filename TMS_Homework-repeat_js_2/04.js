// - Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При вызове полжите n = 10);

function factorial(n) {
	if (n <= 1) {
		return 1
	} else {
		return n * factorial(n - 1);
	}
}