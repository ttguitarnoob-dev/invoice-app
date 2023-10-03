export default function Home(props) {

    const invoices = props.invoices
    console.log('prps', invoices)

    return (
        <div>
            <h1>Home</h1>
            <a href="/new"><button>New Invoice</button></a>
            <div>
                <h2>
                    Past Invoices
                </h2>
                <table>
                    <tr>
                        <th>Client</th>
                        <th>Job</th>
                        <th>Paid</th>
                    </tr>

                    {invoices && invoices.map((oneInvoice, index) => (
                        
                        <tr>
                            <td><a href={`/${oneInvoice._id}`} >{oneInvoice.client}</a></td>
                            <td>{oneInvoice.job}</td>
                            <td>{oneInvoice.paid.toString()}</td>
                        </tr>
                        
                    ))}

                    
                </table>

            </div>
        </div>
    )
}