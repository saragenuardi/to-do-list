import React from 'react';
import { TodosContext } from '../../App';
import { useParams } from 'react-router-dom';



function Detail() {

    //per accedere ai dati del context, devo importare il context dentro il componente in cui si vuole utilizzare
    const todosContext = React.useContext(TodosContext);
    const { id } = useParams();
    const parsedId = parseInt(id);

    const detailToDo = todosContext.todos.find(elementToDo => {
        return elementToDo.id === parsedId;
    })

    return (
        <div>
            <h1>questa è la pagina dettaglio</h1>
            <p>{detailToDo.name}</p>
            <p>{detailToDo.description}</p>
            <p className='done'>{detailToDo.done === true ? 'Fatto' : 'Non fatto'}</p>
        </div>

    )

}

export default Detail