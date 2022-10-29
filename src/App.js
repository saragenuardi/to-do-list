
import './App.css';
import List from './pages/list/List';
import Create from './pages/create/Create';
import Detail from './pages/detail/Detail';
import Edit from './pages/edit/Edit';

//qui importo react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    //<BrowserRouter> viene considerato il "padre di tutti router";
    //Dopo va definito il contenuto <Routes>. Un'applicazione può avere più file "routes";
    //I <Route> possono essere ereditati dal principale e padre <Route>: esso ha un percorso "/" ed esegue il "rendering" del principale componente;
    /*Il componente principale non ha un percorso ed ha come attributo "index". Esso specifica che questa route è LA route PREDEFINITA per la route padre che è "/".
    Ovviamente se non esiste il cosidetto route padre, e tutti i route sono fratelli, non c'è bisogno di definire l'attributo index. */
    




    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<List />}/>
                <Route path="create" element={<Create />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="edit/:id" element={<Edit />} />



            </Routes>
        </BrowserRouter>
    )
}

export default App;
