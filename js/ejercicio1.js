const elementos = ["hola", 5, 33.3, true];

function transformarATipos(array = []){

    var elementosTransformados = [];

    for(var i = 0; i < array.length; i++){
        elementosTransformados += (typeof(array[i]) + " ");
    }

    return elementosTransformados;
}

console.log(transformarATipos(elementos));