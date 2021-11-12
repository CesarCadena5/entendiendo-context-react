import { createContext, useContext } from 'react';
import styled from 'styled-components';
import Toolbar from './components/Toolbar';

const BackGroundContext = createContext('blueviolet');

const Seccion = ({children}) => {
  const SECTION = styled.section`
  background-color: yellow;
  width: 200px;
  height: 200px;
  box-shadow: 3px 3px 5px purple;
`;

  return(
    <SECTION>
      {children}
    </SECTION>
  );
}


const SectionBorder = () => {
  const ctx = useContext(BackGroundContext);
  const style = {
    color: 'black',
    backgroundColor: `${ctx}`,
    padding: '10px',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '10px',
  };

  return(
    <div style={style}>
      Paso de props con context
    </div>
  );
};  

function App() {
  return (
    <div>
      {/* Acá envio a Toolbar, dos props, para cambiar el color del boton, y el texto dentro de el. */}
      <Toolbar theme='cyan' label='Enviar'/>

      {/* Paso de props, con context, me permite enviar datos a componentes, sin pasarlo por un intermedio */}
      {/* Es decir, pasar un dato, del componente App, hasta ThemedButton, sin pasarlo por Toolbar, y luego a ThemedButton */}

      {/* Se usa un provider para pasar el valor, a cualquier componente por debajo, sin importar donde esté */}
      <BackGroundContext.Provider value='red'>
        <Seccion> 
          <SectionBorder></SectionBorder>
        </Seccion>
      </BackGroundContext.Provider>
    </div>

  );
}

export default App;
