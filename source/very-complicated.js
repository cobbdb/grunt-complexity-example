/**
 * One very complex function.
 */
function StoogeSort(arr, i, j) {
    i = i || 0;
    j = j || arr.length - 1;

    var swap = function (a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };

    if (arr[j] < arr[i]) {
        swap(i, j);
    }

    if (j - i + 1 >= 3) {
        var temp = (j - i + 1) / 3;
        StoogeSort(arr, i, j - temp);
        StoogeSort(arr, i + temp, j);
        StoogeSort(arr, i, j - temp);
    }
    
    return arr;
}
