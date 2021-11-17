/*Datos iniciales*/
var edad = document.getElementById('edad');
var estatura = document.getElementById('estatura');
var peso = document.getElementById('peso');
var sexo = document.getElementById('sexo');
var resultado = document.querySelector('.resultado');

/*Tipo de Actividad*/
var sedentario = document.getElementById('Sedentario');
var pocoActivo = document.getElementById('PocoActivo');
var moderadamenteActivo = document.getElementById('ModeradamenteActivo');
var muyActivo = document.getElementById('MuyActivo');
var extremadamenteActivo = document.getElementById('ExtremadamenteActivo');

/*objetivos*/
var deficit = document.getElementById('deficit');
var mantenimiento = document.getElementById('mantenimiento');
var superavit = document.getElementById('superavit');

var bmr = 0;
var calorias = 0;

sexo.onchange = Calcular;
  
  function Calcular(){
    bmr=0;
  var valor = this.value
    console.log(valor);

    if (valor == "Masculino"){
    	 bmr = 88.362 + (13.397 * peso.value) + (4.799 * estatura.value) - (5.677 * edad.value);
    }

    else if (valor == "Femenino"){
      bmr = 447.593 + (9.247 * peso.value) + (3.098 * estatura.value) - (4.330 * edad.value);
    }
    
  }

  function actividad(){

  	if(sedentario.checked){
      calorias = bmr * 1.2;
      deficit.innerHTML = parseInt(calorias) - 500;
      mantenimiento.innerHTML = parseInt(calorias);
      superavit.innerHTML = parseInt(calorias) + 500;
      resultado.style.display="block";
      document.getElementById('sexo').value= "dis";
  	}

  	else if (pocoActivo.checked){
  		 calorias = bmr * 1.375;
  deficit.innerHTML = parseInt(calorias) - 500;
      mantenimiento.innerHTML = parseInt(calorias);
      superavit.innerHTML = parseInt(calorias) + 500;
      resultado.style.display="block";
      document.getElementById('sexo').value= "dis";
  }

  	else if (moderadamenteActivo.checked){
  		 calorias = bmr * 1.55;
    deficit.innerHTML = parseInt(calorias) - 500;
      mantenimiento.innerHTML = parseInt(calorias);
      superavit.innerHTML = parseInt(calorias) + 500;
      resultado.style.display="block";
      document.getElementById('sexo').value= "dis";
  }

  else if (muyActivo .checked){
  		 calorias = bmr * 1.725;
 deficit.innerHTML = parseInt(calorias) - 500;
      mantenimiento.innerHTML = parseInt(calorias);
      superavit.innerHTML = parseInt(calorias) + 500;
      resultado.style.display="block";
      document.getElementById('sexo').value= "dis";
  }

    else if (extremadamenteActivo .checked){
  		 calorias = bmr * 1.9;
 deficit.innerHTML = parseInt(calorias) - 500;
      mantenimiento.innerHTML = parseInt(calorias);
      superavit.innerHTML = parseInt(calorias) + 500;
       resultado.style.display="block";
       document.getElementById('sexo').value= "dis";
  }
  	}
