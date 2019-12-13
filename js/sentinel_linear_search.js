function sentinelLinearSearch(array, item) {
  console.log("Sentinel lienar search");
  console.log("El arreglo es: " + array);
  console.log("El item a encontrar: " + item);

  const last = array[array.length - 1];
  array[array.length - 1] = item;

  var i = 0;
  while(array[i] != item){
    i++;
  }

  array[array.length - 1] = last;

  if (i < array.length - 1 || array[array.length - 1] == item) {
    return i;
  } else {
    return notFound_sls;
  }
}

const elements_sls = [ 8, 4, 2, 50, 35];
const item_sls = 4;
const notFound_sls = "The item is not found";

console.log(sentinelLinearSearch(elements_sls, item_sls));
