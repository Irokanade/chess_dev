var board1 = ChessBoard('board1', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
});

// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js

import { Chess } from './chess.js';

var board = null
var game = new Chess()

function makeRandomMove() {
    var possibleMoves = game.moves();

    // exit if the game is over
    if (game.game_over()) {
        return;
    }

    var randomIdx = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIdx]);
    board.position(game.fen());

    window.setTimeout(makeRandomMove, 500);
}

board = Chessboard('myBoard', 'start');

window.setTimeout(makeRandomMove, 500);