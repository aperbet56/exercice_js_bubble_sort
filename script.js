// Créer un algorithme de tri à bulle (bubble sort)

const bubbleSort = (array) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
};

console.log(bubbleSort([13, 4, 1, 6, 5, 3])); // [1, 3, 4, 5, 6, 13]
console.log(bubbleSort([12, 10, 3, 7, 4])); // [ 3, 4, 7, 10, 12 ]
console.log(bubbleSort([69, 34, 43, 77, 46, 40, 44, 38, 14, 24, 21])); // [ 14, 21, 24, 34, 38, 40, 43, 44, 46, 69, 77]

// EXPLICATION DU CODE JS

/**
 * Etape 1 : Création de la fonction bubbleSort qui va gérer l'opération de tri à bulle.
 * Etape 2 : Création de la variable swapped pour suivre l’échange d’éléments dans l’itération en cours.
 * Etape 3 : Création d'une boucle « do-while » qui parcourt le tableau jusqu'à ce qu'il soit trié.
 * Etape 4 : Au début de chaque itération, définition la variable swapped sur false.
 * Etape 5 : Utilisation de la boucle for pour comparer des éléments adjacents. Intervertion des éléments s'ils ne sont pas dans le bon ordre et définition de la variable swapped sur true si un élément est interverti.
 * Etape 6 : Répétition de la boucle jusqu’à ce qu’il n’y ait plus d’éléments à échanger dans l’itération en cours.
 */
