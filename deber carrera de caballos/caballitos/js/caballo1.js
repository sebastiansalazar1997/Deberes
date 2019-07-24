function Caballo(nombre, edad){
    //propiedades
    this.nombre=nombre;
    this.edad =edad;
    this.totalRecorrido =[];

//metodos
this.avanzar = avanzar;
this.obtenerTotalRecorrido = obtenerTotalRecorrido;

}

function obtenerTotalRecorrido(){
    var total =  this.totalRecorrido.reduce(sumar);
    return total;
}
function avanzar(){
    console.log("estoy avanzando ahora");
    var distancia = Math.floor(Math.random() * 6)+1;
        this.totalRecorrido.push(distancia);
        console.log(this.nombre +"avanzó" + distancia);
    return distancia;
}

function sumar(sumaTotal, recorrido){
    return sumaTotal + recorrido;
}
