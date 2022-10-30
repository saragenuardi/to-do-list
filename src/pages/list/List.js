import { Link } from 'react-router-dom';
import './List.css';
import { TodosContext } from '../../App';
import React from 'react';


function List() {


    //per accedere ai dati del context, devo importare il context dentro il componente in cui si vuole utilizzare
    const todos = React.useContext(TodosContext);
   
    function renderToDos() {
        return todos.map((todo) => (
            /* inserisco una "key" dentro il div "più in alto della gerarchia" per
            eliminare il warning. "key" mi permette di ottimizzare la mia applicazione, facendo capire a react quale elemento deve prendere riferimento e succesivamente renderizzare */
            <div key={todo.id} className='todo'>
                <div className='name'>{todo.name}</div>
                {/* Qui uso l'operatore ternario */}
                <div className='done'>{todo.done === true ? 'Fatto' : 'Non fatto'}</div>
                <div className='container-btn'>
                    <Link className='btn' to={"/detail/" + todo.id } >Dettaglio</Link>
                    {/* Qui uso l'iterpolazione */}
                    <Link className='btn' to={`/edit/${todo.id}`}>Edit</Link>
                    <a className=' btn btn-detete' href="">Elimina</a>
                </div>
            </div>
        ))

    }


    return (
        <div className='container'>

            <div className='container-add'>
                <h1 className='title'>Do do list</h1>
                <Link className='btn' to="/create">Aggiungi</Link>
            </div>



            <div className='container-list'>
                {renderToDos()}
            </div>


        </div>


    )
}

export default List;