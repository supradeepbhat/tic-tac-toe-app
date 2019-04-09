let game = {

    availableBoxes: function(boxes) {
        let emptyBoxes = [];
        boxes.forEach((val, index) => {
            if(!val){
                emptyBoxes.push(index);
            }
        });
        return emptyBoxes;
    },

    decideWinner: function(boxes){
        const possibleMoves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i=0; i< possibleMoves.length; i++){
            let [b1, b2, b3] = possibleMoves[i];
            if(boxes[b1] && boxes[b1] === boxes[b2] && boxes[b1] === boxes[b3]){
                return boxes[b1];
            }
        }

        return null;
    },

    performComputerTurn: function (boxes) {
        //find the empty boxes
        const emptyBoxes = this.availableBoxes([...boxes]);


        //for each empty boxes check whether there is a winning move
        let selected;
        let isWinningMove;
        for(let i=0; i<emptyBoxes.length; i++){
            let boxArray = [...boxes];
            selected = emptyBoxes[i];
            boxArray[selected] = 'O';
            isWinningMove = this.decideWinner(boxArray);
            if(isWinningMove){
                return selected;
            }

        }
        //if no winning move, check whether the opponent has any winning move
        for(let i=0; i<emptyBoxes.length; i++){
            let boxArray = [...boxes];
            selected = emptyBoxes[i];
            boxArray[selected] = 'X';
            isWinningMove = this.decideWinner(boxArray);
            if(isWinningMove){
                return selected ;
            }

        }

        //If no moves found, return a random index
        return emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    }

};


export default game;
