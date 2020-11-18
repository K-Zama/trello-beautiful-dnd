import Elements from './Elements';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

const List = (props) => {

    const listRemove = (e) => {
        e.preventDefault();
        props.elements.lists = props.elements.lists.filter(list => props.col.columnId !== list.columnId);

        props.setElements({...props.elements});
    }
    const editTitle = () => {
        console.log("Click");
    }


    return (
    <Droppable droppableId={props.col.columnId} key={props.col.columnId}>
        {(provider, snapshot) => (
            <div className="col-3 d-flex flex-column columnas" ref={provider.innerRef}>
                <h3 className="text-center"><input type="text" placeholder={props.col.title}></input></h3>
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