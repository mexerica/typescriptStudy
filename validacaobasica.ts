let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let go = true;
let txt = "O valor é ";

function soma(n1 : number,n2 : number, print : boolean, txt : string) {
	let result = n1 + n2
	if (print) console.log(txt +  result)
	return result;
}
if (button && input1 && input2) button.addEventListener("click", () => console.log(soma(Number(input1.value), Number(input2.value), go, txt)));

