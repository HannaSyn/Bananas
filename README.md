# Bananas

[CodePen](https://codepen.io/RybkaSyn/pen/WNoqOLX?editors=0012)

My thought process:

1. Determine the first step

  - Select all first elements from each array
  - Choose the largest of them
  - Determine the index of an array with this element


2. Describe the possible step map (row and column)


  - Find column of next item
  - Determine the maximum and minimum possible row
  - Based on the found indexes, select values from an array and create a map from them


3. Find the maximum value from the map
4. Repeat steps 2 and 3 for all subsequent elements
