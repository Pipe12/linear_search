function  linearSearch(array, item) {
  console.log("Lienar search");
  console.log("El arreglo es: " + array);
  console.log("El item a encontrar: " + item);

  let answer = "Not found";

  for (var i = 0; i < array.length; i++) {
    if (array[i] == item) {
      answer = i;
    }
  }
  return answer;
}

const elements_ls = [ 8, 4, 2, 50, 35];
const item_ls = 50;
const notFound_ls = "The item is not found";

console.log(linearSearch(elements_ls, item_ls));
