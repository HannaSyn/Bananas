const steps = [];
let result = 0;

const arr = [[36, 5, 46, 29, 13, 57, 24, 95],
            [82, 45, 14, 67, 34, 64, 43, 50],
            [87, 8, 76, 78, 88, 84, 3, 51],
            [54, 99, 32, 60, 76, 68, 39, 12],
            [26, 86, 94, 39, 95, 70, 34, 78]];

const oneArrLength = arr[0].length;

function getFirstStep() {
    let firstEl = [];
    for (let i = 0; i < arr.length; i++) {
        firstEl.push(arr[i][0]);
    }
    const biggestFirst = Math.max(...firstEl);
    const indexFirstArr = arr.findIndex(a => a.find(num => num === biggestFirst));
    steps.push([indexFirstArr, 0]);
    result = biggestFirst;
}

function go() {
    let lastStep = steps[steps.length - 1];
    maxValue(map(lastStep[0], lastStep[1]));
    if (steps.length < oneArrLength) {
        go();
    }
}

function map(row, col) {
    const newCol =  ++col;
    let minRow = row === 0 ? 0 : row - 1;
    let maxRow = row === (arr.length - 1) ? row : row + 1;
    let resultObj = {
        values: [],
        positions: []
    };

    for (let newRow = minRow; newRow <= maxRow; newRow++) {
        resultObj.values.push(arr[newRow][newCol]);
        resultObj.positions.push([newRow, newCol]);
    }
    
    return resultObj;
}

function maxValue(mapObj) {
    let max = mapObj.values[0]; 
    let index = 0;
    for (let i = 0; i < mapObj.values.length; i++) {
        if (mapObj.values[i] > max) {
            index = i;
            max = mapObj.values[i];
        }
    }
    result += max;
    steps.push(mapObj.positions[index]);
}

getFirstStep();
go();

console.log(steps, result);
