import './App.css';
import { Outlet, Link } from "react-router-dom";

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
      <Outlet />
    </div>
  );
}

export default App;
