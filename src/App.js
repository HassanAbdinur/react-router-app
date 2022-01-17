import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>
        Bookkeeper!
      </h1>
      <nav>
        <Link to="/Invoices">Invoices</Link> |{" "}
        <Link to="/Expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
