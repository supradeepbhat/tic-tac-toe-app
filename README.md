# Tic Tac Toe

This project represents Tic Tac Toe game.

## To run the Game

1. Clone the repository to local
2. Run 'npm install' (Node.js must be installed in order to run)
3. Run 'npm start'

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### To run Test cases -  `npm test`

Launches the test runner in the interactive watch mode.<br>

## Game Features

1. The Game app is created using React application 'npm create-react-app tic-tac-toe-app'.
2. The application hierarchy is App -> TicTacToe -> Board -> Box
3. Box Component represents individual boxes in the game.
4. Board represents actual tic-tac-toe game. This will use Game.js to perform game operations like checking the winner, performing computer turn etc.
5. TicTacToe holds User Form and Bord
6. App holds TicTacToe

### Performing Computer Turn

The user starts the game. Once the user makes a move, the computer will perform following steps.

1. Checks whether a winning move exists for the computer. If exists, computer will select the winning move.
2. If no winning move, computer checks whether user has any winning move. If user has a winning move, computer will select the same.
3. If no winning move for user also, computer will select a random box.

