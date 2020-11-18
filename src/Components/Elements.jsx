import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

const Elements = (props) => {
    
    const handleRemove = (e) => { 
        e.preventDefault();
        /*console.log(props.el.id);
        console.log(props.draggableId);*/


        props.elements.lists.items = props.elements.lists.filter(list => list.items).filter(item => console.log(item.id !== props.draggableId))

        props.setElements({...props.elements.lists});

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