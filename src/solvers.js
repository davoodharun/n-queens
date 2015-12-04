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


  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  if(n===1 || n===0){
    return 1;
  }

  var count = 0;
  for(var k=0; k<n;k++){
    var freshBoard = new Board({n:n})
    freshBoard.togglePiece(k,0);
    var countSols = function (board, j){
      j = j || 1;
      var boardCopy = new Board(board.rows())
      for(var i = 0; i<n;i++){
        boardCopy.togglePiece(i,j);
        if(!boardCopy.hasAnyRooksConflicts()){
          if(j===(n-1)){
            count++;
            boardCopy.togglePiece(i,j)
            return
          }else {
            countSols(boardCopy,j+1);
            boardCopy.togglePiece(i,j);
          }

        } else {
          boardCopy.togglePiece(i,j);
        }
      }
    }

    countSols(freshBoard);

  }

  return count;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(n===2 || n===3){
    return 0;
  }
  if(n===0 || n===1){
    return 1;
  }

  var count = 0;
  for(var k=0; k<n;k++){
    var freshBoard = new Board({n:n})
    freshBoard.togglePiece(k,0);
    var countSols = function (board, j){
      j = j || 1;
      var boardCopy = new Board(board.rows())
      for(var i = 0; i<n;i++){
        boardCopy.togglePiece(i,j);
        if(!boardCopy.hasAnyQueensConflicts()){
          if(j===(n-1)){
            count++;
            boardCopy.togglePiece(i,j)
            return
          }else {
            countSols(boardCopy,j+1);
            boardCopy.togglePiece(i,j);
          }

        } else {
          boardCopy.togglePiece(i,j);
        }
      }
    }

    countSols(freshBoard);

  }

  return count;



  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;
};
