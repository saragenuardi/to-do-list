import React, { useState } from 'react';
import { TodosContext } from '../../App';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Create() {

    // Ottenere todos dal context
    const todosContext = React.useContext(TodosContext);
    const navigate = useNavigate()



    // Dovendo modificare la todo corrente, ho bisogno di settarla all'interno
    // di uno state. Questo perchè quando modifico le input (Nome, descrizione, ecc)
    // devo poter visualizzare i cambiamenti (rerender del componente)
    const [createTodo, setCreateTodo] = useState({
        name: '',
        description: '',
        done: false
    })

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setCreateTodo({
            ...createTodo,
            name: e.target.value
        });
    };

    const handleDescriptionChange = (e) => {
        setCreateTodo({
            ...createTodo,
            description: e.target.value
        });
    };


    const handleDoneChange = (e) => {
        setCreateTodo({
            ...createTodo,
            done: !createTodo.done
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prendo l'ultima todo aggiunta:
        // se length = 3 (vuol dire che ci sono 3 todos)
        // devo fare length - 1
        const lastAddedTodo = todosContext.todos[todosContext.todos.length - 1]
        
        // creo una nuova todo che in più ha l'id che sarà
        // l'id dell'ultima todo aggiunta + 1
        // ES: ultima aggiunta ha id: 3, nella nuova l'id sarà 4
        const createTodoWithId = {
            ...createTodo,
            id: lastAddedTodo.id + 1
        }

        // Creo un nuovo array che ha le todos precedenti più
        // quella nuova con l'id
        const newState = [...todosContext.todos, createTodoWithId]
        todosContext.setTodos(newState)

        navigate('/')
    }



    return (
        <div>
            <h1>questa è la pagina modifica</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" value={createTodo.name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Descrizione:</label>
                    <input type="text" name="description" value={createTodo.description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <label htmlFor="done">Fatto</label>
                    <input name="done" type="checkbox" value={createTodo.done} checked={createTodo.done} onChange={handleDoneChange} />
                </div>
                <input type="submit" />
            </form>
        </div>

    )
}


export default Create