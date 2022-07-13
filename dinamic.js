import hamburgerMenu from "./menu_hamburguesa.js";
import contar from "./contar_caracteres.js";
import textocortado from "./texto_cortado.js";
import stringtoarray from "./stringtoarray.js";
import repetir from "./repetirtexto.js";
import invertirpalabras from "./invertir_palabras.js";
import palindromo from "./palindromo.js";
import delete_words from "./delete_words.js";
import num_random from "./num_random.js";
import newdegrees from "./newdegrees.js";
import parimpar from "./parimpar.js";
import vocalesyconsonantes from "./vocalesyconsonantes.js";
import arrayalcuadrado from "./arrayalcuadrado.js";
import scrolltop from "./boton_scroll.js";
const d= document;
d.addEventListener("DOMContentLoaded",(e)=>{   
    hamburgerMenu('.panel-btn','.panel','.menu a');
    contar();
    textocortado(); 
    stringtoarray(); 
    repetir();
    invertirpalabras();
    palindromo();
    delete_words();
    num_random();
    newdegrees();
    parimpar();
    vocalesyconsonantes();
    arrayalcuadrado();
    scrolltop('.btn','.fa-solid')  
});

