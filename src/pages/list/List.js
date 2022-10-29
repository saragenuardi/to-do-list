import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToDo from '../../ToDo';
import './List.css';



function List() {

    const [todos, setTodos] = useState([
        new ToDo(1, "Cucinare", "Cucinare la carbonara", true),
        new ToDo(2, "Studiare", "Studiare React", false),
        new ToDo(3, "Spesa", "Uova, Guanciale, Pecorino, Pasta, Pepe", false)
    ]);

    function renderToDos() {
        return todos.map((todo) => (
            <div className='todo'>
                <div className='name'>{todo.name}</div>
                <div className='done'>{todo.done === true ? 'Fatto' : 'Non fatto'}</div>
                <div className='container-btn'>
                    <Link className='btn' to={"/detail/" + todo.id } >Dettaglio</Link>
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