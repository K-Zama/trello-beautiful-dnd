import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const Elements = (props) => {
    
    const handleRemove = (e) => { 
        e.preventDefault();
        props.setElements(props.elements.lists[0].items.filter(task => task.id !== props.draggableId));
        //console.log(props.draggableId);
        //props.setElements(props.elements.lists[0].items.filter(element => {element.id !== props.draggableId}));
    }

   
    return (
        <Draggable draggableId={props.draggableId} index={props.index} key={props.draggableId}>
            {(provider, snapshot) => (
                <div>
                    <p className="elemento text-center d-flex justify-content-between" ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                        {props.text}
                        <button onClick={handleRemove}>X</button>
                    </p>
                </div>
            )}
        </Draggable>
    )
}

export default Elements;