//Inicia funcion rojo, la cual llamara al terminar la funcion amarillo
rojo($(".main-titulo"));
//Animate para cambiar a color rojo
function rojo() {
  $(".main-titulo").animate({
      color: "#f0230e"
    },
    2000,
    function() {
      amarillo()
    }
  )
}
//Animate para cambiar a color amarillo
function amarillo() {
  $(".main-titulo").animate({
      color: "#DCFF0E"
    },
    2000,
    function() {
      rojo()
    }
  )
}
///////////////////////////////////////////////////////////////////////////
//Asigna aleatoriamente una imagen en todos las etiquetas img en el DOM.
$(document).ready(function() {
  for (var i = 1; i < 50; i++) {
    var id = "#";
    var pos = i;
    var numero = Math.floor((Math.random() * 4) + 1);
    var ruta = "image/" + numero + ".png";
    //window.alert(ruta+pos)
    $(id + i).attr("src", ruta);
    //console.log(ruta);
  }
});
/////////////////////////////////////////////////////////////////////////////
//Matriz donde se asignaran los valores de cada src para comparar
var fila1 = ["", "", "", "", "", "", "", ];
var fila2 = ["", "", "", "", "", "", "", ];
var fila3 = ["", "", "", "", "", "", "", ];
var fila4 = ["", "", "", "", "", "", "", ];
var fila5 = ["", "", "", "", "", "", "", ];
var fila6 = ["", "", "", "", "", "", "", ];
var fila7 = ["", "", "", "", "", "", "", ];
var matriz = [fila1, fila2, fila3, fila4, fila5, fila6, fila7];
//Con el siguiente codigo se accede al valor asignado en la matriz
//console.log(matriz[0][0]);
///////////////////////////////////////////////////////////////////////////////////
//Recorremos todas las etiquetas img y vemos que imagen tiene asignada cada una.
//Tambien asigna a la matriz los valores de cada imagen para poder comparar
$(document).ready(function() {
  $(".buttons").click(function() {
    $(".btn-reinicio").text("Reiniciar").attr("class", "reinicio");
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    var g = 0;
    for (var j = 1; j < 50; j++) {
      var img = $("#" + j).attr("src");
      //console.log(img);
      if (j <= 7) {
        matriz[0][a] = img;
        a++;
      } else if (j >= 8 && j <= 14) {
        matriz[1][b] = img;
        b++;
      } else if (j >= 15 && j <= 21) {
        matriz[2][c] = img;
        c++;
      } else if (j >= 22 && j <= 28) {
        matriz[3][d] = img;
        d++;
      } else if (j >= 29 && j <= 35) {
        matriz[4][e] = img;
        e++;
      } else if (j >= 36 && j <= 42) {
        matriz[5][f] = img;
        f++;
      } else {
        matriz[6][g] = img;
        g++;
      }
    }
    //console.log(fila1);
    //console.log(fila2);
    //  console.log(fila3);
    //console.log(fila4);
    //  console.log(fila5);
    //  console.log(fila6);
    //  console.log(fila7);
  
    borrar();
    retraso();
    reempl();
    /////////////////////////////////////////////////////////////////////////////
    //Contador de https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
    //Modificado para dos minutos.
    function startTimer(duration, display) {
      var timer = duration,

        minutes, seconds;
      var my = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $("#timer").text(minutes + ":" + seconds);

        if (--timer < 0) {
            console.log("hola");
          $("#timer").text("00" + ":" + "00");
          $(".panel-tablero").remove();
          $(".moves").hide(1000, 'linear');
          $("<h1 class='data-titulo'>Juego terminado</h1>").insertBefore($(".panel-score"));
          $(".data-titulo").css('text-align', 'center'); //
          $(".data-titulo").css('width', '100%'); //
          $(".data-titulo").css('height', '60px'); //
          $(".panel-score").css('width', '100%');
          $(".panel-score").css('height', '600px');
          $(".score").css('height', '30%');
          $(".time").css('height', '30%');
          clearInterval(my);
        }
      }, 1000);
    }

    jQuery(function($) {
      var twoMinutes = 60 * 1,
        display = $('#timer');
      startTimer(twoMinutes, display);
    });

    //Funcion que reinicia la pagina cuando se da click al boton reiniciar.
    $(document).ready(function() {
      $(".reinicio").click(function() {
        location.reload();
      });
    });

    function retraso() {
      setTimeout(function() {
        visible()
      }, 1000); // 3000ms = 3s
    }

    function reempl() {
      setTimeout(function() {
        reemplazo()
      }, 5000); // 3000ms = 3s
    }
  });
});
////////////////////////////////////////////

function borrar() {
  if (fila1[0] == fila1[1] && fila1[1] == fila1[2]) {
    $("#1 ,#2 ,#3").toggle("bounce", 500);
  }
  if (fila1[1] == fila1[2] && fila1[2] == fila1[3]) {
    $("#2 ,#3 ,#4").toggle("bounce", 500);
  }
  if (fila1[2] == fila1[3] && fila1[3] == fila1[4]) {
    $("#3 ,#4 ,#5").toggle("bounce", 500);
  }
  if (fila1[3] == fila1[4] && fila1[4] == fila1[5]) {
    $("#4 ,#5 ,#6").toggle("bounce", 500);
  }
  if (fila1[4] == fila1[5] && fila1[5] == fila1[6]) {
    $("#5 ,#6 ,#7").toggle("bounce", 500);
  }
  if (fila2[0] == fila2[1] && fila2[1] == fila2[2]) {
    $("#8 ,#9 ,#10").toggle("bounce", 500);
  }
  if (fila2[1] == fila2[2] && fila2[2] == fila2[3]) {
    $("#9 ,#10 ,#11").toggle("bounce", 500);
  }
  if (fila2[2] == fila2[3] && fila2[3] == fila2[4]) {
    $("#10 ,#11 ,#12").toggle("bounce", 500);
  }
  if (fila2[3] == fila2[4] && fila2[4] == fila2[5]) {
    $("#11 ,#12 ,#13").toggle("bounce", 500);
  }
  if (fila2[4] == fila2[5] && fila2[5] == fila2[6]) {
    $("#12 ,#13 ,#14").toggle("bounce", 500);
  }
  if (fila3[0] == fila3[1] && fila3[1] == fila3[2]) {
    $("#15 ,#16 ,#17").toggle("bounce", 500);
  }
  if (fila3[1] == fila3[2] && fila3[2] == fila3[3]) {
    $("#16 ,#17 ,#18").toggle("bounce", 500);
  }
  if (fila3[2] == fila3[3] && fila3[3] == fila3[4]) {
    $("#17 ,#18 ,#19").toggle("bounce", 500);
  }
  if (fila3[3] == fila3[4] && fila3[4] == fila3[5]) {
    $("#18 ,#19 ,#20").toggle("bounce", 500);
  }
  if (fila3[4] == fila3[5] && fila3[5] == fila3[6]) {
    $("#19 ,#20 ,#21").toggle("bounce", 500);
  }
  if (fila4[0] == fila4[1] && fila4[1] == fila4[2]) {
    $("#22 ,#23 ,#24").toggle("bounce", 500);
  }
  if (fila4[1] == fila4[2] && fila4[2] == fila4[3]) {
    $("#23 ,#24 ,#25").toggle("bounce", 500);
  }
  if (fila4[2] == fila4[3] && fila4[3] == fila4[4]) {
    $("#24 ,#25 ,#26").toggle("bounce", 500);
  }
  if (fila4[3] == fila4[4] && fila4[4] == fila4[5]) {
    $("#25 ,#26 ,#27").toggle("bounce", 500);
  }
  if (fila4[4] == fila4[5] && fila4[5] == fila4[6]) {
    $("#26 ,#27 ,#28").toggle("bounce", 500);
  }
  if (fila5[0] == fila5[1] && fila5[1] == fila5[2]) {
    $("#29 ,#30 ,#31").toggle("bounce", 500);
  }
  if (fila5[1] == fila5[2] && fila5[2] == fila5[3]) {
    $("#30 ,#31 ,#32").toggle("bounce", 500);
  }
  if (fila5[2] == fila5[3] && fila5[3] == fila5[4]) {
    $("#31 ,#32 ,#33").toggle("bounce", 500);
  }
  if (fila5[3] == fila5[4] && fila5[4] == fila5[5]) {
    $("#32 ,#33 ,#34").toggle("bounce", 500);
  }
  if (fila5[4] == fila5[5] && fila5[5] == fila5[6]) {
    $("#33 ,#34 ,#35").toggle("bounce", 500);
  }
  if (fila6[0] == fila6[1] && fila6[1] == fila6[2]) {
    $("#36 ,#36 ,#37").toggle("bounce", 500);
  }
  if (fila6[1] == fila3[2] && fila6[2] == fila6[3]) {
    $("#37 ,#38 ,#39").toggle("bounce", 500);
  }
  if (fila6[2] == fila6[3] && fila6[3] == fila6[4]) {
    $("#38 ,#39 ,#40").toggle("bounce", 500);
  }
  if (fila6[3] == fila6[4] && fila6[4] == fila6[5]) {
    $("#39 ,#40 ,#41").toggle("bounce", 500);
  }
  if (fila6[4] == fila6[5] && fila6[5] == fila6[6]) {
    $("#40 ,#41 ,#42").toggle("bounce", 500);
  }
  if (fila7[0] == fila7[1] && fila7[1] == fila7[2]) {
    $("#43 ,#44 ,#45").toggle("bounce", 500);
  }
  if (fila7[1] == fila7[2] && fila7[2] == fila7[3]) {
    $("#44 ,#45 ,#46").toggle("bounce", 500);
  }
  if (fila7[2] == fila7[3] && fila7[3] == fila7[4]) {
    $("#45 ,#46 ,#47").toggle("bounce", 500);
  }
  if (fila7[3] == fila7[4] && fila7[4] == fila7[5]) {
    $("#46 ,#47 ,#48").toggle("bounce", 500);
  }
  if (fila7[4] == fila7[5] && fila7[5] == fila7[6]) {
    $("#47 ,#48 ,#49").toggle("bounce", 500);
  }
  if (fila1[0] == fila2[0] && fila2[0] == fila3[0]) {
    $("#1 ,#8 ,#15").toggle("bounce", 500);
  }
  if (fila2[0] == fila3[0] && fila3[0] == fila4[0]) {
    $("#8 ,#15 ,#22").toggle("bounce", 500);
  }
  if (fila3[0] == fila4[0] && fila4[0] == fila5[0]) {
    $("#15 ,#22 ,#29").toggle("bounce", 500);
  }
  if (fila4[0] == fila5[0] && fila5[0] == fila6[0]) {
    $("#22 ,#29 ,#36").toggle("bounce", 500);
  }
  if (fila5[0] == fila6[0] && fila6[0] == fila7[0]) {
    $("#29 ,#36 ,#43").toggle("bounce", 500);
  }
  if (fila1[1] == fila2[1] && fila2[1] == fila3[1]) {
    $("#2 ,#9 ,#16").toggle("bounce", 500);
  }
  if (fila2[1] == fila3[1] && fila3[1] == fila4[1]) {
    $("#9 ,#16 ,#23").toggle("bounce", 500);
  }
  if (fila3[1] == fila4[1] && fila4[1] == fila5[1]) {
    $("#16 ,#23 ,#30").toggle("bounce", 500);
  }
  if (fila4[1] == fila5[1] && fila5[1] == fila6[1]) {
    $("#23 ,#30 ,#37").toggle("bounce", 500);
  }
  if (fila5[1] == fila6[1] && fila6[1] == fila7[1]) {
    $("#30 ,#37 ,#44").toggle("bounce", 500);
  }
  if (fila1[2] == fila2[2] && fila2[2] == fila3[2]) {
    $("#3 ,#10 ,#17").toggle("bounce", 500);
  }
  if (fila2[2] == fila3[2] && fila3[2] == fila4[2]) {
    $("#10 ,#17 ,#24").toggle("bounce", 500);
  }
  if (fila3[2] == fila4[2] && fila4[2] == fila5[2]) {
    $("#17 ,#24 ,#31").toggle("bounce", 500);
  }
  if (fila4[2] == fila5[2] && fila5[2] == fila6[2]) {
    $("#24 ,#31 ,#38").toggle("bounce", 500);
  }
  if (fila5[2] == fila6[2] && fila6[2] == fila7[2]) {
    $("#31 ,#38 ,#45").toggle("bounce", 500);
  }
  if (fila1[3] == fila2[3] && fila2[3] == fila3[3]) {
    $("#4 ,#11 ,#18").toggle("bounce", 500);
  }
  if (fila2[3] == fila3[3] && fila3[3] == fila4[3]) {
    $("#11 ,#18 ,#25").toggle("bounce", 500);
  }
  if (fila3[3] == fila4[3] && fila4[3] == fila5[3]) {
    $("#18 ,#25 ,#32").toggle("bounce", 500);
  }
  if (fila4[3] == fila5[3] && fila5[3] == fila6[3]) {
    $("#25 ,#32 ,#39").toggle("bounce", 500);
  }
  if (fila5[3] == fila6[3] && fila6[3] == fila7[3]) {
    $("#32 ,#39 ,#46").toggle("bounce", 500);
  }
  if (fila1[4] == fila2[4] && fila2[4] == fila3[4]) {
    $("#5 ,#12 ,#19").toggle("bounce", 500);
  }
  if (fila2[4] == fila3[4] && fila3[4] == fila4[4]) {
    $("#12 ,#19 ,#26").toggle("bounce", 500);
  }
  if (fila3[4] == fila4[4] && fila4[4] == fila5[4]) {
    $("#19 ,#26 ,#33").toggle("bounce", 500);
  }
  if (fila4[4] == fila5[4] && fila5[4] == fila6[4]) {
    $("#26 ,#33 ,#40").toggle("bounce", 500);
  }
  if (fila5[4] == fila6[4] && fila6[4] == fila7[4]) {
    $("#33 ,#40 ,#47").toggle("bounce", 500);
  }
  if (fila1[5] == fila2[5] && fila2[5] == fila3[5]) {
    $("#6 ,#13 ,#20").toggle("bounce", 500);
  }
  if (fila2[5] == fila3[5] && fila3[5] == fila4[5]) {
    $("#13 ,#20 ,#27").toggle("bounce", 500);
  }
  if (fila3[5] == fila4[5] && fila4[5] == fila5[5]) {
    $("#20 ,#27 ,#34").toggle("bounce", 500);
  }
  if (fila4[5] == fila5[5] && fila5[5] == fila6[5]) {
    $("#27 ,#34 ,#41").toggle("bounce", 500);
  }
  if (fila5[5] == fila6[5] && fila6[5] == fila7[5]) {
    $("#34 ,#41 ,#48").toggle("bounce", 500);
  }
  if (fila1[6] == fila2[6] && fila2[6] == fila3[6]) {
    $("#7 ,#14 ,#21").toggle("bounce", 500);
  }
  if (fila2[6] == fila3[6] && fila3[6] == fila4[6]) {
    $("#14 ,#21 ,#28").toggle("bounce", 500);
  }
  if (fila3[6] == fila4[6] && fila4[6] == fila5[6]) {
    $("#21 ,#28 ,#35").toggle("bounce", 500);
  }
  if (fila4[6] == fila5[6] && fila5[6] == fila6[6]) {
    $("#28 ,#35 ,#42").toggle("bounce", 500);
  }
  if (fila5[6] == fila6[6] && fila6[6] == fila7[6]) {
    $("#35 ,#42 ,#49").toggle("bounce", 500);
  }
}
//Funcion que sirve para ver cuales imagenes dejaron de estar visibles despues del efecto toggle.
function visible() {
  for (var i = 1; i < 50; i++) {
    var id = "#";
    var pos = i;
    //  console.log(id + pos);
    if ($(id + pos).is(":visible")) {
      //  console.log('Elemento visible');
    } else {
      var posMenos1 = pos - 1;
      //  console.log('Elemento oculto');
      $(id + pos).removeAttr("src");

    }
  }
};

/*function reemplazo(){
  if($("#1").length == 0) {
console.log("No existe");
}else{
  console.log("existe");
}
  };*/

// Con esto me doy cuenta si hay imagenes con la imagen visible.
function reemplazo() {

  var id = "#";
  var linea = 7;
  if ($(id + 7).is(":visible")) {
    //console.log("ESta el 7");
  }
  if ($(id + 6).is(":visible")) {
    //console.log("ESta el 6");
  }
  if ($(id + 5).is(":visible")) {
    //  console.log("ESta el 5");
  }
  if ($(id + 4).is(":visible")) {
    //  console.log("ESta el 4");
  }
  if ($(id + 3).is(":visible")) {
    //  console.log("ESta el 3");
  }
  if ($(id + 2).is(":visible")) {
    //console.log("ESta el 2");
  }
  if ($(id + 1).is(":visible")) {
    //console.log("ESta el 1");
  }

};









/*Puedes utilizar un setInterval

con un lapso de i segundo (1000)
 y que actualice el contador sumando uno

o restando 1

y haces una pequeña validación allí para que funciona
como un contador (dado que los segundos y minutos llegan sólo a 60)

*/



/*
Con JavaScript lo puedes hacer con ésta estructura:

// Comprobar usando el ID del elemento
if(document.getElementById("elemento")){/* Que hacer si existe } else { Que hacer si no existe }

// Comprobar usando el Class del elemento o cualquier otro atributo
if(document.querySelector(".elemento")){ Que hacer si existe } else { Que hacer si no existe }

Con JQuery lo puedes hacer así:

if($('#elemento').length) { Que hacer si existe  } else {* Que hacer si no existe }
*/


// tengo que crear una matriz para asignar los valores y poder comparar

//Quita el link de la imagen
//$("#7").removeAttr("src");


/*setInterval(function temporizador() {
      if (contador <=  59) {
        $("#timer").text(minutos + ":" + segundos);
        segundos = segundos - 1;
        contador = contador + 1;
        console.log(contador);
      }
      else if (contador = 60 ) {
        segundos = segundos + 59;
        contador = contador + 1;
      } else if (contador == 120) {
        minutos = 00;
        segundos = 00;
        //  $("#timer").text(minutos + ":" + segundos);
          //$("<h1 class='data-titulo'>Juego terminado</h1>").insertBefore($(".panel-score"));
      }

    }, 1000);
*/
