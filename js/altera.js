var elemento = document.getElementById("aparece");


elemento.addEventListener("mouseover",lista);

var escondido = document.getElementById("escondido") ;

escondido.addEventListener("mouseout",tira);




function lista(){

	escondido.removeAttribute("id","escondido");
}
function tira(){
	escondido.setAttribute("id","escondido");
}
