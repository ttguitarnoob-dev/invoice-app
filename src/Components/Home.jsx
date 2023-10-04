export default function Home(props) {

    async function handleEdit(item) {
        const newItem = item
        const URL = `https://api.ttguitarnoob.cloud/invoices/${item._id}`

        if (newItem.paid === false) {
            newItem.paid = true
        } else {
            newItem.paid = false
        }

        console.log('editing', newItem)

        const options = {
            method: "PUT",
            body: JSON.stringify(newItem),
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }

        try {
            const updatedItem = await fetch(URL, options)
            window.location.reload()
            return updatedItem
        } catch (err) {
            console.log('something died when putting', err)
        }
    }

    const invoices = props.invoices

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

                        <tr key={index}>
                            <td><a href={`/${oneInvoice._id}`} >{oneInvoice.client}</a></td>
                            <td>{oneInvoice.job}</td>
                            <td><button onClick={() => handleEdit(oneInvoice)} className="paid-button">{oneInvoice.paid.toString()}</button></td>
                        </tr>

                    ))}


                </table>

            </div>
        </div>
    )
}