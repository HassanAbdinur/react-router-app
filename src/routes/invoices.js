import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
    let invoices = getInvoices();
    return (
        <div style={{ display: "flex" }}>
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
            <Outlet />
        </div>
    );
}

export default Invoices;