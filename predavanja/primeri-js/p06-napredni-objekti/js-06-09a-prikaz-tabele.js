/*
 The project is this: we will write a program that, given an array of arrays of table cells, 
 builds up a string that contains a nicely laid out table—meaning that the columns are 
 straight and the rows are aligned.
 
 The way our table-building system will work is that the builder function will ask each cell 
 how wide and high it wants to be and then use this information to determine the width of the 
 columns and the height of the rows. The builder function will then ask the cells to draw 
 themselves at the correct size and assemble the results into a single string.

The layout program will communicate with the cell objects through a well-defined interface. 

That way, the types of cells that the program supports is not fixed in advance. 
We can add new cell styles later—for example, underlined cells for table headers—and 
if they support our interface, they will just work, without requiring changes to the layout program.

This is the interface:

 minHeight() returns a number indicating the minimum height this cell requires (in lines).

 minWidth() returns a number indicating this cell’s minimum width (in characters).

 draw(width, height) returns an array of length height, which contains a series of strings that are each width characters wide
*/

/*
The first part of the program computes arrays of minimum column widths and row heights for a grid of cells. 
The rows variable will hold an array of arrays, with each inner array representing a row of cells.
*/

function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function (block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function (_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function () {
  return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

var rows = [];
for (var i = 0; i < 5; i++) {
  var row = [];
  for (var j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0)
      row.push(new TextCell("##"));
    else
      row.push(new TextCell("  "));
  }
  rows.push(row);
}

console.log(rows);
console.log(drawTable(rows));
// → ##    ##    ##
//      ##    ##
//   ##    ##    ##
//      ##    ##
//   ##    ##    ##