import React from 'react';
import { TodosContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import './Detail.css';



function Detail() {

    //per accedere ai dati del context, devo importare il context dentro il componente in cui si vuole utilizzare
    const todosContext = React.useContext(TodosContext);
    const { id } = useParams();
    const parsedId = parseInt(id);

    const detailToDo = todosContext.todos.find(elementToDo => {
        return elementToDo.id === parsedId;
    })

    return (
        <div className='container'>
            <h1 className='detail-title'>Dettaglio To Do</h1>
            <div className='todo-detail '>
                <div className=''> Nome:
                    <p>{detailToDo.name}</p>
                </div>
                <div> Descrizione
                    <p>{detailToDo.description}</p>
                </div>
                <div className='done'> Stato:
                    <p>{detailToDo.done === true ? 'Fatto' : 'Non fatto'}</p></div>
            </div>
            <Link className='btn btn-dark d-flex justify-content-center m-5' to={"/"}>Torna in liste</Link>
        </div>

    )

}

export default Detail