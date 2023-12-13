// Ejercicio 1: Retornar el array de autos
function mostrarInformacionAutos(autos) {
  return autos
}

// Ejercicio 2: Filtrar autos por marca
function filtrarPorMarca(autos, marca) {
  return autos.filter(auto => auto.marca === marca)
}

// Ejercicio 3: Calcular el precio promedio de todos los autos
function calcularPrecioPromedio(autos) {
    return autos.reduce((acc, val) => acc + val.precio, 0) / autos.length
  }

// Ejercicio 4: Encontrar el auto más caro
function encontrarAutoMasCaro(autos) {
  const autoMasCaro = autos.reduce((autoPrecioAlto, autoActual) => {
    return (autoActual.precio > autoPrecioAlto.precio) ? autoActual : autoPrecioAlto;
  });
  return autoMasCaro;
}

// Ejercicio 5: Incrementar el precio de todos los autos en un 10%
function incrementarPrecio(autos) {
  const porcentaje = autos.map(autoPrecio => autoPrecio.precio * 1.10);

  return porcentaje;
}

// Ejercicio 6: Encontrar el auto con el menor kilometraje
function encontrarAutoMenorKilometraje(autos) {
  const menorKilometraje = autos.reduce((autoMenorKm, autoActual) => {
  return (autoActual.kilometraje < autoMenorKm.kilometraje) ? autoActual : autoMenorKm;
  });
  return menorKilometraje
}


// Ejercicio 7: Ordenar autos por precio de menor a mayor y devolver un array con los precios
function ordenarPorPrecio(autos) {
  const autosOrdenados = autos.slice().sort((auto1, auto2) => auto1.precio - auto2.precio);
  const preciosOrdenados = autosOrdenados.map(auto => auto.precio);
  return preciosOrdenados;
}


// Ejercicio 8: Obtener un array con las marcas únicas de los autos
function obtenerMarcasUnicas(autos) {
    const marcaUnicas = obtenerMarcasUnicas();
}

// Ejercicio 9: Filtrar autos por rango de precios
function filtrarPorRangoDePrecio() {

}

// Ejercicio 10: Calcular el total de kilometraje de todos los autos
function calcularTotalKilometraje() {

}



// No tocar este exports. Es para el test
module.exports = {
  mostrarInformacionAutos,
  filtrarPorMarca,
  calcularPrecioPromedio,
  encontrarAutoMasCaro,
  incrementarPrecio,
  encontrarAutoMenorKilometraje,
  ordenarPorPrecio,
  obtenerMarcasUnicas,
  filtrarPorRangoDePrecio,
  calcularTotalKilometraje
};