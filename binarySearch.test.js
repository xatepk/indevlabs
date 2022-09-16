const binarySearch = require('./binarySearch');
const generateTestData = require('./testUtils/generateTestData');


describe('check if binarySearch fn works correct', () => {
    const amountOfTests = Math.floor(Math.random() * 20 + 1);
    for (let i = 0; i <= amountOfTests; i++) {
        test(`test run ${i + 1}`, () => {
            const { arr, expectedResult } = generateTestData();
            const actualResult = binarySearch(arr);
            expect(actualResult).toEqual(expectedResult);
        });
    }
   
})
