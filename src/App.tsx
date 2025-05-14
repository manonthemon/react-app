import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];

  return (
    <>
      <h1>List Group</h1>
      
      {items.length === 0 && <p>NO ITEMS!!!! NOOOO!!!!!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
