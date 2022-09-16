/**
 * @typedef {Object} GeneratedData
 * @property {number[]} arr - The X Coordinate
 * @property {number} expectedResult - The Y Coordinate
 */

/**
 * 1. Generate an array with random length in between 3 and 20 elements
 * 2. Generate value for array element index 0
 * 3. Defined index of element to remove
 * 4. Remove element from array and store it to expectedResult variable
 * 5. Shuffle array element
 * 
 * @returns {GeneratedData}
 */

function generateTestData () {
    const amounOfElements = Math.floor(Math.random() * 20) + 3;
    let firstElement = Math.floor(Math.random() * 20);

    const arr = Array.from({ length: amounOfElements }, (_, idx) => idx + firstElement);


    const indexElementForRemove = Math.floor(1 + Math.random() * (amounOfElements - 2));
    const [expectedResult] = arr.splice(indexElementForRemove, 1);
    arr.sort(() => Math.random() - 0.5);

    return { arr, expectedResult };  
}

module.exports = generateTestData;