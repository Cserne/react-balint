import './index.css'

let myName = "Bálint";
let myNumber = 5;
let myBoolean = true;
let myArray = [1, 2, 3, "Béla", "Kázmér", true, false];

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>{ myName }</p>
      <p>{ myNumber }</p>
      <p>{ myBoolean }</p>
      <p>{ myArray }</p>
      <p id="first">First paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input type="password" placeholder="akarmi"></input>
    </div>
  );
}

export default App;
