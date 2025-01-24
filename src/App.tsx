import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent.tsx';
import { Board } from './components/models/Board.ts';

function App() {
  const [board, setBoard] = useState(new Board());

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.setFigures();
    setBoard(newBoard);
  }

  useEffect(()=>{
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
