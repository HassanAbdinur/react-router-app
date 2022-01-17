import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";
import './Invoices.css';

const Invoices = () => {
    let invoices = getInvoices();
    return (
        <div>
            <nav>
                {invoices.map(invoice => (
                    <Link 
                        className="link"
                        to={`/invoices/${invoice.number}`}
                        key={invoices.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            
        </div>
    );
}

export default Invoices;