/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  for(var col = 0; col < n; col++){ 
    for(var row = 0; row < n; row++){
      board.togglePiece(row,col);
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(row,col); 
      }
    }
  }
  
  var solution = board.rows();

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;
  var recurse = function(matrix, depth = 0) {
    if (depth === matrix.length) {
      solutionCount++;
      return;
    }
    for(var col = 0; col < matrix.length; col++) {
      board.togglePiece(depth,col);
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(depth,col);
      } else {
        recurse(matrix, depth + 1)
        board.togglePiece(depth,col);
      }
    }
  }
  recurse(board.rows());

  

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount, 'solution: ', board.rows());
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var board = new Board({n:n});
  // var solution ;
  
  // var recurse = function(matrix, depth = 0) {
  //   if (depth === matrix.length) {
  //     solution = board.rows();
  //     return;
  //   }
  //   for(var col = 0; col < matrix.length; col++) {
  //     board.togglePiece(depth,col);
  //     if(board.hasAnyQueensConflicts()){
  //       board.togglePiece(depth,col);
  //     } else {
  //       recurse(matrix, depth + 1)
  //       board.togglePiece(depth,col);
  //     }
  //   }
  // }
  // recurse(board.rows());  
  // console.log('Single solution for ' + n + ' queens:', solution);
  // if(!solution){
  //   return 0;
  // }else{
  //   return solution;
  // }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;
  var recurse = function(matrix, depth = 0) {
    if (depth === matrix.length) {
      solutionCount++;
      return;
    }
    for(var col = 0; col < matrix.length; col++) {
      board.togglePiece(depth,col);
      if(board.hasAnyQueensConflicts()){
        board.togglePiece(depth,col);
      } else {
        recurse(matrix, depth + 1)
        board.togglePiece(depth,col);
      }
    }
  }
  recurse(board.rows());

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
