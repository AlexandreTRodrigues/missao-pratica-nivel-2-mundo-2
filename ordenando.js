const trocaElementosArray = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const embaralhaArray = (array) => {
    array.sort(() => Math.random() - 0.5);
}

const bubbleSort = (array) => {
    let tamanho = array.length;
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let menor = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[menor]) {
          menor = j
        }
      }
      if (menor !== i) {
        [array[i], array[menor]] = [array[menor], array[i]]
      }
    }
    return array
  }

const quickSort = (array) => {    
    if(array.length === 1) {
        return array;
    }
    
    let pivot = array[array.length - 1];
    
    let leftArray = [];
    let rightArray = [];
    
    for(let i = 0; i < array.length - 1; i++) {
       if(array[i] < pivot) {
           leftArray.push(array[i]);
       } else {
           rightArray.push(array[i]);
       }
    }
    if(leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}

const quickSortPart = (array, index) => {    
    if(array.length === 1) {
        return array;
    }
    
    let pivot = array[index];
    
    let leftArray = [];
    let rightArray = [];
    
    for(let i = 0; i < array.length - 1; i++) {
       if(array[i] < pivot) {
           leftArray.push(array[i]);
       } else {
           rightArray.push(array[i]);
       }
    }
    if(leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}


  