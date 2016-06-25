var fibonacci = []
var sum = 0 
fibonacci[0] = 1
fibonacci[1] = 1

for (i = 2; i < 1000; i++ ) {
	fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
		if (fibonacci[i] % 2 === 0){
		sum+= fibonacci[i]
		}
		else if (fibonacci[i] > 4000000) {
			break
		}

}
console.log(sum)


