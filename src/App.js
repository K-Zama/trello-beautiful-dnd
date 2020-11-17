import './App.css';
import React, {useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import List from './Components/List';
import Form from './Components/Form';

const reorder = (list, startColumn, endColumn, startIndex, endIndex) => {
  const newList = [...list];
  const startColumnIndex = newList.findIndex(item => item.columnId === startColumn)
  const endColumnIndex = newList.findIndex(item => item.columnId === endColumn)
  const [removed] = newList[startColumnIndex].items.splice(startIndex, 1)
  newList[endColumnIndex].items.splice(endIndex, 0, removed)
  return newList
} 
function App() {
  const [inputText, setInputText] = useState("");
  const [elements, setElements] = useState({
    lists: [
      {columnId: 1, items: [],},
      {columnId: 2, items: [],},
      {columnId: 3, items: [],},
      ]
    });
  
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const newList = reorder(elements.lists, source.droppableId, destination.droppableId, source.index, destination.index);
    const newElements = {lists: newList }
    setElements({...newElements});
  }


  return (
    <div className="container-fluid contenedor">
      <Form inputText={inputText} setInputText={setInputText} elements={elements} setElements={setElements}/>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="row fila d-flex justify-content-around align-items-center">
            {elements.lists.map((col, i) => (
              <List col={col} i={i} key={i} inputText={inputText} elements={elements} setElements={setElements}/>
            ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default App;

//Añadir botón para añadir lists igual que hemos añadido las tareas
