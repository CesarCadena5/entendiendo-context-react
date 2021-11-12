import ThemedButton from './ThemedButton';

const Toolbar = ({theme, label}) => {
    return(
        <div>
            {/* Acá le envio a ThemedButton, el theme, y label para el color, y texto del boton. */}
            {/* Paso de props, sin context */}
            <ThemedButton theme={theme} label={label}/>
        </div>
    );
};

export default Toolbar;