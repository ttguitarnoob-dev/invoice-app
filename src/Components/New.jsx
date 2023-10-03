import { useNavigate } from "react-router"

export default function NewInvoice() {

    const initialInput = {}
    const URL = "https://api.ttguitarnoob.cloud/invoices"
    const navigate = useNavigate()

    const handleChange = (e) => {
        var edited = e.target.name
        initialInput[edited] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        initialInput.total = initialInput.rate * initialInput.hours
        createItem(initialInput)
    }

    async function createItem(data) {
        console.log('creating item', data)

        const options = {
            method: "POST",
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
            const response = await fetch(URL, options)
            const createdInvoice = await response.json()
            console.log('item created', createdInvoice)
            navigate('/')
            return createdInvoice
        } catch(err){
            console.log('something horrendous happened when posting that request')
        }
    }

    return (
        <div>
            <h1>New Invoice</h1>
            <a href="/"><button>Back to Home</button></a>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="client"
                            id="client"
                            placeholder="Client"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="job"
                            id="job"
                            placeholder="Job Description"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <textarea
                            type="textarea"
                            name="tasks"
                            id="tasks"
                            placeholder="Items Completed"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="rate"
                            id="rate"
                            placeholder="Rate"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="hours"
                            id="hours"
                            placeholder="Hours Worked"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}