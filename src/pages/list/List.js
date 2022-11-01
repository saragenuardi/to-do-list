import { Link } from 'react-router-dom';
import './List.css';
import { TodosContext } from '../../App';
import React from 'react';


function List() {
    //per accedere ai dati del context, devo importare il context dentro il componente in cui si vuole utilizzare
    const todosContext = React.useContext(TodosContext);

    const todoLength = todosContext.todos.length;

    const deleteToDo = (id) => {
        todosContext.setTodos((current) => {
            return current.filter(todo => todo.id !== id)
        })
    }

    const todoCompleted = todosContext.todos.filter(elemento => elemento.done === true);

    const todoCompletedLength = todoCompleted.length;




    function renderToDos() {
        return todosContext.todos.map((todo) => (
            /* inserisco una "key" dentro il div "più in alto della gerarchia" per
            eliminare il warning. "key" mi permette di ottimizzare la mia applicazione, facendo capire a react quale elemento deve prendere riferimento e succesivamente renderizzare */

            <div key={todo.id} className='todo'>

                <div className='d-flex align-items-center'>
                <div className='name'> <span className='space'> {todo.name}</span> </div>
                {/* Qui uso l'operatore ternario */}
                <div className='done'> <span className='space'>{todo.done === true ? 'Fatto' : 'Non fatto'}</span></div>
                </div>

                <div className='btn-todo'>
                <Link className='btn btn-info space' to={"/detail/" + todo.id} >Dettaglio</Link>
                {/* Qui uso l'iterpolazione */}
                <Link className='btn btn-light space' to={`/edit/${todo.id}`}>Modifica</Link>
                <button className=' btn btn-danger space' onClick={() => deleteToDo(todo.id)}
                >Elimina</button>
                </div>

               


            </div>
        ))

    }


    return (
        <div className='container'>

            <Link className='btn btn-success btn-add' to="/create">Aggiungi</Link>
            <div className='container-add'>
                <h1 className='title'>To do list</h1>
            </div>
           

            <div className='remaining-todo'>
                <div>
                    <p>Ci sono <span className='todoLength'>{todoLength}</span>  cose da fare</p>
                </div>

                <div>
                    <p>Ci sono <span className='todoLengthComplete'> {todoCompletedLength}</span>  cose completate</p>
                </div>
            </div>


            <div className='container-list'>
                {renderToDos()}
            </div>



        </div>


    )
}

export default List;