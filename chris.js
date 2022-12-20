// SEGUNDA ENTREGA
// PROMEDIO NOTA DE ALUMNOS 


class Promedio{

  constructor(n1 , n2 ){

      this.n1 = n1;
      this.n2 = n2;
      
  }

} 


let lista_promedio = [];

  for(let i = 0 ; i < 2 ; i = i + 1){

    let n1 = prompt("Ingrese primer nota : ");
    let n2 = prompt("Ingrese segunda nota : ");
    let num_promedio_listado = i+1;
    let pr = calcular_promedio(n1,n2)
    lista_promedio.push("Promedio n°"+ num_promedio_listado +" "+ pr);

}

console.log(lista_promedio)


function calcular_promedio(n1, n2){

  let promedio = (parseInt(n1) + parseInt(n2)) /2;

return promedio;

}

//BUENO LA IDEA ERA HACER ALGO MAS COMPLEJO, COMO HIZO EL PROFESOR EN EL AFTER, PERO SINCERAMENTE NO LO TERMINE DE ENTENDER BIEN, Y NO TUVE TIEMPO PARA PODER VER LA CLASE DE NUEVO COSA QUE VOY HACER AHORA EN EL PARATE DEL 21 AL 2 DE ENERO, TRATAR DE METERLE PILA LO MAXIMO POSIBLE. 