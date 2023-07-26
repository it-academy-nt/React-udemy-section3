import Clock from "./components/clock/clock";

let name: string;
name = "Néstor";

function App() {

  return (
    <div>
      <h2>Let's get started! {name}</h2>
      <Clock />
    </div>
  );
}

export default App;
