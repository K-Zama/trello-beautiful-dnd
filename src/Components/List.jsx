import Elements from './Elements';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd';

const List = (props) => {
    return (
    <Droppable droppableId={props.col.columnId} key={props.col.columnId}>
        {(provider, snapshot) => (
            <div className="col-4 d-flex flex-column columnas" ref={provider.innerRef}>
                {props.col.items.map((el, j) => (
                    <Elements draggableId={el.id} index={j} key={el.id} text={el.text} el={el}/>
                ))}
                {provider.placeholder}
            </div>
        )}
    </Droppable>
    )
}

export default List;