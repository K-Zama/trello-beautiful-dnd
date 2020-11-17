import Elements from './Elements';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

const List = (props) => {

    const listRemove = (e) => {
        e.preventDefault();
        console.log(props.elements.columnId);
        props.setElements(props.elements.lists.filter(list => console.log(list.columnId !== props.elements.columnId)))
    }


    return (
    <Droppable droppableId={props.col.columnId} key={props.col.columnId}>
        {(provider, snapshot) => (
            <div className="col-3 d-flex flex-column columnas" ref={provider.innerRef}>
                {props.col.items.map((el, j) => (
                    <Elements draggableId={el.id} index={j} key={el.id} text={el.text} el={el} elements={props.elements} setElements={props.setElements}/>
                ))}
                {provider.placeholder}
                <button onClick={listRemove}>Eliminar Lista</button>
            </div>
        )}
    </Droppable>
    )
}

export default List;

// Pasar steElements y elements par ahae runcionalidad de borrar 