What is Grid?

1. define number of rows and columns which will form a grid and place your elements anywhere inside this grid. 

2. grid-template-column is a CSS grid property which enables you to split the container into several grid units.
Use auto for auto width.

ex: grid-template-columns: 
- 100px auto fr1;
- repeat(2, 300px) auto;

NOTE: There should be no gap after he word "repeat".  repeat(5, 300px);

3. Use span to give an item "auto" width in relation with other elements

Ex: 
.item2 {
    grid-column: span 2;
    grid-row: span 2;
}
