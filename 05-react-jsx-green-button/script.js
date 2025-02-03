const App = (props) => {
  const {initialButtonText} = props
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState('')

  const onButtonClieck = () => {
    setButtonText("Hello from React");
    setClassesList("green-btn")
  };
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClieck}>{buttonText}</button>
    </div>
  );
};
const conteiner = document.getElementById("app");
const root = ReactDOM.createRoot(conteiner);
root.render(<App initialButtonText="Click me" />);
