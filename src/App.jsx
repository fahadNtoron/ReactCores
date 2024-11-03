import "./App.css";
import Counter from "./Counter";
import Team from "./Team";


function App() {
  function handleCllick() {
    alert("I am clicked");
  }
  const handleCllick2 = () => {
    alert("button 2 clicked");
  };
  const add5 = (five) => {
    alert(five + 5);
  };
  return (
    <>
      <button onClick={handleCllick}> Click me</button>
      {/* normal html type was
      <button onclick = "handleClick()">Click me</button> */}

      <button onClick={handleCllick2}> Click me 2</button>

      <button
        onClick={() => {
          alert("button 3 clicked");
        }}
      >
        Button 3 clicked
      </button>
      <button
        onClick={() => {
          add5(3);
        }} className="position"
      >
        button 4
      </button>
      <Counter></Counter>
      <Team></Team>
    </>
  );
}

export default App;
