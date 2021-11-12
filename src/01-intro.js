import { createContext, useContext} from 'react';

const Context = createContext('primer contexto');

// De este componente, se va a pasar un value, al componente hijo, cuando se llame este componente.
const Provider = ({children}) => {
  return(
    <Context.Provider value={'mi valor'}>
      {children}
    </Context.Provider>
  );
};

// En este componente hijo, se llama useContext, para recibir ese valor que le envian.
const Contenido = () => {
  const ctx = useContext(Context);
  return(
    <div>
      {ctx}
    </div>
  );
};

function App() {
  return (
    <div>
      <Provider>
        <Contenido/>
      </Provider>
    </div>
  );
}

export default App;
