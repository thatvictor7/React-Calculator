import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <div className="Display">
          display
        </div>
        <div className="Buttons-Container">
          <div className="Button-Row">
            <div className="Button">
              7
            </div>
            <div className="Button">
              8
            </div>
            <div className="Button">
              9
            </div>
            <div className="Button">
              X
            </div>
          </div>
          <div className="Button-Row">
            <div className="Button">
              4
            </div>
            <div className="Button">
              5
            </div>
            <div className="Button">
              6
            </div>
            <div className="Button">
              -
            </div>
          </div>
          <div className="Button-Row">
            <div className="Button">
              1
            </div>
            <div className="Button">
              2
            </div>
            <div className="Button">
              3
            </div>
            <div className="Button">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
