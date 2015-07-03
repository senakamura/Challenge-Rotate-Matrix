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
  // console.log(matrix);
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  var thisMatrix = this.matrix;
  if(direction === Direction.CW){
    clockwise(thisMatrix);
  }
  if(direction === Direction.CCW){
    counterClockwise(thisMatrix);
  }
};

function clockwise (matrix){
  console.log('this is CW');
  console.log(matrix);
}

function counterClockwise(matrix){
  console.log('this is CCW');
}