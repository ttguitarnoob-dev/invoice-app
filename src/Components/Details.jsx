import { useParams } from "react-router"
import { useEffect, useState } from "react"
import jsPDF from "jspdf"

export default function Details() {

    const { id } = useParams()
    const URL = `https://api.ttguitarnoob.cloud/invoices/${id}`
    const [invoice, setInvoice] = useState()


    function generatePDF() {
        const report = new jsPDF('portrait', 'pt', 'a4')
        report.html(document.querySelector('.container')).then(() => {
            report.save(`Invoice - Travis Thompson - ${invoice.job}`)
        })
    }


    async function handleFetch() {

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
        <div>
            <div className="container">

                <h1>Invoice for {invoice.client}</h1>
                <div className="table">
                    <p><span>Job: </span>{invoice.job}</p>
                    <p><span>Notes: </span>{invoice.tasks}</p>
                    <p><span>Rate: </span>${invoice.rate}/hr</p>
                    <p><span>Hours: </span>{invoice.hours}</p>
                    <p><span>Total: </span>${invoice.total}</p>
                    {/* <table>
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
                    </table> */}
                </div>
            </div>
            <button onClick={generatePDF}>Save As PDF</button>
        </div>

    )
}