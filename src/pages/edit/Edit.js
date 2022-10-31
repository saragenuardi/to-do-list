import React, { useState } from 'react';
import { TodosContext } from '../../App';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Edit() {
    // Ottenere todos dal context
    const todosContext = React.useContext(TodosContext);

    // Prendere id da parametro URL
    const { id } = useParams();
    const parsedId = parseInt(id);

    // Tra le todos, trovare quella che corrisponde al parametro URL "id"
    const detailToDo = todosContext.todos.find(elementToDo => {
        return elementToDo.id === parsedId;
    })

  

    const navigate = useNavigate()



    // Dovendo modificare la todo corrente, ho bisogno di settarla all'interno
    // di uno state. Questo perchè quando modifico le input (Nome, descrizione, ecc)
    // devo poter visualizzare i cambiamenti (rerender del componente)
    const [editTodo, setEditTodo] = useState(detailToDo)

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setEditTodo({
            ...editTodo,
            name: e.target.value
        });
    };

    const handleDescriptionChange = (e) => {
        setEditTodo({
            ...editTodo,
            description: e.target.value
        });
    };


    const handleDoneChange = (e) => {
        setEditTodo({
            ...editTodo,
            done: !editTodo.done
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newState = todosContext.todos.map(todo => {
            if (todo.id === parsedId) {
                return editTodo 
            }
            return todo;
        })

        todosContext.setTodos(newState);

        navigate('/')
    }


    return (
        <div>
            <h1>questa è la pagina modifica</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" value={editTodo.name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Descrizione:</label>
                    <input type="text" name="description" value={editTodo.description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <label htmlFor="done">Fatto</label>
                    <input name="done" type="checkbox" value={editTodo.done} checked={editTodo.done} onChange={handleDoneChange} />
                </div>
                <input type="submit" />
            </form>
        </div>

    )
}

export default Edit