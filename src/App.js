
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import Details from './Components/Details';
import NewInvoice from './Components/New';
import { useEffect, useState } from 'react';
import UserHome from './Components/UserHome';

function App() {

  const backend = "https://api.ttguitarnoob.cloud/invoices"
  const [invoices, setInvoices] = useState()

  async function handleFetch(URL, method) {
    const options = {
      method: method
    }

    try {
      const response = await fetch(URL, options)
      const data = await response.json()
      setInvoices(data)
      return data
    } catch(err){
      console.log("Something died when fetching invoices", err)
    }
    
  }

  useEffect(() => {
    handleFetch(backend, "GET")
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/travvyvoices' element={<Home invoices={invoices} />} />
        <Route path='/' element={<UserHome />} />
        <Route path='/:id' element={<Details  />} />
        <Route path='/new' element={<NewInvoice />} />
      </Routes>

    </div>
  );
}

export default App;
