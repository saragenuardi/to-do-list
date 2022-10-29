import React, { useState } from 'react';
import ToDo from './ToDo';
import './List.css';



function List() {

    const [todos, setTodos] = useState([
        new ToDo(1, "Cucinare", "Cucinare la carbonara", true),
        new ToDo(2, "Studiare", "Studiare React", false),
        new ToDo(3, "Spesa", "Uova, Guanciale, Pecorino, Pasta, Pepe", false)
    ]);




    return (
        <div>
            <h1>Do do list</h1>

          
            <div>
                {todos.map((todo) => (
                    <div className='todo'>
                        <div className='name'>{todo.name}</div>
                        <div className='done'>{todo.done === true ? 'Fatto' : 'Non fatto'}</div>
                        <a className='detail-link' href="">Dettaglio</a>
                    </div>
                ))}
            </div>
           
           
        </div>


    )
}

export default List;