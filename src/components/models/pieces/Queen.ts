import { Piece, PieceNames } from "./Piece.ts";

import blackQueenImg from '../../../assets/queen.png';
import whiteQueenImg from '../../../assets/queen_white.png';

import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";

export class Queen extends Piece {
    constructor(color: Colors, cell: Cell){
        super(color, cell);

        this.image = color === Colors.BLACK ? blackQueenImg : whiteQueenImg;
        this.name = PieceNames.QUEEN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };

        if(this.cell.isEmptyVertical(target)){
            return true;
        }

        if(this.cell.isEmptyHorizontal(target)){
            return true;
        }

        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }
        
        return false;
    }
}