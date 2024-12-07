// Imports
const fs = require('fs');
const csv = require('csv-parser');

// Set up variables
var arrayListOne  = [];
var arrayListTwo  = [];
var similarity    = 0;

// Get and read the CSV fool
fs.createReadStream('dataInput.csv')
  .pipe(csv())
  // Process each row of the files
  .on('data', (row) => {
    // Put each column into it's own array
    arrayListOne.push(parseInt(row['List One']));
    arrayListTwo.push(parseInt(row['List Two']));
  })
  // After the data is processed, work with the data
  .on('end', () => {
    for (var i = 0; i < arrayListOne.length; i++) {
      var numToCheck  = arrayListOne[i];
      var numInstance = 0;

      // Loop through the second array
      for (var j = 0; j < arrayListTwo.length; j++) {
        // Compare the numbers
        if (numToCheck == arrayListTwo[j]) {
          // If they're the same, add to the variable
          numInstance++
        }
      }

      // Set the similarity based on how many times the number appeared
      similarity += numToCheck * numInstance;
    }

    console.log(similarity);
    console.log('CSV file successfully processed :)');
  });