//Inicia funcion rojo, la cual llamara al terminar la funcion amarillo
rojo($(".main-titulo"));
//Animate para cambiar a color rojo
function rojo(){
$(".main-titulo").animate(
  {color: "#f0230e"},
   2000,function(){
     amarillo()
   }
)
}
//Animate para cambiar a color amarillo
function amarillo(){
$(".main-titulo").animate(
  {color: "#DCFF0E"},
 2000,function(){
   rojo()
 }
)
}

 $(document).ready(function(){
   for (var i = 1; i < 50 ; i++){
     var id = "#";
     var pos = i;
     var numero = Math.floor((Math.random() * 4) + 1);
     var ruta = "image/"+numero+".png";
     //window.alert(ruta+pos)
     $(id+i).attr("src", ruta);
  }
});
