var Calculadora={
	pantalla: document.getElementById("display"),
	valorEnPantalla: "0",
	auxTeclaOperador: false,
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	auxTeclaIgual: false,
	
	Inicial: (function(){
		this.Calc();
		this.BotonNumeros();
		
	}),
	Calc: function(){
		alert("Hola mundo")
	},
	
	//*Teclas y numeros al presionar realizan la acción*//
	BotonNumeros: function () {
	var Uno=document.getElementById("1");
	var Dos=document.getElementById("2");
	var Tres=document.getElementById("3");
	var Cuatro=document.getElementById("4");
	var Cinco=document.getElementById("5");
	var Seis=document.getElementById("6");
	var Siete=document.getElementById("7");
	var Ocho=document.getElementById("8");
	var Nueve=document.getElementById("9");
	var Cero=document.getElementById("0");
	var Reset=document.getElementById("on");
	var Divivdir=document.getElementById("dividido");
	var Multiplicar=document.getElementById("por");
	var Restar=document.getElementById("menos");
	var Sumar=document.getElementById("mas");
	var Punto=document.getElementById("punto");
	var Resultado=document.getElementById("igual");
	var Signo=document.getElementById("sign");
	
	Uno.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("1");});
	Dos.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("2");});
	Tres.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("3");});
	Cuatro.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("4");});
	Cinco.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("5");});
	Seis.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("6");});
	Siete.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("7");});
	Ocho.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("8");});
	Nueve.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("9");});
	Cero.addEventListener("click",function () {Calculadora.CondicionalDeNumeros("0");});
	Reset.addEventListener("click",function () {Calculadora.BorrarOnC();});
	Divivdir.addEventListener("click",function () {Calculadora.Operacion("/");});
	Multiplicar.addEventListener("click",function () {Calculadora.Operacion("*");});
	Restar.addEventListener("click",function () {Calculadora.Operacion("-")});
	Sumar.addEventListener("click",function () {Calculadora.Operacion("+")});
	Punto.addEventListener("click",function () {Calculadora.Punto();});
	Signo.addEventListener("click", function() {Calculadora.Simbolo();})
	Resultado.addEventListener("click",function () {Calculadora.Resultado();});
	},
	
	//*Funcion para activar botones*//
	CondicionalDeNumeros:function(valor){
		if (this.auxTeclaOperador){
			this.valorEnPantalla= "0";
			this.auxTeclaOperador = true;
		}
		if (this.valorEnPantalla.length < 8) {		
			if (this.valorEnPantalla=="0"){
				this.valorEnPantalla = "";
				this.valorEnPantalla = this.valorEnPantalla + valor;
			} else {
				this.valorEnPantalla = this.valorEnPantalla + valor;
			}
		this.updatepantalla();
		}
	},
	
	//*Funcion para activar el boton de borrar*//
	BorrarOnC: function(){
		
	    this.valorEnPantalla = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.auxTeclaIgual = false;
		auxTeclaOperador: false;
		this.ultimoValor = 0;
		this.updatepantalla();
	
	},
	
	//*Añadir punto decimal a los numeros*//
	Punto: function(){
		if (this.valorEnPantalla.indexOf(".")== -1) {
			if (this.valorEnPantalla == ""){
				this.valorEnPantalla = this.valorEnPantalla + "0.";
			} else {
				this.valorEnPantalla = this.valorEnPantalla + ".";
			}
			this.updatepantalla();
		}
	},
	
	//*Signo positivo o negativo*//
	Simbolo: function(){
	
		if (this.valorEnPantalla !="0") {
			var aux;
			if (this.valorEnPantalla.charAt(0)=="-") {
				aux = this.valorEnPantalla.slice(1);
			}	else {
				aux = "-" + this.valorEnPantalla;
			}
		this.valorEnPantalla = "";
		this.valorEnPantalla = aux;
		this.updatepantalla();
		}
	},
	
	//*Funciones para las operciones*//
	Operacion: function(oper){
		if(this.operacion == ""){
			this.primerValor = parseFloat(this.valorEnPantalla);
			this.valorEnPantalla = "0";
		} else {
			this.segundoValor = parseFloat(this.valorEnPantalla);
			this.auxTeclaOperador = true;
			this.Resultado();			
		}
		this.operacion = oper;
		this.auxTeclaIgual = false;
		this.updatepantalla();
	},
	
	Resultado: function(){ 

		if(!this.auxTeclaIgual){ 
			this.segundoValor = parseFloat(this.valorEnPantalla);
			this.ultimoValor = this.segundoValor;		
			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);		
		} else {
			this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}
	
		this.primerValor = this.resultado;
		this.valorEnPantalla = "";
	
		if (this.resultado.toString().length < 9){
			this.valorEnPantalla = this.resultado.toString();
		} else {
			this.valorEnPantalla = this.resultado.toString().slice(0,8) + "...";
		}
	
		this.auxTeclaIgual = true;		
		this.updatepantalla();
	},
	
	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+": 
				this.resultado = eval(primerValor + segundoValor);
			break;
			case "-": 
				this.resultado = eval(primerValor - segundoValor);
			break;
			case "*": 
				this.resultado = eval(primerValor * segundoValor);
			break;
			case "/": 
				this.resultado = eval(primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(primerValor));
		}
	},
	
    updatepantalla: function(){
		this.pantalla.innerHTML = this.valorEnPantalla;
	}
}


//*Animación Botones*//

var botones = document.getElementsByClassName("tecla");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("mousedown", function () {
botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener("mouseup", function () {
botones[i].setAttribute("style", "transform:scale(1, 1)");
});
}


Calculadora.Inicial();