for (let b = "#"; b.length < 8; b += "#")
	console.log(b);


//for (let num = 1; num <=100; num ++) {
//	let output = "";
//	if (num % 3 == 0) output += "Fizz";
//	if (num % 5 ==0)  output += "Buzz";
//console.log(output || num);
//}
//

let size = 8;
let board = "";

for (let y = 0; y < size; y ++) {
	for (let x = 0; x < size; x ++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}
console.log(board);
