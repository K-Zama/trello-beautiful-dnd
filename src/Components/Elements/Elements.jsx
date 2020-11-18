import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import './Element.scss';

const Elements = (props) => {
    
    const handleRemove = (e) => { 
        e.preventDefault();
        props.elements.lists[0].items = props.elements.lists[0].items.filter(item => item.id !== props.draggableId);
        props.elements.lists[1].items = props.elements.lists[1].items.filter(item => item.id !== props.draggableId);
        props.elements.lists[2].items = props.elements.lists[2].items.filter(item => item.id !== props.draggableId);

        // props.elements.lists.items = props.elements.lists.map(list => list.items.map(item => item.id !== props.draggableId));

        props.setElements({...props.elements});
    }

   
    return (
        <Draggable draggableId={props.draggableId} index={props.index} key={props.draggableId}>
            {(provider, snapshot) => (
                <div>
                    <p className="elemento text-center d-flex justify-content-between" ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                        <p className="mr-3">{props.text}</p>
                        <button type="button" className="btn btn-danger" onClick={handleRemove}>X</button>
                    </p>
                </div>
            )}
        </Draggable>
    )
}

export default Elements;