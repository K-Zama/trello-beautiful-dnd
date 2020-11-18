import React from 'react';

const Form = (props) => {
    
    const handleChange = (e) => {
        props.setInputText(e.target.value);
      }
    
    const addElement = (e) => {
        e.preventDefault();

        props.elements.lists[0].items.push({id:`element-${Math.random() * 1000}`, text: props.inputText});

        props.setElements({...props.elements});
    }

    const addList = (e) => {
        e.preventDefault();

        props.elements.lists.push({columnId: Math.random() * 1000, items: [], title: "Añade un título a tu lista"});

        props.setElements({...props.elements});
    }
    
    return (
        <div className="row">
            <div className="col">
                <form>
                    <input type="text" onChange={handleChange}/>
                    <button onClick={addElement}>Añadir</button>
                    <button onClick={addList}>Añadir Lista</button>
                </form>
            </div>
        </div>
    )
}

export default Form;