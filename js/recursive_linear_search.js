function recursiveLinearSearch(array, itemToFound, index){
  if (index == array.length) {
    return notFound_rls;
  } else if(array[index] == itemToFound) {
    return index;
  } else {
    return recursiveLinearSearch(array, itemToFound, index + 1);
  }
}

const elements_rls = [ 8, 4, 2, 50, 35];
const indexArray = 0;
const item_rls = 50;
const notFound_rls = "The item is not found";

console.log("Recursive lienar search");
console.log("El arreglo es: " + elements_rls);
console.log("El item a encontrar: " + item_rls);

console.log(recursiveLinearSearch(elements_rls, item_rls, indexArray));
