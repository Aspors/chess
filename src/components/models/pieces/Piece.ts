import { Colors } from "../Colors.ts";
import image from '../../../assets/king.png';
import { Cell } from "../Cell.ts";

export enum PieceNames {
    "PIECE" = "Фигура",
    "KING" = "Король",
    "QUEEN" = "Ферзь",
    "BISHOP" = "Слон",
    "KNIGHT" = "Конь",
    "ROOK" = "Ладья",
    "PAWN" = "Пешка",
}

export class Piece {
    color: Colors;
    image: typeof image | null;
    cell: Cell;
    name: PieceNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.piece = this;
        this.image = null;
        this.name = PieceNames.PIECE;

        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if(target.piece?.color === this.color){
            return false;
        }

        if(target.piece?.name === PieceNames.KING){
            return false;
        }
        return true;
    }

    movePiece(target: Cell) {

    }
}