import React, { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'

const App = () => {

    const [whther,setWhther]=useState({})

    useEffect(()=>{
        async function getData() {
            const Api =process.env.API__KEY

            try{
                let response =await axios.get(Api)
                console.log(response)
            }catch(err){
                console.log( "error messages",err)
            }
        }

        getData()
    },[])

  return (
    <div>
       <div className="container">
            <div className="main-container">
                <div className="card">
                     <div className="card-data">
                     <h1>city name</h1>
                     <h1>deg</h1>
                     <h1>name</h1> 
                     </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default App
