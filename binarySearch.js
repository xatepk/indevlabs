function binarySearch(array){
    const sortedArray = array.sort((a, b) => a - b);
    const firstElement = sortedArray[0];

    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (start === end) {
            return firstElement + middle;
        }
        else if (sortedArray[middle] === (firstElement + middle)) {
            start = middle + 1;
        } 
        else  {
            end = middle;
        } 
    }
    return -1;
}
module.exports = binarySearch;