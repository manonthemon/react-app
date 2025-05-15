import ListGroup from "./components/ListGroup";
import { MouseEvent } from "react"; 

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Event handler
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List Group</h1>
      
      {items.length === 0 && <p>NO ITEMS!!!! NOOOO!!!!!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className= "list-group-item" key={item} onClick={handleClick}>
            
            {item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
