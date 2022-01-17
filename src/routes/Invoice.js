import { useParams } from "react-router-dom";

function Invoice() {
    let params = useParams();
    return <h1>Invoice: {params.invoiceId}</h1>;
}

export default Invoice;