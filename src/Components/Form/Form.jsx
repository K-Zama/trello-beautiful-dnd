import React from 'react';
import './Form.scss';

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

        props.elements.lists.push({columnId: Math.random() * 1000, items: [], title: "Título"});

        props.setElements({...props.elements});
    }
    
    return (
        <div className="row">
            <div className="col d-flex justify-content-center mt-3">
            <form>
                <div className="form-group formulario">
                    <input type="text" className="form-control" onChange={handleChange}/>
                    <div className="d-flex justify-content-between buttons">
                        <button type="button" className="btn btn-primary" onClick={addElement}>Añadir Tarea</button>
                        <button type="button" className="btn btn-info"onClick={addList}>Añadir Lista</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Form;