function Alumno(nombre, apellidos, matricula, area){
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.matricula = matricula;
	this.area = area;
}

	var nombre = prompt("Ingrese su nombre: ");
 	var apellidos = prompt("Ingrese sus apellidos: ");
 	var matricula = prompt("Ingresa tu matricula: ");
 	var area = prompt("Ingresa tu area: ");
 	var sexo = prompt("Ingresa tu sexo: ");

alumno = new Alumno(nombre, apellidos, matricula, area)
alert("Alumno: " + alumno.nombre + " " + alumno.apellidos + " " + alumno.matricula + " " + alumno.area);