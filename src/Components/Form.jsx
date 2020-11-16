import React from 'react';

const Form = (props) => {
    
    const handleChange = (e) => {
        props.setInputText(e.target.value);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();

        props.elements.lists[0].items.push({id:`element-${Math.random() * 1000}`, text: props.inputText});

        props.setElements({...props.elements});
      }
    
    return (
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange}/>
                    <button>Añadir</button>
                </form>
            </div>
        </div>
    )
}

export default Form;