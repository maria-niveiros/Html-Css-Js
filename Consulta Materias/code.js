let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
 
  datosPersona.nombre= prompt("Ingresa tu nombre: ");
  let anioNac=prompt("Ingresa el año en que naciste: ");
  let esteAnio=new Date().getFullYear();
  datosPersona.edad= esteAnio-anioNac;
  datosPersona.ciudad= prompt("Ingresa la ciudad donde vives: ");
  interesJs= confirm("¿Le interesa JavaScript?");  
  interesJs?datosPersona.interesPorJs="Si":datosPersona.interesPorJs="No";
}



function renderizarDatosUsuario() {
   obtenerDatosDelUsuario();
   document.getElementById('nombre').innerHTML=datosPersona.nombre;
  document.getElementById('edad').innerHTML=datosPersona.edad;
  document.getElementById('ciudad').innerHTML=datosPersona.ciudad;
  document.getElementById('javascript').innerHTML=datosPersona.interesPorJs;
}


const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
 
 if(interesJs){
  let btn = document.getElementById('obtener-materias')
  btn.onclick =function(){

      let fila = document.getElementById('fila');
        console.log("limpio");
        fila.innerHTML="";
        listado.forEach(contenido =>{
        console.log("carga");
        fila.innerHTML+=
        `<div class="caja">
        <img class="img" src="${contenido.imgUrl}">
        <p class ="lenguajes">${"Lenguajes: " + contenido.lenguajes}</p>
        <p class="bimestre">${"Bimestre: "+contenido.bimestre}</p>
        </div>`;
        
  });
  
  
}
 }
}


function mostrarYOcultarDescripcionCompleta() {
 
 const verMas = document.getElementById('ver-mas')
 const sobreMi = document.querySelector('.sobre-mi')
 verMas.onmouseover= function(){
    sobreMi.classList.add('sobre-mi-completo');
 }
 verMas.onmouseout=function(){
   sobreMi.classList.remove('sobre-mi-completo')
 }
} 

