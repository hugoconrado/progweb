function calcula() {
	getInput(formulario);
	var r = document.formulario.raio.value;
	var area = r * r * Math.PI;
	var circunferencia = 2 * Math.PI * r;
	document.formulario.area.value = area;
	document.formulario.circunferencia.value = circunferencia;
	document.getElementById("test").innerHTML = "Aparece, filha da puta!";
	document.write("<h1>Caralho, muda alguma coisa!</h1>");
}
