import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  TypeItalic,
  TypeUnderline,
  TypeBold,
  SquareFill,
  TextCenter,
  TextRight,
} from 'react-bootstrap-icons';

function App() {
  const [style, setStyle] = useState({});
  const [button, setButton] = useState([
    'black',
    'black',
    'black',
    'black',
    'black',
  ]);
  const [size, setSize] = useState([15, 15, 15]);

  const checkIfExist = (prop, value, index) => {
    let array = [...button];
    if (prop in style) {
      let removed = { ...style };
      delete removed[prop];
      setStyle(removed);
      array[index] = 'black';
      setButton(array);
    } else {
      setStyle({ [prop]: value, ...style });
      array[index] = 'red';
      setButton(array);
    }
  };
  const changeColor = (prop, value, index) => {
    let array = [...size];
    if (prop in style) {
      let removed = { ...style };
      delete removed[prop];
      setStyle(removed);
      array = [15, 15, 15];
      setSize(array);
    } else {
      setStyle({ [prop]: value, ...style });
      array[index] = 20;
      setSize(array);
    }
  };
  return (
    <div className="App">
      Text Editor: <input type="text" style={style} />
      <TypeUnderline
        color={button[0]}
        onClick={() => {
          checkIfExist('text-decoration', 'underline', 0);
        }}
      />
      <TypeItalic
        color={button[1]}
        onClick={() => {
          checkIfExist('font-style', 'italic', 1);
        }}
      />
      <TypeBold
        color={button[2]}
        onClick={() => {
          checkIfExist('font-weight', 'bold', 2);
        }}
      />
      <TextCenter
        color={button[3]}
        onClick={() => {
          checkIfExist('text-align', 'center', 3);
        }}
      />
      <TextRight
        color={button[4]}
        onClick={() => {
          checkIfExist('text-align', 'right', 4);
        }}
      />
      <br />
      <SquareFill
        style={{ margin: '2px' }}
        color={'red'}
        size={size[0]}
        onClick={() => changeColor('color', 'red', 0)}
      />
      <SquareFill
        style={{ margin: '2px' }}
        color={'yellow'}
        size={size[1]}
        onClick={() => changeColor('color', 'yellow', 1)}
      />
      <SquareFill
        style={{ margin: '2px' }}
        color={'blue'}
        size={size[2]}
        onClick={() => changeColor('color', 'blue', 2)}
      />
    </div>
  );
}

export default App;
