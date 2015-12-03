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
  var newBoard = new Board({n:n});

  var choices = [];
  for(var i =0; i<n;i++){
    choices.push(n);
  }
  
  var rowPlacements = _.shuffle(choices);
  
  for(var i = 0; i < n ; i ++) {  
    newBoard.togglePiece(i, rowPlacements[i]);
  }
  
  var solution = newBoard.rows();
  console.log(solution);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
//   var recurse = function(n){
//     if(n==2){
//       return 1;
//     }
//     if(n===1){
//       return n;
//     }
//     return n * recurse(n-1);
//   }
//   var solution = recurse(n) ; //fixme

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;

var board = new Board({n:n});
board.togglePiece(0,1);

 var solution = 0; //fixme

  var countSolutions(oldBoard) {
    var boardCopy = new (oldBoard.rows);
    //runs conflict on each row and column (for queens cell) and build up an array of spaces we can toggle
    for (var i = 0 ; i < this.rows.length; i++) {
      for (var j = 1; j < this.rows.length, j++) {
        boardCopy.togglePiece(i,j);
        rowConflict = !boardCopy.hasRowConflictAt(i);
        colConflict = !boardCopy.hasColConflictAt(j);
        if (rowConflict && colConflict) {
          //invoke countSoultions()
        }
        else {
          oldBoard.toggle(i,j)
        }

      }
    }
    if open space array.lenth is 0
      if n pieces present
        solution ++
    else if array.length > 0   
      for each open space 
        counSolutions(new Board([]))
    }

    counsSolutions(board);

    return solution;


};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
 
  }


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
