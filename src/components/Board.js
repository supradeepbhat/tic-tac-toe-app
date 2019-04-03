import React, { Component } from 'react';
import Box from './Box';

class Board extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <div>
                <Box value={'X'}/>
                <Box value={'X'}/>
                <Box value={'X'}/>
            </div>
            <div>
                <Box value={'X'}/>
                <Box value={'X'}/>
                <Box value={'X'}/>
            </div>
            <div>
                <Box value={'X'}/>
                <Box value={'X'}/>
                <Box value={'X'}/>
            </div>
        </div>);
    }
}

export default Board;
