import Game from './Game';

describe('A suite to test Game methods', function () {

    it('The game loads properly', function () {
        expect(Game).not.toBeNull();
    });


});

describe('Test Suite to test availableBoxes', function () {

    it('must return non empty list of available boxes', function () {
       let boxes = ['X', 'O', null, null, null, null, null, null, 'X'];
       expect(Game.availableBoxes(boxes).length).toBe(6);
    });

    it('must return empty array when the all boxes are filled', function () {
        let boxes = ['X','O','X','O','X','O','X','O',"X"];
        expect(Game.availableBoxes(boxes).length).toBe(0);
    });

    it('must return empty array when empty and null is passed', function () {
        expect(Game.availableBoxes(null).length).toBe(0);
        expect(Game.availableBoxes([]).length).toBe(0);
    });

});

describe('Test Suite to test game winner', function () {

    it('must return null when there is no winning move', function () {
        let boxes = ['X', 'O', null, null, null, null, null, null, 'X'];
        expect(Game.decideWinner(boxes)).toBeNull();
    });

    it('must return sign of the winner when there is a winning move', function () {
        let boxes = ['X','X','X','O','X','O','X','O',"X"];
        expect(Game.decideWinner(boxes)).toBe('X');
    });

    it('must return empty array when empty and null is passed', function () {
        expect(Game.decideWinner(null)).toBeNull();
        expect(Game.decideWinner([])).toBeNull();
    });

});

describe('Test Suite to test computer turn', function () {

    it('must return computer winning move', function () {
        let boxes = ['O', 'X', null, 'O', 'X', null, null, null, 'X'];
        expect(Game.performComputerTurn(boxes)).toBe(6);
    });

    it('must return user winning move when no computer winning moves available', function () {
        let boxes = ['O',null,'X',null,'O','X',null,null,null];
        expect(Game.performComputerTurn(boxes)).toBe(8);
    });


    it('must call Math.random() when no winning moves', function () {
        spyOn(Math, 'random');
        let boxes = ['X',null,null,null,'O',null,null,null,null];
        Game.performComputerTurn(boxes);
        expect(Math.random).toHaveBeenCalled();
    });


});