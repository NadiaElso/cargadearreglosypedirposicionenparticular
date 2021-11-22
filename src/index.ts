//Escribir una función que permita al usuario ingresar 5 numeros
//y sus correspondientes notas
//de matemáticas, física y biología en 4 arreglos distintos
//Una vez finalizada la carga el usuarios debe poder pedir el nombre
//y las notas para una posición
// en particular
function ingresar(index: number) {
  let chequear: number;
  chequear = 0;
  let nombres: any[] = new Array(5);
  nombres[index] = "";
  for (let index = 0; index < nombres.length; index++) {
    nombres[index] = prompt("Ingresar nombres de alumnos");
  }
  let matematica: any[] = new Array(5);
  matematica[index] = 0;
  for (let index = 0; index < matematica.length; index++) {
    matematica[index] = prompt("Ingresar notas de matematica");
  }
  let fisica: any[] = new Array(5);
  fisica[index] = 0;
  for (let index = 0; index < fisica.length; index++) {
    fisica[index] = prompt("Ingresar notas de fisica");
  }
  let biologia: any[] = new Array(5);
  biologia[index] = 0;
  for (let index = 0; index < biologia.length; index++) {
    biologia[index] = prompt("Ingresar notas de  biología ");
  }
  chequear = Number(prompt("Ingrese index"));
  if (chequear === index) {
    console.log(
      `El nombre en el index '${[index]}'es: '${
        nombres[index]
      }', la nota son: matemática'${matematica[index]}',física'${
        fisica[index]
      }', y biología'${biologia[index]}'`
    );
  }
  return ingresar;
}
ingresar(0);