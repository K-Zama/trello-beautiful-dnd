import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const Elements = (props) => {
    return (
        <Draggable draggableId={props.draggableId} index={props.index} key={props.draggableId}>
            {(provider, snapshot) => (
                <p className="elemento text-center" ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>{props.text}</p>
            )}
        </Draggable>
    )
}

export default Elements;