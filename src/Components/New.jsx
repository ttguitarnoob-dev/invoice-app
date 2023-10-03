export default function NewInvoice() {


    return (
        <div>
            <h1>New Invoice</h1>
            <div>
                <form>
                    <div>
                        <input
                            type="text"
                            name="client"
                            id="client"
                            placeholder="Client"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="job"
                            id="job"
                            placeholder="Job Description"
                        />
                    </div>
                    <div>
                        <textarea
                            type="textarea"
                            name="tasks"
                            id="tasks"
                            placeholder="Items Completed"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="rate"
                            id="rate"
                            placeholder="Rate"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="hours"
                            id="hours"
                            placeholder="Hours Worked"
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