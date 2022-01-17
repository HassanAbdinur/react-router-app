import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

function Invoice() {
    let navigate = useNavigate();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (
        <main style={{ padding: "1rem" }}>
            <h1>Total Due {invoice.amount}</h1>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    );
}

export default Invoice;