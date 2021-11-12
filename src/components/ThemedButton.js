const ThemedButton = ({theme, label}) => {
    return (
        <div>
            <button style={{backgroundColor: theme }}>{label}</button>
        </div>
    );
};

export default ThemedButton;