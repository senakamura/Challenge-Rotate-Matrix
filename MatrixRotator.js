/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  var matrix = this.matrix;
  var newMatrix = [];
  if(direction === Direction.CW){
    for (var i = 0; i < matrix.length; i++){
      var temp = [];
      for (var j = 0; j < matrix[i].length; j++){
        temp.unshift(matrix[j][i]);
      }
      newMatrix.push(temp);
    }
    console.log(newMatrix);
  }

  if(direction === Direction.CCW){
    for (var i = 0; i < matrix.length; i++){
      var temp = [];
      for (var j = 0; j < matrix[i].length; j++){
        temp.push(matrix[j][i]);
      }
      newMatrix.unshift(temp);
    }
  }

  this.matrix = newMatrix;
};
