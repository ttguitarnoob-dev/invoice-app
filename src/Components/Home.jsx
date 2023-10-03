export default function Home(props){

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
                {invoices && invoices.map((oneInvoice, index) => (
                    <p>{index}</p>
                ))}
            </div>
        </div>
    )
}