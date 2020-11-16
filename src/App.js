import './App.css';
import React, {useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import List from './Components/List';
import Form from './Components/Form';

let myElements = [
  {
  columnId: 1, 
  items: [
    {
      id: 'elemento-1',
      text: 'Elemento-1'
    },
    {
      id: 'elemento-2',
      text: 'Elemento-2',
    },
    {
      id: 'elemento-3',
      text: 'Elemento-3'
    }
  ],
  },
  {
    columnId: 2,
    items: [
      {
        id: 'elemento-4',
        text: 'Elemento-4'
      },
      {
        id: 'elemento-5',
        text: 'Elemento-5'
      },
      {
        id: 'elemento-6',
        text: 'Elemento-6'
      },
    ],
  },
  {
    columnId: 3,
    items: [
      {
        id: 'elemento-7',
        text: 'Elemento-7'
      },
      {
        id: 'elemento-8',
        text: 'Elemento-8'
      },
      {
        id: 'elemento-9',
        text: 'Elemento-9'
      },
    ],
  },
];

const reorder = (list, startColumn, endColumn, startIndex, endIndex) => {
  const newList = Array.from(list)
  const startColumnIndex = newList.findIndex(item => item.columnId === startColumn)
  const endColumnIndex = newList.findIndex(item => item.columnId === endColumn)
  const [removed] = newList[startColumnIndex].items.splice(startIndex, 1)
  newList[endColumnIndex].items.splice(endIndex, 0, removed)
  return newList
} 
function App() {
  const [inputText, setInputText] = useState("");
  const [elements, setElements] = useState([
    {columnId: 1, items: [],},
    {columnId: 2, items: [],},
    {columnId: 3, items: [],},
  ]);
  
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const new_elements = reorder(elements, source.droppableId, destination.droppableId, source.index, destination.index)
    setElements(new_elements);
  }

  

  return (
    <div className="container contenedor">
      <Form inputText={inputText} setInputText={setInputText} elements={elements} setElements={setElements}/>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="row fila d-flex justify-content-around align-items-center">
            {elements.map((col, i) => (
              <List col={col} i={i} inputText={inputText}/>
            ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default App;
