import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';
import Details from './Components/Details';
import NewInvoice from './Components/New';
import { useEffect, useState } from 'react';

function App() {

  const URL = "https://api.ttguitarnoob.cloud/invoices"
  const [invoices, setInvoices] = useState()

  async function handleFetch() {
    const options = {
      method: "GET"
    }

    try {
      const response = await fetch(URL, options)
      const data = await response.json()
      setInvoices(data)
    } catch(err){
      console.log("Something died when fetching invoices", err)
    }
    
  }

  useEffect(() => {
    handleFetch()
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Details />} />
        <Route path='/new' element={<NewInvoice />} />
      </Routes>

    </div>
  );
}

export default App;
