
import { useState } from 'react'
import './App.css'

function App() {

  const [redious, setredious] = useState(0)

  return (
    <div className="mt-20">


      <div className="card w-1/2 mx-auto bg-base-100 box">
        <div className="card-body">

          <h2 className="text-xl text-center">Number Count: {redious}</h2>

          <div className="card-actions justify-center mt-5">
            <button onClick={() => setredious(redious - 1)} className="btn btn-primary">Decrease Now</button>
            <button onClick={() => setredious((prviousState) => prviousState + 1)} className="btn btn-success">Count Now</button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default App
