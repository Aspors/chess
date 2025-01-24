import { Piece, PieceNames } from "./Piece.ts";

import blackPawnImg from '../../../assets/pawn.png';
import whitePawnImg from '../../../assets/pawn_white.png';

import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";

export class Pawn extends Piece {
    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell){
        super(color, cell);

        this.image = color === Colors.BLACK ? blackPawnImg : whitePawnImg;
        this.name = PieceNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };

        const direction = this.cell.piece?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.piece?.color === Colors.BLACK ? 2 : -2;

        if((
            target.y === this.cell.y + direction 
            || (this.isFirstStep && !this.cell.board.getCell(this.cell.x, this.cell.y + direction).piece) 
            && (target.y === this.cell.y + firstStepDirection)) 
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()
        ){
            return true;            
        }

        if(
            target.y === this.cell.y + direction 
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) 
            && this.cell.isEnemy(target)){
                return true
            }

        return false;
    }

    movePiece(target: Cell): void {
        super.movePiece(target);
        this.isFirstStep = false;

    }
}