import './index.css'
import { useState } from "react"

let myName = "Bálint";
let myNumber = 5;
let myBoolean = true;
let myArray = [1, 2, 3, "Béla", "Kázmér", true, false];
let myUd = undefined;
let myNull = null;
let person = {
  name: "Béla",
  age: "20"
}

//loops in js
let people = [
  {name: "Béla", age: 20},
  {name: "Lajos", age: 2},
  {name: "Kázmér", age: 120},
  {name: "Ottó", age: 25}
];


/* let peopleCard = []
for (const p of people) {
  peopleCard.push(<div className="card">
  <p className="card-content"> { p }</p>
  </div>)
}
*/

//conditional rendering
//operators


const App = () => {
  
  const [shouldShow, setShouldShow] = useState(false); // itt az initial state-et (kb. default értéket) adjuk meg
  
  const myToggleFunction = () => {
    setShouldShow(!shouldShow)
  }

  const [counter, setCounter] = useState(1)

  const myIncrementFunction = () => {
    setCounter(counter+1)
  }
  return (
    <div>

      {shouldShow ? <p>Hidden content is shown!!!</p> : <p>Secret content is hidden</p>}

      <button onClick={myToggleFunction}>Toggle</button>

      <p>Counter value: {counter}</p>
      <button onClick={myIncrementFunction}>Increment</button>

      <h1>Hello world</h1>
      <p>{ myName }</p>
      <p>{ myNumber * 3 }</p>
      <p>{ myBoolean }</p>
      <p>{ myArray }</p>
      <p>{ myUd }</p>
      <p>{ myNull }</p>
      <p>Név: { person.name }, ({ person.age })</p>
      <p id="first">First paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input type="password" placeholder="akarmi"></input>

      {

       people.map(p => (
        <div className="card" key={p.name}>
          <p className="card-content">{ p.age < 18 ? "****" : p.name }</p>
          <p>Some other content</p>
        </div>
            )
          )
      } 
      </div>
  );
}

export default App;
