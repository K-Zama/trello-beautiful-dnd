import Elements from '../Elements/Elements';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import './List.scss';

const List = (props) => {

    const listRemove = (e) => {
        e.preventDefault();
        props.elements.lists = props.elements.lists.filter(list => props.col.columnId !== list.columnId);

        props.setElements({...props.elements});
    }

    return (
    <Droppable droppableId={props.col.columnId} key={props.col.columnId}>
        {(provider, snapshot) => (
            <div className="col col-sm-3 d-flex flex-column columnas" ref={provider.innerRef}>
                <h3 className="text-center"><input className="text-center" type="text" placeholder={props.col.title}></input></h3>
                    {props.col.items.map((el, j) => (
                        <Elements draggableId={el.id} index={j} key={el.id} text={el.text} el={el} elements={props.elements} setElements={props.setElements}/>
                    ))}
                    {provider.placeholder}
                <button type="button" class="btn btn-danger" onClick={listRemove}>Eliminar Lista</button>
            </div>
        )}
    </Droppable>
    )
}

export default List;