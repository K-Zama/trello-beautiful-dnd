import React from 'react';

const Form = (props) => {
    
    const handleChange = (e) => {
        props.setInputText(e.target.value);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        props.setElements(
          [
            ...props.elements[0].items,
            [{id:'elemento-8',text: props.inputText}],
          ]
        )
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