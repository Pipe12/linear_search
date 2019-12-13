function  betterLinearSearch(array, item) {
  console.log("Better lienar search");
  console.log("El arreglo es: " + array);
  console.log("El item a encontrar: " + item);

  for (var i = 0; i < array.length; i++) {
    if (array[i] == item) {
      return i;
    }
  }
  return notFound_bls;
}

const elements_bls = [ 8, 4, 2, 50, 35];
const item_bls = 2;
const notFound_bls = "The item is not found";

console.log(betterLinearSearch(elements_bls, item_bls));
