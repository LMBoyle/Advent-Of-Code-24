// Imports
const fs = require('fs');
const csv = require('csv-parser');

// Set up variables
var arrayListOne = [];
var arrayListTwo = [];
var total = 0;

// Get and read the CSV
fs.createReadStream('dataInput.csv')
  .pipe(csv())
  .on('data', (row) => {
    arrayListOne.push(parseInt(row['List One']));
    arrayListTwo.push(parseInt(row['List Two']));
  })
  .on('end', () => {
    arrayListOne.sort((a, b) => a - b);
    arrayListTwo.sort((a, b) => a - b);

    for (var i = 0; i < arrayListOne.length; i++) {
      var dis = Math.abs(arrayListOne[i] - arrayListTwo[i]);
      total += dis;
    }

    console.log(total);
    console.log('CSV file successfully processed');
  });