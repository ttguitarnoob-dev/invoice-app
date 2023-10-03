import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function Details() {

    const { id } = useParams()
    const URL = `https://api.ttguitarnoob.cloud/invoices/${id}`
    const [invoice, setInvoice] = useState()



    async function handleFetch() {
        const options = {
            method: "GET"
        }

        try {
            console.log('url', URL)
            const response = await fetch(URL)
            const data = await response.json()
            setInvoice(data)

        } catch (err) {
            console.log('something terrible has happened when fetching', err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])





    if (!invoice) {
        return <div>
            <h1>OMGGGG</h1>
        </div>
    }

    return (
        <div className="container">
            <h1>Invoice for {invoice.client}</h1>
            <div className="table">
                <table>
                    <tr>
                        <th>Job</th>
                        <th>Notes</th>
                        <th>Rate</th>
                        <th>Hours</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>{invoice.job}</td>
                        <td>{invoice.tasks}</td>
                        <td>${invoice.rate}/hr</td>
                        <td>{invoice.hours}</td>
                        <td>${invoice.total}</td>
                    </tr>
                </table>
            </div>
<button>Save As PDF</button>
        </div>
    )
}