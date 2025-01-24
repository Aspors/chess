import React, { FC, useEffect, useState } from 'react'
import { Board } from './models/Board.ts'
import CellComponent from './CellComponent.tsx';
import { Cell } from './models/Cell.ts';

interface IBoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<IBoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>();

    function click(cell: Cell){
        if(selectedCell && selectedCell !== cell && selectedCell.piece?.canMove(cell)){
            selectedCell.movePiece(cell);
            setSelectedCell(null);
        }else {
            setSelectedCell(cell);
        }
    }

    function highlightCells() {
        //@ts-ignore
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();

        setBoard(newBoard);
    }

    useEffect(()=>{
        highlightCells();
    }, [selectedCell]);

  return (
    <div 
    className='board'
    >
        {board.cells.map((row, index) => 
            <React.Fragment key={index}>
                {row.map(cell => 
                    <CellComponent 
                        cell={cell}
                        key={cell.id}
                        selected={cell.x === selectedCell?.x && cell?.y === selectedCell?.y}
                        click={()=>click(cell)}
                    />
                )}
            </React.Fragment>
        )}
        
    </div>
  )
}

export default BoardComponent