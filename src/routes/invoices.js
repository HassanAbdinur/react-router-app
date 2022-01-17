import { 
    NavLink, 
    Outlet,
    useSearchParams 
} from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
    let invoices = getInvoices();
    return (
        <div style={{ display: "flex" }}>
            <nav 
                stye={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                {invoices.map(invoice => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : ""
                            };
                        }}
                        to={`/invoices/${invoice.number}`}
                        key={invoices.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}

export default Invoices;