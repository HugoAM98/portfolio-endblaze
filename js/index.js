const contenedorPresentacion = document.getElementById("presentacion");
const contenedorContenido = document.getElementById("contenido");
const botones = document.getElementsByClassName("nav__item");
const iconos = document.getElementsByTagName("i");
var contenido;

gsap.from(".contenedor", {
    width:"0em",
    duration: 2,
});

for(i = 0;i<iconos.length;i++){
    iconos[i].addEventListener("click", function(){
        for(i = 0;i<botones.length;i++){
            if(iconos[i]!=this){
            iconos[i].classList.remove("icon-active");
            }
        }

        contenido = this;

        if(this.classList.contains("icon-active")){
            this.classList.remove("icon-active");
            contenedorContenido.classList.remove("contenedor__contenido-active");
            eliminarHijos(contenedorContenido);
        }else{
            this.classList.add("icon-active")
            if(!contenedorContenido.classList.contains("contenedor__contenido-active")){
                contenedorContenido.classList.add("contenedor__contenido-active");
                controladorContenido(contenido);
            }else{
                contenedorContenido.classList.remove("contenedor__contenido-active");
                eliminarHijos(contenedorContenido);
                setTimeout(function(){ 
                    contenedorContenido.classList.add("contenedor__contenido-active");
                    controladorContenido(contenido);
                }, 500);
            }
        }
    });
}

function eliminarHijos(contenedorContenido) {
    var padre = contenedorContenido;
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}

function controladorContenido(contenido){ 
        switch(contenido){
            case iconos[0]:
                var div = document.createElement("div");
                var div2 = document.createElement("div");
                var onda = document.createElement("div");
                var h1 = document.createElement("h1");
                h1.textContent = "Proyectos";
                div.className = "videos";
                onda.className = "onda";
                div2.className = "proyectosCabecera";
                div2.appendChild(h1);
                div.appendChild(div2);
                div.appendChild(onda);
                var arrayTituloVideos = ["Proyecto videojuego Zelda","Diseño de personaje - Luchador","Juego de plataformas 2D"];
                var arraysubituloVideos = ["En Unity3D","En Blender","En Unity3D"];
                var arrayUrlVideos = ["https://www.youtube.com/embed/nlWNzhVGhDA","https://www.youtube.com/embed/t-APJZeK2SM","https://www.youtube.com/embed/GbmRt0wydQU"]; //TODO: reemplazar por embed.
                var arrayEnlaceDescarga = ["#"];

                crearVideos(div,arrayTituloVideos,arraysubituloVideos,arrayUrlVideos);
            break;
            case iconos[1]:
                var div = document.createElement("div");
                crearFormacion(div);
                crearHabilidades(div);
                crearExperiencia(div);
            break;
            case iconos[2]:
                var div = document.createElement("div");
                div.className= "about";
                crearSobreMi(div);
                contenedorContenido.appendChild(div);
            break;
            case iconos[3]:
                
            break;
        }
}

function crearVideos(div,arrayTituloVideos,arraysubituloVideos,arrayUrlVideos){
    for(var i=0; i<arrayTituloVideos.length; i++){
        var div2 = document.createElement("div");
        var iframe = document.createElement("iframe");
        var enlace = document.createElement("a");
        iframe.setAttribute("src",arrayUrlVideos[i]);
        iframe.frameBorder=0;
        iframe.width="600px";
        iframe.height="400px";
        iframe.classList="iframe";
        
        div2.className = "video";
        var titulo = document.createElement("h2");
        var subtitulo = document.createElement("h3");
        
        titulo.className = "titulo";
        subtitulo.className = "titulo";
        titulo.textContent = arrayTituloVideos[i];
        subtitulo.textContent = arraysubituloVideos[i];
        enlace.href = "#" //TODO: direccion de la descarga
        enlace.textContent = "> Descarga la demo de los fuentes <"
        div2.appendChild(titulo);
        div2.appendChild(subtitulo);
        div2.appendChild(iframe);
        div2.appendChild(enlace);
        div.appendChild(div2);
        contenedorContenido.appendChild(div);
        }

        //! animacion titulos:
        const texto = gsap.utils.toArray(".titulo");
        texto.forEach((text,i) => {
            gsap.to("titulo",{
                scrollTrigger: {
                    scroller: contenedorContenido,
                    trigger: text,
                    start: "top 90%",
                    end: "top 5%",
                    toggleClass:"titulo-active",
                    markers: false
                },
            })
        })

        //! animacion videos:
        const reproductor = gsap.utils.toArray("iframe");
        reproductor.forEach((text,y) => {
            gsap.to("iframe",{
                scrollTrigger: {
                    scroller: contenedorContenido,
                    trigger: text,
                    start: "top 90%",
                    end: "bottom 25%",
                    toggleClass:"video-active",
                    markers: false
                },
            })
        })
}

function crearFormacion(div){
    var arrayTitulacion = ["MasterD:","CFGS Informatica y Comunicaciones -","CFGS Informatica y Comunicaciones -","BAC -"];
    var arrayNombreTitulo = [" Programación con motores gráficos: Unity 3D.","Desarrollo de Aplicaciones Web.","Desarrollo de Aplicaciones Multiplataforma.","Modalidad de Ciencias."];
    var arrayFecha = ["2021 - 2022","2019 - 2020","2017 - 2019","2015 - 2017"];
    var divListas = document.createElement("div");
    var divFormacion = document.createElement("div");
    var h1 = document.createElement("h1");

    h1.textContent = "Formación";

    for(var i=0; i<arrayTitulacion.length; i++){
    var li = document.createElement("li");
    var span = document.createElement("span");
    var strong = document.createElement("strong");
    var strong1 = document.createElement("strong");
    var ul = document.createElement("ul");

    
    strong.textContent = arrayFecha[i];
    strong1.textContent = arrayTitulacion[i];
    span.textContent = arrayNombreTitulo[i];

    divListas.className = "divListas";

    divFormacion.appendChild(h1);
    divListas.appendChild(strong);
    divListas.appendChild(ul);
    li.appendChild(strong1);
    li.appendChild(span);
    ul.appendChild(li);
    }
    divFormacion.className = "formacion";

    divFormacion.appendChild(divListas);
    div.appendChild(divFormacion);
    contenedorContenido.appendChild(div);
}

function crearHabilidades(div){
    //? Porcentajes
    var arrayPorcentajeL = [90,70,90,80,90];
    var arrayPorcentajeE = [90,70,90,80,90];
    var arrayPorcentajeM = [90,70,90,80,90];
    var arrayPorcentajeBD = [90,70,90,80,90];
    //? Titulos
    var arrayEncabezado = ["Lenguajes de Programación","Entornos de Desarrollo","Lenguaje de Etiquetas","Bases de Datos"];
    //? Tecnologías
    var arrayLenguajes = ["c#","javascript","java","php","python"];
    var arrayEntornos = ["Unity3D","Visual Studio","Blender","Android Studio"];
    var arrayMarcado = ["css","html","xml"];
    var arrayBD = ["MySQL","Oracle","MariaDB","SQLite","phpmyadmin"];

    var titulo = document.createElement("h1");
    var divHabilidades = document.createElement("div");
    const svgURL = "http://www.w3.org/2000/svg";
    titulo.textContent = "Habilidades";

    divHabilidades.appendChild(titulo);
    for(var y = 0; y < arrayEncabezado.length; y++){
        var titulo1 = document.createElement("h1");
        var divTecnologias = document.createElement("div");
        titulo1.textContent = arrayEncabezado[y];
        divTecnologias.className = "tecnologias";
        divTecnologias.classList += " tecnologias" + y;
        divHabilidades.appendChild(titulo1);
        switch(y){
            case 0:
                //mostrarLenguajes(divTecnologias,divHabilidades,svgURL,arrayPorcentajeL,arrayLenguajes);
                for(var i=0; i<arrayLenguajes.length; i++){
                    var divCarta = document.createElement("div");
                    var divCaja = document.createElement("div");
                    var divPorcentaje = document.createElement("div");
                    var svg = document.createElementNS(svgURL,"svg");
                    var circulo1 = document.createElementNS(svgURL,"circle");
                    var circulo2 = document.createElementNS(svgURL,"circle");
                    var divNumero = document.createElement("div");
                    var h2 = document.createElement("h2");
                    var span = document.createElement("span");
                    var h3 = document.createElement("h3");
            
                    divHabilidades.className = "habilidades";
                    divCarta.className = "carta";
                    divCaja.className = "caja";
                    divPorcentaje.className = "porcentaje";
            
                    circulo1.setAttributeNS(null,"cx",70);
                    circulo1.setAttributeNS(null,"cy",70);
                    circulo1.setAttributeNS(null,"r",70);
                    circulo2.setAttributeNS(null,"cx",70);
                    circulo2.setAttributeNS(null,"cy",70);
                    circulo2.setAttributeNS(null,"r",70);
                    divNumero.className = "numero";
                    h3.className = "texto";
            
                    h2.textContent = arrayPorcentajeL[i];
                    span.textContent = "%";
                    h3.textContent = arrayLenguajes[i];
                    
                    divTecnologias.appendChild(divCarta);
                    divCarta.appendChild(divCaja);
                    divCaja.appendChild(divPorcentaje);
                    divCaja.appendChild(h3);
                    svg.appendChild(circulo1);
                    svg.appendChild(circulo2);
                    divPorcentaje.appendChild(svg);
                    divPorcentaje.appendChild(divNumero);
                    divNumero.appendChild(h2);
                    h2.appendChild(span);
                    divHabilidades.appendChild(divTecnologias);
                }
                div.appendChild(divHabilidades);
                /*// ! animación cartas
                const cartas = gsap.utils.toArray("h1");
                cartas.forEach((carta,y) => {
                gsap.from(".carta",{
                    scrollTrigger: {
                        scroller: contenedorContenido,
                        trigger: carta,
                        start: "0% 30%",
                        end: "top 100%",
                        markers: true,
                    },
                    duracion:2,
                    opacity:0,
                    left:-100
                });
            })*/
                break;
            case 1:
                //mostrarEntornos;
                for(var z=0; z < arrayEntornos.length; z++){
                    var divCarta = document.createElement("div");
                    var divCaja = document.createElement("div");
                    var divPorcentaje = document.createElement("div");
                    var svg = document.createElementNS(svgURL,"svg");
                    var circulo1 = document.createElementNS(svgURL,"circle");
                    var circulo2 = document.createElementNS(svgURL,"circle");
                    var divNumero = document.createElement("div");
                    var h2 = document.createElement("h2");
                    var span = document.createElement("span");
                    var h3 = document.createElement("h3");
            
                    divHabilidades.className = "habilidades";
                    divCarta.className = "carta";
                    divCaja.className = "caja";
                    divPorcentaje.className = "porcentaje";
            
                    circulo1.setAttributeNS(null,"cx",70);
                    circulo1.setAttributeNS(null,"cy",70);
                    circulo1.setAttributeNS(null,"r",70);
                    circulo2.setAttributeNS(null,"cx",70);
                    circulo2.setAttributeNS(null,"cy",70);
                    circulo2.setAttributeNS(null,"r",70);
                    divNumero.className = "numero";
                    h3.className = "texto";
            
                    h2.textContent = arrayPorcentajeE[z];
                    span.textContent = "%";
                    h3.textContent = arrayEntornos[z];
            
                    divTecnologias.appendChild(divCarta);
                    divCarta.appendChild(divCaja);
                    divCaja.appendChild(divPorcentaje);
                    divCaja.appendChild(h3);
                    svg.appendChild(circulo1);
                    svg.appendChild(circulo2);
                    divPorcentaje.appendChild(svg);
                    divPorcentaje.appendChild(divNumero);
                    divNumero.appendChild(h2);
                    h2.appendChild(span);
                    divHabilidades.appendChild(divTecnologias);
                }
                break;
            case 2:
                //mostrarMarcados;
                for(var x=0; x < arrayMarcado.length; x++){
                    var divCarta = document.createElement("div");
                    var divCaja = document.createElement("div");
                    var divPorcentaje = document.createElement("div");
                    var svg = document.createElementNS(svgURL,"svg");
                    var circulo1 = document.createElementNS(svgURL,"circle");
                    var circulo2 = document.createElementNS(svgURL,"circle");
                    var divNumero = document.createElement("div");
                    var h2 = document.createElement("h2");
                    var span = document.createElement("span");
                    var h3 = document.createElement("h3");
            
                    divHabilidades.className = "habilidades";
                    divCarta.className = "carta";
                    divCaja.className = "caja";
                    divPorcentaje.className = "porcentaje";
            
                    circulo1.setAttributeNS(null,"cx",70);
                    circulo1.setAttributeNS(null,"cy",70);
                    circulo1.setAttributeNS(null,"r",70);
                    circulo2.setAttributeNS(null,"cx",70);
                    circulo2.setAttributeNS(null,"cy",70);
                    circulo2.setAttributeNS(null,"r",70);
                    divNumero.className = "numero";
                    h3.className = "texto";
            
                    h2.textContent = arrayPorcentajeM[x];
                    span.textContent = "%";
                    h3.textContent = arrayMarcado[x];
            
                    divTecnologias.appendChild(divCarta);
                    divCarta.appendChild(divCaja);
                    divCaja.appendChild(divPorcentaje);
                    divCaja.appendChild(h3);
                    svg.appendChild(circulo1);
                    svg.appendChild(circulo2);
                    divPorcentaje.appendChild(svg);
                    divPorcentaje.appendChild(divNumero);
                    divNumero.appendChild(h2);
                    h2.appendChild(span);
                    divHabilidades.appendChild(divTecnologias);
                }
                break;
            case 3:
                //mostrarBD;
                for(var k =0; k < arrayBD.length; k++){
                    var divCarta = document.createElement("div");
                    var divCaja = document.createElement("div");
                    var divPorcentaje = document.createElement("div");
                    var svg = document.createElementNS(svgURL,"svg");
                    var circulo1 = document.createElementNS(svgURL,"circle");
                    var circulo2 = document.createElementNS(svgURL,"circle");
                    var divNumero = document.createElement("div");
                    var h2 = document.createElement("h2");
                    var span = document.createElement("span");
                    var h3 = document.createElement("h3");
            
                    divHabilidades.className = "habilidades";
                    divCarta.className = "carta";
                    divCaja.className = "caja";
                    divPorcentaje.className = "porcentaje";
            
                    circulo1.setAttributeNS(null,"cx",70);
                    circulo1.setAttributeNS(null,"cy",70);
                    circulo1.setAttributeNS(null,"r",70);
                    circulo2.setAttributeNS(null,"cx",70);
                    circulo2.setAttributeNS(null,"cy",70);
                    circulo2.setAttributeNS(null,"r",70);
                    divNumero.className = "numero";
                    h3.className = "texto";
            
                    h2.textContent = arrayPorcentajeBD[k];
                    span.textContent = "%";
                    h3.textContent = arrayBD[k];
            
                    divTecnologias.appendChild(divCarta);
                    divCarta.appendChild(divCaja);
                    divCaja.appendChild(divPorcentaje);
                    divCaja.appendChild(h3);
                    svg.appendChild(circulo1);
                    svg.appendChild(circulo2);
                    divPorcentaje.appendChild(svg);
                    divPorcentaje.appendChild(divNumero);
                    divNumero.appendChild(h2);
                    h2.appendChild(span);
                    divHabilidades.appendChild(divTecnologias);
                }
                break;
        }
    }
}

function crearExperiencia(div){
    var experiencia = document.createElement("div");
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var btn = document.createElement("a");

    h1.textContent = "Experiencia";
    h2.textContent = "BeLocal – Convenio en prácticas (3 meses).";
    li1.textContent = "Desarrollo de un programa en Java para mostrar datos en gráficos.";
    li2.textContent = "Apoyo en diversas labores diarias de la empresa.";
    btn.textContent = ">> Descarga mi CV <<";

    btn.setAttribute("href","/download/CV.pdf");
    btn.setAttribute("download","CV-PabloFP");
    experiencia.classList = "experiencia";

    experiencia.appendChild(h1);
    experiencia.appendChild(h2);
    experiencia.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);

    experiencia.appendChild(btn);
    div.appendChild(experiencia);

}

function crearSobreMi(div){
    var h1 = document.createElement("h1");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");

    h1.textContent = "Sobre mi";
    p1.textContent = "Mi meta en el mundo laboral es llegar a ser un buen programador de videojuegos. No tengo inconvenientes en formarme en otros campos de la informática para llegar a mi objetivo final. En mi opinión, lo importante es estar en constante crecimiento personal, por eso me fijo metas como hacer pequeños proyectos o dedicar parte del tiempo a seguir aprendiendo inglés.";

    p2.textContent = "Ahora hablando sobre quién soy, de manera más personal, podría decir que me dejo mecer fácilmente por el poder de la imaginación. A menudo me quedo en babia pensando en mundos de fantasía o en lugares remotos del mundo real. Por este motivo es que entre mis hobbies favoritos están jugar videojuegos y ver anime. También disfruto muchísimo una buena caminata o visitar lugares nuevos si estoy en buena compañía.";

    legend.appendChild(h1);
    fieldset.appendChild(legend);
    fieldset.appendChild(p1);
    fieldset.appendChild(p2);
    div.appendChild(fieldset);
}

/*function mostrarLenguajes(div,divTecnologias,divHabilidades,svgURL,arrayPorcentajeL,arrayLenguajes){
    for(var i=0; i<arrayLenguajes.length; i++){
        var divCarta = document.createElement("div");
        var divCaja = document.createElement("div");
        var divPorcentaje = document.createElement("div");
        var svg = document.createElementNS(svgURL,"svg");
        var circulo1 = document.createElementNS(svgURL,"circle");
        var circulo2 = document.createElementNS(svgURL,"circle");
        var divNumero = document.createElement("div");
        var h2 = document.createElement("h2");
        var span = document.createElement("span");
        var h3 = document.createElement("h3");

        divHabilidades.className = "habilidades";
        divCarta.className = "carta";
        divCaja.className = "caja";
        divPorcentaje.className = "porcentaje";

        circulo1.setAttributeNS(null,"cx",70);
        circulo1.setAttributeNS(null,"cy",70);
        circulo1.setAttributeNS(null,"r",70);
        circulo2.setAttributeNS(null,"cx",70);
        circulo2.setAttributeNS(null,"cy",70);
        circulo2.setAttributeNS(null,"r",70);
        divNumero.className = "numero";
        h3.className = "texto";

        h2.textContent = arrayPorcentajeL[i];
        span.textContent = "%";
        h3.textContent = arrayLenguajes[i];
        
        divTecnologias.appendChild(divCarta);
        divCarta.appendChild(divCaja);
        divCaja.appendChild(divPorcentaje);
        divCaja.appendChild(h3);
        svg.appendChild(circulo1);
        svg.appendChild(circulo2);
        divPorcentaje.appendChild(svg);
        divPorcentaje.appendChild(divNumero);
        divNumero.appendChild(h2);
        h2.appendChild(span);
        divHabilidades.appendChild(divTecnologias);
    }
    div.appendChild(divHabilidades);
}

function mostrarEntornos(){
    for(var z=0; z < arrayEntornos.length; z++){
        var divCarta = document.createElement("div");
        var divCaja = document.createElement("div");
        var divPorcentaje = document.createElement("div");
        var svg = document.createElementNS(svgURL,"svg");
        var circulo1 = document.createElementNS(svgURL,"circle");
        var circulo2 = document.createElementNS(svgURL,"circle");
        var divNumero = document.createElement("div");
        var h2 = document.createElement("h2");
        var span = document.createElement("span");
        var h3 = document.createElement("h3");

        divHabilidades.className = "habilidades";
        divCarta.className = "carta";
        divCaja.className = "caja";
        divPorcentaje.className = "porcentaje";

        circulo1.setAttributeNS(null,"cx",70);
        circulo1.setAttributeNS(null,"cy",70);
        circulo1.setAttributeNS(null,"r",70);
        circulo2.setAttributeNS(null,"cx",70);
        circulo2.setAttributeNS(null,"cy",70);
        circulo2.setAttributeNS(null,"r",70);
        divNumero.className = "numero";
        h3.className = "texto";

        h2.textContent = arrayPorcentajeE[z];
        span.textContent = "%";
        h3.textContent = arrayEntornos[z];

        divTecnologias.appendChild(divCarta);
        divCarta.appendChild(divCaja);
        divCaja.appendChild(divPorcentaje);
        divCaja.appendChild(h3);
        svg.appendChild(circulo1);
        svg.appendChild(circulo2);
        divPorcentaje.appendChild(svg);
        divPorcentaje.appendChild(divNumero);
        divNumero.appendChild(h2);
        h2.appendChild(span);
        divHabilidades.appendChild(divTecnologias);
    }
}

function mostrarMarcados(){
    for(var x=0; x < arrayMarcado.length; x++){
        var divCarta = document.createElement("div");
        var divCaja = document.createElement("div");
        var divPorcentaje = document.createElement("div");
        var svg = document.createElementNS(svgURL,"svg");
        var circulo1 = document.createElementNS(svgURL,"circle");
        var circulo2 = document.createElementNS(svgURL,"circle");
        var divNumero = document.createElement("div");
        var h2 = document.createElement("h2");
        var span = document.createElement("span");
        var h3 = document.createElement("h3");

        divHabilidades.className = "habilidades";
        divCarta.className = "carta";
        divCaja.className = "caja";
        divPorcentaje.className = "porcentaje";

        circulo1.setAttributeNS(null,"cx",70);
        circulo1.setAttributeNS(null,"cy",70);
        circulo1.setAttributeNS(null,"r",70);
        circulo2.setAttributeNS(null,"cx",70);
        circulo2.setAttributeNS(null,"cy",70);
        circulo2.setAttributeNS(null,"r",70);
        divNumero.className = "numero";
        h3.className = "texto";

        h2.textContent = arrayPorcentajeM[x];
        span.textContent = "%";
        h3.textContent = arrayMarcado[x];

        divTecnologias.appendChild(divCarta);
        divCarta.appendChild(divCaja);
        divCaja.appendChild(divPorcentaje);
        divCaja.appendChild(h3);
        svg.appendChild(circulo1);
        svg.appendChild(circulo2);
        divPorcentaje.appendChild(svg);
        divPorcentaje.appendChild(divNumero);
        divNumero.appendChild(h2);
        h2.appendChild(span);
        divHabilidades.appendChild(divTecnologias);
    }
}

function mostrarBD(){
    for(var k =0; k < arrayBD.length; k++){
        var divCarta = document.createElement("div");
        var divCaja = document.createElement("div");
        var divPorcentaje = document.createElement("div");
        var svg = document.createElementNS(svgURL,"svg");
        var circulo1 = document.createElementNS(svgURL,"circle");
        var circulo2 = document.createElementNS(svgURL,"circle");
        var divNumero = document.createElement("div");
        var h2 = document.createElement("h2");
        var span = document.createElement("span");
        var h3 = document.createElement("h3");

        divHabilidades.className = "habilidades";
        divCarta.className = "carta";
        divCaja.className = "caja";
        divPorcentaje.className = "porcentaje";

        circulo1.setAttributeNS(null,"cx",70);
        circulo1.setAttributeNS(null,"cy",70);
        circulo1.setAttributeNS(null,"r",70);
        circulo2.setAttributeNS(null,"cx",70);
        circulo2.setAttributeNS(null,"cy",70);
        circulo2.setAttributeNS(null,"r",70);
        divNumero.className = "numero";
        h3.className = "texto";

        h2.textContent = arrayPorcentajeBD[k];
        span.textContent = "%";
        h3.textContent = arrayBD[k];

        divTecnologias.appendChild(divCarta);
        divCarta.appendChild(divCaja);
        divCaja.appendChild(divPorcentaje);
        divCaja.appendChild(h3);
        svg.appendChild(circulo1);
        svg.appendChild(circulo2);
        divPorcentaje.appendChild(svg);
        divPorcentaje.appendChild(divNumero);
        divNumero.appendChild(h2);
        h2.appendChild(span);
        divHabilidades.appendChild(divTecnologias);
    }
}*/