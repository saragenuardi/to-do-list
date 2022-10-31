
// qui importo create context
import { createContext } from 'react';
//
import './App.css';
import List from './pages/list/List';
import Create from './pages/create/Create';
import Detail from './pages/detail/Detail';
import Edit from './pages/edit/Edit';
import React, { useState } from 'react';
import ToDo from './ToDo';

//qui importo react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//qui inserisco il context
export const TodosContext = createContext();

function App() {


    const [todos, setTodos] = useState([
        new ToDo(1, "Cucinare", "Cucinare la carbonara", true),
        new ToDo(2, "Studiare", "Studiare React", false),
        new ToDo(3, "Spesa", "Uova, Guanciale, Pecorino, Pasta, Pepe", false)
    ]);


    //<BrowserRouter> viene considerato il "padre di tutti router";
    //Dopo va definito il contenuto <Routes>. Un'applicazione può avere più file "routes";
    //I <Route> possono essere ereditati dal principale e padre <Route>: esso ha un percorso "/" ed esegue il "rendering" del principale componente;
    /*Il componente principale non ha un percorso ed ha come attributo "index". Esso specifica che questa route è LA route PREDEFINITA per la route padre che è "/".
    Ovviamente se non esiste il cosidetto route padre, e tutti i route sono fratelli, non c'è bisogno di definire l'attributo index. */

    const values = {
        setTodos,
        todos
    }

    return (

        //Qui utilizzo il provider ( nome variabile + .Provider) che mi permette di "fornire"
        //ogni qualsiasi tipo di dato (in questo caso array) a tutti i componenti sottostanti  
        <TodosContext.Provider value={values}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="create" element={<Create />} />
                    <Route path="detail/:id" element={<Detail />} />
                    <Route path="edit/:id" element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </TodosContext.Provider>
    )
}

export default App;
