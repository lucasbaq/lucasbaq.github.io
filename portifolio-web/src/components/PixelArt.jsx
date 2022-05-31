import React, { useEffect, useState } from "react";
import '../styles/PixelArt.css';

function PixelArt() {
  const [colors, setColors] = useState([]);
  const [canvasSize, setCanvasSize] = useState(0);
  const [canvas, setCanvas] = useState([]);
  const [currentColor, setCurrentColor] = useState('black');

  useEffect(() => {
    const getColors = () => {
      const listaCores = ['yellow', 'red', 'blue', 'green','antiquewhite', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'gold', 'greenyellow', 'indigo', 'lightsalmon', 'magenta', 'orchid', 'seagreen', 'slateblue', 'tomato', 'turquoise'];
      let cores = ['black'];
      let temp = 0;
      for (let index = 0; index < 3; index += 1){
        let random = Math.floor(Math.random() * 20);
        if(random === temp){
          random += 1;
          // random = Math.floor(Math.random() * 20);
        }
        cores.push(listaCores[random]);
        temp = random;
      }
      setColors(cores);
    }
    getColors();
    setCanvasSize(5);
  }, []);

  useEffect(() => {
    const getCanvas = () => {
      const finalCanvas = [];
      let line = [];
      for(let key = 0; key < canvasSize; key += 1) {
        line.push(
          <div
            key={key}
            className="canvas-square"
            onClick={ ({target}) => target.style.backgroundColor = currentColor }
          >{''}</div>
        );
      }
      for(let index = 0; index < canvasSize; index += 1) {
        finalCanvas.push(line);
      }
      setCanvas(finalCanvas);
    }

    getCanvas();
  }, [canvasSize, currentColor]);

  return (
    <div className="pixel-art">
      <input
        type="number"
        placeholder="Nova quantidade de linhas"
        min={ 5 }
        max={ 12 }
        onChange={ ({target}) => setCanvasSize(target.value)}
      />
      <button
        type="button"
        onClick={ () => {
          const list = Array.prototype
            .slice.call(document.getElementsByClassName('canvas-square'));
          list.forEach((block, index) => {
            setTimeout(() => {
              block.style.backgroundColor = 'white'
            }, 50 * index);
          });
        }}
      >
        Limpar
      </button>
      <div className="color-picker-container">
        { colors.map((color) => (
          <div
            key={ color }
            className="color-picker"
            id={ color }
            style={ { backgroundColor: color } }
            onClick={ ({target}) => setCurrentColor(target.id) }
          >{''}</div>
        )) }
      </div>
      <div className="canvas-container">
        { canvas.map((line, index) => (
          <div
            key={`line-${index}`}
            className="canvas-line"
          >
            {line}
          </div>
        )) }
      </div>
      <p>*Disclaimer: essa é uma versão atualizada feita no React, para ver a versão original, acesse o link no card*</p>
    </div>
  );
}

export default PixelArt;
