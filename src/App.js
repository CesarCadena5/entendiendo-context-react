import { createContext, useContext, useState } from "react";

// Valor que recibe por defecto, createContext(). String y funcion.
const Context = createContext({valor: false, toggle: () => {} });

const Provider = ({children}) => {
    const [valor, setValor] = useState(false);
    const value = {
        valor,
        toggle: () => setValor(!valor)
    }
    return(
        // Cuando hago esto, al componente que se cargue dentro de Provider, tendrá disponible, value con el objeto de el valor, y la funcion que cambia el estado de valor.
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );  
};

const Componente = () => {
    // Al destructurar, valor, y toggle, me llegan los valores, que se están enviando desde el componente Provider, si uso solo el componente Componente, usaré los valores por defecto, al crear el Context.   
    const {valor, toggle} = useContext(Context);
    console.log(valor, toggle);
    return(
        <div>
            <label>{valor.toString()}</label>
            <button onClick={toggle}>Tocame</button>
        </div>
    );
};

const App = () => {
    return(
        <div>
            <Provider>
                <Componente />
            </Provider>
        </div>
    );
};

export default App;