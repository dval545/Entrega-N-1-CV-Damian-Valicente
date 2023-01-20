var botonImprimir = document.getElementById("boton_imprimir");
botonImprimir.onclick = () =>{
	window.print();
}


var listaExp =document.getElementById("lista_exp")

var botonExp = document.getElementById("boton_exp");
botonExp.addEventListener("click", ()=>{

    if(botonExp.innerText === "Ver información"){
        botonExp.innerText = "Ocultar información";
        listaExp.style.height = "100%";
        listaExp.style.visibility =  "visible";
    }else if (botonExp.innerText === "Ocultar información"){
        botonExp.innerText= "Ver información";
        listaExp.style.height = 0;
        listaExp.style.visibility =  "hidden";
    }
});

var listaExp2 = document.getElementById("lista_exp_2")

var botonExp2 = document.getElementById("boton_exp2");
botonExp2.addEventListener("click", ()=>{

    if(botonExp2.innerText === "Ver información"){
        botonExp2.innerText = "Ocultar información";
        listaExp2.style.height = "100%";
        listaExp2.style.visibility =  "visible";
    }else if(botonExp2.innerText === "Ocultar información"){
        botonExp2.innerText= "Ver información";
        listaExp2.style.height = 0;
        listaExp2.style.visibility =  "hidden";
    }
});


	
