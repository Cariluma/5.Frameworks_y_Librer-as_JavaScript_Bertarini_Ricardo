//Inicia funcion rojo, la cual llamara al terminar la funcion amarillo
rojo($(".main-titulo"));
//Animate para cambiar a color rojo
function rojo(){
$(".main-titulo").animate(
  {color: "#f0230e"},
   500,function(){
     amarillo()
   }
)
}
//Animate para cambiar a color amarillo
function amarillo(){
$(".main-titulo").animate(
  {color: "#DCFF0E"},
 500,function(){
   rojo()
 }
)
}
